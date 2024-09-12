import { CheckCircle2 } from "lucide-react";
import codeImg from "../assets/code.jpg";
import { checklistItems } from "../constants";

const Workflow = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl text-[#004AAD] lg:text-6xl text-center mt-6 tracking-wide relative">
        <span className="relative z-10">How Does it </span>
        <span className="bg-gradient-to-r from-[#004AAD] to-[#004AAD] text-transparent bg-clip-text relative z-10">
          help Recruiters?
        </span>
        <span
          className="absolute inset-0 text-black z-0"
          style={{
            textShadow:
              "2px 2px 0 #000, -2px 2px 0 #000, 2px -2px 0 #000, -2px -2px 0 #000",
          }}
          aria-hidden="true"
        >
          How Does it help Recruiters?
        </span>
      </h2>

      <div className="flex flex-wrap mt-3 justify-center bg-[#004AAD] py-12 px-4 lg:px-12">
        <div className="p-4 w-full lg:w-1/2 flex justify-center items-center">
          <img
            src={codeImg}
            alt="Coding"
            className="rounded-lg shadow-lg transition-transform transform hover:scale-105"
          />
        </div>
        <div className="pt-12 w-full lg:w-1/2">
          {checklistItems.map((item, index) => (
            <div
              key={index}
              className="flex mb-8 items-start bg-white p-4 rounded-lg shadow-md transition-transform transform hover:scale-105"
            >
              <div className="text-[#101720] mx-4 bg-[#004AAD] h-12 w-12 p-2 flex justify-center items-center rounded-full shadow-lg">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <h5 className="mt-1 mb-2 text-2xl font-semibold text-gray-800">
                  {item.title}
                </h5>
                <p className="text-md text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workflow;
