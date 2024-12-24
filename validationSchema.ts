import { z } from "zod";

export const personalInfoSchema = z.object({
    firstName: z.string().min(3, "First Name is Required"),
    lastName: z.string().min(1, "Last Name is Required"),
    phone: z
        .string()
        .length(10, "Phone Number must be 10 digits")
        .regex(/^\d+$/, "Phone Number must contain only digits"),
    email: z.string().email("Invalid email address"),
});

export const experienceinfoSchema = z
    .object({
        fresher: z.boolean(),
    })
    .refine((data) =>
    {
        return data.fresher;
    });

export const educationBackgroundSchema = z.object({
    educations: z
        .array(
            z.object({
                courseName: z.string().min(3, "Street No is required"),
                schoolName: z.string().min(3, "State is required"),
                yearOfCompletion: z
                    .string()
                    .min(6, "Pin Code is requried")
                    .regex(/^\d+$/, "Year of Completion must contain only digits"),
            })
        )
});

export const formDataSchema = z.object({
    personalInfo: personalInfoSchema,
    experienceInfo: experienceinfoSchema,
    educationBackground: educationBackgroundSchema,
});

// types
export type PersonalInfo = z.infer<typeof personalInfoSchema>;
export type ExperienceInfo = z.infer<typeof experienceinfoSchema>;
export type EducationBackground = z.infer<typeof educationBackgroundSchema>;
export type FormData = z.infer<typeof formDataSchema>;

export type Educations = {
    courseName: string;
    schoolName: string;
    yearOfCompletion: string;
}[];
