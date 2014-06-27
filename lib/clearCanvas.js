module.exports = function( ctx, doClear ) {

	if( doClear ) {

		ctx.clearRect( 0, 0, parseInt( ctx.canvas.width ), parseInt( ctx.canvas.height ) );
	}
};