import SearchField from "@/components/common/SearchField";

export default function Hero() {
  return (
    <div className="flex sm:w-full  justify-center mb-4 p-2 ">
      <div className="flex w-full   text-center">
        <div className="w-full">
          <p className="text-3xl subpixel-antialiased text-primary  text-left lg:text-center">
            Find The <strong> Best </strong>
            <br />
            <strong>Food </strong> Around You{" "}
          </p>

          <SearchField />
        </div>
      </div>
    </div>
  );
}
