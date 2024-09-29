export function JsonFromFormEvent(event: any) {
    let formJsonData: any = {};

    for(const element of event.target.elements) {

        if(element.type === "submit" || element.name === "image") {
            continue;
        }

        if(element.type === "checkbox") {
            formJsonData[element.name] = element.checked;
        } else if(element.type === "radio") {
            if(element.checked) {
                formJsonData[element.name] = element.value;
            }
        } else if(element instanceof HTMLInputElement || element instanceof HTMLSelectElement || element instanceof HTMLTextAreaElement) {
            formJsonData[element.name] = element.value;
        }
    }

    return formJsonData;
}

export function CreteImageForm(key: string, value: string, imageBlob: string) {
    let formData = new FormData();
    formData.set(key, value);
    formData.set("image", imageBlob);
    return formData;
}
