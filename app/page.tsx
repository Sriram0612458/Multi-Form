"use client";
import AddressInfo from "@/components/AddressInfo";
import AdditionalInfo from "@/components/Additional";
import PersonalInfo from "@/components/PersonalInfo";
import ProgressBar from "@/components/ProgressBar";
import ReviewSubmit from "@/components/ReviewSubmit";
import useJobAppStore from "@/store";

export default function Home()
{
  const { step } = useJobAppStore();

  const renderStep = () =>
  {
    switch (step)
    {
      case 1:
        return <PersonalInfo />;
      case 2:
        return <AddressInfo />;
      case 3:
        return <AdditionalInfo />;
      case 4:
        return <ReviewSubmit />;
      default:
        return null;
    }
  };

  return (
    <div className="flex justify-center items-center h-screen py-10">
      <div className="bg-gray-100 rounded-lg w-full p-10 mx-5">
        <div className="pt-2 mb-5 text-center text-2xl sm:text-3xl font-semibold">
          Job Application
        </div>
        <ProgressBar />
        <div>{renderStep()}</div>
      </div>
    </div>
  );
}
