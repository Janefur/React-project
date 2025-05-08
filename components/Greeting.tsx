import React from "react";

interface GreetingProps {
  greetingText: string;
}

function Greeting({ greetingText }: GreetingProps) {
  return <h1>{greetingText}</h1>;
}

export default Greeting;
