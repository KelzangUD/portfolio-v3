export default function CustomContainer({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="px-5 md:px-10 xl:px-15 2xl:px-20">
        <div className="border border-x-gray-100 border-y-0">
          <div className="p-5 md:p-10 xl:p-15 2xl:p-20">{children}</div>
        </div>
      </div>
      <hr className="border border-gray-100" />
    </>
  );
}
