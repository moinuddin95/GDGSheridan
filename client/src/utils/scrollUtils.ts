const handleScrollToComponent = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

export { handleScrollToComponent };