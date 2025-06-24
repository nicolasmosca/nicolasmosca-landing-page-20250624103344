import React from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/components/ui/use-toast";
import { Link, useNavigate } from "react-router-dom";

const schema = z.object({
  email: z.string().email({ message: "Invalid email" }),
  password: z.string().min(1, { message: "Password is required" }),
  remember: z.boolean().optional(),
});

type FormData = z.infer<typeof schema>;

const Login: React.FC = () => {
  const navigate = useNavigate();

  const {
    register,
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      password: "",
      remember: false,
    },
  });

  React.useEffect(() => {
    const rememberedEmail = localStorage.getItem("rememberEmail");
    if (rememberedEmail) {
      setValue("email", rememberedEmail);
      setValue("remember", true);
    }
  }, [setValue]);

  const onSubmit = (data: FormData) => {
    if (data.remember) {
      localStorage.setItem("rememberEmail", data.email);
    } else {
      localStorage.removeItem("rememberEmail");
    }
    toast({
      title: "Logged in",
      description: `Welcome back, ${data.email}`,
    });
    navigate("/");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="w-full max-w-md rounded-lg bg-background p-8 shadow">
        <h1 className="mb-6 text-2xl font-bold">Login</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" {...register("email")} />
            {errors.email && (
              <p className="text-sm text-destructive">{errors.email.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" {...register("password")} />
            {errors.password && (
              <p className="text-sm text-destructive">{errors.password.message}</p>
            )}
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Controller
                control={control}
                name="remember"
                render={({ field: { value, onChange } }) => (
                  <Checkbox
                    id="remember"
                    checked={value}
                    onCheckedChange={(checked) => onChange(!!checked)}
                  />
                )}
              />
              <Label htmlFor="remember">Remember me</Label>
            </div>
            <Link to="/forgot-password" className="text-sm text-primary underline">
              Forgot password?
            </Link>
          </div>
          <Button type="submit" className="w-full">
            Sign in
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
