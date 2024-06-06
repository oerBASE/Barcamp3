window.onload = () => {
    const header_rough = RoughNotation.annotate(document.querySelector("#oer-header > a > span"), { type: 'underline', color: 'yellow', strokeWidth: 3 });
    header_rough.show();

    const main_rough = RoughNotation.annotate(document.querySelector("main > h1"), { type: 'highlight', color: 'yellow', multiline: true });
    main_rough.show();

    try {
        const event_info_rough = RoughNotation.annotate(document.querySelector("#oer-event-info > div"), { type: 'box', color: 'yellow', strokeWidth: 3 });
        event_info_rough.show();
    } catch (error) {
        // ignored
    }

    const headings = document.querySelectorAll("h3");
    headings.forEach((heading) => {
        const rn = RoughNotation.annotate(heading, { type: 'highlight', color: 'yellow', multiline: true });
        rn.show();
    });
};