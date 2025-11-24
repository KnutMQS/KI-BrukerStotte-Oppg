function Cons() {
  return (
    <>
      <div className="flex items-center justify-center text-3xl py-4">
        <h1>Fordeler med KI</h1>
      </div>
      <div className="space-y-7">
        <ul className="max-w-fit mx-auto border rounded-4xl bg-indigo-950 border-indigo-600 p-4">
          <li className="space-y-3">
            <h3 className="flex justify-center items-center text-2xl underline">
              Høy Kostnad:
            </h3>
            <span>Dyrt å utvikle of vedlikeholde KI systemer.</span>
          </li>
        </ul>
        <ul className="max-w-fit mx-auto border rounded-4xl bg-indigo-950 border-indigo-600 p-4">
          <li className="space-y-3">
            <h3 className="flex justify-center items-center text-2xl underline">
              Personverns Bekymringer:
            </h3>
            <span>Datainnsamling og overvåknings utfordringer</span>
          </li>
        </ul>
        <ul className="max-w-fit mx-auto border rounded-4xl bg-indigo-950 border-indigo-600 p-4">
          <li className="space-y-3">
            <h3 className="flex justify-center items-center text-2xl underline">
              Bias & Diskriminasjon:
            </h3>
            <span>KI kan forsterke eksisterende biaser i data.</span>
          </li>
        </ul>
        <ul className="max-w-fit mx-auto border rounded-4xl bg-indigo-950 border-indigo-600 p-4">
          <li className="space-y-3">
            <h3 className="flex justify-center items-center text-2xl underline">
              Jobbtap:
            </h3>
            <span>Automasjon kan føre til tap av arbeidsstilling.</span>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Cons;
