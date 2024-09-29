import { Button, Card, Label, TextInput } from "flowbite-react";

export default function LoginPage() {
  return (
    <main className="flex h-screen flex-col content-center items-center justify-center">
      <Card className="flex max-w-sm">
        <form className="flex flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email" value="Your email" />
            </div>
            <TextInput
              id="email"
              type="email"
              placeholder="name@email.com"
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password" value="Your password" />
            </div>
            <TextInput id="password" type="password" required />
          </div>
          <div className="flex items-center gap-2">
            <Label htmlFor="remember">Do not have an account?</Label>
            <Label className="text-blue-500 underline">
              <a href="/signup">Signup</a>
            </Label>
          </div>
          <Button type="submit">Login</Button>
        </form>
      </Card>
    </main>
  );
}
