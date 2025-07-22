import type { Metadata } from "next";
import { ClerkProvider,  SignInButton, SignUpButton, UserButton, SignedOut, SignedIn } from '@clerk/nextjs'
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Welcome to Agentboard – Your AI Agents HQ 🚀",
  description: "Agentboard is a full-stack, AI-first SaaS platform where users can Create autonomous GPT-powered agents, Configure agents with memory, tools, tasks, and personality, Run and monitor agents live via a visual dashboard, View output, track logs, retry/stop tasks, and export results and Organize agents by teams, assign roles, and monetize usage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
          >
            <header>
              <SignedOut>
                <SignInButton />
                <SignUpButton>
                  <button className=" text-white font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer rounded-full bg-gray-300">
                    Sign Up
                  </button>
                </SignUpButton>
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </header>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
