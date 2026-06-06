'use client';
import Hero from './components/Hero';
import WhyJoin from './components/WhyJoin';
import JoinConversation from './components/JoinConversation';
import ValidatorProgram from './components/ValidatorProgram';
import BlockCollective from './components/BlockCollective';
import Education from './components/Education';
import Rewards from './components/Rewards';
import Achievements from './components/Achievements';
import CallToAction from './components/CallToAction';

export default function CommunityPage() {
  return (
    <>
      <Hero />
      <WhyJoin />
      <JoinConversation />
      <ValidatorProgram />
      <BlockCollective />
      <Education />
      <Rewards />
      <Achievements />
      <CallToAction />
    </>
  );
} 