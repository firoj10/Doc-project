import ContentDisplay from "@/components/ContentDisplay";

const SubContentPage = async ({ params }) => {
  const resolvedParams = await params; // unwrap the Promise
  const { subContentId } = resolvedParams;

  return <ContentDisplay id={subContentId} />;
};

export default SubContentPage;
