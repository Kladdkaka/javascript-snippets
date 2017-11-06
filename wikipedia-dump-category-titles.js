console.log(
    $('#mw-pages .mw-category a')
    .map(function() {
        return $(this).text()
    })
    .get()
    .filter(x => /^[a-zA-Z]+$/.test(x))
    .map(x => x.toLowerCase())
    .join('\n')
)
