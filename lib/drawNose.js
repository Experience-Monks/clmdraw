var clearCanvas = require( './clearCanvas' );

module.exports = function( clmPositions, canvas, strokeStyle, doClear ) {

	var ctx = canvas.getContext( '2d' );

	clearCanvas( ctx, doClear );

	ctx.strokeStyle = strokeStyle || ctx.strokeStyle;

	ctx.beginPath();

	//draw bottom
	ctx.moveTo( clmPositions[ 34 ][ 0 ], clmPositions[ 34 ][ 1 ] );

	for( var i = 35; i <= 40; i++ ) {

		ctx.lineTo( clmPositions[ i ][ 0 ], clmPositions[ i ][ 1 ] );		
	}

	//draw bridge
	ctx.moveTo( clmPositions[ 33 ][ 0 ], clmPositions[ 33 ][ 1 ] );
	ctx.lineTo( clmPositions[ 41 ][ 0 ], clmPositions[ 41 ][ 1 ] );
	ctx.lineTo( clmPositions[ 62 ][ 0 ], clmPositions[ 62 ][ 1 ] );

	ctx.stroke();
};