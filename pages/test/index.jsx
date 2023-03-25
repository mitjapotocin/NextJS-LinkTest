export async function getServerSideProps() {
  return {
    props: {
      test: [1, 2, 3],
    },
  };
}

export default function TestPage(props) {
  console.log(props);
  return (
    <div>
      <h1>Test page with <code>getServerSideProps</code></h1>
      <h3>Props should be:</h3>
      <code>
        {JSON.stringify({
          test: [1, 2, 3],
        })}
      </code>

      <h3>Actual props:</h3>
      <code>{JSON.stringify(props)}</code>
    </div>
  );
}
