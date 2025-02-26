import React from "react";
import Section from "./Section";
import { formatText } from "../utils/textFormatting";

const PageContent = ({ pageData }) => {
  return (
    <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg mt-6">
      <h1 className="text-4xl font-bold mb-6 text-center">{pageData.title}</h1>
      <div className="prose prose-lg max-w-none">
        {pageData.sections.map((section, index) => (
          <Section key={index} title={section.title}>
            {section.content && (
              <div className="whitespace-pre-wrap">
                {formatText(section.content)}
              </div>
            )}
            
            {section.listItems && (
              <ul className="list-disc pl-5 mb-4">
                {section.listItems.map((item, iIndex) => (
                  <li key={iIndex}>
                    <strong>{item.title}:</strong> {formatText(item.content)}
                  </li>
                ))}
              </ul>
            )}
            
            {section.columns && (
              <div className="grid md:grid-cols-2 gap-6">
                {section.columns.map((column, cIndex) => (
                  <div key={cIndex} className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-3 text-blue-800">
                      {column.title}
                    </h3>
                    <p>{column.content}</p>
                  </div>
                ))}
              </div>
            )}
          </Section>
        ))}
      </div>
    </div>
  );
};

export default PageContent; 