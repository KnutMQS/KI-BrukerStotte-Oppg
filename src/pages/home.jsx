import AIcomedy from "../assets/AIcomedy.webp";

function Home() {
  return (
    <>
      <div className="flex items-center max-w-fit rounded-4xl my-9 mx-auto border-2 justify-center text-3xl font-mono p-3">
        <h2>Velkommen</h2>
      </div>
      <div className="flex justify-center mx-auto h-135 rounded-4xl border-2 border-solid border-indigo-600 w-290 bg-[url(./assets/AIcomedy.webp)] bg-center bg-cover bg-no-repeat">
        <p className="px-7 py-4 bg-indigo-950 h-fit w-fit rounded-t-4xl border-b-2 border-solid border-indigo-600 text-2xl/relaxed">
          Kunstig intelligens (KI) er i rask utvikling og påvirker både
          hverdagen vår og måten vi jobber på. Her finner du en kort og
          oversiktlig introduksjon til hva KI er, hvilke muligheter og
          utfordringer teknologien skaper, og hvilken rolle den spiller i
          samfunnet og IT-bransjen.
        </p>
      </div>
    </>
  );
}

export default Home;
