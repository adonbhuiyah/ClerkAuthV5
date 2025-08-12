import { Protect } from '@clerk/nextjs'

export default function Page() {
  return (
    <Protect fallback={<p>Users that are signed-out can see this.</p>}>
      <p>Users that are signed-in can see this.</p>
    </Protect>
  )
}