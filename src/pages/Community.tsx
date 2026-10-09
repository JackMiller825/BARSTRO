import { CommunityHub } from '../components/CommunityHub.tsx';
import { FAQ } from '../components/FAQ.tsx';
import { Missions } from '../components/Missions.tsx';

export default function Community() {
  return (
    <>
      <CommunityHub mode="join" heading="h1" />
      <Missions />
      <FAQ />
    </>
  );
}
