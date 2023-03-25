import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Home - Client side navigation</h1>
      <p>
        Hover on the Link component below and check the network tab. You should
        see a test.json with <strong>page props</strong>.
      </p>
      <div>
        <Link href={"/test"} prefetch={false}>
          <a>Testpage (prefetch=false so it should prefetch on hover)</a>
        </Link>
      </div>
    </div>
  );
}
