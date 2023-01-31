export default function Preview({ content }) {
  return (
    <div
      className="overflow-y-scroll flex-1 p-5 bg-gray-700"
      dangerouslySetInnerHTML={{ __html: content }}
    ></div>
  );
}
