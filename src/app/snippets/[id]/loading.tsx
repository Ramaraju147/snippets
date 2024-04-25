const showSnippetLoading = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-12 h-12 border-4 border-t-4 border-gray-200 rounded-full animate-spin border-t-blue-500"></div>
      <span className="ml-4 text-gray-200">Loading...</span>
    </div>
  );
};

export default showSnippetLoading;
