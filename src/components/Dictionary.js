import { useEffect, useState } from "react";
export default function Dictionary() {
  const [word1, setWord1] = useState(" ");
  const [word2, setWord2] = useState(" ");

  useEffect(() => {
    console.log("State Updated " + word1);
  }, [word1]);

  useEffect(() => {
    console.log("State Updated " + word2);
  }, [word2]);
  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          setWord1(e.target.value);
        }}
      />
      <h2>Let's get a definition for {word1}</h2>
      <input
        type="text"
        onChange={(e) => {
          setWord2(e.target.value);
        }}
      />
      <h2>Let's get a definition for {word2}</h2>
    </>
  );
}
