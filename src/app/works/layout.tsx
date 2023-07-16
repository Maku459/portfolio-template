export default function WorksLayout({
  children,
  authModal,
}: {
  children: React.ReactNode;
  authModal: React.ReactNode;
}) {
  return (
    <main className="bg-gray-200 h-screen px-[4rem] py-[2rem]">
      <h2 className="text-[3rem] w-[30rem] border-b border-solid border-gray-400 mb-[2rem]">
        Works
      </h2>
      {children}
    </main>
  );
}
