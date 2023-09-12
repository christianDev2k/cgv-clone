const sleep = (time: number = 2000) => {
    return new Promise(resolve => setTimeout(resolve, time));
};

export default sleep;
