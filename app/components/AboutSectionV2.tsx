import clsx from "clsx"
import profilePhoto from "../images/profile.jpg"
import { Text, Typography } from "../ui/Elements"
import { MotionDiv } from "../utils/lazy-ui"
import { ImageReveal } from "./ImageReveal"
import { AnimatedH2 } from "./ui/AnimatedH2"

export const AboutSectionV2 = ({ className = "" }: { className?: string }) => {
  return (
    <section id="about" className={clsx("border-y border-gray-200 bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/30", className)}>
      <div className="inside-container relative z-2">
        {/* HEADLINE */}
        <AnimatedH2>
          <span className="text-slate-500">About</span>
          <br />
          Olaf Koziara
        </AnimatedH2>
        <div className="flex flex-col-reverse gap-12 md:flex-row md:gap-16">
          {/* ---------------- left column ---------------- */}

          <div className="flex [flex:1_0_0px] flex-col gap-6">
            {/* portrait + overlay icons */}

            <ImageReveal src={profilePhoto} alt="Olaf Koziara" className="custom-shadow aspect-[4/4.5]" />

            {/* name + role */}
            <MotionDiv
              initial={{ opacity: 0, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            >
              <Text as="h2" size="lg" className="font-medium">
                Olaf Koziara
              </Text>
              <p className="text-sm text-gray-500">Full-Stack Engineer (Next.js + TypeScript)</p>
            </MotionDiv>
          </div>
          {/* ---------------- right column ---------------- */}
          <Typography as="article" size="lg" className="[flex:1.5_0_0px] space-y-8 text-slate-500">
            <p>
              <strong className="font-semibold text-slate-900">I am highly driven and passionate frontend JavaScript ES6+ engineer</strong> that loves learning
              and finding new ways to gain and share expertise, knowledge and ideas.
            </p>

            <p>
              <strong className="font-semibold text-slate-900"> I am writing clean and maintainable code, and providing great user experience.</strong>
            </p>
            <p>
              <strong className="font-semibold text-slate-900">My core philosophy is simplicity</strong>. if complexity balloons, I delete it and design the
              simpler path.
            </p>

            {/* signature */}
            {/* <Image src={signature} alt="Olaf Koziara Signature" width={90} height={45} className="relative mt-6 -ml-3 -rotate-6" /> */}
          </Typography>
        </div>
      </div>
    </section>
  )
}
