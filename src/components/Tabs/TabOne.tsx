// @ts-nocheck

import { Formik, Form, Field } from "formik";
import { FileInput } from "../FileInput";
import { DropZone } from "../DropZone";
import Select from "react-select";
import CreatableSelect from "react-select/creatable";
import { useState } from "react";
import * as Yup from "yup";
import Editor from "../Editor";
// import "./tailwindFullscreen.css";

export const TabOne = () => {
  const [selectOption, setSelectOption] = useState([
    { value: "1", label: "Tag 1" },
    { value: "2", label: "Tag 2" },
    { value: "3", label: "Tag 3" },
  ]);

  const onCreateOption = (newOption: string) => {
    setSelectOption([...selectOption, { value: newOption, label: newOption }]);
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    category: Yup.string().required("Category is required"),
    image: Yup.mixed().required("Image is required"),
    method: Yup.string().required("Method is required"),
    target: Yup.string().required("Target is required"),
    summary: Yup.string().required("Summary is required"),
    description: Yup.string().required("Description is required"),
    youtubeLink: Yup.string().url("Invalid YouTube link"),
    tags: Yup.array().of(Yup.string()),
  });

  return (
    <Formik
      initialValues={{
        title: "",
        image: "",
        category: "Strategy Idea",
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
      {({ errors, touched, setFieldValue, values }) => (
        <Form className="space-y-4 p-6 rounded-lg shadow-lg backdrop-blur-lg">
          <h2 className="text-xl font-semibold mb-4">Strategy</h2>
          
          {/* بخش Title و Image */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
            <div className="w-full md:w-1/2">
              <label className="block mb-2">Title</label>
              <Field
                name="title"
                className="w-full p-2 border border-gray-300 rounded bg-white shadow-md"
              />
              {touched.title && errors.title && (
                <div className="text-red-500 text-sm mt-1">{errors.title}</div>
              )}
            </div>
            <div className="w-full md:w-1/2">
              <label className="block mb-2">Image</label>
              <FileInput />
              {touched.image && errors.image && (
                <div className="text-red-500 text-sm mt-1">{errors.image}</div>
              )}
            </div>
          </div>

          {/* بخش Category, Method و Target */}
          <div className="flex flex-col md:flex-row md:justify-evenly md:items-center gap-4">
            <div className="w-full md:w-1/3">
              <label className="block mb-2">Category</label>
              <Select
                id="category"
                name="category"
                className="w-full shadow-md cursor-pointer"
                options={[
                  { value: "1", label: "Category 1" },
                  { value: "2", label: "Category 2" },
                  { value: "3", label: "Category 3" },
                ]}
                placeholder="Select category"
                onChange={(option) => setFieldValue("category", option?.value)}
                defaultValue={{ value: "1", label: "Category 1" }}
              />
              {touched.category && errors.category && (
                <div className="text-red-500 text-sm mt-1">{errors.category}</div>
              )}
            </div>
            <div className="w-full md:w-1/3">
              <label className="block mb-2">Method</label>
              <Select
                name="method"
                className="shadow-md"
                options={[
                  { value: "1", label: "Method 1" },
                  { value: "2", label: "Method 2" },
                  { value: "3", label: "Method 3" },
                ]}
                placeholder="Select method"
                isMulti
                onChange={(selected) =>
                  setFieldValue(
                    "method",
                    selected ? selected.map((item: any) => item.value) : []
                  )
                }
                defaultValue={[{ value: "1", label: "Method 1" }]}
              />
              {touched.method && errors.method && (
                <div className="text-red-500 text-sm mt-1">{errors.method}</div>
              )}
            </div>
            <div className="w-full md:w-1/3">
              <label className="block mb-2">Target</label>
              <Select
                name="target"
                className="shadow-md"
                options={[
                  { value: "1", label: "Target 1" },
                  { value: "2", label: "Target 2" },
                  { value: "3", label: "Target 3" },
                ]}
                placeholder="Select target"
                isMulti
                onChange={(selected) =>
                  setFieldValue(
                    "target",
                    selected ? selected.map((item: any) => item.value) : []
                  )
                }
                defaultValue={[{ value: "1", label: "Target 1" }]}
              />
              {touched.target && errors.target && (
                <div className="text-red-500 text-sm mt-1">{errors.target}</div>
              )}
            </div>
          </div>

          {/* افزایش عرض DropZone */}
          <div className="w-full">
            <label className="block mb-2">Gallery</label>
            <div className="w-full border-2 border-dashed border-gray-300 p-4 rounded">
              <DropZone />
            </div>
            {touched.image && errors.image && (
              <div className="text-red-500 text-sm mt-1">{errors.image}</div>
            )}
          </div>

          {/* ویرایشگر Summary با افزایش عرض */}
          <div className="w-full">
            <label className="block mb-2">Summary</label>
            <Editor />
          </div>

          {/* ویرایشگر Description با افزایش عرض */}
          <div className="w-full">
            <label className="block mb-2">Description</label>
            {/* <Field name="description">
              {({ field }: any) => (
                <ReactQuill
                  value={field.value}
                  onChange={(content) => setFieldValue("description", content)}
                  modules={quillModules}
                  formats={quillFormats}
                  placeholder="Write description here..."
                  className="w-full " // اطمینان از گرفتن عرض کامل
                />
              )}
            </Field>
            {touched.description && errors.description && (
              <div className="text-red-500 text-sm mt-1">{errors.description}</div>
            )} */}
            <Editor />
          </div>

          {/* بخش Tag و YouTube Link */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
            <div className="w-full md:w-1/2">
              <label className="block mb-2">Tag</label>
              <CreatableSelect
                name="tags"
                className="w-full shadow-md"
                options={selectOption}
                defaultValue={{ value: "3", label: "Tag 3" }}
                placeholder="Select or create tag"
                onCreateOption={onCreateOption}
              />
            </div>
            <div className="w-full md:w-1/2">
              <label className="block mb-2">YouTube Link</label>
              <Field
                name="youtubeLink"
                className="w-full p-2 border border-gray-300 rounded bg-white shadow-md"
              />
              {touched.youtubeLink && errors.youtubeLink && (
                <div className="text-red-500 text-sm mt-1">{errors.youtubeLink}</div>
              )}
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};
