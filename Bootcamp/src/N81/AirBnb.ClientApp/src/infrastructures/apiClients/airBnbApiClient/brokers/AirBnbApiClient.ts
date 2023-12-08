import type ApiClientBase from "@/infrastructures/apiClients/apiClientBase/ApiClientBase";
import type { LocationEndpointsClient } from "@/infrastructures/apiClients/airBnbApiClient/brokers/LocationEndpointsClient";

export  class AirBnbApiClient{
    private readonly client: ApiClientBase;
    public readonly baseUrl: string;

    constructor() {
        this.baseUrl = "https://localhost:5173";

        this.client = new ApiClientBase({
            baseUrl = this.baseUrl
        });

        this.locations = new LocationEndpointsClient(this.client);
    }

    public  locations: LocationEndpointsClient;
}