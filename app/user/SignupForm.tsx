"use client";

import { useState } from "react";
import { supabase } from "../../utils/supabaseClient";

export default function SignupForm() {
  const [isLoading, setIsLoading] = useState(false);

  const handleUserSignup = async () => {
    setIsLoading(true);

    const generatedEmail = `${Math.random().toString(36).slice(2)}@example.com`;
    const userPassword = "Secret12345!";

    const { data, error } = await supabase.auth.signUp({
      email: generatedEmail,
      password: userPassword,
    });

    if (error) {
      console.error("Error signing up:", error);
    } else {
      console.log("New user signed up:", data);
    }

    setIsLoading(false);
  };

  return (
    <button
      onClick={handleUserSignup}
      disabled={isLoading}
    >
      {isLoading ? "Creating account..." : "Sign up with random email"}
    </button>
  );
}
