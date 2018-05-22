const osmosis = require('osmosis');
const fs = require('fs');

class Parser {
      constructor(url) {
            this.url = url;
      }

      async parseTop(i = 1) {
            osmosis
                  .get(this.url)
                  .find(`tr#top250_place_${i}`)
                  .set({
                        'film': 'span.text-grey',
                        'people': 'a.continue',
                        'votes': 'a + span'
                  })
                  .done(() => {
                        if (i < 250) {
                              this.parseTop(i + 1);
                        }
                        return;
                  })
                  .data((response) => {
                        fs.appendFile('data.json', JSON.stringify(response), (err) => {
                              if (err)
                                    throw err;

                              console.log('Added film');
                        })
                  })
      }

      async parseNews() {
            osmosis
                  .get('https://www.kinopoisk.ru/top/lists/307/')
                  .paginate('ul.list li > a[href]', 5)
                  .find('.poster')
                  .set({
                        img: 'a@href'
                  })
                  .data(
                        console.log
                  )
      }
}

module.exports = Parser;