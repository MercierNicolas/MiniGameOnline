function() {

	var ConnectFour = function() {

		gameBoard = {};
		currentPlayer = 'red';
		numRows = 6;
		numCols = 7;
		numTurns = 0;
		
		_init = function() {
			
			var columns;
			
			columns = document.querySelectorAll('.column');
			
			Array.prototype.forEach.call(columns, function(col) {
				col.addEventListener('click', function() {
					markNextFree(col.getAttribute('data-x'));
				});
			});
			
			for(var x = 0; x <= numRows; x++) {
			
				gameBoard[x] = {};
				
				for(var y = 0; y <= numCols; y++) {
					gameBoard[x][y] = 'free';
				}
			}
			
		};