import { MotionValue } from "motion/react"
import { type RefObject } from "react"
import { useIsoMorphicEffect } from "./useIsoMorphicEffect"

type TransformConfig = {
  x?: number
  y?: number
  rot?: number
  s?: number
}

export function useCompositorSpring(ref: RefObject<HTMLElement | null>, progress: MotionValue<number>, config: TransformConfig) {
  useIsoMorphicEffect(() => {
    const el = ref.current
    if (!el) return
    const { x = 0, y = 0, rot = 0, s = 1 } = config
    const initialTransform = `translate3d(${x}px, ${y}px, 0) scale(${s}) rotate(${rot}deg)`
    const finalTransform = "translate3d(0px, 0px, 0) scale(1) rotate(0deg)"

    el.style.opacity = "1"
    el.style.transform = initialTransform

    const anim = el.animate(
      [
        {
          transform: initialTransform,
        },
        { transform: finalTransform },
      ],
      { duration: 1000, fill: "both", easing: "ease-out" }
    )
    anim.pause()
    const total = anim.effect?.getComputedTiming().endTime ?? 1000

    const update = (p: number) => {
      anim.currentTime = p * Number(total)
    }

    update(progress.get())
    const unsubscribe = progress.on("change", update)

    return () => {
      unsubscribe()
      anim.cancel()
      el.style.transform = ""
    }
  }, [progress, config])
}
