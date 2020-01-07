const findElement = (Component, testName) => {
    return Component.find(`[data-test="${testName}"]`);
};

export default {
    findElement
};
