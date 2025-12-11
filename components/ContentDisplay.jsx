import { getDocumentContent } from "@/lib/doc";
import Link from "next/link";
import Tag from "./Tag";

const ContentDisplay = async ({ id }) => {
  const documentContent = await getDocumentContent(id);

  console.log(documentContent);

  return (
    <article className="prose dark:prose-invert">
      <h1>{documentContent.title}</h1>
      <div className="mb-4">
        <span>Published On: {documentContent.date}</span> by{" "}
        <Link
          href={`/authors/${documentContent.author}`}
          className="inline-block bg-green-600 text-white px-1  rounded hover:bg-green-700 transition"
        >
          {documentContent.author}
        </Link>{" "}
        under the{" "}
        <Link
          href={`/categories/${documentContent.category}`}
          className="inline-block bg-green-600 text-white px-1  rounded hover:bg-green-700 transition"
        >
          {documentContent.category}
        </Link>{" "}
        category.
      </div>
      <div className="mb-4">
        {documentContent.tags &&
          documentContent.tags.map((tag) => <Tag key={tag} tag={tag} />)}
      </div>
      <div
        className="lead"
        dangerouslySetInnerHTML={{ __html: documentContent.contentHtml }}
      />
    </article>
  );
};

export default ContentDisplay;



// import Image from "next/image";

// import Card from "./Card";
// import { getWindData } from "@/lib/weather-info";

// const WindComponent = async ({ lat, lon }) => {
//     // Check if lat/lon are provided
//     if (!lat || !lon) {
//         return (
//             <Card>
//                 <h6 className="feature-name">Wind</h6>
//                 <div className="feature-main">
//                     <Image
//                         className="max-w-20"
//                         src="/icon_wind.png"
//                         alt="wind icon"
//                         width={80}
//                         height={80}
//                     />
//                     <h3 className="feature-title">Location Needed</h3>
//                     <span className="feature-name">Provide coordinates to see wind data</span>
//                 </div>
//             </Card>
//         );
//     }

//     try {
//         const data = await getWindData(lat, lon);
        
//         // Check if data is valid
//         if (!data) {
//             throw new Error('No wind data received');
//         }
        
//         // For OpenWeatherMap, wind data might be nested
//         // Check different possible structures
//         let speed = "N/A";
//         let deg = "N/A";
        
//         if (data.wind) {
//             // Direct wind object
//             speed = data.wind.speed || "N/A";
//             deg = data.wind.deg || "N/A";
//         } else if (data.speed !== undefined) {
//             // If getWindData returns wind object directly
//             speed = data.speed || "N/A";
//             deg = data.deg || "N/A";
//         } else {
//             // Try to find wind data in nested structure
//             speed = data.current?.wind_speed || data.wind_speed || "N/A";
//             deg = data.current?.wind_deg || data.wind_deg || "N/A";
//         }

//         return (
//             <Card>
//                 <h6 className="feature-name">Wind</h6>
//                 <div className="feature-main">
//                     <Image
//                         className="max-w-20"
//                         src="/icon_wind.png"
//                         alt="wind icon"
//                         width={80}
//                         height={80}
//                     />
//                     <h3 className="feature-title">{speed} {speed !== "N/A" && "meter/sec"}</h3>
//                     <span className="feature-name">{deg} {deg !== "N/A" && "degrees"}</span>
//                 </div>
//             </Card>
//         );
//     } catch (error) {
//         console.error('Wind data fetch error:', error);
//         return (
//             <Card>
//                 <h6 className="feature-name">Wind</h6>
//                 <div className="feature-main">
//                     <Image
//                         className="max-w-20"
//                         src="/icon_wind.png"
//                         alt="wind icon"
//                         width={80}
//                         height={80}
//                     />
//                     <h3 className="feature-title">Error</h3>
//                     <span className="feature-name">Unable to load wind data</span>
//                 </div>
//             </Card>
//         );
//     }
// };

// export default WindComponent;
