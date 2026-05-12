import { Mail, MapPin, Headphones } from "lucide-react";

export default function AdmissionFormPage() {
  return (
    <section className="w-full bg-[#f5f5f5] py-10 md:py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 md:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
        {/* Left Form Section */}
        <div>
          <h1 className="max-w-2xl text-3xl font-bold leading-snug text-black sm:text-4xl md:text-5xl">
            Kindly Fill The Form And
            <br />
            Attach Required Documents
          </h1>

          <form className="mt-8 space-y-5 md:mt-10">
            <div>
              <input
                type="text"
                placeholder="Name"
                className="w-full border-0 border-b border-gray-300 bg-transparent px-3 py-3 text-base text-gray-800 outline-none transition-all placeholder:text-gray-500 focus:border-blue-600"
              />
            </div>

            <div>
              <input
                type="tel"
                placeholder="Phone"
                maxLength={10}
                className="w-full border-0 border-b border-gray-300 bg-transparent px-3 py-3 text-base text-gray-800 outline-none transition-all placeholder:text-gray-500 focus:border-blue-600"
              />
            </div>

            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full border-0 border-b border-gray-300 bg-transparent px-3 py-3 text-base text-gray-800 outline-none transition-all placeholder:text-gray-500 focus:border-blue-600"
              />
            </div>

            <div>
              <input
                type="date"
                className="w-full border-0 border-b border-gray-300 bg-transparent px-3 py-3 text-base text-gray-800 outline-none transition-all focus:border-blue-600"
              />
            </div>

            <div>
              <input
                type="text"
                placeholder="Course"
                className="w-full border-0 border-b border-gray-300 bg-transparent px-3 py-3 text-base text-gray-800 outline-none transition-all placeholder:text-gray-500 focus:border-blue-600"
              />
            </div>

            <div>
              <input
                type="text"
                placeholder="Address"
                className="w-full border-0 border-b border-gray-300 bg-transparent px-3 py-3 text-base text-gray-800 outline-none transition-all placeholder:text-gray-500 focus:border-blue-600"
              />
            </div>

            <div>
              <input
                type="text"
                placeholder="Country"
                className="w-full border-0 border-b border-gray-300 bg-transparent px-3 py-3 text-base text-gray-800 outline-none transition-all placeholder:text-gray-500 focus:border-blue-600"
              />
            </div>

            <div>
              <label className="mb-2 block px-3 text-sm font-medium text-gray-600">
                Upload ID Proof
              </label>
              <input
                type="file"
                className="block w-full border-0 border-b border-gray-300 bg-transparent px-3 py-3 text-sm text-gray-700 file:mr-4 file:rounded-md file:border-0 file:bg-gray-200 file:px-4 file:py-2 file:text-sm file:font-medium file:text-black hover:file:bg-gray-300"
              />
            </div>

            <div>
              <label className="mb-2 block px-3 text-sm font-medium text-gray-600">
                Upload Photo
              </label>
              <input
                type="file"
                className="block w-full border-0 border-b border-gray-300 bg-transparent px-3 py-3 text-sm text-gray-700 file:mr-4 file:rounded-md file:border-0 file:bg-gray-200 file:px-4 file:py-2 file:text-sm file:font-medium file:text-black hover:file:bg-gray-300"
              />
            </div>

            <div>
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full resize-none border-0 border-b border-gray-300 bg-transparent px-3 py-3 text-base text-gray-800 outline-none transition-all placeholder:text-gray-500 focus:border-blue-600"
              />
            </div>

            <button
              type="submit"
              className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-base font-semibold text-white transition-all duration-300 hover:bg-blue-700 sm:w-[220px]"
            >
              Send
            </button>
          </form>
        </div>

        {/* Right Contact Card */}
        <div className="relative flex items-start justify-center lg:justify-end">
          <div className="absolute right-0 top-0 hidden h-full w-24 bg-blue-600 md:block lg:w-32" />

          <div className="relative z-10 mt-6 w-full max-w-md rounded-[28px] bg-[#2b2b2b] px-6 py-8 text-white shadow-2xl sm:px-8 sm:py-10 md:mt-16">
            <h2 className="text-3xl font-bold">Address</h2>

            <div className="mt-10 space-y-8">
              <div className="flex items-start gap-4">
                <Headphones className="mt-1 h-5 w-5 shrink-0 text-white" />
                <a
                  href="tel:+919711709644"
                  className="text-lg leading-relaxed text-white transition-colors hover:text-blue-300"
                >
                  +91-9711709644
                </a>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="mt-1 h-5 w-5 shrink-0 text-white" />
                <a
                  href="mailto:info@lonestaracademy.in"
                  className="break-all text-lg leading-relaxed text-white transition-colors hover:text-blue-300"
                >
                  info@lonestaracademy.in
                </a>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-white" />
                <p className="text-lg leading-relaxed text-white">
                  B-1/1, 2ND FLOOR, JANAKPURI,
                  <br />
                  DELHI-110058
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}