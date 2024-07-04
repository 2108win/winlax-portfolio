import gsap from "gsap";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const animationPageIn = () => {
  const bannerCircle = document.getElementById("banner__circle");
  if (bannerCircle) {
    const tl = gsap.timeline();
    tl.set(bannerCircle, {
      borderRadius: 0,
      yPercent: 0,
    })
      .to(bannerCircle, {
        borderRadius: "0 0 100% 100%",
      })
      .to(bannerCircle, {
        borderRadius: 0,
        yPercent: -100,
        duration: 1,
      });
  }
};

export const animationPageOut = (href: string, router: AppRouterInstance) => {
  const bannerCircle = document.getElementById("banner__circle");
  if (bannerCircle) {
    const tl = gsap.timeline({ yoyo: true });
    tl.set(bannerCircle, {
      borderRadius: 0,
      yPercent: 100,
    })
      .to(bannerCircle, {
        borderRadius: "100% 100% 0 0",
        yPercent: 0,
        duration: 1,
      })
      .to(bannerCircle, {
        borderRadius: 0,
        duration: 0.5,
        onComplete: () => {
          router.push(href);
          animationPageIn();
        },
      });
  }
};
