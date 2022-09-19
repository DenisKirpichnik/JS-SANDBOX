///////////////////////////// BAD breaks SRP ///////////////////////////

class News {
	title: string;
	text: string;
	modified: boolean;

	constructor(title, text) {
		this.title = title;
		this.text = text;
		this.modified = false;
	}

	update(text) {
		this.text = text;
		this.modified = true;
	}

	html() {
		return `
    <div class="news">
      <h1>${this.text}
      <h1>${this.title}
    </div> 
    `;
	}

	json() {
		return JSON.stringify({
			text: this.text,
			title: this.text,
			modified: this.modified,
		});
	}
}

const news = new News("Путин", "Новая конституция");

///////////////////////////// SRP ///////////////////////////

class NewsPrinter {
	news: News;
	constructor(news: News) {
		this.news = news;
	}

	html() {
		return `
    <div class="news">
      <h1>${this.news.text}
      <h1>${this.news.title}
    </div> 
    `;
	}

	json() {
		return JSON.stringify({
			text: this.news.text,
			title: this.news.text,
			modified: this.news.modified,
		});
	}
}

const printer = new NewsPrinter(new News("John", "Doe"));

printer.html();
