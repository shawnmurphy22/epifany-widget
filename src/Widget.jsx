

function Widget(props) {
    const {major, slug, text} = props
    function startSurvey() {
        var url = new URL("https://test-web.epifany.com/" + slug)
        url.searchParams.append('major', major)
        window.open(url)
    }

    return (
        <div class="container">
            <button
            onClick={startSurvey}>{(text === null) ? text : "Start Survey"}</button>
        </div>
    );
};

export default Widget;
