import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-gray-800 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
      <div className="flex-1 justify-center flex flex-col">
        <h2 className="text-2xl font-semibold">
          Want to write for Campus Tales?
        </h2>

        <p className="text-gray-500 my-2">
          Share your campus story. Turn experiences into lessons.
        </p>

        <Button
          gradientDuoTone="orangeToRed"
          className="rounded-tl-xl rounded-bl-none w-fit mx-auto sm:mx-0"
        >
          <a href="/write">
            Start Writing
          </a>
        </Button>
      </div>

      <div className="p-7 flex-1">
        <img
          src="https://images.unsplash.com/photo-1519682337058-a94d519337bc"
          alt="Writing illustration"
          className="rounded-xl"
        />
      </div>
    </div>
  );
}
