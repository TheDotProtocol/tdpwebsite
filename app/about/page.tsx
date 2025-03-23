'use client';
import Layout from '@/app/components/layout/Layout';
import AboutHero from './components/Hero';
import Features from './components/Features';
import ComparisonTable from './components/ComparisonTable';
import Ecosystem from './components/Ecosystem';
import DeveloperCommunity from './components/DeveloperCommunity';
import SecurityCompliance from './components/SecurityCompliance';

export default function About() {
  return (
    <Layout>
      <AboutHero />
      <Features />
      <ComparisonTable />
      <Ecosystem />
      <DeveloperCommunity />
      <SecurityCompliance />
      {/* We'll add other sections next */}
    </Layout>
  );
} 