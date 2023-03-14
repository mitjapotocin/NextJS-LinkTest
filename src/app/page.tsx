import Link from "next/link";

export default function Home() {
	return (
		<div className="flex flex-col w-full h-full inset-0 mt-8">
			<div className="mx-auto gap-2 flex flex-col">
				<div className="card w-96 bg-base-100 shadow-xl image-full">
					<div className="card-body">
						<h2 className="card-title">
							Home - Testing Link component!
						</h2>
						<p>
							Click or hover on the Link component below and check
							the network tab and console
						</p>
						<div className="card-actions justify-end">
							<Link href={"/test"} className="btn btn-primary">
								Testpage
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
