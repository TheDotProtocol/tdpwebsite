'use client';
import Hero from './components/Hero';
import SaleDetails from './components/SaleDetails';
import PurchasePanel from './components/PurchasePanel';
import HowItWorks from './components/HowItWorks';
import TokenInfo from './components/TokenInfo';
import FAQ from './components/FAQ';

export default function PresalePage() {
  return (
    <>
      <Hero />
      <SaleDetails />
      <PurchasePanel />
      <HowItWorks />
      <TokenInfo />
      <FAQ />
    </>
  );
}
