// @ts-nocheck

import { useRef, useState } from "react";
import { Formik } from "formik";
import { Form } from "formik";
import { Field } from "formik";
import { DropZone } from "../DropZone";
import * as Yup from "yup";
import Editor from "../Editor";
// import "react-quill/dist/quill.snow.css";
// import 'quill/dist/quill.snow.css'; // Ensure styles are imported
// import ReactQuill from "react-quill";
// import SunEditor from "suneditor-react";
// import "suneditor/dist/css/suneditor.min.css";


export const TabFour = () => {
    const [isDarkMode, setDarkMode] = useState(false)
    const quillRef = useRef(null)

    const validationSchema = Yup.object().shape({
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
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => console.log(values)}
        >
            {({ errors, touched, setFieldValue }) => (
                <Form className="space-y-4 px-8 pb-20 pt-8 rounded-lg shadow-lg backdrop-blur-lg">
                    <label className="block mb-2">Gallery</label>
                    <DropZone />

                    <label className="block mb-2">Description</label>
                    {/* <Field name="description"> */}
                        {/* {({ field }) => (
                            <ReactQuill
                                value={field.value}
                                onChange={(content) =>
                                    setFieldValue("description", content)
                                }
                                modules={quillModules}
                                formats={quillFormats}
                                placeholder="Write description here..."
                                className="w-full h-60"
                                ref={quillRef}
                            />
                            
                        )} */}
                        <Editor />
                    {/* </Field> */}
                    {touched.description && errors.description && (
                        <div className="text-red-500">{errors.description}</div>
                    )}
                </Form>
            )}
        </Formik>
    );
};
