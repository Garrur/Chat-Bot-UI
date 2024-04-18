import * as React from "react";

export function Header() {
  return (
    <header className="flex gap-5 justify-between items-center pr-12 w-full max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/30cce9fb38279eaf080672829478e3bdce5fdcaea3905202f06d7ae1bf237a0b?apiKey=149f78ff364441df9b484dac1c1f35b6&"
        alt="Company logo"
        className="shrink-0 self-stretch aspect-square w-[60px]"
      />
      <nav className="flex gap-5 justify-between self-stretch my-auto text-xl whitespace-nowrap">
        <a href="#">Home</a>
        <a href="#">Service</a>
        <a href="#">Contact</a>
        <a href="#">About</a>
      </nav>
      <div className="flex gap-3.5 self-stretch my-auto text-base font-bold">
        <button className="justify-center px-5 py-3.5 rounded-2xl border border-white border-solid">
          Log in
        </button>
        <button className="justify-center px-5 py-3.5 bg-blue-500 rounded-2xl">
          Sign Up
        </button>
      </div>
    </header>
  );
}

export function MyComponent() {
  return (
    <section className="flex flex-col items-center px-16 pt-9 pb-20 text-white bg-slate-900 max-md:px-5">
      <div className="flex flex-col w-full max-w-[1629px] max-md:max-w-full">
        <Header />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4ad63b17c5616542ecca3da6203b111952389ef9a8a2e71b899ed541f02dae63?apiKey=149f78ff364441df9b484dac1c1f35b6&"
          alt="Hero image"
          className="mt-10 w-full aspect-[1.92] max-md:max-w-full"
        />
      </div>
    </section>
  );
}