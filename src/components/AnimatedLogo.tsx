import { useRive, useStateMachineInput } from '@rive-app/react-canvas'

export default function () {
  const stateMachineName = 'State Machine 1'
  const { RiveComponent, rive } = useRive({
    autoplay: true,
    src: '/media/logo.riv',
    stateMachines: stateMachineName,
  })
  const hoverHandler = useStateMachineInput(
    rive,
    stateMachineName,
    'hover',
    false
  )

  return (
    <RiveComponent
      alt="ketl"
      onMouseEnter={() => hoverHandler && (hoverHandler.value = true)}
      onMouseLeave={() => hoverHandler && (hoverHandler.value = false)}
    />
  )
}
