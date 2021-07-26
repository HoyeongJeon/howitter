import { dbService } from "myBase";
import React, { useState } from "react";

const Home = () => {
  const [howeet, setHoweet] = useState("");
  const onSubmit = async (e) => {
    e.preventDefault();
    await dbService.collection("howeets").add({
      howeet,
      createAt: Date.now(),
    });
    setHoweet("");
  };
  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    setHoweet(value);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={howeet}
          onChange={onChange}
          type="text"
          placeholder="What's on your mind?"
          maxLength={120}
        />
        <input type="submit" value="Howeet" />
      </form>
    </div>
  );
};

export default Home;
