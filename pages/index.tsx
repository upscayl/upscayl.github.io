import Atropos from "atropos/react";
import "atropos/css";
import { useEffect } from "react";
import { ToastBar, Toaster, toast } from "react-hot-toast";
import { useReward } from "react-rewards";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import BackgroundImage from "../components/BackgroundImage";
import Hero from "../components/Hero";

export default function Home() {
  const { reward, isAnimating } = useReward("rewardId", "confetti", {
    startVelocity: 20,
    spread: 100,
    lifetime: 200,
  });

  const showInfoToast = () => {
    // toast.success("1 Million Downloads!", {
    //   icon: "🎉",
    //   className:
    //     "!bg-violet-300 !text-violet-50 font-medium !bg-opacity-50 backdrop-blur-lg",
    //   duration: 5000,
    // });
  };

  useEffect(() => {
    // showInfoToast();
  }, []);

  return (
    <div className="bg-gradient-to-tr from-violet-400 to-violet-700 relative h-screen w-screen overflow-x-hidden">
      <BackgroundImage />
      <Navbar />
      <div className="absolute z-40 inset-0 flex flex-col justify-center items-center max-w-xl mx-auto text-center">
        <span id="rewardId" />
        <Atropos className="my-atropos" shadowScale={0.1} highlight={false}>
          <Hero />
        </Atropos>
        <Footer />
      </div>
      <Toaster>
        {(t) => (
          <ToastBar toast={t}>
            {({ icon, message }) => (
              <>
                <button
                  onClick={() => toast.dismiss(t.id)}
                  className="flex items-center justify-center">
                  {icon}
                  {message}
                </button>
              </>
            )}
          </ToastBar>
        )}
      </Toaster>
    </div>
  );
}
