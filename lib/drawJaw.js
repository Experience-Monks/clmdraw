var clearCanvas = require( './clearCanvas' );

module.exports = function( clmPositions, canvas, strokeStyle, doClear ) {

	var ctx = canvas.getContext( '2d' );

	clearCanvas( ctx, doClear );

	ctx.strokeStyle = strokeStyle || ctx.strokeStyle;

	ctx.beginPath();
	
	//draw bottom
	ctx.moveTo( clmPositions[ 0 ][ 0 ], clmPositions[ 0 ][ 1 ] );

	for( var i = 1; i <= 14; i++ ) {

		ctx.lineTo( clmPositions[ i ][ 0 ], clmPositions[ i ][ 1 ] );		
	}

	ctx.stroke();
};