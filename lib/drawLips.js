var clearCanvas = require( './clearCanvas' );

/**
 * This method will draw just the lip points to the supplied canvas
 * 
 * @param  {Array} clmPositions The points returned from clm for the detected face
 * @param  {HTMLCanvasElement} The canvas which you want to draw the clm face feature on
 * @param  {String} [strokeStyle] How thick and what colour you'd like to draw your lines
 *                                default is the strokestyle defined by the canvas
 * @param  {Boolean} [doClear] Should the canvas context be cleared before draw default is true
 */
module.exports = function( clmPositions, canvas, strokeStyle, doClear ) {

	var ctx = canvas.getContext( '2d' );

	clearCanvas( ctx, doClear );

	ctx.strokeStyle = strokeStyle || ctx.strokeStyle;

	ctx.beginPath();

	//draw around lips
	ctx.moveTo( clmPositions[ 44 ][ 0 ], clmPositions[ 44 ][ 1 ] );

	for( var i = 45; i <= 55; i++ ) {

		ctx.lineTo( clmPositions[ i ][ 0 ], clmPositions[ i ][ 1 ] );
	}

	ctx.lineTo( clmPositions[ 44 ][ 0 ], clmPositions[ 44 ][ 1 ] );
	

	//draw inside of lips
	ctx.moveTo( clmPositions[ 44 ][ 0 ], clmPositions[ 44 ][ 1 ] );

	for( var i = 56; i <= 58; i++ ) {

		ctx.lineTo( clmPositions[ i ][ 0 ], clmPositions[ i ][ 1 ] );		
	}

	ctx.lineTo( clmPositions[ 50 ][ 0 ], clmPositions[ 50 ][ 1 ] );

	for( var i = 59; i <= 61; i++ ) {

		ctx.lineTo( clmPositions[ i ][ 0 ], clmPositions[ i ][ 1 ] );		
	}

	ctx.lineTo( clmPositions[ 44 ][ 0 ], clmPositions[ 44 ][ 1 ] );



	ctx.stroke();
};