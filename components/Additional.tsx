import useJobAppStore from "@/store";
import { experienceinfoSchema } from "@/validationSchema";
import { useState } from "react";
import { z } from "zod";

function AdditionalInfo()
{
    const { nextStep, prevStep, formData, setExperienceInfo } = useJobAppStore();
    const [error, setError] = useState<string>("");


    const validateAndNext = () =>
    {
        try
        {
            experienceinfoSchema.parse(formData.experienceInfo);
            setError("");
            nextStep();
        } catch (error)
        {
            if (error instanceof z.ZodError)
            {
                setError(
                    error.errors[0]?.message ||
                    "Please fill in the experience field correctly."
                );
            } else
            {
                setError("An unexpected error occurred.");
            }
        }
    };
    return (
        <div>
            <h2 className="text-xl font-semibold">Additional Information</h2>
            <div className="mt-5">
                {error && <div className="font-bold text-red-600">*{error}</div>}
                <div>
                    <label
                        className="text-lg font-medium text-gray-900"
                        htmlFor="fresher"
                    >
                        Are You Willing to Re-Locate?
                    </label>
                    <div className="flex items-center mt-2">
                        <input
                            type="checkbox"
                            name="fresher"
                            checked={formData.experienceInfo.fresher}
                            onChange={() =>
                            {
                                const isFresher = !formData.experienceInfo.fresher;
                                setError("");
                                setExperienceInfo({
                                    fresher: isFresher,

                                });
                            }}
                            className="h-4 w-4 text-blue-600 bg-gray-300 ruonded focus:ring-blue-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">
                            Yes, I am a Willing to Re-locate
                        </span>
                    </div>
                </div>
            </div>
            <div className="flex justify-between mt-5">
                <button className="text-blue-500 text-lg sm:text-xl" onClick={prevStep}>
                    {"\u2190"} Previous
                </button>
                <button
                    className="text-white bg-blue-500 px-3 py-1 rounded-lg text-lg sm:text-xl"
                    onClick={validateAndNext}
                >
                    Next {"\u2192"}
                </button>
            </div>
        </div>
    );
}

export default AdditionalInfo;