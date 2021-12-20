import styled from "styled-components";
import { Snow } from "./snow";
import { Target } from "./target";

const Ground = styled.div`
  clip-path: polygon(0% 0%, 100% 20%, 100% 100%, 0% 100%);
`;

const Hat = styled.div`
  width: 190px;
  height: 170px;

  position: absolute;
  top: 20px;
  left: calc(50% - 90px);

  border-radius: 140px 0 0 0;
  background-color: var(--suit);

  transform: rotate(2deg);
`;

const HatEnd = styled.div`
  width: 80px;
  height: 80px;

  background: white;

  border-radius: 50%;

  position: absolute;

  top: 0;
  left: calc(50% + 60px);
`;

const Face = styled.div`
  width: 200px;
  height: 200px;

  background-color: var(--skin);

  border-radius: 100px;

  position: absolute;
  top: 15%;
  left: calc(50% - 100px);
`;

const Eye = styled.div`
  width: 16px;
  height: 16px;

  border-radius: 50%;

  background-color: var(--eyes);
`;

const LeftEye = styled(Eye)`
  position: absolute;
  left: calc(50% - 30px);
  top: 26%;
`;

const RightEye = styled(Eye)`
  position: absolute;
  left: calc(50% + 30px);
  top: 26%;
`;

const BigBeard = styled.div`
  height: 280px;
  width: 250px;

  position: absolute;

  background-color: white;

  border-radius: 150px;

  top: 20%;
  left: calc(50% - 125px);
`;

const Stache = styled.div`
  width: 100px;
  height: 50px;

  background-color: var(--beard);

  border-radius: 120px;
`;

const LeftStache = styled(Stache)`
  position: absolute;

  transform: rotate(-40deg);
  top: 35%;
  left: calc(50% - 90px);
`;

const RightStache = styled(Stache)`
  position: absolute;

  transform: rotate(40deg);
  top: 35%;
  left: calc(50% - 10px);
`;

const Body = styled.div`
  width: 400px;
  height: 400px;

  background-color: var(--suit);

  position: absolute;
  top: 40%;
  left: calc(50% - 200px);

  border-radius: 200px 200px 140px 140px;

  overflow: hidden;
`;

const Middle = styled.div`
  height: 100%;
  width: 60px;

  background: white;

  position: absolute;

  top: 0;
  left: calc(50% - 30px);
`;

const Knopf = styled.div`
  width: 20px;
  height: 20px;

  border-radius: 50%;

  background-color: var(--belt);
`;

const FirstKnopf = styled(Knopf)`
  position: absolute;

  top: 54%;
  left: calc(50% - 10px);
`;

const SecondKnopf = styled(Knopf)`
  position: absolute;

  top: calc(54% + 50px);
  left: calc(50% - 10px);
`;

const ThirdKnopf = styled(Knopf)`
  position: absolute;

  top: calc(54% + 100px);
  left: calc(50% - 10px);
`;

const FourthKnopf = styled(Knopf)`
  position: absolute;

  top: calc(54% + 220px);
  left: calc(50% - 10px);
`;

const Belt = styled.div`
  width: 500px;
  height: 50px;

  background-color: var(--belt);

  position: absolute;
  top: 65%;
  left: calc(50% - 250px);
`;

const Buckle = styled.div`
  width: 80px;
  height: 60px;

  border-radius: 15px;

  position: absolute;
  top: 64%;
  left: calc(50% - 40px);

  border-width: 10px;
  border-style: solid;
  border-color: var(--belt-buckle);
`;

const BeltMiddle = styled.div`
  width: 32px;
  height: 7px;

  background-color: var(--belt-buckle);

  position: absolute;
  top: calc(70% + 2px);
  left: calc(50% - 10px);
`;

const Leg = styled.div`
  height: 200px;
  width: 160px;

  background-color: var(--suit);
`;

const LeftLeg = styled(Leg)`
  position: absolute;
  bottom: 0;
  left: calc(50% - 180px);
`;

const RightLeg = styled(Leg)`
  position: absolute;
  bottom: 0;
  left: calc(50% + 20px);
`;

export function App() {
  return (
    <div className="relative isolate h-screen flex justify-center items-center text-xl">
      <Snow />

      <Ground className="absolute bottom-0 left-0 right-0 h-[20vh] bg-white" />

      <main className="absolute w-[50vw] h-[75vh] text-neutral-800">
        <LeftLeg />
        <RightLeg />
        <Body>
          <Middle />
          <Belt />
          <Buckle />
          <BeltMiddle />
        </Body>
        <FirstKnopf />
        <SecondKnopf />
        <ThirdKnopf />
        <FourthKnopf />

        <BigBeard />
        <Face />
        <Hat />
        <HatEnd />
        <LeftEye />
        <RightEye />
        <LeftStache />
        <RightStache />
      </main>

      <Target />
    </div>
  );
}
