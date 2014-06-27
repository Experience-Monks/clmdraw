var clearCanvas = require( './clearCanvas' );

module.exports = function( clmPositions, canvas, strokeStyle, doClear ) {

	var ctx = canvas.getContext( '2d' );

	clearCanvas( ctx, doClear );

	ctx.strokeStyle = strokeStyle || ctx.strokeStyle;

	ctx.beginPath();

	//draw bottom
	ctx.moveTo( clmPositions[ 23 ][ 0 ], clmPositions[ 23 ][ 1 ] );
	ctx.lineTo( clmPositions[ 63 ][ 0 ], clmPositions[ 63 ][ 1 ] );
	ctx.lineTo( clmPositions[ 24 ][ 0 ], clmPositions[ 24 ][ 1 ] );
	ctx.lineTo( clmPositions[ 64 ][ 0 ], clmPositions[ 64 ][ 1 ] );
	ctx.lineTo( clmPositions[ 25 ][ 0 ], clmPositions[ 25 ][ 1 ] );
	ctx.lineTo( clmPositions[ 65 ][ 0 ], clmPositions[ 65 ][ 1 ] );
	ctx.lineTo( clmPositions[ 26 ][ 0 ], clmPositions[ 26 ][ 1 ] );
	ctx.lineTo( clmPositions[ 66 ][ 0 ], clmPositions[ 66 ][ 1 ] );
	ctx.lineTo( clmPositions[ 23 ][ 0 ], clmPositions[ 23 ][ 1 ] );

	ctx.stroke();
};