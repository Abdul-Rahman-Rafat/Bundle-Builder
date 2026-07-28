import Builder from "../components/builder/Builder";
import ReviewPanel from "../components/review/ReviewPanel";

const BundleBuilder = () => {
  return (
    <>
      <div className="w-4/5 m-auto flex gap-5 max-[1440px]:flex-wrap max-[430px]:w-full pt-12 ">
        <Builder />
        <ReviewPanel />
      </div>
    </>
  );
};

export default BundleBuilder;
