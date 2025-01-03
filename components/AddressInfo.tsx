import useJobAppStore from "@/store";
import { educationBackgroundSchema } from "@/validationSchema";
import { useState } from "react";
import { z } from "zod";

function AddressInfo()
{
    const { nextStep, prevStep, formData, setEducationBackground } =
        useJobAppStore();
    const [error, setError] = useState<string>("");

    const handleEducationChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        idx: number
    ) =>
    {
        const { name, value } = e.target;

        const updatedEducations = [...formData.educationBackground.educations];

        updatedEducations[idx] = {
            ...updatedEducations[idx],
            [name]: value,
        };

        setEducationBackground({
            educations: updatedEducations,
        });
    };

    const validateAndNext = () =>
    {
        try
        {
            educationBackgroundSchema.parse(formData.educationBackground);
            setError("");
            nextStep();
        } catch (error)
        {
            if (error instanceof z.ZodError)
            {
                setError(
                    error.errors[0]?.message ||
                    "Please fill in the education field correctly."
                );
            } else
            {
                setError("An unexpected error occurred.");
            }
        }
    };


    return (
        <div>
            <h2 className="text-xl font-semibold">Address</h2>
            <div className="mt-5">
                {error && <div className="font-bold text-red-600">*{error}</div>}
                <div>
                    {formData.educationBackground.educations?.map((education, idx) => (
                        <div
                            key={idx}
                            className="grid gap-6 mb-6 mt-2 md:grid-cols-2 border-gray-300 rounded-lg"
                        >
                            <div>
                                <label
                                    className="text-lg font-medium text-gray-900"
                                    htmlFor="courseName"
                                >
                                    Street No
                                </label>
                                <input
                                    type="text"
                                    name="courseName"
                                    placeholder="Flat-123,1st Floor"
                                    value={education.courseName}
                                    onChange={(e) => handleEducationChange(e, idx)}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    className="text-lg font-medium text-gray-900"
                                    htmlFor="schoolName"
                                >
                                    State
                                </label>
                                <input
                                    type="text"
                                    name="schoolName"
                                    placeholder="Telangana"
                                    value={education.schoolName}
                                    onChange={(e) => handleEducationChange(e, idx)}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    className="text-lg font-medium text-gray-900"
                                    htmlFor="yearOfCompletion"
                                >
                                    Pin Code
                                </label>
                                <input
                                    type="text"
                                    name="yearOfCompletion"
                                    placeholder="600000"
                                    value={education.yearOfCompletion}
                                    onChange={(e) => handleEducationChange(e, idx)}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm
              rounded-lg block w-full p-2.5"
                                    required
                                />
                            </div>
                        </div>
                    ))}

                </div>
            </div>
            <div className="flex justify-between mt-5">
                <button
                    className="text--blue-500 text-lg sm:text-xl"
                    onClick={prevStep}
                >
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

export default AddressInfo;