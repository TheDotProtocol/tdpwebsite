'use client';
import Hero from './components/Hero';
import GettingStarted from './components/GettingStarted';
import CoreComponents from './components/CoreComponents';
import ApiSDK from './components/ApiSDK';
import Tutorials from './components/Tutorials';
import DeveloperTools from './components/DeveloperTools';
import Community from './components/Community';
import BugBounty from './components/BugBounty';
import FAQ from './components/FAQ';

export default function DevelopersPage() {
  return (
    <>
      <Hero />
      <GettingStarted />
      <CoreComponents />
      <ApiSDK />
      <Tutorials />
      <DeveloperTools />
      <Community />
      <BugBounty />
      <FAQ />
    </>
  );
} 