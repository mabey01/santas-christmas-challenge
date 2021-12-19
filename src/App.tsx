import styled from "styled-components";
import { Snow } from "./snow";
import { Target } from "./target";

const Ground = styled.div`
  clip-path: polygon(0% 0%, 100% 20%, 100% 100%, 0% 100%);
`;

export function App() {
  return (
    <div className="relative isolate h-screen flex justify-center items-center text-xl">
      <Snow />

      <Ground className="absolute bottom-0 left-0 right-0 h-[20vh] bg-white" />

      <div className="absolute w-[50vw] h-[75vh] text-neutral-800">
        <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-red-600 rounded-full" />
      </div>

      <Target />
    </div>
  );
}
