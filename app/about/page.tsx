'use client';
import AboutHero from './components/Hero';
import Features from './components/Features';
import ComparisonTable from './components/ComparisonTable';
import Ecosystem from './components/Ecosystem';
import DeveloperCommunity from './components/DeveloperCommunity';
import Leadership from './components/Leadership';
import SecurityCompliance from './components/SecurityCompliance';

export default function About() {
  return (
    <>
      <AboutHero />
      <Features />
      <Leadership />
      <ComparisonTable />
      <Ecosystem />
      <DeveloperCommunity />
      <SecurityCompliance />
    </>
  );
} 