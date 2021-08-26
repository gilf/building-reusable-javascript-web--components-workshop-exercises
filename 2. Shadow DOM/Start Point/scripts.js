(function() {
    const template = document.getElementById('collapsibleTmpl');
    const clone = document.importNode(template.content, true);

    document.getElementById('shell').appendChild(clone);
}());
