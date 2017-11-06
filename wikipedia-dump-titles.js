console.log(
    $('.mw-headline')
    .map(function() {
        return $(this).text()
    })
    .get()
    .filter(x => /^[a-zA-Z]+$/.test(x))
    .map(x => x.toLowerCase())
    .join('\n')
)
