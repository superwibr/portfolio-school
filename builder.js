
window.portfolio = {
	Frontpage: class{
		constructor(json){
			let main = document.querySelector('main'),
				frontpage = main.insertAdjacentHTML(`<div class="tabcontent" style="display:block;">\
														<h1>${json.title}</h1>\
														<p>${json.body}</p><br/>\
														<image src="${json.image}" />
													</div>`)
		}
	},
	Section: class {
		constructor(json) {
			let menu = document.querySelector('.tab'),
				section = document.querySelector(`<div class="tabcontent" id="${json.name}"></div>`)
			menu.insertAdjacentHTML(`<button class="tablinks" onclick="portfolio.open(${json.name})">${json.name}</button>`);
			section = document.querySelector(`#${json.name}`);
			
			


			return section;				
		}
	},
	open(sectionName) {
		var i, tabcontent, tablinks;
		tabcontent = document.getElementsByClassName("tabcontent");
		for (i = 0; i < tabcontent.length; i++) {
			tabcontent[i].style.display = "none";
		}
		tablinks = document.getElementsByClassName("tablinks");
		for (i = 0; i < tablinks.length; i++) {
			tablinks[i].className = tablinks[i].className.replace(" active", "");
		}
		document.getElementById(sectionName).style.display = "block";
		evt.currentTarget.className += " active";
	}
}