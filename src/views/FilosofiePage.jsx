import React from "react";
import Section from "../components/Section";

const FilosofiePage = () => {
  return (
    <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg mt-6">
      <h1 className="text-4xl font-bold mb-6 text-center">De Filosofie van Besseferism</h1>
      
      <Section title="De Kern van Tijd">
        <p className="mb-4">
          In de kern draait Besseferism om het begrijpen van tijd als een kostbare en eindige hulpbron.
          Veel mensen behandelen tijd als iets oneindigs, maar in werkelijkheid is het onze meest waardevolle bezitting.
        </p>
      </Section>

      <Section title="De Twee Pilaren">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-blue-800">Tijdsbewustzijn</h3>
            <p>Het actief bewust zijn van hoe we onze tijd besteden en de keuzes die we maken in ons dagelijks leven.</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-blue-800">Persoonlijke Groei</h3>
            <p>Het continu streven naar ontwikkeling en het maximaliseren van onze potentie door bewuste tijdsbesteding.</p>
          </div>
        </div>
      </Section>

      <Section title="Praktische Toepassing">
        <ul className="list-disc pl-5 space-y-2">
          <li>Dagelijkse reflectie op tijdsbesteding</li>
          <li>Bewuste keuzes maken in activiteiten</li>
          <li>Focus op waardevolle relaties en ervaringen</li>
          <li>Elimineren van tijdverspilling</li>
          <li>Investeren in persoonlijke ontwikkeling</li>
        </ul>
      </Section>
    </div>
  );
};

export default FilosofiePage; 