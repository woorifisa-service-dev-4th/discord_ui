function SectionTwo({ children }: { children: React.ReactNode }) {
  return (
    <div className={"px-4 shadow-elevationLow z-20 h-[48px] bg-discord2and3 flex justify-center items-center"}>
      {children}
    </div>
  );
}

export default SectionTwo;
