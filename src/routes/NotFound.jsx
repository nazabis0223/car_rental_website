import Layout from "../components/Layout";
import { ScrollRestoration } from "react-router-dom";

export default function NotFound() {
  return (
    <Layout>
      <ScrollRestoration />
      <section>
        <div className="relative h-[30rem]">
          <div
            style={{
              backgroundImage: "url(/images/red-lights.jpg)",
            }}
            className="w-full h-full bg-cover bg-center bg-no-repeat opacity-60"
          />

          <div className="absolute top-16 left-0 right-0 ">
            <div className="flex flex-col items-center mx-auto max-w-3xl text-center gap-y-6">
              <span className="font-mono tracking-widest text-xl">404</span>
              <h1 className="text-4xl lg:text-5xl font-bold">
                Uh oh! Looks like you are lost.
              </h1>
              <p className="big">
                It looks like the page you are looking for doesnt exist.
              </p>
              <button className="mt-4">Go back home</button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
