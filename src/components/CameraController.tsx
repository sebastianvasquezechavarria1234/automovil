import { type MutableRefObject, useEffect, useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { Vector3 } from 'three'

const WAYPOINTS = [
  { pos: new Vector3(0, 1.8, 7), target: new Vector3(0, 0.3, 0) },
  { pos: new Vector3(4, 1.5, 5), target: new Vector3(0, 0.5, 0) },
  { pos: new Vector3(1, 1.2, 3.5), target: new Vector3(0, 0.8, 0) },
  { pos: new Vector3(-3.5, 2, 4.5), target: new Vector3(0, 0.4, 0) },
  { pos: new Vector3(2.5, 3, 5.5), target: new Vector3(0, 0.3, 0) },
  { pos: new Vector3(0, 1.5, 6.5), target: new Vector3(0, 0.2, 0) },
]

interface CameraControllerProps {
  progressRef: MutableRefObject<number>
}

function getWaypoint(progress: number) {
  const p = Math.max(0, Math.min(1, progress))
  const total = WAYPOINTS.length - 1
  const index = Math.min(Math.floor(p * total), total - 1)
  const frac = Math.min(p * total - index, 1)
  return {
    pos: WAYPOINTS[index].pos.clone().lerp(WAYPOINTS[index + 1].pos, frac),
    target: WAYPOINTS[index].target.clone().lerp(WAYPOINTS[index + 1].target, frac),
  }
}

export default function CameraController({ progressRef }: CameraControllerProps) {
  const { camera } = useThree()
  const currentPos = useRef(new Vector3(0, 1.8, 7))
  const currentTarget = useRef(new Vector3(0, 0.3, 0))
  const smoothProgress = useRef(0)

  useEffect(() => {
    camera.position.copy(currentPos.current)
    camera.lookAt(currentTarget.current)
  }, [camera])

  useFrame((_state, delta) => {
    smoothProgress.current += (progressRef.current - smoothProgress.current) * Math.min(1, delta * 2.5)

    const { pos, target } = getWaypoint(smoothProgress.current)

    currentPos.current.lerp(pos, delta * 2)
    currentTarget.current.lerp(target, delta * 2)

    camera.position.copy(currentPos.current)
    camera.lookAt(currentTarget.current)
  })

  return null
}
