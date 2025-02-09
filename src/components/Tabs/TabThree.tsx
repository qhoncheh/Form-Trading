import { Formik } from "formik";
import { Form } from "formik";
import { Field } from "formik";
import { DropZone } from "../DropZone";
import * as Yup from "yup";
import { useState } from "react";
import Editor from "../Editor";
import '../../ui/Radio.css'

export const TabThree = () => {
    const [isPremium, setIsPremium] = useState(false);

    const validationSchema = Yup.object().shape({
        image: Yup.mixed().required("Image is required"),
        title: Yup.string().required("Title is required"),
        description: Yup.string().required("Description is required"),
        tags: Yup.array().of(Yup.string()),
    });

    return (
        <Formik
            initialValues={{
                title: "",
                category: "Strategy Idea",
                image: "",
                method: "Technical Analysis (Classic)",
                target: "Forex",
                summary: "",
                description: "",
                youtubeLink: "",
                tags: ["GBP/USD", "EUR/USD"],
                pricing: "Free", // Add pricing field
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => console.log(values)}
        >
            {({ errors, touched, values, setFieldValue }) => (
                <Form className="space-y-4 p-6 px-8 pb-20 pt-8 rounded-lg shadow-lg backdrop-blur-lg">
                    <label className="block mb-2">Gallery</label>
                    <DropZone />
                    {touched.image && errors.image && (
                        <div className="text-red-500">{errors.image}</div>
                    )}

                    <label className="block mb-2">Description</label>
                    {/* <Field
                        as="textarea"
                        name="description"
                        className="w-full p-1.5 border border-[#ccc] rounded shadow-md bg-white h-30"
                    /> */}
                    <Editor />
                    {touched.description && errors.description && (
                        <div className="text-red-500">{errors.description}</div>
                    )}

                    {/* <div className="flex flex-col">
                        <label className="ml-2">
                            <input
                                type="radio"
                                name="pricing"
                                value="Free"
                                checked={values.pricing === "Free"}
                                onChange={(e) => {
                                    setFieldValue("pricing", e.target.value);
                                    setIsPremium(false);
                                }}
                                className="mr-2"
                            />
                            Free
                        </label>

                        <label className="ml-2">
                            <input
                                type="radio"
                                name="pricing"
                                value="Premium"
                                checked={values.pricing === "Premium"}
                                onChange={(e) => {
                                    setFieldValue("pricing", e.target.value);
                                    setIsPremium(true);
                                }}
                                className="mr-2"
                            />
                            Premium
                        </label>
                    </div> */}

                    <div className='flex justify-between'>
                        <div className="radiogroup">
                            <div className="wrapper">
                                <input id="Free" value="Free" name="pricing" type="radio" className="state" checked={values.pricing === "Free"}
                                    onChange={(e) => {
                                        setFieldValue("pricing", e.target.value);
                                        setIsPremium(false);
                                    }} />
                                <label htmlFor="Free" className="label">
                                    <div className="indicator"></div>
                                    <span className="text">Free</span>
                                </label>
                            </div>
                            <div className="wrapper">
                                <input id="Premium" value="Premium" name="pricing" type="radio" className="state" checked={values.pricing === "Premium"}
                                    onChange={(e) => {
                                        setFieldValue("pricing", e.target.value);
                                        setIsPremium(true);
                                    }} />
                                <label htmlFor="Premium" className="label">
                                    <div className="indicator"></div>
                                    <span className="text">Premium</span>
                                </label>
                            </div>
                        </div>

                    {isPremium && (
                        <div className="w-[40%] flex items-center gap-2">
                            <label className="mb-2">Price</label>
                            <Field
                                name="price"
                                className="w-full p-1.5 border border-[#ccc] rounded bg-white shadow-md"
                            />
                            {touched.title && errors.title && <div className="text-red-500">{errors.title}</div>}
                        </div>
                    )}
                    </div>

                    {isPremium && (
                        <>
                            {/* <div className="w-full">
                                <label className="block mb-2">Price</label>
                                <Field
                                    name="title"
                                    className="w-full p-1.5 border border-[#ccc] rounded bg-white shadow-md"
                                />
                                {touched.title && errors.title && (
                                    <div className="text-red-500">
                                        {errors.title}
                                    </div>
                                )}
                            </div> */}

                            <label className="block mb-2">Description</label>
                            <Editor />
                        </>
                    )}
                </Form>
            )}
        </Formik>
    );
};
