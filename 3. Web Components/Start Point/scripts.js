const defineCollapsible = () => {
    let thisDoc = document;

    class CollapsiblePanel extends HTMLElement {
        constructor() {
            super();

            const tmpl = thisDoc.querySelector('#collapsibleTmpl');

            let shadowRoot = this.attachShadow({mode: 'open'});
            shadowRoot.appendChild(tmpl.content.cloneNode(true));

            // save the collapsible state (shown/hidden)

            // This code makes sure you call the toggle function with the current element instance
            this.toggle = this.toggle.bind(this);
        }

        connectedCallback() {
            // Attach click event handler to the header and
            // set it's content according to data-collapse-header value
        }

        disconnectedCallback() {
            // Remove the event handler of the header
        }

        toggle() {
            // Perform the toggling of the content element and save the new component state
        }
    }

    // Register the new element

}

export { defineCollapsible };
