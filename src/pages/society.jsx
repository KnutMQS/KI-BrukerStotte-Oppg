function Society() {
  return (
    <>
      <div className="flex items-center max-w-fit rounded-4xl my-9 mx-auto border-2 justify-center text-3xl font-mono p-3">
        <h2>KI påvirker samfunnet</h2>
      </div>
      <div className="flex justify-center mx-auto h-135 rounded-4xl border-2 border-solid border-indigo-600 w-290 bg-[url(./assets/AISociety.png)] bg-center bg-cover bg-no-repeat">
        <p className="px-7 py-4 bg-indigo-950 h-fit w-fit rounded-t-4xl border-b-2 border-solid border-indigo-600 text-2xl/relaxed">
          KI former en ny samfunnsstruktur ved å effektivisere arbeidslivet og
          revolusjonere helsesektoren med presis diagnostikk, men teknologien er
          dobbeltsidig. Samtidig som den tilbyr store muligheter for
          produktivitet og tilpasset læring, utfordrer den demokratiet gjennom
          misinformasjon, truer personvernet og skaper usikkerhet rundt
          fremtidens arbeidsplasser. Den totale effekten handler om å finne
          balansen mellom å bruke fordelene ved ny teknologi og å ha nok regler
          og etisk styring til å hindre ulikhet og svekket tillit.
        </p>
      </div>
    </>
  );
}

export default Society;
