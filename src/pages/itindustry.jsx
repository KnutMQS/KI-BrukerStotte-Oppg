function ItIndustry() {
  return (
    <>
      <div className="flex items-center max-w-fit rounded-4xl my-9 mx-auto border-2 justify-center text-3xl font-mono p-3">
        <h2>KI påvirker IT-bransjen</h2>
      </div>
      <div className="flex justify-center mx-auto h-135 rounded-4xl border-2 border-solid border-indigo-600 w-290 bg-[url(./assets/it-industry.jpg)] bg-center bg-cover bg-no-repeat">
        <p className="px-7 py-4 bg-indigo-950 h-fit w-fit rounded-t-4xl border-b-2 border-solid border-indigo-600 text-2xl/relaxed">
          I IT-bransjen fungerer KI som en kraftig motor for økt produktivitet
          og endrer utviklerrollen fra manuell koding til mer fokus på
          arkitektur og problemløsning. Verktøy som GitHub Copilot automatiserer
          rutineoppgaver og feilsøking, noe som både fremskynder innovasjon og
          effektiviserer programvareutvikling. Samtidig oppstår en
          kompetansekløft: det blir vanskeligere å komme inn som junior, og
          kontinuerlig omskolering blir helt nødvendig. I tillegg må bransjen
          tilpasse seg et nytt sikkerhetslandskap, der KI brukes både til å
          utvikle avanserte cyberangrep og til å styrke forsvarssystemer i
          sanntid.
        </p>
      </div>
    </>
  );
}

export default ItIndustry;
