var clearCanvas = require( './clearCanvas' );

module.exports = function( clmPositions, canvas, strokeStyle, doClear ) {

	if( clmPositions.length > 71 ) {

		var ctx = canvas.getContext( '2d' );

		clearCanvas( ctx, doClear );

		ctx.strokeStyle = strokeStyle || ctx.strokeStyle;

		ctx.beginPath();
		ctx.moveTo( clmPositions[ 72 ][ 0 ], clmPositions[ 72 ][ 1 ] );

		for( var i = 73, len = clmPositions.length; i < len; i++  ) {

			ctx.lineTo( clmPositions[ i ][ 0 ], clmPositions[ i ][ 1 ] );
		}

		ctx.stroke();
	}
};