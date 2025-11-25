import bgImage from "../assets/AIcomedy.webp";

function Home() {
  return (
    <main>
      <div className="flex items-center max-w-48 rounded-4xl my-3 mx-auto border-2 justify-center text-3xl font-mono py-4">
        <h2>Lær om KI</h2>
      </div>
      <div className="flex justify-between space-x-3 mx-5">
        <p className="pt-7 font-light text-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
          commodi officiis illo tempora blanditiis perspiciatis fuga tempore
          sapiente nemo! Saepe, dolorum numquam! Perferendis sunt impedit
          deserunt, facere possimus minus porro architecto libero tempora veniam
          eveniet adipisci, commodi beatae? Assumenda fugiat molestiae aperiam
          cumque, error accusamus beatae adipisci sapiente provident blanditiis?
        </p>
        <img
          src={bgImage}
          alt=""
          className="max-h-130 rounded-4xl border-2 border-indigo-600"
        />
      </div>
    </main>
  );
}

export default Home;
