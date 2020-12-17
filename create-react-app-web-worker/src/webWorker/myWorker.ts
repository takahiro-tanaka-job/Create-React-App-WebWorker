export default function myWorker(name:string): Date {
    console.log(`START: ${name}`);

    const seconds = 5;
    const start = new Date().getTime();
    const delay = seconds * 1000;

    while (true) {
        if ((new Date().getTime() - start) > delay) {
            break;
        }
    }

    console.log(`END: ${name}`);
    return new Date();
}