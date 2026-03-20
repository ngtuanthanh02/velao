type FooterProps = {
  brand: string;
  location: string;
};

export function Footer({ brand, location }: FooterProps) {
  return (
    <footer className="min-h-[100px] border-t border-white/15">
      <div className="mx-auto items-center flex justify-center w-full max-w-7xl px-6 py-6 sm:px-10 sm:py-7 lg:px-16 lg:py-9">
        <div className="flex min-h-[68px] flex-col justify-center space-y-2 items-center">
          <p className="text-lg font-semibold tracking-[0.16em] text-white uppercase">
            {brand}
          </p>
          <p className="text-sm font-light text-white/60 italic sm:text-base">
            {location}
          </p>
        </div>
      </div>
    </footer>
  );
}
