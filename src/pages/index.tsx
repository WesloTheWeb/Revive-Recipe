
import LandingContent from '@/components/LandingContent/LandingContent';
import PageLayout from '@/components/PageLayout/PageLayout';
import Toast from '@/components/Toast/Toast';

export default function Home() {
  return (
    <>
      <PageLayout>
        <LandingContent />
        <Toast
          type="notice"
          content="There is no backend integrated into the web app yet. But this is just demo to show react-hook forms. If you 
          are interested in the data you entered, it is logged to the console."
        />
      </PageLayout>
    </>
  );
};