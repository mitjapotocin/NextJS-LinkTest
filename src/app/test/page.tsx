import Link from "next/link";
import React from "react";

const Test = () => {
	return (
		<div className="flex flex-col w-full h-full inset-0 mt-8">
			<div className="mx-auto gap-2 flex flex-col">
				<div className="card w-96 bg-base-100 shadow-xl image-full">
					<div className="card-body">
						<h2 className="card-title">
							Test - Testing Link component!
						</h2>
						<p>
							Click or hover on the Link component below and check
							the network tab and console
						</p>
						<div className="card-actions justify-end">
							<Link href={"/"} className="btn btn-primary">
								HomePage
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Test;
