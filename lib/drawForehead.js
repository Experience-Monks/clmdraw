var clearCanvas = require( './clearCanvas' );

/**
 * This method will draw just the forehead points if they exist to the supplied canvas
 * 
 * @param  {Array} clmPositions The points returned from clm for the detected face
 * @param  {HTMLCanvasElement} The canvas which you want to draw the clm face feature on
 * @param  {String} [strokeStyle] How thick and what colour you'd like to draw your lines
 *                                default is the strokestyle defined by the canvas
 * @param  {Boolean} [doClear] Should the canvas context be cleared before draw default is true
 */
module.exports = function drawForehead( clmPositions, canvas, strokeStyle, doClear ) {

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