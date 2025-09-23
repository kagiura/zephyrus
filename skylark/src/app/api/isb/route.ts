// jsdoc for the API

import { NextResponse } from "next/server";

/**
 * API to get the bus routes from the ISB API
 * @param endpoint - the endpoint of the ISB API
 * @param query - the query parameters for the ISB API
 * @returns the response from the ISB API
 */
export async function GET(request: Request) {
	// read two query parameters: "endpoint" and "query"
	// pass them to the ISB API:
	// example: https://nnextbus.nus.edu.sg/ActiveBus?route_code=A2
	// add HTTP Basic Access authentication
	// get the username and password from the environment variables

	const url = new URL(request.url);
	const endpoint = url.searchParams.get("endpoint");
	const query = url.searchParams.get("query");
	const username = process.env.ISB_USERNAME;
	const password = process.env.ISB_PASSWORD;
	const headers = new Headers();
	headers.set("Authorization", "Basic " + btoa(username + ":" + password));

	const response = await fetch(
		`https://nnextbus.nus.edu.sg/${endpoint}?${query}`,
		{
			headers,
		},
	);
	const data = await response.json();

	return NextResponse.json(data);
}
