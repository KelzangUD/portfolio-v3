export default function CustomContainer({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="sm:px-5 md:px-10 xl:px-15 2xl:px-20 mx-auto">
        <div className="border border-x-gray-100 border-y-0">{children}</div>
      </div>
      <hr className="border-0.5 border-gray-100" />
    </>
  );
}
