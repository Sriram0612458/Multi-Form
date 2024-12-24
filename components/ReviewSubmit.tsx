
import useJobAppStore from "@/store";

import { useState } from "react";

function ReviewSubmit()
{
    const { prevStep, formData } = useJobAppStore();
    const [submit, onSubmit] = useState(true)
    const onSubmitForm = () =>
    {
        onSubmit(false)
    }
    return (
        <div>

            {submit ? (<div>
                <h2 className="text-xl font-semibold">Review your Information</h2>
                <div>
                    <h3 className="text-lg font-semibold">Personal Info</h3>
                    <div className="grid gap-6 mb-6 mt-2 md:grid-cols-2 border p-2 border-gray-300 rounded-lg">
                        <p>
                            <span className="font-semibold">First Name:</span>
                            {formData.personalInfo.firstName}
                        </p>
                        <p>
                            <span className="font-semibold">Last Name:</span>
                            {formData.personalInfo.lastName}
                        </p>
                        <p>
                            <span className="font-semibold">Phone Number:</span>
                            {formData.personalInfo.phone}
                        </p>
                        <p>
                            <span className="font-semibold">Email:</span>
                            {formData.personalInfo.email}
                        </p>
                    </div>
                </div>
                <div>
                    <h3 className="text-lg font-semibold">Address Information</h3>
                    {formData.educationBackground.educations?.map((e, idx) => (
                        <div
                            className="grid gap-6 mb-6 mt-2 md:grid-cols-2 border p-2 border-gray-300 rounded-lg"
                            key={idx}
                        >
                            <p>
                                <span className="font-semibold">Street No:</span>
                                {e.courseName}
                            </p>
                            <p>
                                <span className="font-semibold">State Name:</span>
                                {e.schoolName}
                            </p>
                            <p>
                                <span className="font-semibold">Pin Code</span>
                                {e.yearOfCompletion}
                            </p>
                        </div>
                    ))}
                </div>

                <div>
                    <h3 className="text-lg font-semibold">Additional Information</h3>
                    {formData.experienceInfo.fresher ? (
                        <p>Yes, Willing to Relocate</p>
                    ) : (
                        ""
                    )}
                </div>



                <div className="flex justify-between mt-5">
                    <button
                        className="text--blue-500 text-lg sm:text-xl"
                        onClick={prevStep}
                    >
                        {"\u2190"} Previous
                    </button>
                </div>
            </div>) : <p className="text-center text-[50px]">Thank You For Appying</p>}
            {submit ? <button
                className="text-white bg-blue-500 px-3 py-1 rounded-lg text-lg sm:text-xl mt-5"
                onClick={onSubmitForm}
            >
                Submit
            </button> : ""}



        </div>
    );
}

export default ReviewSubmit;
