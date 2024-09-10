
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 ">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="items-center text-center text-4xl sm:text-6xl font-bold bg-gradient-to-r from-green-400 via-green-500 to-green-600 bg-clip-text text-transparent">
          EcoSync
        </h1>

        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300">
          Where Sustainability Meets Connection 🌱✨
        </p>
      </main>
      
    </div>
  );
}
