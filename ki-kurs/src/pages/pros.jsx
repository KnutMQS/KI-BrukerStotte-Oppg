function Pros() {
  return (
    <>
      <div className="flex items-center max-w-fit rounded-4xl my-9 mx-auto border-2 justify-center text-3xl font-mono p-3">
        <h1>Fordeler med KI</h1>
      </div>
      <div className="space-y-7">
        <ul className="max-w-fit mx-auto border-2 rounded-4xl bg-indigo-950 border-indigo-600 p-4">
          <li className="space-y-3">
            <h3 className="flex justify-center items-center text-2xl underline">
              Automasjon og effekivitet:
            </h3>
            <span>
              KI kan automatisere repetitive oppgaver og øke produktiviteten.
            </span>
          </li>
        </ul>
        <ul className="max-w-fit mx-auto border-2 rounded-4xl bg-indigo-950 border-indigo-600 p-4">
          <li className="space-y-3">
            <h3 className="flex justify-center items-center text-2xl underline">
              Redusert Menneskelige Feil:
            </h3>
            <span>
              Konsistente og nøyaktige resultater i definerte oppgaver.
            </span>
          </li>
        </ul>
        <ul className="max-w-fit mx-auto border-2 rounded-4xl bg-indigo-950 border-indigo-600 p-4">
          <li className="space-y-3">
            <h3 className="flex justify-center items-center text-2xl underline">
              Tilgjengelig 24/7:
            </h3>
            <span>KI systemer kan jobber kontinuerlig uten pauser.</span>
          </li>
        </ul>
        <ul className="max-w-fit mx-auto border-2 rounded-4xl bg-indigo-950 border-indigo-600 p-4">
          <li className="space-y-3">
            <h3 className="flex justify-center items-center text-2xl underline">
              Data Analyse:
            </h3>
            <span>Behandle og analysere store datasett raskt.</span>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Pros;
