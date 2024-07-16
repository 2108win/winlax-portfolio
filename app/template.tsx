import Footer from "@/components/layout/Footer";
import BlurryCursor from "@/components/utils/animations/blurry-cursor";
export default function Template({ children }: { children: React.ReactNode }) {
  const isActive = false;
  return (
    <div className="z-50">
      <BlurryCursor isActive={isActive} />
      {children}
      <Footer />
    </div>
  );
}
