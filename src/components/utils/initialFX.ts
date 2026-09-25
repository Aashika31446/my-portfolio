import { SplitText } from "gsap/SplitText";
import gsap from "gsap";
import { smoother } from "../Navbar";

export function initialFX() {
  document.body.style.overflowY = "auto";
  smoother.paused(false);
  document.getElementsByTagName("main")[0].classList.add("main-active");
  gsap.to("body", {
    backgroundColor: "#0a0e17",
    duration: 0.5,
    delay: 1,
  });

  var landingText = new SplitText(
    [".landing-info h3", ".landing-intro h2", ".landing-intro h1"],
    {
      type: "chars,lines",
      linesClass: "split-line",
    }
  );
  gsap.fromTo(
    landingText.chars,
    { opacity: 0, y: 80, filter: "blur(5px)" },
    {
      opacity: 1,
      duration: 1.2,
      filter: "blur(0px)",
      ease: "power3.inOut",
      y: 0,
      stagger: 0.025,
      delay: 0.3,
    }
  );

  let TextProps = { type: "chars,lines", linesClass: "split-h2" };
  
  var landingText2 = new SplitText(".landing-h2-info", TextProps);     // Bottom1 (AUTOMATIONS)
  var landingText3 = new SplitText(".landing-h2-info-1", TextProps);   // Bottom2 (into REALITY)
  var landingText4 = new SplitText(".landing-h2-1", TextProps);        // Top1 (Smart)
  var landingText5 = new SplitText(".landing-h2-2", TextProps);        // Top2 (IDEAS)

  // Make sure the parent container is visible since we animate the characters
  gsap.set(".landing-info-h2", { opacity: 1, y: 0 });

  // Initial synchronized reveal for Top1 ("Smart") and Bottom1 ("AUTOMATIONS")
  gsap.fromTo(
    [landingText4.chars, landingText2.chars],
    { opacity: 0, y: 80, filter: "blur(5px)" },
    {
      opacity: 1,
      duration: 1.2,
      filter: "blur(0px)",
      ease: "power3.inOut",
      y: 0,
      stagger: 0.025,
      delay: 0.3,
    }
  );

  gsap.fromTo(
    [".header", ".icons-section", ".nav-fade"],
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      delay: 0.1,
    }
  );

  SynchronizedLoopText(landingText4, landingText5, landingText2, landingText3);
}

function SynchronizedLoopText(Top1: SplitText, Top2: SplitText, Bottom1: SplitText, Bottom2: SplitText) {
  var tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
  const delay = 4;
  const delay2 = delay * 2 + 1;

  // Slide Out Top1 & Bottom1, Slide In Top2 & Bottom2
  tl.fromTo(Top2.chars, { opacity: 0, y: 80 }, { opacity: 1, duration: 1.2, ease: "power3.inOut", y: 0, stagger: 0.1 }, delay);
  tl.fromTo(Bottom2.chars, { opacity: 0, y: 80 }, { opacity: 1, duration: 1.2, ease: "power3.inOut", y: 0, stagger: 0.1 }, delay);
  
  tl.fromTo(Top1.chars, { y: 0 }, { y: -80, duration: 1.2, ease: "power3.inOut", stagger: 0.1 }, delay);
  tl.fromTo(Bottom1.chars, { y: 0 }, { y: -80, duration: 1.2, ease: "power3.inOut", stagger: 0.1 }, delay);

  // Slide Out Top2 & Bottom2, Slide In Top1 & Bottom1
  tl.fromTo(Top1.chars, { y: 80 }, { duration: 1.2, ease: "power3.inOut", y: 0, stagger: 0.1 }, delay2);
  tl.fromTo(Bottom1.chars, { y: 80 }, { duration: 1.2, ease: "power3.inOut", y: 0, stagger: 0.1 }, delay2);
  
  tl.to(Top2.chars, { y: -80, duration: 1.2, ease: "power3.inOut", stagger: 0.1 }, delay2);
  tl.to(Bottom2.chars, { y: -80, duration: 1.2, ease: "power3.inOut", stagger: 0.1 }, delay2);
}
