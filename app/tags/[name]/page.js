import ContentDisplay from "@/components/ContentDisplay";
import { getDocuments } from "@/lib/doc";
import { getDocumentsByTag } from "@/utils/doc-util";

const TagPage = async ({ params }) => {
  const { name } = await params; // unwrap the Promise
  const docs = getDocuments();
  const matchedDocuments = getDocumentsByTag(docs, name);

  // Handle case when no documents match the tag
  if (!matchedDocuments || matchedDocuments.length === 0) {
    return <p>No documents found for tag "{name}"</p>;
  }

  return <ContentDisplay id={matchedDocuments[0].id} />;
};

export default TagPage;
