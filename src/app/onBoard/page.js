"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const categories = ["Singer", "DJ", "Dancer", "Speaker"];
const languages = ["English", "Hindi", "Tamil", "Punjabi"];
const feeOptions = [
  "₹5,000 - ₹10,000",
  "₹10,000 - ₹20,000",
  "₹20,000 - ₹30,000",
];

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  bio: yup
    .string()
    .min(20, "Bio should be at least 20 characters")
    .required("Bio is required"),
  categories: yup.array().min(1, "Select at least one category"),
  languages: yup.array().min(1, "Select at least one language"),
  fee: yup.string().required("Fee range is required"),
  location: yup.string().required("Location is required"),
});

export default function OnboardArtistPage() {
  const [image, setImage] = useState(null);
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      bio: "",
      categories: [],
      languages: [],
      fee: "",
      location: "",
    },
  });

  const onSubmit = (data) => {
    const artistData = { ...data, profileImage: image };
    console.log("Artist Submitted:", artistData);
    alert("Artist Submitted! Check console for data.");
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center text-white">
        Onboard as an Artist
      </h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6 bg-[#8c52ff] text-white font-bold p-6 rounded-lg shadow"
      >
        {/* Name */}
        <div>
          <Label className="font-bold">Name</Label>
          <Input {...register("name")} />
          {errors.name && (
            <p className="text-sm text-red-500">{errors.name.message}</p>
          )}
        </div>

        {/* Bio */}
        <div>
          <Label className="font-bold">Bio</Label>
          <Textarea rows={4} {...register("bio")} />
          {errors.bio && (
            <p className="text-sm text-red-500">{errors.bio.message}</p>
          )}
        </div>

        {/* Categories (multi-select checkbox) */}
        <div>
          <Label className="font-bold">Category</Label>
          <div className="grid grid-cols-2 gap-2 mt-2">
            {categories.map((cat) => (
              <div key={cat} className="flex items-center gap-2">
                <Checkbox
                  id={cat}
                  checked={watch("categories")?.includes(cat)}
                  onCheckedChange={(checked) => {
                    const current = watch("categories") || [];
                    if (checked) {
                      setValue("categories", [...current, cat]);
                    } else {
                      setValue(
                        "categories",
                        current.filter((c) => c !== cat)
                      );
                    }
                  }}
                />
                <Label htmlFor={cat}>{cat}</Label>
              </div>
            ))}
          </div>
          {errors.categories && (
            <p className="text-sm text-red-500 mt-1">
              {errors.categories.message}
            </p>
          )}
        </div>

        {/* Languages (multi-select checkbox) */}
        <div>
          <Label className="font-bold">Languages Spoken</Label>
          <div className="grid grid-cols-2 gap-2 mt-2">
            {languages.map((lang) => (
              <div key={lang} className="flex items-center gap-2">
                <Checkbox
                  id={lang}
                  checked={watch("languages")?.includes(lang)}
                  onCheckedChange={(checked) => {
                    const current = watch("languages") || [];
                    if (checked) {
                      setValue("languages", [...current, lang]);
                    } else {
                      setValue(
                        "languages",
                        current.filter((l) => l !== lang)
                      );
                    }
                  }}
                />
                <Label htmlFor={lang}>{lang}</Label>
              </div>
            ))}
          </div>
          {errors.languages && (
            <p className="text-sm text-red-500 mt-1">
              {errors.languages.message}
            </p>
          )}
        </div>

        {/* Fee Range */}
        <div>
          <Label className="font-bold">Fee Range</Label>
          <select
            {...register("fee")}
            className="border bg-slate-950 rounded px-3 py-2 mt-1 w-full"
          >
            <option value="">Select Fee Range</option>
            {feeOptions.map((fee) => (
              <option key={fee} value={fee}>
                {fee}
              </option>
            ))}
          </select>
          {errors.fee && (
            <p className="text-sm text-red-500 mt-1">{errors.fee.message}</p>
          )}
        </div>

        {/* Location */}
        <div>
          <Label className="font-bold">Location</Label>
          <Input {...register("location")} />
          {errors.location && (
            <p className="text-sm text-red-500">{errors.location.message}</p>
          )}
        </div>

        {/* Profile Image */}
        <div>
          <Label className="font-bold">Profile Image (optional)</Label>
          <Input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files?.[0] || null)}
          />
        </div>

        <Button type="submit" className="w-full">
          Submit
        </Button>
      </form>
    </div>
  );
}
