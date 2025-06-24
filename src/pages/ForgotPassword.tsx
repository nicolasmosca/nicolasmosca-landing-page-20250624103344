import React from "react";
import { Link } from "react-router-dom";

const ForgotPassword: React.FC = () => (
  <div className="flex min-h-screen items-center justify-center bg-muted">
    <div className="w-full max-w-md rounded-lg bg-background p-8 shadow">
      <h1 className="mb-6 text-2xl font-bold">Forgot Password</h1>
      <p className="mb-4 text-sm">
        We will send you instructions to reset your password once this feature is implemented.
      </p>
      <Link to="/login" className="text-primary underline">
        Back to login
      </Link>
    </div>
  </div>
);

export default ForgotPassword;
