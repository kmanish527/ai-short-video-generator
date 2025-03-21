import { SignUp } from '@clerk/nextjs'

export default function Page() {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/your-image.jpg')" }} // Replace with your image path
    >
      <div className="bg-white bg-opacity-80 p-6 rounded-xl shadow-xl">
        <SignUp />
      </div>
    </div>
  )
}
