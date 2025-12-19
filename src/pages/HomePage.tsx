import { Hero } from '../components/Hero';
import { ProblemSolution } from '../components/ProblemSolution';
import { SolutionsOverview } from '../components/SolutionsOverview';
import { Platform } from '../components/Platform';
import { WhoWeServe } from '../components/WhoWeServe';
import { Impact } from '../components/Impact';
import { Trust } from '../components/Trust';
import { CTA } from '../components/CTA';

export function HomePage() {
  return (
    <>
      <Hero />
      <ProblemSolution />
      <SolutionsOverview />
      <Platform />
      <WhoWeServe />
      <Impact />
      <Trust />
      <CTA />
    </>
  );
}
