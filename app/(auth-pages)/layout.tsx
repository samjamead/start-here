export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`max-w-app mx-auto flex w-full flex-col items-center justify-center gap-12 py-24`}
    >
      {children}
    </div>
  );
}
