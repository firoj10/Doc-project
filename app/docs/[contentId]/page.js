import ContentDisplay from "@/components/ContentDisplay";

const ContentPage = async ({ params }) => {
  const resolvedParams = await params; // unwrap the Promise
  const { contentId } = resolvedParams;

  return <ContentDisplay id={contentId} />;
};

export default ContentPage;
