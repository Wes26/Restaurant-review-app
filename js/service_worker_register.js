if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('./service_worker.js')
	.then(function() {
		console.log('Service Worker Registration Worked!');
	})
	.catch(function() {
		console.log('Service Worker Registration Failed!');
	});
}