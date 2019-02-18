export function setConfig(http): void {
    http.get('/assets/data/adminConfig.json')
        .subscribe(
        response => { sessionStorage.setItem('configurations', JSON.stringify(response)); },
        err => {

        }
        );
}

export function getConfiguration(): Promise<any> {
    try {
        const configData = sessionStorage.getItem('configurations');
        return Promise.resolve(JSON.parse(configData));
    } catch (error) {
        return Promise.reject('error, while fetching configuratiion setting');
    }
}

export function updateConfig(data): Promise<any> {
    try {
        sessionStorage.setItem('configurations', JSON.stringify(data));
        return Promise.resolve('Configuration Data Updated Successfully.');
    } catch (exception) {
        return Promise.reject('error, while updating configuration in session storage.');
    }
}

