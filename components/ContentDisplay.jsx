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
