import styled from "styled-components";
import { Snow } from "./snow";
import { Target } from "./target";

const Ground = styled.div`
  clip-path: polygon(0% 0%, 100% 20%, 100% 100%, 0% 100%);
`;

export function App() {
  return (
    <div className='relative isolate h-screen flex justify-center items-center text-xl'>
      <Snow />

      <Ground className='absolute bottom-0 left-0 right-0 h-[20vh] bg-white' />

      <main className='absolute w-[50vw] h-[75vh] text-neutral-800'>
        <div className='head'></div>
        <div className='head2'>
          <div className='mouth'></div>
        </div>

        <div className='nose'></div>
        <div className='cheek1'></div>
        <div className='cheek2'></div>

        <div className='eye1'>
          <div className='pupil' />
        </div>
        <div className='eye2'>
          <div className='pupil' />
        </div>
        <div className='beard1' />
        <div className='beard2' />

        <div className='body'>
          <div className='body2' />
        </div>
        <div className='legs'></div>

        <div className='leg-divider'></div>

        <div className='shoe1'></div>
        <div className='shoe2'></div>
        <div className='hat'></div>
      </main>

      <Target />
    </div>
  );
}
