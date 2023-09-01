import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
export function port(){
    gsap.registerPlugin(ScrollTrigger);

    const horSection = gsap.utils.toArray(".port-item");

    gsap.to(horSection, {
        xPercent: -120 * (horSection.length - 1),
        ease: "none",
        scrollTrigger: {
            trigger:"#port",
            start:"top 100px",
            end:"+=3000 ",
            pin:true,
            scrub:1,
            makers: true,
            invalidateOnRefresh:true,
            anticipatePin:1,
        },
    });
}