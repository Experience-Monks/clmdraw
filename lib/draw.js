var clearCanvas = require( './clearCanvas' );
var drawJaw = require( './drawJaw' );
var drawLeftEye = require( './drawLeftEye' );
var drawLeftEyeBrow = require( './drawLeftEyeBrow' );
var drawLips = require( './drawLips' );
var drawNose = require( './drawNose' );
var drawRightEye = require( './drawRightEye' );
var drawRightEyeBrow = require( './drawRightEyeBrow' );
var drawForeHead = require( './drawForeHead' );

module.exports = function( clmPositions, canvas, strokeStyle, doClear ) {

	var ctx = canvas.getContext( '2d' );

	clearCanvas( ctx, doClear );

	drawJaw( clmPositions, canvas, strokeStyle, doClear );
	drawLeftEye( clmPositions, canvas, strokeStyle );
	drawLeftEyeBrow( clmPositions, canvas, strokeStyle );
	drawLips( clmPositions, canvas, strokeStyle );
	drawNose( clmPositions, canvas, strokeStyle );
	drawRightEye( clmPositions, canvas, strokeStyle );
	drawRightEyeBrow( clmPositions, canvas, strokeStyle );
	drawForeHead( clmPositions, canvas, strokeStyle );
};