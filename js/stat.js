'use strict';
// var CLOUD_WIDTH = 420; // ширина облака
// var CLOUD_HEIGHT = 270; // Высота облака
// var CLOUD_X = 100; // Горизонтальная координата начала облака
// var CLOUD_Y = 10; // Веритикальная координата начала облака
// var GAP = 20; // Отступ
// // var FONT_GAP = 15;
// // var TEXT_WIDTH = 50; // Ширина  текстовой области
// var BAR_HEIGHT = 150; // Высота столбика гистограммы  // Высота гистограммы 150px.
// // var barWidth = CLOUD_WIDTH - GAP - TEXT_WIDTH - GAP; // Ширина столбика гистограммы
// var barWidth = 40;
// var barGap = 10;
// var yourPlayerBarColor = 'rgba(255, 0, 0, 1)';
// // Ширина колонки 40px.

// // Расстояние между колонками 50px.

// // Цвет колонки игрока Вы rgba(255, 0, 0, 1).

// // Цвет колонок других игроков — синий, а насыщенность задаётся случайным образом.


// var renderCloud = function (ctx, x, y, color) {
//   ctx.fillStyle = color;
//   ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
// };


// // var getMaxElement = function (arr) {
// //   var maxElement = arr[0];

// //   for (var i = 1; i < arr.length; i++) {
// //     if (arr[i] > maxElement) {
// //       maxElement = arr[i];
// //     }
// //   }
// //   return maxElement;
// // };

// // window.renderStatistics = function (ctx, names, times) {
// //   renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
// //   renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

// //   ctx.fillStyle = '#000';

// //   ctx.font = '16px PT Mono';
// //   ctx.textBaseline = 'hanging';
// //   ctx.fillText('Ура вы победили!', CLOUD_X + GAP, CLOUD_Y + GAP);
// //   ctx.fillText('Список результатов:', CLOUD_X + GAP, 50);

// //   ctx.fillText('Иван', CLOUD_X + GAP, CLOUD_Y + GAP);
// //   ctx.fillStyle = yourPlayerBarColor;
// //   ctx.fillRect(CLOUD_X + barWidth, 90, barWidth, BAR_HEIGHT);

// //   ctx.fillStyle = '#000';
// //   ctx.fillText('Юлия', 110, 135);
// //   ctx.fillRect(CLOUD_X + barWidth + barGap + barGap, 120, barWidth, BAR_HEIGHT);


//   // var maxTime = getMaxElement(times);


//   //   for (var i = 0; i < names.length; i++) {
//   //     ctx.fillText(names[i], CLOUD_X + GAP, CLOUD_Y + GAP + FONT_GAP + (GAP + BAR_HEIGHT) * i);
//   //     ctx.fillRect(CLOUD_X + GAP + TEXT_WIDTH, CLOUD_Y + GAP + (GAP + BAR_HEIGHT) * i, (barWidth * times[i]) / maxTime, BAR_HEIGHT);
//   //   }

//   //   ctx.fillText(playerName, CLOUD_X + GAP, CLOUD_Y + GAP + FONT_GAP + (GAP + BAR_HEIGHT) * 0);
//   //   ctx.fillRect(CLOUD_X + GAP + TEXT_WIDTH, CLOUD_Y + GAP + (GAP + BAR_HEIGHT) * playerIndex, barWidth, BAR_HEIGHT);

//   //   playerIndex = 1;
//   //   playerName = 'Иван';

//   //   ctx.fillText(playerName, CLOUD_X + GAP, CLOUD_Y + GAP + FONT_GAP + (GAP + BAR_HEIGHT) * 1);
//   //   ctx.fillRect(CLOUD_X + GAP + TEXT_WIDTH, CLOUD_Y + GAP + (GAP + BAR_HEIGHT) * playerIndex, barWidth, BAR_HEIGHT);

//   //   playerIndex = 2;
//   //   playerName = 'Юлия';

// //   ctx.fillText(playerName, CLOUD_X + GAP, CLOUD_Y + GAP + FONT_GAP + (GAP + BAR_HEIGHT) * 2);
// //   ctx.fillRect(CLOUD_X + GAP + TEXT_WIDTH, CLOUD_Y + GAP + (GAP + BAR_HEIGHT) * playerIndex, barWidth, BAR_HEIGHT);
// };
// 5. Учебный проект: нас орда
// 8. Учебный проект: одеть Надежду
// 11. Учебный проект: в движении
// 14. Учебный проект: pimp my mage
