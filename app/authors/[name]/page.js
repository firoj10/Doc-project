import { getDocuments } from "@/lib/doc";
import { getDocumentsByAuthor } from "@/utils/doc-util";
import ContentDisplay from "@/components/ContentDisplay";

const AuthorsPage = async ({ params }) => {
  // Unwrap params using await
  const { name } = await params;

  const docs = getDocuments();
  const matchedDocs = getDocumentsByAuthor(docs, name);

  // Safety check if no documents are found
  if (!matchedDocs || matchedDocs.length === 0) {
    return <p>No documents found for this author.</p>;
  }

  return <ContentDisplay id={matchedDocs[0].id} />;
};

export default AuthorsPage;
