export const environment = {
    production: false,
    apiBaseUrl: "https://qbotkurtminiemenleuven.azurewebsites.net/api/Request/",

    authConfig: {
        instance: "https://login.microsoftonline.com/",
        tenantId: "14ca2c28-d223-4c2d-8cb6-a1ac51311676",
        clientId: "708589ad-141e-425d-a6cd-d75b4d2a499a",
        redirectUri: "/app-silent-end",
        cacheLocation: "localStorage",
        navigateToLoginRequestUrl: false,
        extraQueryParameters: "",
        popUp: true,
        popUpUri: "/app-silent-start",
        popUpWidth: 600,
        popUpHeight: 535
    },

    // do not populate the following:
    upn: "",
    tid: "",
};
