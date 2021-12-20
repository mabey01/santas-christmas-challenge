import styled from "styled-components";
import { Snow } from "./snow";
import { Target } from "./target";

const Ground = styled.div`
  clip-path: polygon(0% 0%, 100% 20%, 100% 100%, 0% 100%);
`;

const Body = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  height: 280px;
  width: 300px;
  background: var(--suit);
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-top-left-radius: 70%;
  border-top-right-radius: 70%;
`

const Clothes = styled.div`
  height: 250px;
  width: 40px;
  background: var(--beard);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

const Button = styled.div`
  height: 15px;
  width: 15px;
  border-radius: 100%;
  background: var(--belt);
`

const Belt = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 300px;
  background: var(--belt);
  transform: translateY(150px);
`

const Buckle = styled.div`
  height: 30px;
  width: 50px;
  background: var(--belt);
  box-shadow: 5px 0px 0px var(--belt-buckle);
`

const Head = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 160px;
  width: 160px;
  background: var(--skin);
  border-radius: 100%;
  z-index: 10;
`

const Hat = styled.div`
  position: absolute;
  height: 105px;
  width: 135px;
  transform: translateY(-100px);
  border-top-left-radius: 70%;
  background: var(--suit);
`

const Puff = styled.div`
  position: absolute;
  height: 50px;
  width: 50px;
  transform: translate(105px, -25px);
  background: var(--beard);
  border-radius: 50%;
`

const Beard = styled.div`
  position: absolute;
  height: 190px;
  width: 160px;
  background: var(--beard);
  transform: translateY(-180px);
  border-radius: 50%;
  z-index: 5;
`

const Eyes = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 60px;
`

const Eye = styled.div`
  height: 10px;
  width: 10px;
  background: var(--eyes);
  border-radius: 100%;
`

const Legs = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 260px;
  transform: translateY(200px);
`

const Leg = styled.div`
  height: 160px;
  width: 110px;
  background: var(--suit);
  display: flex;
  flex-direction: column-reverse;
`

const Shoe = styled.div`
  height: 40px;
  width: 110px;
  background: var(--belt);
`

export function App() {
  return (
    <div className="relative isolate h-screen flex justify-center items-center text-xl">
      <Snow />

      <Ground className="absolute bottom-0 left-0 right-0 h-[20vh] bg-white" />

      <main className="absolute w-[50vw] h-[75vh] text-neutral-800">
        <div className="relative h-full flex justify-center items-center text-center" style={{ transform: 'translateY(100px)'}}>
         <Beard>
           <Head>
             <Hat>
              <Puff />
              </Hat>
             <Eyes>
              <Eye /><Eye />
              </Eyes>
            </Head>
         </Beard>
          <Body>
            <Belt><Buckle /></Belt>
            <Clothes>
              <Button />
              <Button />
              <Button />
              <Button />
              <Button />
            </Clothes>
            <Legs>
              <Leg>
                <Shoe />
              </Leg>
              <Leg>
                <Shoe />
              </Leg>
            </Legs>
          </Body>
        </div>
      </main>

      <Target />
    </div>
  );
}
