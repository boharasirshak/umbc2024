interface SymptomData {
  name: string;
  probability: number;
}

const SymptomTable = ({ symptoms }: { symptoms: SymptomData[] }) => {
  console.log(symptoms);
  return (
    <>
      <h1 className="mb-2 flex flex-row justify-center text-2xl font-bold">
        Your Symptoms Probability
      </h1>
      <section className="bg-gray-50 p-3 dark:bg-gray-900 sm:p-5">
        <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
          <div className="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-black">
                <tbody>
                  <tr>
                    <th scope="col" className="px-4 py-3 font-bold">
                      Symptom
                    </th>
                    <th scope="col" className="px-4 py-3 font-bold">
                      Probability
                    </th>
                  </tr>
                  {symptoms.map((symptom) => (
                    <tr>
                      <th scope="col" className="px-4 py-3">
                        {symptom.name}
                      </th>
                      <th scope="col" className="px-4 py-3">
                        {symptom.probability * 100}%
                      </th>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SymptomTable;
