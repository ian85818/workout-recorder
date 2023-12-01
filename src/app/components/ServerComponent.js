
const promise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('haha');
        }, 300)
    });
}

export default async function ServerComponent() {
    const test = await promise();
    return <div>{'123123'}</div>
}