export default function Home() {
  return (
    <div className="relative h-screen w-full bg-white flex items-center py-8 px-4 rounded-2xl shadow-2xl">
      <div className="px-4 center flex-col">
        <section className="flex w-full">
          <div className="flex w-full justify-between">
            <div className="relative w-8/12 rounded-2xl shadow-lg overflow-hidden mr-8">
              <div className="flex flex-col">
                <header className="flex justify-between p-4 text-white z-20">
                  <span className="h-8 w-8">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                  </span>
                  <span className="h-8 w-8">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                    </svg>
                  </span>
                </header>
                <div className="flex justify-between px-4 text-gray-100 z-30 mb-4">
                  <div className="flex flex-col items-start">
                    <span className="font-thin">NAME</span>
                    <span className="tracking-widest text-xl">Akhil Gautam</span>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="font-thin">NUMBER</span>
                    <span className="tracking-widest text-xl">**** **** 1106</span>
                  </div>
                </div>
                <div className="flex items-center justify-between px-4 h-16 z-30 text-white bg-indigo-900">
                  <div className="flex flex-col items-start">
                    <span className="text-2xl">$ 240,450</span>
                    <span className="text-sm">Balance</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="relative flex">
                      <div className="w-8 h-8 opacity-70 bg-white rounded-full">
                      </div>
                      <div className="absolute -left-4 w-8 h-8 opacity-70 bg-white rounded-full">
                      </div>
                    </div>
                    <div>Mastercard</div>
                  </div>
                </div>
                <div className="absolute opacity-90 top-0 left-0 h-full blur w-full bg-gradient-to-t from-blue-700 to-indigo-400 rounded-2xl">
                </div>
              </div>
            </div>
            <button className="w-4/12 flex flex-col justify-center items-center text-3xl font-bold text-indigo-400 border-2 border-blue-300 rounded-2xl border-dashed cursor-pointer transition duration-200 hover:shadow-2xl">
              <div>+</div>
              <div>Add New Card</div>
            </button>
          </div>
        </section>
      </div>
    </div>
  )
}
