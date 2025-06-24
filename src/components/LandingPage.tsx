import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const services = [
  {
    title: "Smart Insights",
    description:
      "Leverage AI to turn raw data into actionable business intelligence in seconds.",
  },
  {
    title: "Automated Workflows",
    description:
      "Save hours by letting our AI orchestrate repetitive tasks for you.",
  },
  {
    title: "Predictive Analytics",
    description:
      "Stay ahead of the curve with real-time forecasts powered by machine learning.",
  },
];

const testimonials = [
  {
    name: "Jane Doe",
    text: "This platform transformed the way our team works—simply incredible!",
  },
  {
    name: "John Smith",
    text: "We tripled productivity in under a month. The ROI is undeniable.",
  },
];

const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* ======================= NAVBAR ======================= */}
      <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <h1 className="text-2xl font-extrabold tracking-tight text-indigo-600">
            AI-SaaS
          </h1>
          <nav className="hidden items-center space-x-6 md:flex">
            <a href="#features" className="text-sm font-medium hover:text-indigo-600">
              Features
            </a>
            <a href="#stats" className="text-sm font-medium hover:text-indigo-600">
              Stats
            </a>
            <a href="#testimonials" className="text-sm font-medium hover:text-indigo-600">
              Testimonials
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-indigo-600">
              Contact
            </a>
          </nav>
          {/* Login Sheet */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">Login</Button>
            </SheetTrigger>
            <SheetContent className="w-full max-w-md">
              <SheetHeader>
                <SheetTitle className="text-2xl">Welcome Back</SheetTitle>
              </SheetHeader>
              <form className="mt-8 space-y-6">
                <div className="space-y-4">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="you@example.com" required />
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" placeholder="••••••••" required />
                </div>
                <Button type="submit" className="w-full">
                  Sign in
                </Button>
              </form>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {/* ======================= HERO ======================= */}
      <section className="relative isolate flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 px-6 py-24 text-center text-white">
        <div className="relative z-10 max-w-3xl">
          <h2 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
            Supercharge Your Business With AI
          </h2>
          <p className="mt-6 text-lg opacity-90">
            Our cutting-edge AI SaaS platform helps teams automate tasks, gain
            insights and drive growth faster than ever.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button size="lg">Get Started</Button>
            <Button variant="outline" size="lg" className="bg-white/20 text-white hover:bg-white/30">
              Learn More
            </Button>
          </div>
        </div>
        {/* Decorative Image */}
        <img
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80"
          alt="AI Illustration"
          className="pointer-events-none absolute bottom-0 right-0 w-[36rem] max-w-none translate-x-1/4 select-none rounded-tl-2xl shadow-2xl transition-transform duration-300 hover:scale-105 sm:translate-x-0"
        />
      </section>

      {/* ======================= FEATURES ======================= */}
      <section id="features" className="mx-auto max-w-6xl px-6 py-24">
        <h3 className="text-center text-3xl font-bold">What We Offer</h3>
        <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
          A powerful suite of tools to help you and your team succeed.
        </p>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card
              key={service.title}
              className="hover:border-indigo-600 hover:shadow-lg transition-all"
            >
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* ======================= STATS ======================= */}
      <section
        id="stats"
        className="bg-muted py-24 text-center dark:bg-muted/40"
      >
        <div className="mx-auto grid max-w-4xl gap-8 sm:grid-cols-3">
          <div>
            <p className="text-4xl font-extrabold text-indigo-600">98%</p>
            <p className="text-muted-foreground">Customer Satisfaction</p>
          </div>
          <div>
            <p className="text-4xl font-extrabold text-indigo-600">5M+</p>
            <p className="text-muted-foreground">Automations/Day</p>
          </div>
          <div>
            <p className="text-4xl font-extrabold text-indigo-600">24/7</p>
            <p className="text-muted-foreground">Global Support</p>
          </div>
        </div>
      </section>

      {/* ======================= TESTIMONIALS ======================= */}
      <section id="testimonials" className="mx-auto max-w-6xl px-6 py-24">
        <h3 className="text-center text-3xl font-bold">Loved by Teams Worldwide</h3>
        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {testimonials.map((item, idx) => (
            <Card key={idx} className="border-none bg-muted/20 dark:bg-muted/30">
              <CardContent className="p-6">
                <p className="italic">“{item.text}”</p>
                <Separator className="my-4" />
                <p className="font-semibold">{item.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* ======================= CONTACT ======================= */}
      <section id="contact" className="bg-muted py-24 dark:bg-muted/40">
        <div className="mx-auto max-w-xl px-6">
          <h3 className="text-center text-3xl font-bold">Get in Touch</h3>
          <p className="mx-auto mt-4 max-w-md text-center text-muted-foreground">
            Have questions? Our team is here to help.
          </p>
          <form className="mt-8 space-y-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Your name" required />
            </div>
            <div>
              <Label htmlFor="email-contact">Email</Label>
              <Input id="email-contact" type="email" placeholder="you@example.com" required />
            </div>
            <div>
              <Label htmlFor="message">Message</Label>
              <textarea
                id="message"
                className="min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                placeholder="How can we help you?"
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </div>
      </section>

      {/* ======================= FOOTER ======================= */}
      <footer className="bg-background py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} AI-SaaS. All rights reserved.
      </footer>
    </div>
  );
};

export default LandingPage;
