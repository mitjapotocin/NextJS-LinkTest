export async function getServerSideProps() {
  return {
    props: {
      test: [1, 2, 3],
    },
  };
}

export default function TestPage(props: any) {
  console.log(props);
  return (
    <div>
      <h1>Test page</h1>
      <code>{JSON.stringify(props)}</code>
    </div>
  );
}
