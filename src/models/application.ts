export type ReturnIpAddressOutput = {
    ip_addresses: string[];
    updatedAt: Date;
}

export type ApplicationDetailsDto = {
    application_name: string;
    icon_url: string;
    redirect_uris: string[];
}