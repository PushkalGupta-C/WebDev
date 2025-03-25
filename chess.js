// Data
window.dataReload = function () {
  window.clrRed = "#ff0000";
  window.clrYellow = "#ffff00";
  window.clrDefaultArr = [
    "#ffffff",
    "#33b3a6",
    "#caf8ca",
    "#2afecb",
    window.blendColors("#ffffff", window.clrRed, 0.6),
    window.blendColors("#33b3a6", window.clrRed, 0.6),
    window.blendColors("#ffffff", window.clrYellow, 0.5),
    window.blendColors("#33b3a6", window.clrYellow, 0.5),
  ];
  window.popUpCount = 0;
  window.time = "";
  window.navIconArr = [
    { icon: "fa-regular fa-hourglass-half", animation: "fa-shake" },
    { icon: "fa-solid fa-folder-open", animation: "fa-bounce" },
    { icon: "fa-solid fa-pen-to-square", animation: "fa-fade" },
    { icon: "fa-solid fa-computer", animation: "fa-beat" },
  ];
  window.bodyImageURL = [
    "https://img.freepik.com/free-photo/abstract-fire-desktop-wallpaper-realistic-blazing-flame-image_53876-147448.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1719792000&semt=ais_user",
  ];
  window.navArr = ["Time Limit", "New Game", "Analysis", "Computer"];
  window.chessArr = [];
  window.temp = {};
  window.pointCountInitInit = {
    whitepawn: 8,
    whiteknight: 2,
    whitebishop: 2,
    whiterook: 2,
    whitequeen: 1,
    whiteking: 1,
    blackpawn: 8,
    blackknight: 2,
    blackbishop: 2,
    blackrook: 2,
    blackqueen: 1,
    blackking: 1,
  };
  window.timeArr = [
    "1 min",
    "1|1",
    "2|1",
    "3 min",
    "3|2",
    "5 min",
    "10 min",
    "15|10",
    "30 min",
    "1 day",
    "3 days",
    "7 days",
  ];
  window.iconTimeArr = [
    "<div class='icon-label1'><i class='fa-solid fa-joint icon' style='color:#DAA520'></i>",
    "<div class='icon-label2'><i class='fa-solid fa-bolt-lightning icon' style ='color:#FFEA00'></i>",
    "<div class='icon-label2'><i class='fa-solid fa-stopwatch icon' style='color:#8DB000'></i>",
    "<div class='icon-label2'><i class='fa-solid fa-sun icon' style='color:#FDDA0D'></i>",
  ];
  window.baseImagePath = "/images/"; // Adjusted for CRA public folder
  window.pieceImagePaths = [
    "piecesClassic/",
    "pieces/",
    "piecesVirtual/",
    "piecesCartoon/",
    "piecesWooden/",
    "piecesWooden2/",
  ];
  window.baseThemePath = "/images/Themes/";
  window.themeLogoPaths = ["logo1.png", "logo2.png", "logo3.png"];
  window.themesValueArr = [
    {
      id: "rt0",
      name: "chess.com",
      clr1: "#EEEED2",
      clr2: "#769656",
      clr1c: "#F98A75",
      clr2c: "#BE5F35",
      clr1p: "#F6F682",
      clr2p: "#BAC949",
      clr1x: "#BAC949",
      clr2x: "#FFFA5C",
    },
    {
      id: "rt1",
      name: "lichess.org",
      clr1: "#F0D9B7",
      clr2: "#B58763",
      clr1c: "#EA4334",
      clr2c: "#DB3423",
      clr1p: "#CFD17B",
      clr2p: "#ACA249",
      clr1x: "#87986A",
      clr2x: "#6A6F42",
    },
    {
      id: "rt2",
      name: "pastel",
      clr1: "#DEE3E6",
      clr2: "#8CA2AD",
      clr1c: "#FF9999",
      clr2c: "#D37878",
      clr1p: "#78BEDE",
      clr2p: "#5795B2",
      clr1x: "#99DFFF",
      clr2x: "#78B6D3",
    },
  ];
  window.imagePath = window.baseImagePath + window.pieceImagePaths[0];
  window.pieceImageArr = [
    "pawn+white.png",
    "knight+white.png",
    "bishop+white.png",
    "rook+white.png",
    "queen+white.png",
    "king+white.png",
    "pawn+black.png",
    "knight+black.png",
    "bishop+black.png",
    "rook+black.png",
    "queen+black.png",
    "king+black.png",
  ];
  window.boardArrLine = [{}, {}, {}, {}, {}, {}, {}, {}];
  window.boardArr = window.boardArrLine.map(function (ele) {
    return [...window.boardArrLine];
  });
  window.timeLabelArr = ["Bullet", "Blitz", "Rapid", "Daily"];
  window.displayStr = "";
  window.leftBarArr = [
    [
      { txt: "Default", icon: "fa-user" },
      { txt: "Themes", icon: "fa-chess" },
      { txt: "Change Board Color", icon: "fa-palette" },
      { txt: "Change Highlighted Color", icon: "fa-highlighter" },
      { txt: "Change Check Color", icon: "fa-plus" },
      { txt: "Change Previous Moves Color", icon: "fa-circle-arrow-left" },
      { txt: "Change Piece Type", icon: "fa-chess-pawn" },
      { txt: "Add Background Image", icon: "fa-image" },
      { txt: "Show Column & Row", icon: "fa-eye" },
    ],
    [
      { txt: "Default", icon: "fa-user" },
      { txt: "Highlight Previous Moves", icon: " fa-hand-point-left" },
      { txt: "Highlight Selected Piece", icon: "fa-hand-pointer" },
      { txt: "Show Legal Moves", icon: "fa-gavel" },
      { txt: "Change Valid Moves Dot", icon: "fa-circle-dot" },
    ],
    [
      { txt: "Show PGN", icon: "fa-note-sticky" },
      { txt: "Import PGN", icon: "fa-file-import" },
    ],
  ];
  window.leftBarArrAll = [
    { txt: "Board Settings", icon: "fa-chess-board fa-size-increase" },
    {
      txt: "Move Settings",
      icon: "fa-arrows-up-down-left-right fa-size-increase",
    },
    { txt: "Game Settings", icon: "fa-book fa-size-increase" },
  ];
  window.leftBarOpenStatus = [false, false, false];
  window.userNewMoveClick = false;
  window.previousHighlightData = {};
  window.runningTestCases = false;
};

// Routine Function Calls
window.routineFunctionCalls = function () {
  window.defaultFunctionSettings();
  window.makeDefaultUISettings1();
  window.makeDefaultUISettings2();
  // Navbar creation removed; handled by React
};

// Navbar Actions (called by React Navbar)
window.navActions = function (index) {
  window.makeLeftBar();
  window.makeRightBar();
  const leftbar =
    document.getElementById("leftbar") || document.createElement("div");
  const rightbar =
    document.getElementById("rightbar") || document.createElement("div");
  if (!document.getElementById("leftbar")) {
    leftbar.id = "leftbar";
    document.body.appendChild(leftbar);
  }
  if (!document.getElementById("rightbar")) {
    rightbar.id = "rightbar";
    document.body.appendChild(rightbar);
  }

  if (index === 0) {
    window.time = "";
    leftbar.innerHTML = "";
    rightbar.innerHTML = "";
    window.makeTimer();
  } else if (index === 1) {
    if (window.time === "") {
      leftbar.innerHTML = "";
      rightbar.innerHTML = "";
    }
    window.makeStartBoard();
    window.makeBoard();
    window.makeRightBar();
    if (window.popUpCount === 0 && window.time !== "") {
      window.showPopup("Load New Theme?");
    }
    window.popUpCount++;
  } else {
    if (window.time === "") {
      leftbar.innerHTML = "";
      rightbar.innerHTML = "";
    }
    window.switchNavTab_LoadGame();
    window.showCustomAlert("Under Maintenance");
  }
};

// Basic UI
window.makeTimer = function () {
  const display =
    document.getElementById("display") || document.createElement("div");
  if (!document.getElementById("display")) {
    display.id = "display";
    document.body.appendChild(display);
  }

  window.selectedStr = `
    <div class='col p-0 mb-2 mx-1 bg-transparent'>
      <div class='row justify-content-center'>
        <button type='button' class='p-3 btn btn-light w-100 h-100 btn-green' onclick='window.confirmedTime()'>
          <span id='timeLimit'>Select Time</span>
        </button>
      </div>
    </div>`;
  window.formArr = window.timeArr.map((ele, index) => {
    let str = "";
    str =
      index % 3 === 0
        ? window.iconTimeArr[Math.floor(index / 3)] +
          `<label class='form-label'>${
            window.timeLabelArr[Math.floor(index / 3)]
          }</label></div><div class='row justify-content-center'>`
        : "";
    str += index % 3 === 0 && index !== 0 ? "</div>" : "";
    return `${str}<div class='col p-0 mb-2 mx-1 bg-transparent'><button type='button' class='p-3 btn btn-light btn-block w-100 h-100' onclick='window.btnTimeActions(${index})'>${ele}</button></div>`;
  });
  window.displayStr = `<div class='containerFrame text-center'>${
    window.selectedStr
  }${window.formArr.join(
    ""
  )}</div><div class='col p-0 mb-2 mx-1 bg-transparent'><div id='info' class='row justify-content-center'></div></div>`;
  display.innerHTML = window.displayStr;
};

window.btnTimeActions = function (index) {
  window.time = window.timeArr[index];
  const index1 = Math.floor(index / 3);
  let iconStr = window.iconTimeArr[index1];
  iconStr = iconStr.replace("'><i class", " justify-content-center'><i class");
  const timeStr = `${iconStr}${window.time}</div>`;

  const timeLimit = document.getElementById("timeLimit");
  if (timeLimit) timeLimit.innerHTML = timeStr;

  const info = document.getElementById("info");
  if (info) {
    info.innerHTML = `<br><button type='button' class='p-3 btn btn-light btn-block w-100 h-100 btn-confirm' onclick='window.switchNavTab_LoadGame()'>Play Game</button>`;
  }
};

window.makeCell = function (row, col) {
  let pieceStr = "";
  let possibleMoveStr = "";
  let extraInfoStr = "";
  let labelStr = "";
  let draggableStr = "";
  if (col === 0) {
    labelStr = window.colRowBool
      ? "<div class = 'p-1 label-col-box'>" + (8 - row) + "</div>"
      : "<div class = 'p-1 label-col-box'></div>";
  } else labelStr = "";
  let num = window.showMovesArr.findIndex(function (ele) {
    return ele.row === row && ele.col === col;
  });
  if (Object.keys(window.boardArr[row][col]).length !== 0) {
    draggableStr =
      ((window.moveCount % 2 === 0 &&
        window.boardArr[row][col].color === "white") ||
        (window.moveCount % 2 === 1 &&
          window.boardArr[row][col].color === "black")) &&
      !window.disableBoardForUser
        ? "draggable=true ondragstart='window.drag(event, " +
          row +
          ", " +
          col +
          ")' ondragend='window.dragEnd(event)'"
        : " draggable=false ";
    pieceStr =
      "<img src='" +
      window.imagePath +
      window.boardArr[row][col].key +
      "' id='img" +
      row +
      "-" +
      col +
      "' " +
      draggableStr +
      " onclick='window.hello(" +
      row +
      "," +
      col +
      ")' class='draggable-element'>";
  }
  if (num !== -1 && window.legalBool)
    if (Object.keys(window.boardArr[row][col]).length !== 0)
      possibleMoveStr =
        "<svg xmlns='http://www.w3.org/2000/svg' class = 'possible-move-square' viewBox='0 0 80 80' width='80' height='80'><circle cx='40' cy='40' r=" +
        window.highlightDotRadius +
        " fill='rgba(256, 100, 100, 0.4)'/></svg>";
    else
      possibleMoveStr =
        "<svg xmlns='http://www.w3.org/2000/svg' class = 'possible-move-square' viewBox='0 0 80 80' width='80' height='80'><circle cx='40' cy='40' r=" +
        window.highlightDotRadius +
        " fill='rgba(100, 100, 100, 0.4)'/></svg>";
  if (row === 0 && col === 0) {
    extraInfoStr = "-top-start";
  } else if (row === 7 && col === 0) {
    extraInfoStr = "-bottom-start";
  } else if (row === 0 && col === 7) {
    extraInfoStr = "-top-end";
  } else if (row === 7 && col === 7) {
    extraInfoStr = "-bottom-end";
  }
  if (
    window.prevrow === row &&
    window.prevcol === col &&
    window.highlightPieceBool
  )
    window.cellColor = (row + col) % 2 === 0 ? window.clr1x : window.clr2x;
  else if (
    window.pgnArr.length !== 0 &&
    window.pgnArr[window.pgnArr.length - 1].prevrow === row &&
    window.pgnArr[window.pgnArr.length - 1].prevcol === col &&
    window.highlightPreviousBool
  )
    window.cellColor = (row + col) % 2 === 0 ? window.clr1p : window.clr2p;
  else if (
    window.pgnArr.length !== 0 &&
    window.pgnArr[window.pgnArr.length - 1].newrow === row &&
    window.pgnArr[window.pgnArr.length - 1].newcol === col &&
    window.highlightPreviousBool
  )
    window.cellColor = (row + col) % 2 === 0 ? window.clr1p : window.clr2p;
  else window.cellColor = (row + col) % 2 === 0 ? window.clr1 : window.clr2;
  if (
    window.underCheck.bool &&
    window.underCheck.posx === row &&
    window.underCheck.posy === col
  ) {
    window.cellColor = (row + col) % 2 === 0 ? window.clr1c : window.clr2c;
    if (
      window.prevrow === row &&
      window.prevcol === col &&
      window.highlightPieceBool
    )
      window.cellColor = (row + col) % 2 === 0 ? window.clr1x : window.clr2x;
  }
  return (
    labelStr +
    "<div class='" +
    (pieceStr && window.moveStartConditon(row, col) ? "draggable " : "") +
    "cellBox cellBorder" +
    extraInfoStr +
    "' id='cell-" +
    row +
    "-" +
    col +
    "' " +
    " draggable=false ondrop='window.drop(event, " +
    row +
    ", " +
    col +
    ")' ondragover='window.allowDrop(event)' onclick='window.boardClickByUser(" +
    row +
    "," +
    col +
    ")' style='background-color: " +
    window.cellColor +
    "'>" +
    pieceStr +
    possibleMoveStr +
    "</div>"
  );
};

window.highlightMoveCells = function () {
  let possibleMoveStr = "";
  for (let row = 0; row <= 7; row++) {
    for (let col = 0; col <= 7; col++) {
      possibleMoveStr = "";
      let num = window.showMovesArr.findIndex(function (ele) {
        return ele.row === row && ele.col === col;
      });
      let numNotShow = -1;
      if (window.previousHighlightData.showMovesArr)
        numNotShow = window.previousHighlightData.showMovesArr.findIndex(
          function (ele) {
            return ele.row === row && ele.col === col;
          }
        );
      if (num !== -1 && window.legalBool) {
        if (Object.keys(window.boardArr[row][col]).length !== 0) {
          possibleMoveStr =
            "<svg id='cellHighlight-" +
            row +
            "-" +
            col +
            "' xmlns='http://www.w3.org/2000/svg' class='possible-move-square' viewBox='0 0 80 80' width='80' height='80'><circle cx='40' cy='40' r=" +
            window.highlightDotRadius +
            " fill='rgba(256, 100, 100, 0.4)'/></svg></span>";
        } else {
          possibleMoveStr =
            "<svg id='cellHighlight-" +
            row +
            "-" +
            col +
            "' xmlns='http://www.w3.org/2000/svg' class='possible-move-square' viewBox='0 0 80 80' width='80' height='80'><circle cx='40' cy='40' r=" +
            window.highlightDotRadius +
            " fill='rgba(100, 100, 100, 0.4)'/></svg>";
        }
      }
      if (possibleMoveStr.length > 0)
        document
          .getElementById("cell-" + row + "-" + col)
          .insertAdjacentHTML("beforeend", possibleMoveStr);
      if (numNotShow !== -1 && numNotShow !== num) {
        let element = document.getElementById(
          "cellHighlight-" + row + "-" + col
        );
        if (element) element.remove();
      }
    }
  }
  window.highlightSelectedCell();
  if (window.previousHighlightData.showMovesArr)
    window.unhighlightPreviousSelectedCell();
  window.previousHighlightData = {};
};

window.highlightSelectedCell = function () {
  let row = window.prevrow;
  let col = window.prevcol;
  window.cellColor = (row + col) % 2 === 0 ? window.clr1x : window.clr2x;
  if (
    window.underCheck.bool &&
    window.underCheck.posx === row &&
    window.underCheck.posy === col
  ) {
    window.cellColor = (row + col) % 2 === 0 ? window.clr1x : window.clr2x;
  }
  let element = document.getElementById("cell-" + row + "-" + col);
  element.setAttribute("style", "background-color:" + window.cellColor + ";");
};

window.unhighlightPreviousSelectedCell = function () {
  let row = window.previousHighlightData.prevrow;
  let col = window.previousHighlightData.prevcol;
  window.cellColor = "";
  if (
    window.pgnArr.length !== 0 &&
    window.pgnArr[window.pgnArr.length - 1].prevrow === row &&
    window.pgnArr[window.pgnArr.length - 1].prevcol === col &&
    window.highlightPreviousBool
  )
    window.cellColor = (row + col) % 2 === 0 ? window.clr1p : window.clr2p;
  else if (
    window.pgnArr.length !== 0 &&
    window.pgnArr[window.pgnArr.length - 1].newrow === row &&
    window.pgnArr[window.pgnArr.length - 1].newcol === col &&
    window.highlightPreviousBool
  )
    window.cellColor = (row + col) % 2 === 0 ? window.clr1p : window.clr2p;
  else window.cellColor = (row + col) % 2 === 0 ? window.clr1 : window.clr2;
  if (
    window.underCheck.bool &&
    window.underCheck.posx === row &&
    window.underCheck.posy === col
  ) {
    window.cellColor = (row + col) % 2 === 0 ? window.clr1c : window.clr2c;
  }
  let element = document.getElementById("cell-" + row + "-" + col);
  element.setAttribute("style", "background-color:" + window.cellColor + ";");
};

window.makeBoard = function () {
  let str = "";
  for (let i = 0; i <= 7; i++) {
    str +=
      "<div class='container'><div class='row row-cols-8 justify-content-center'>";
    for (let j = 0; j <= 7; j++) str += window.makeCell(i, j);
    str += "</div></div>";
  }
  let labelArrMap = window.labelArr.map(function (ele) {
    return "<div class='cellBox abcd-label'>" + ele + "</div>";
  });
  window.displayStr =
    "<div class = 'containerFrame'>" +
    str +
    "<div class='row row-cols-8 abcd-label-padding'>" +
    (window.colRowBool ? labelArrMap.join("") : "") +
    "</div></div>";
  if (window.time === "") {
    window.displayStr =
      "<div class='containerFrame'><button type='button' class='p-3 btn btn-light w-100 h-100 btn-block-red' onclick='window.switchNavTab_MakeTimer()'>Go To Select Time</button></div>";
  }
  document.getElementById("display").innerHTML =
    window.displayStr + window.virtualBoardStr;
};

window.confirmedTime = function () {
  if (document.getElementById("timeLimit").innerHTML === "Select Time") {
    document.getElementById("timeLimit").innerHTML = "Please Select Time";
  } else if (
    document.getElementById("timeLimit").innerHTML === "Please Select Time"
  ) {
    window.showCustomAlert("Please Select Time");
  } else {
    window.switchNavTab_LoadGame();
  }
};

window.makeStartBoard = function () {
  for (let row = 0; row <= 7; row++) {
    for (let col = 0; col <= 7; col++) {
      if (row === 1)
        window.boardArr[row][col] = {
          piece: "pawn",
          color: "black",
          key: window.pieceImageArr[6],
          points: -1,
        };
      else if (row === 6)
        window.boardArr[row][col] = {
          piece: "pawn",
          color: "white",
          key: window.pieceImageArr[0],
          points: 1,
        };
      else if (row === 0 && (col === 0 || col === 7))
        window.boardArr[row][col] = {
          piece: "rook",
          color: "black",
          key: window.pieceImageArr[9],
          points: -5,
        };
      else if (row === 0 && (col === 1 || col === 6))
        window.boardArr[row][col] = {
          piece: "knight",
          color: "black",
          key: window.pieceImageArr[7],
          points: -3,
        };
      else if (row === 0 && (col === 2 || col === 5))
        window.boardArr[row][col] = {
          piece: "bishop",
          color: "black",
          key: window.pieceImageArr[8],
          points: -3,
        };
      else if (row === 0 && col === 3)
        window.boardArr[row][col] = {
          piece: "queen",
          color: "black",
          key: window.pieceImageArr[10],
          points: -9,
        };
      else if (row === 0 && col === 4)
        window.boardArr[row][col] = {
          piece: "king",
          color: "black",
          key: window.pieceImageArr[11],
          points: -1000,
        };
      else if (row === 7 && (col === 0 || col === 7))
        window.boardArr[row][col] = {
          piece: "rook",
          color: "white",
          key: window.pieceImageArr[3],
          points: 5,
        };
      else if (row === 7 && (col === 1 || col === 6))
        window.boardArr[row][col] = {
          piece: "knight",
          color: "white",
          key: window.pieceImageArr[1],
          points: 3,
        };
      else if (row === 7 && (col === 2 || col === 5))
        window.boardArr[row][col] = {
          piece: "bishop",
          color: "white",
          key: window.pieceImageArr[2],
          points: 3,
        };
      else if (row === 7 && col === 3)
        window.boardArr[row][col] = {
          piece: "queen",
          color: "white",
          key: window.pieceImageArr[4],
          points: 9,
        };
      else if (row === 7 && col === 4)
        window.boardArr[row][col] = {
          piece: "king",
          color: "white",
          key: window.pieceImageArr[5],
          points: 1000,
        };
      else window.boardArr[row][col] = {};
    }
  }
  window.defaultFunctionSettings();
};

window.defaultFunctionSettings = function () {
  window.pointCountInit = { ...window.pointCountInitInit };
  window.pointCount = { ...window.pointCountInit };
  window.castleBool = {
    shortwhite: true,
    shortblack: true,
    longwhite: true,
    longblack: true,
  };
  window.moveCount = 0;
  window.prevrow = -1;
  window.prevcol = -1;
  window.showMovesArr = [];
  window.pgnArr = [];
  window.redoMoveArr = [];
  window.rightPgnArr = [];
  window.pgnStr = "";
  window.virtualBoardStr = "";
  window.labelArr = ["a", "b", "c", "d", "e", "f", "g", "h"];
  window.underCheck = { bool: false, posx: -1, posy: -1 };
  window.afterMoveInCheckBool = false;
  window.lastMoveUndoMoveBool = false;
  window.comingFromRedoMoveBool = false;
  window.isLoadingPGNPawnPromotionJSON = {};
  window.bodyImage = window.bodyImageURL[0];
  window.lastMoveJSON = {
    prevrow: -1,
    prevcol: -1,
    newrow: -1,
    newcol: -1,
    key: {},
    color: "",
    piece: "",
    checkBool: false,
    cutPiece: {},
    enPassant: false,
    castleBool: false,
    moveNumber: 1,
    promotionBool: false,
    ambiguityBoolColSame: false,
    ambiguityBool: false,
    pawnPromotedto: "",
    castleDisable: -1,
  };
  window.leftBarOpenStatus = [false, false, false];
  window.userNewMoveClick = false;
  window.previousHighlightData = {};
  window.previousRightBarMoveNum = -1;
  window.disableBoardForUser = false;
  if (!window.runningTestCases) console.clear();
};

// Make LeftBar
window.makeLeftBar = function (leftBarInstance) {
  if (!window.time) return;
  let leftBarAllInstance = leftBarInstance
    ? leftBarInstance
    : window.leftBarArrAll;
  let missingPieceElement = document.getElementById("missingPiece");
  let missingPieceStr = missingPieceElement
    ? missingPieceElement.innerHTML
    : "";
  let leftStr =
    "<div class = 'containerLeft'><div class='btn-group-vertical w-100' role='group'>" +
    "<div class='btn-group' role='group'>" +
    "<button class = 'p-3 btn btn-light btn-block-red w-100 h-100' onclick='window.undoMoveByUser()'><i class='fa-solid fa-left-long'></i> Undo Move</button>" +
    "<button class = 'p-3 btn btn-light btn-green w-100 h-100' onclick='window.redoMoveByUser()'><i class='fa-solid fa-right-long'></i> Redo Move</button></div>" +
    "<div class = 'height-break'></div>";
  leftStr += leftBarAllInstance
    .map(function (ele, index) {
      return window.makeLeftDD(ele, index, window.leftBarOpenStatus[index]);
    })
    .join("");
  leftStr +=
    "<div id = 'missingPiece' class ='missing-piece'>" +
    missingPieceStr +
    "</div></div>";
  document.getElementById("leftbar").innerHTML = leftStr;
};

window.makeLeftDD = function (ele, index1, isOpen) {
  let str =
    "<button class='p-3 btn btn-light left-bar-block h-100' onclick='window.showOptionsLeftDD(" +
    index1 +
    ",-1)' >" +
    "<i class='fas  " +
    ele.icon +
    "'></i>" +
    "&nbsp;&nbsp;" +
    ele.txt +
    (ele.txt === window.leftBarArrAll[index1].txt
      ? "<i class='align-right-fa-icon fas " +
        (isOpen ? "fa-caret-up" : "fa-caret-down") +
        "'></i>"
      : "") +
    (ele.txt !== window.leftBarArrAll[index1].txt
      ? "<i class='align-right-fa-icon fas fa-caret-up'></i>"
      : "") +
    "</button>" +
    "<div class='left-menu-container w-100' role='group' id='dd" +
    (index1 + 1) +
    "menu'>" +
    (isOpen ? window.makeLeftBarDDMenu(index1) : "") +
    "</div><div class = 'height-break'></div>";
  return str;
};

window.makeLeftBarDDMenu = function (index1) {
  return window.leftBarArr[index1]
    .map(function (ele, index2) {
      return (
        "<button class='btn dd-menu-block btn-bd-secondary w-100 h-100' style='padding-left:36px' type='button' onclick='window.showOptionsLeftDD(" +
        index1 +
        "," +
        index2 +
        ")' >" +
        "<i class='fas  " +
        ele.icon +
        "'></i>" +
        "&nbsp;&nbsp;" +
        ele.txt +
        "</button>"
      );
    })
    .join("");
};

window.closeOptionsLeftDD = function () {
  window.leftBarOpenStatus = [false, false, false];
  window.makeLeftBar();
};

window.showOptionsLeftDD = function (index1, index2) {
  if (window.virtualBoardStr !== "") {
    window.showCustomAlert("Please Select Piece To Promote");
    return;
  }
  if (index2 === -1) {
    window.leftBarOpenStatus = window.leftBarOpenStatus.map(function (
      ele,
      index3
    ) {
      return index3 === index1 ? !ele : false;
    });
    window.makeLeftBar();
  } else {
    let leftBarAllInstance = [...window.leftBarArrAll];
    leftBarAllInstance[index1] = window.leftBarArr[index1][index2];
    window.makeLeftBar(leftBarAllInstance);
    window.ddActionsNew(index1, index2);
  }
};

window.ddActionsNew = function (index1, index2) {
  let ddActionsFns = [
    [
      window.defaultBoardUI1,
      window.changeThemesUI,
      window.changeBoardColorUI,
      window.changeHighlightedColorUI,
      window.changeCheckColorUI,
      window.changePreviousColorUI,
      window.changePieceType,
      window.addBackgroundPicture,
      window.showColRow,
    ],
    [
      window.defaultBoardUI2,
      window.highlightPreviousMoveSetting,
      window.highlightSelectedPieceSetting,
      window.showLegalMoveSetting,
      window.changeValidMoveDot,
    ],
    [window.showPGN, window.importPGNUI],
  ];
  ddActionsFns[index1][index2]();
};

// Make RightBar
window.makeRightBar = function () {
  if (!window.time) return;
  const rightbar =
    document.getElementById("rightbar") || document.createElement("div");
  if (!document.getElementById("rightbar")) {
    rightbar.id = "rightbar";
    document.body.appendChild(rightbar);
  }

  let tableStr = "";
  let numMoves = window.rightPgnArr.length - 1;
  let rightPgnArrCopy = [...window.rightPgnArr];
  if (window.rightPgnArr.length === 1) rightPgnArrCopy.push(" ");

  let tableArr = rightPgnArrCopy.map((ele, index) => {
    if (index % 2 === 0) {
      return `<tr><th class='right-bar-th'>${
        Math.abs(index / 2) + 1
      }</th><td id='rightbarMove-${index}' class='right-bar-td${
        index === numMoves ? "-selected" : ""
      } right-bar-td-even' onclick='window.rightBarMoveNumber(${index})'>${ele}</td>`;
    } else {
      return `<td id='rightbarMove-${index}' class='right-bar-td${
        index === numMoves ? "-selected" : ""
      } right-bar-td-odd' onclick='window.rightBarMoveNumber(${index})'>${ele}</td></tr>`;
    }
  });

  const headStr = `
    <thead>
      <div class='btn-group rounded-1' role='group'>
        <button class='p-3 btn btn-light btn-right-block w-100 h-100' onclick='window.copyPGN()'><i class='fa-solid fa-copy'></i></button>
        <button class='p-3 btn btn-light btn-right-block w-100 h-100' onclick='window.backwardFastPGN()'><i class='fa-solid fa-backward-fast'></i></button>
        <button class='p-3 btn btn-light btn-right-block w-100 h-100' onclick='window.backwardStepPGN()'><i class='fa-solid fa-backward-step'></i></button>
        <button class='p-3 btn btn-light btn-right-block w-100 h-100' onclick='window.forwardStepPGN()'><i class='fa-solid fa-forward-step'></i></button>
        <button class='p-3 btn btn-light btn-right-block w-100 h-100' onclick='window.forwardFastPGN()'><i class='fa-solid fa-forward-fast'></i></button>
        <button class='p-3 btn btn-light btn-right-block w-100 h-100' onclick='window.flipBoard()'><i class='fa-solid fa-rotate'></i></button>
      </div>
    </thead>`;

  if (window.rightPgnArr.length !== 0) {
    tableStr = `${headStr}<div class='table-container'><table class='table-dark table-block' id='showLeftBarMoves'>${tableArr.join(
      ""
    )}</table></div>`;
  }

  const rightStr = `
    <div class='containerRight'>
      <div id='missingPieceWhite' class='missing-piece-top'></div>
      <div class='btn-group-vertical w-100' role='group'>
        <div class='btn-group' role='group'>
          <input type='text' class='btn-name-right' id='opponentName' value='Opponent' placeholder='Opponent'>
          <button class='p-3 btn btn-light btn-right w-100 h-100'>Timer</button>
        </div>
        <span class='color-line-top'></span>
        ${tableStr}
        <span class='color-line-bottom'></span>
        <div class='btn-group-vertical w-100' role='group'>
          <div class='btn-group' role='group'>
            <input type='text' class='btn-name-right' id='userName' value='You' placeholder='You'>
            <button class='p-3 btn btn-light btn-right w-100 h-100'>Timer</button>
          </div>
          <div id='missingPieceBlack' class='missing-piece-bottom'></div>
        </div>
      </div>`;

  if (window.rightPgnArr && window.rightPgnArr.length > 1) {
    const showLeftBarMoves = document.getElementById("showLeftBarMoves");
    if (showLeftBarMoves) showLeftBarMoves.innerHTML = tableArr.join("");
  } else {
    rightbar.innerHTML = rightStr;
  }

  if (window.rightPgnArr.length !== 0 && window.rightPgnArr.length !== 1) {
    const tableContainer = document.querySelector(".table-container");
    if (tableContainer) {
      tableContainer.scrollTop = tableContainer.scrollHeight;
      window.missingPiecesUpdate();
    }
  }
  window.previousRightBarMoveNum = window.rightPgnArr.length - 1;
};

window.rightBarMoveNumber = function (moveNum) {
  let element1 = document.getElementById(
    "rightbarMove-" + window.previousRightBarMoveNum
  );
  element1.classList.remove("right-bar-td-selected");
  let element2 = document.getElementById("rightbarMove-" + moveNum);
  element2.classList.add("right-bar-td-selected");
  window.disableBoardForUser = true;
  if (moveNum <= window.previousRightBarMoveNum) {
    console.log("UndoMove::", window.previousRightBarMoveNum - moveNum);
    for (let i = 0; i < window.previousRightBarMoveNum - moveNum; i++)
      window.undoMove();
  } else if (moveNum > window.previousRightBarMoveNum) {
    console.log("redoMove::", moveNum - window.previousRightBarMoveNum);
    for (let i = 0; i < moveNum - window.previousRightBarMoveNum; i++)
      window.redoMove();
  }
  window.previousRightBarMoveNum = moveNum;
  if (moveNum === window.rightPgnArr.length - 1) {
    window.disableBoardForUser = false;
    window.makeBoard();
  }
};

// Board Logic
window.boardClickByUser = function (row, col) {
  if (window.disableBoardForUser) return;
  window.userNewMoveClick = true;
  window.boardClick(row, col);
  window.userNewMoveClick = false;
};

window.boardClick = function (row, col) {
  if (!window.comingFromRedoMoveBool) window.lastMoveUndoMoveBool = false;
  if (window.prevrow === -1 || window.prevcol === -1) {
    if (
      Object.keys(window.boardArr[row][col]).length !== 0 &&
      window.moveStartConditon(row, col)
    ) {
      window.prevrow = row;
      window.prevcol = col;
      window.showValidMoves();
      window.inCheckCondition(window.boardArr[row][col].color);
      if (window.boardArr[window.prevrow][window.prevcol].piece === "king")
        window.checkCastle();
      window.highlightMoveCells();
    }
  } else if (window.prevrow === row && window.prevcol === col) {
    window.prevrow = -1;
    window.prevcol = -1;
    window.showMovesArr = [];
    window.makeBoard();
  } else {
    let obj = window.showMovesArr.find(function (ele) {
      return ele.row === row && ele.col === col;
    });
    if (obj) {
      window.lastMove(row, col);
      let localePgnGenerationStopBool = true;
      if (
        window.checkEnPassant(
          row,
          col,
          window.boardArr[window.prevrow][window.prevcol].color
        ) &&
        window.pgnArr.length !== 0
      ) {
        window.lastMoveJSON.enPassant = true;
        window.lastMoveJSON.cutPiece =
          window.boardArr[window.pgnArr[window.pgnArr.length - 1].newrow][
            window.pgnArr[window.pgnArr.length - 1].newcol
          ];
        window.boardArr[window.pgnArr[window.pgnArr.length - 1].newrow][
          window.pgnArr[window.pgnArr.length - 1].newcol
        ] = {};
        let pointColor =
          window.boardArr[window.prevrow][window.prevcol].color === "white"
            ? "black"
            : "white";
        window.pointUpdateCounter("pawn", pointColor);
      }
      if (
        ((window.boardArr[window.prevrow][window.prevcol].color === "white" &&
          row === 0) ||
          (window.boardArr[window.prevrow][window.prevcol].color === "black" &&
            row === 7)) &&
        window.boardArr[window.prevrow][window.prevcol].piece === "pawn"
      ) {
        if (Object.keys(window.isLoadingPGNPawnPromotionJSON).length === 0) {
          window.pawnPromotion(
            row,
            col,
            window.boardArr[window.prevrow][window.prevcol].color
          );
          localePgnGenerationStopBool = false;
        }
      }
      if (window.boardArr[window.prevrow][window.prevcol].piece === "king") {
        if (
          Math.abs(window.prevrow - row) === 0 &&
          Math.abs(window.prevcol - col) === 2
        ) {
          window.lastMoveJSON.castleBool = true;
          window.castleMove(
            row,
            col,
            window.boardArr[window.prevrow][window.prevcol].color
          );
        }
        window.lastMoveJSON.castleDisable = window.moveCount;
        window.castleBool[
          "short" + window.boardArr[window.prevrow][window.prevcol].color
        ] = false;
        window.castleBool[
          "long" + window.boardArr[window.prevrow][window.prevcol].color
        ] = false;
      }
      if (window.boardArr[window.prevrow][window.prevcol].piece === "rook") {
        let sideStr = window.prevcol === 0 ? "long" : "short";
        window.lastMoveJSON.castleDisable = window.moveCount;
        window.castleBool[
          sideStr + window.boardArr[window.prevrow][window.prevcol].color
        ] = false;
      }
      window.temp = window.boardArr[row][col];
      window.boardArr[row][col] =
        window.boardArr[window.prevrow][window.prevcol];
      window.boardArr[window.prevrow][window.prevcol] = {};
      if (Object.keys(window.isLoadingPGNPawnPromotionJSON).length !== 0) {
        window.boardArr[window.isLoadingPGNPawnPromotionJSON.row][
          window.isLoadingPGNPawnPromotionJSON.col
        ] = window.isLoadingPGNPawnPromotionJSON.json;
        window.lastMoveJSON.promotionBool = true;
        window.lastMoveJSON.pawnPromotedto =
          window.isLoadingPGNPawnPromotionJSON.json.piece;
        window.isLoadingPGNPawnPromotionJSON = {};
        window.missingPiecesUpdate();
      }
      window.moveCount++;
      window.prevrow = -1;
      window.prevcol = -1;
      window.showMovesArr = [];
      window.checkCheck();
      window.lastMoveJSON.checkBool = window.underCheck.bool;
      if (localePgnGenerationStopBool) {
        window.pgnArr.push(window.lastMoveJSON);
        if (window.userNewMoveClick)
          window.redoMoveArr.splice(0, window.redoMoveArr.length);
      }
      window.makePGN();
      if (!localePgnGenerationStopBool) window.pgnArr.push(window.lastMoveJSON);
      window.makeBoard();
      if (!localePgnGenerationStopBool) window.pgnArr.pop();
      if (Object.keys(window.temp).length !== 0)
        window.pointUpdateCounter(window.temp.piece, window.temp.color);
    } else if (window.moveStartConditon(row, col)) {
      window.prevrow = row;
      window.prevcol = col;
      window.showValidMoves();
      window.inCheckCondition(window.boardArr[row][col].color);
      if (window.boardArr[window.prevrow][window.prevcol].piece === "king")
        window.checkCastle();
      window.makeBoard();
    }
  }
};

window.validMoves = function (row, col) {
  let mainBool = window.checkBasicRules(
    row,
    col,
    window.boardArr[window.prevrow][window.prevcol].color
  );
  if (window.boardArr[window.prevrow][window.prevcol].piece === "pawn") {
    if (
      !window.pawnConditions(
        row,
        col,
        window.boardArr[window.prevrow][window.prevcol].color
      )
    )
      mainBool = false;
  } else if (
    window.boardArr[window.prevrow][window.prevcol].piece === "knight"
  ) {
    if (!window.knightConditions(row, col)) mainBool = false;
  } else if (
    window.boardArr[window.prevrow][window.prevcol].piece === "bishop"
  ) {
    if (!window.bishopConditions(row, col)) mainBool = false;
  } else if (window.boardArr[window.prevrow][window.prevcol].piece === "rook") {
    if (!window.rookConditions(row, col)) mainBool = false;
  } else if (
    window.boardArr[window.prevrow][window.prevcol].piece === "queen"
  ) {
    if (!window.queenConditions(row, col)) mainBool = false;
  } else if (window.boardArr[window.prevrow][window.prevcol].piece === "king") {
    if (
      !window.kingConditions(
        row,
        col,
        window.boardArr[window.prevrow][window.prevcol].color
      )
    )
      mainBool = false;
  }
  return mainBool;
};

window.checkBasicRules = function (row, col, color) {
  let bool = true;
  bool = color === window.boardArr[row][col].color ? false : bool;
  bool =
    window.jumpConditon(row, col) ||
    window.boardArr[window.prevrow][window.prevcol].piece === "knight"
      ? bool
      : false;
  bool = !window.moveStartConditon(window.prevrow, window.prevcol)
    ? false
    : bool;
  bool = window.prevrow === row && window.prevcol === col ? false : bool;
  return bool;
};

window.moveStartConditon = function (localrow, localcol) {
  let color = window.boardArr[localrow][localcol].color;
  return (
    (window.moveCount % 2 === 1 && color === "black") ||
    (window.moveCount % 2 === 0 && color === "white")
  );
};

window.jumpConditon = function (row, col) {
  let bool = true;
  let rowVar = window.prevrow < row ? window.prevrow : row;
  let colVar = window.prevcol < col ? window.prevcol : col;
  let step = 1;
  if (window.prevrow === row) {
    for (let i = 1; i < Math.abs(window.prevcol - col); i++) {
      if (Object.keys(window.boardArr[row][colVar + i]).length !== 0)
        bool = false;
    }
  } else if (window.prevcol === col) {
    for (let i = 1; i < Math.abs(window.prevrow - row); i++) {
      if (Object.keys(window.boardArr[rowVar + i][col]).length !== 0)
        bool = false;
    }
  } else if (
    Math.abs(window.prevcol - col) === Math.abs(window.prevrow - row)
  ) {
    if (window.prevrow - row + window.prevcol - col === 0) {
      colVar = window.prevcol < col ? col : window.prevcol;
      step = -1;
    }
    for (let i = 1; i < Math.abs(window.prevrow - row); i++) {
      if (
        Object.keys(window.boardArr[rowVar + i][colVar + i * step]).length !== 0
      )
        bool = false;
    }
  }
  if (
    Math.abs(window.prevrow - row) <= 1 &&
    Math.abs(window.prevcol - col) <= 1
  )
    bool = true;
  return bool;
};

window.inCheckCondition = function (color) {
  let rowState = -1;
  let colState = -1;
  let kUseArr = [];
  let testArr = window.showMovesArr;
  window.moveCount--;
  let isEnpassant = false;
  let enPassantPiece = {};
  for (let k = 0; k < window.showMovesArr.length; k++) {
    isEnpassant = window.checkEnPassant(
      window.showMovesArr[k].row,
      window.showMovesArr[k].col,
      window.boardArr[window.prevrow][window.prevcol].color
    );
    if (isEnpassant) {
      enPassantPiece =
        window.boardArr[window.pgnArr[window.pgnArr.length - 1].newrow][
          window.pgnArr[window.pgnArr.length - 1].newcol
        ];
      window.boardArr[window.pgnArr[window.pgnArr.length - 1].newrow][
        window.pgnArr[window.pgnArr.length - 1].newcol
      ] = {};
    }
    let pieceAtMovedSpot =
      window.boardArr[window.showMovesArr[k].row][window.showMovesArr[k].col];
    window.boardArr[window.showMovesArr[k].row][window.showMovesArr[k].col] =
      window.boardArr[window.prevrow][window.prevcol];
    window.boardArr[window.prevrow][window.prevcol] = {};
    for (let i = 0; i <= 7; i++) {
      for (let j = 0; j <= 7; j++) {
        if (
          window.boardArr[i][j] &&
          window.boardArr[i][j].color === color &&
          window.boardArr[i][j].piece === "king"
        ) {
          rowState = i;
          colState = j;
        }
      }
    }
    let prevrowState = window.prevrow;
    let prevcolState = window.prevcol;
    for (let i = 0; i <= 7; i++) {
      for (let j = 0; j <= 7; j++) {
        if (
          Object.keys(window.boardArr[i][j]).length !== 0 &&
          window.boardArr[i][j].color !== color
        ) {
          window.prevrow = i;
          window.prevcol = j;
          if (window.validMoves(rowState, colState, false)) {
            kUseArr.push(window.showMovesArr[k]);
          }
        }
      }
    }
    window.prevrow = prevrowState;
    window.prevcol = prevcolState;
    if (isEnpassant) {
      window.boardArr[window.pgnArr[window.pgnArr.length - 1].newrow][
        window.pgnArr[window.pgnArr.length - 1].newcol
      ] = enPassantPiece;
      isEnpassant = false;
    }
    window.boardArr[window.prevrow][window.prevcol] =
      window.boardArr[window.showMovesArr[k].row][window.showMovesArr[k].col];
    window.boardArr[window.showMovesArr[k].row][window.showMovesArr[k].col] =
      pieceAtMovedSpot;
  }
  for (let i = 0; i < kUseArr.length; i++) {
    let elem = kUseArr[i];
    testArr = testArr.filter(function (ele) {
      return !(ele.row === elem.row && ele.col === elem.col);
    });
  }
  window.showMovesArr = testArr;
  window.moveCount++;
};

window.showValidMoves = function () {
  window.showMovesArr = [];
  for (let i = 0; i <= 7; i++) {
    for (let j = 0; j <= 7; j++) {
      if (window.validMoves(i, j)) {
        window.showMovesArr.push({ row: i, col: j });
      }
    }
  }
};

window.checkCheck = function () {
  let localeColor = window.moveCount % 2 === 0 ? "black" : "white";
  window.moveCount--;
  let prevRowState = window.prevrow;
  let prevColState = window.prevcol;
  for (let i = 0; i <= 7; i++) {
    for (let j = 0; j <= 7; j++) {
      if (
        window.boardArr[i][j].color === localeColor &&
        Object.keys(window.boardArr[i][j]).length !== 0
      ) {
        window.prevrow = i;
        window.prevcol = j;
        window.showValidMoves();
        for (let k = 0; k < window.showMovesArr.length; k++) {
          if (
            window.boardArr[window.showMovesArr[k].row][
              window.showMovesArr[k].col
            ].piece === "king" &&
            window.boardArr[window.showMovesArr[k].row][
              window.showMovesArr[k].col
            ].color !== localeColor
          ) {
            window.underCheck = {
              bool: true,
              posx: window.showMovesArr[k].row,
              posy: window.showMovesArr[k].col,
            };
            window.prevrow = prevRowState;
            window.prevcol = prevColState;
            window.showMovesArr = [];
            window.moveCount++;
            return "Hello World";
          }
        }
      }
    }
  }
  window.prevrow = prevRowState;
  window.prevcol = prevColState;
  window.showMovesArr = [];
  window.underCheck = { bool: false, posx: -1, posy: -1 };
  window.moveCount++;
  return "Hello World";
};

// Piece Logic
window.pawnConditions = function (row, col, color) {
  let bool = false;
  let num = color === "black" ? 1 : -1;
  if (
    window.prevcol === col &&
    window.prevrow + num >= 0 &&
    window.prevrow + num <= 7 &&
    Object.keys(window.boardArr[window.prevrow + num][col]).length === 0
  ) {
    if (
      window.prevrow === 1 &&
      row === 3 &&
      num === 1 &&
      Object.keys(window.boardArr[3][col]).length === 0
    ) {
      bool = true;
    } else if (
      window.prevrow === 6 &&
      row === 4 &&
      num === -1 &&
      Object.keys(window.boardArr[4][col]).length === 0
    ) {
      bool = true;
    } else if (window.prevrow + num === row) {
      bool = true;
    }
  } else if (Math.abs(window.prevcol - col) === 1) {
    if (
      window.prevrow + num === row &&
      Object.keys(window.boardArr[row][col]).length !== 0
    ) {
      bool = true;
    } else bool = window.checkEnPassant(row, col, color);
  }
  return bool;
};

window.checkEnPassant = function (row, col, color) {
  let num = color === "black" ? 1 : -1;
  let json =
    window.pgnArr.length !== 0 ? window.pgnArr[window.pgnArr.length - 1] : null;
  if (
    window.boardArr[window.prevrow][window.prevcol].piece === "pawn" &&
    json &&
    json.piece === "pawn" &&
    json.color !== color &&
    Math.abs(json.prevrow - json.newrow) === 2 &&
    json.newrow === window.prevrow &&
    Math.abs(json.newcol - window.prevcol) === 1 &&
    json.newcol === col &&
    json.newrow + num === row
  ) {
    return true;
  } else return false;
};

window.pawnPromotion = function (row, col, color) {
  window.virtualBoardArr = window.boardArrLine.map(function (ele) {
    return [...window.boardArrLine];
  });
  let num = color === "black" ? 6 : 0;
  let number = color === "black" ? -1 : 1;
  window.virtualBoardArr[row][col] = {
    piece: "queen",
    color: color,
    key: window.pieceImageArr[num + 4],
    points: 9 * number,
  };
  window.virtualBoardArr[row + number][col] = {
    piece: "rook",
    color: color,
    key: window.pieceImageArr[num + 3],
    points: 5 * number,
  };
  window.virtualBoardArr[row + number * 2][col] = {
    piece: "bishop",
    color: color,
    key: window.pieceImageArr[num + 2],
    points: 3 * number,
  };
  window.virtualBoardArr[row + number * 3][col] = {
    piece: "knight",
    color: color,
    key: window.pieceImageArr[num + 1],
    points: 3 * number,
  };
  let virtualStr = "";
  virtualStr +=
    "<div id='virtualBoard' class='virtual-board'><div class='container'><div class='row row-cols-1 justify-content-center'>";
  for (let i = 0; i <= 3; i++) {
    let virtualPieceStr =
      "<img src='" +
      window.virtualBoardArr[row + number * i][col].key +
      "' onclick='window.virtualBoardClick(" +
      (row + number * i) +
      "," +
      col +
      ")' class='draggable-element'>";
    virtualStr +=
      "<div class='col'><div class='cellBox cellBorder'>" +
      virtualPieceStr +
      "</div></div>";
  }
  virtualStr += "</div></div></div>";
  window.virtualBoardStr = virtualStr;
};

window.knightConditions = function (row, col) {
  let bool = false;
  if (
    (Math.abs(window.prevrow - row) === 2 &&
      Math.abs(window.prevcol - col) === 1) ||
    (Math.abs(window.prevrow - row) === 1 &&
      Math.abs(window.prevcol - col) === 2)
  )
    bool = true;
  return bool;
};

window.bishopConditions = function (row, col) {
  let bool = false;
  if (Math.abs(window.prevrow - row) === Math.abs(window.prevcol - col))
    bool = true;
  return bool;
};

window.rookConditions = function (row, col) {
  let bool = false;
  if (window.prevrow === row || window.prevcol === col) bool = true;
  return bool;
};

window.queenConditions = function (row, col) {
  let bool = false;
  if (
    window.prevrow === row ||
    window.prevcol === col ||
    Math.abs(window.prevrow - row) === Math.abs(window.prevcol - col)
  )
    bool = true;
  return bool;
};

window.kingConditions = function (row, col, color) {
  let bool = false;
  if (
    Math.abs(window.prevrow - row) <= 1 &&
    Math.abs(window.prevcol - col) <= 1
  )
    bool = true;
  else if (
    window.castleBool["short" + color] &&
    window.prevrow === row &&
    window.prevcol + 2 === col &&
    Object.keys(window.boardArr[row][col - 1]).length === 0 &&
    Object.keys(window.boardArr[row][col]).length === 0
  )
    bool = true;
  else if (
    window.castleBool["long" + color] &&
    window.prevrow === row &&
    window.prevcol - 2 === col &&
    Object.keys(window.boardArr[row][col + 2]).length === 0 &&
    Object.keys(window.boardArr[row][col + 1]).length === 0 &&
    Object.keys(window.boardArr[row][col]).length === 0
  )
    bool = true;
  return bool;
};

window.checkCastle = function () {
  let color = window.boardArr[window.prevrow][window.prevcol].color;
  let row = color === "white" ? 7 : 0;
  let shortCastle = { row: row, col: 6 };
  let longCastle = { row: row, col: 2 };
  if (
    window.validMoves(shortCastle.row, shortCastle.col) &&
    window.castleBool["short" + color]
  )
    window.showMovesArr.push(shortCastle);
  if (
    window.validMoves(longCastle.row, longCastle.col) &&
    window.castleBool["long" + color]
  )
    window.showMovesArr.push(longCastle);
};

window.castleMove = function (row, col, color) {
  let num = color === "white" ? 7 : 0;
  if (col === 6) {
    window.boardArr[num][5] = window.boardArr[num][7];
    window.boardArr[num][7] = {};
  } else if (col === 2) {
    window.boardArr[num][3] = window.boardArr[num][0];
    window.boardArr[num][0] = {};
  }
};

window.lastMove = function (row, col) {
  window.lastMoveJSON = {
    prevrow: window.prevrow,
    prevcol: window.prevcol,
    newrow: row,
    newcol: col,
    key: window.boardArr[window.prevrow][window.prevcol].key,
    color: window.boardArr[window.prevrow][window.prevcol].color,
    piece: window.boardArr[window.prevrow][window.prevcol].piece,
    checkBool: false,
    cutPiece: window.boardArr[row][col],
    enPassant: false,
    castleBool: false,
    moveNumber: Math.floor(window.moveCount / 2) + 1,
    promotionBool: false,
    ambiguityBoolColSame: false,
    ambiguityBool: false,
    pawnPromotedto: "",
    castleDisable: -1,
  };
};

window.virtualBoardClick = function (row, col) {
  window.virtualBoardStr = "";
  window.isLoadingPGNPawnPromotionJSON = {
    row: window.lastMoveJSON.newrow,
    col: window.lastMoveJSON.newcol,
    json: window.virtualBoardArr[row][col],
  };
  window.makeBoard();
  window.boardClick(window.lastMoveJSON.newrow, window.lastMoveJSON.newcol);
};

window.undoMoveByUser = function () {
  if (window.virtualBoardStr !== "") {
    window.showCustomAlert("Please Select Piece To Promote");
    return;
  }
  window.undoMove();
  window.makeBoard();
  window.makeRightBar();
};

window.undoMove = function () {
  if (window.pgnArr.length === 0) return;
  window.lastMoveUndoMoveBool = true;
  let json = window.pgnArr[window.pgnArr.length - 1];
  window.redoMoveArr.push(json);
  window.pgnArr.pop();
  window.moveCount--;
  window.boardArr[json.prevrow][json.prevcol] = {
    piece: json.piece,
    color: json.color,
    key: json.key,
    points:
      json.color === "white" ? Math.abs(json.points) : -Math.abs(json.points),
  };
  if (Object.keys(json.cutPiece).length !== 0) {
    window.boardArr[json.newrow][json.newcol] = json.cutPiece;
    window.pointUpdateCounter(json.cutPiece.piece, json.cutPiece.color, true);
  } else window.boardArr[json.newrow][json.newcol] = {};
  if (json.enPassant) {
    window.boardArr[window.pgnArr[window.pgnArr.length - 1].newrow][
      window.pgnArr[window.pgnArr.length - 1].newcol
    ] = json.cutPiece;
    window.pointUpdateCounter(json.cutPiece.piece, json.cutPiece.color, true);
  }
  if (json.castleBool) {
    let num = json.color === "white" ? 7 : 0;
    if (json.newcol === 6) {
      window.boardArr[num][7] = window.boardArr[num][5];
      window.boardArr[num][5] = {};
    } else if (json.newcol === 2) {
      window.boardArr[num][0] = window.boardArr[num][3];
      window.boardArr[num][3] = {};
    }
  }
  if (json.promotionBool) {
    window.boardArr[json.prevrow][json.prevcol] = {
      piece: "pawn",
      color: json.color,
      key:
        json.color === "white"
          ? window.pieceImageArr[0]
          : window.pieceImageArr[6],
      points: json.color === "white" ? 1 : -1,
    };
    window.pointUpdateCounter(json.pawnPromotedto, json.color, true);
  }
  if (json.castleDisable !== -1) {
    window.castleBool["short" + json.color] = true;
    window.castleBool["long" + json.color] = true;
  }
  window.makePGN();
  window.checkCheck();
  window.missingPiecesUpdate();
};

window.redoMoveByUser = function () {
  if (window.virtualBoardStr !== "") {
    window.showCustomAlert("Please Select Piece To Promote");
    return;
  }
  window.redoMove();
  window.makeBoard();
  window.makeRightBar();
};

window.redoMove = function () {
  if (window.redoMoveArr.length === 0) return;
  window.comingFromRedoMoveBool = true;
  let json = window.redoMoveArr[window.redoMoveArr.length - 1];
  window.boardClick(json.prevrow, json.prevcol);
  window.boardClick(json.newrow, json.newcol);
  window.comingFromRedoMoveBool = false;
  window.redoMoveArr.pop();
};

window.makePGN = function () {
  window.rightPgnArr = [];
  let str = "";
  window.pgnArr.map(function (ele, index) {
    let localeStr = "";
    if (ele.piece === "pawn") {
      if (Object.keys(ele.cutPiece).length !== 0 || ele.enPassant) {
        localeStr +=
          window.labelArr[ele.prevcol] +
          "x" +
          window.labelArr[ele.newcol] +
          (8 - ele.newrow);
      } else localeStr += window.labelArr[ele.newcol] + (8 - ele.newrow);
      if (ele.promotionBool)
        localeStr += "=" + ele.pawnPromotedto[0].toUpperCase();
    } else {
      localeStr += ele.piece[0].toUpperCase();
      let ambiguityArr = window.pgnArr.filter(function (ele1, index1) {
        return (
          index1 < index &&
          ele1.color === ele.color &&
          ele1.piece === ele.piece &&
          ele1.newrow === ele.newrow &&
          ele1.newcol === ele.newcol
        );
      });
      let ambiguityColSameArr = window.pgnArr.filter(function (ele1, index1) {
        return (
          index1 < index &&
          ele1.color === ele.color &&
          ele1.piece === ele.piece &&
          ele1.newcol === ele.newcol &&
          ele1.prevcol !== ele.prevcol
        );
      });
      if (ambiguityArr.length !== 0) {
        ele.ambiguityBool = true;
        if (ambiguityColSameArr.length !== 0) {
          ele.ambiguityBoolColSame = true;
          localeStr += window.labelArr[ele.prevcol];
        } else localeStr += 8 - ele.prevrow;
      }
      if (Object.keys(ele.cutPiece).length !== 0)
        localeStr += "x" + window.labelArr[ele.newcol] + (8 - ele.newrow);
      else localeStr += window.labelArr[ele.newcol] + (8 - ele.newrow);
    }
    if (ele.castleBool) {
      if (ele.newcol === 6) localeStr = "O-O";
      else localeStr = "O-O-O";
    }
    if (ele.checkBool) localeStr += "+";
    window.rightPgnArr.push(localeStr);
    if (ele.color === "white") str += ele.moveNumber + ". " + localeStr + " ";
    else str += localeStr + " ";
  });
  window.pgnStr = str;
};

window.pointUpdateCounter = function (piece, color, undoBool = false) {
  let str = piece + color;
  if (undoBool) window.pointCount[str]++;
  else window.pointCount[str]--;
  window.missingPiecesUpdate();
};

window.missingPiecesUpdate = function () {
  let whiteStr = "";
  let blackStr = "";
  for (let i = 0; i <= 5; i++) {
    let numWhite =
      window.pointCountInitInit[window.pieceImageArr[i].split("+")[0]] -
      window.pointCount[window.pieceImageArr[i].split("+")[0]];
    let numBlack =
      window.pointCountInitInit[window.pieceImageArr[i + 6].split("+")[0]] -
      window.pointCount[window.pieceImageArr[i + 6].split("+")[0]];
    for (let j = 0; j < numWhite; j++)
      whiteStr +=
        "<img src='" +
        window.imagePath +
        window.pieceImageArr[i] +
        "' draggable=false class='missing-piece-img'>";
    for (let j = 0; j < numBlack; j++)
      blackStr +=
        "<img src='" +
        window.imagePath +
        window.pieceImageArr[i + 6] +
        "' draggable=false class='missing-piece-img'>";
  }
  if (document.getElementById("missingPieceWhite"))
    document.getElementById("missingPieceWhite").innerHTML = whiteStr;
  if (document.getElementById("missingPieceBlack"))
    document.getElementById("missingPieceBlack").innerHTML = blackStr;
};

// LeftBar dd1
window.defaultBoardUI1 = function () {
  window.makeDefaultUISettings1();
  window.makeBoard();
  let menuStr =
    "<div class='btn-group-vertical w-100' role='group'><div class='input-group input-group-pkr w-100'><div class='input-group-text menu-block menu-block-width-default'>Color 1:</div><input type='color' class='form-control form-control-color-pkr' id='colorPicker1' value='" +
    window.clr1 +
    "' disabled></input></div><div class='input-group input-group-pkr w-100'><div class='input-group-text menu-block  menu-block-width-default'>Color 2:</div><input type='color' class='form-control form-control-color-pkr' id='colorPicker2' value='" +
    window.clr2 +
    "' disabled></input></div></div><div class='btn-group-vertical w-100' role='group'><div class='input-group input-group-pkr w-100'><div class='input-group-text menu-block  menu-block-check-width-default'>Check Color 1:</div><input type='color' class='form-control form-control-color-pkr' id='colorPicker5' value='" +
    window.clr1c +
    "' disabled ></input></div><div class='input-group input-group-pkr w-100'><div class='input-group-text menu-block  menu-block-check-width-default'>Check Color 2:</div><input type='color' class='form-control form-control-color-pkr' id='colorPicker6' value='" +
    window.clr2c +
    "' disabled></input></div></div><div class='btn-group-vertical w-100' role='group'><div class='input-group input-group-pkr w-100'><div class='input-group-text menu-block  menu-block-previous-width-default'>Previous Color 1:</div><input type='color' class='form-control form-control-color-pkr' id='colorPicker7' value='" +
    window.clr1p +
    "' disabled></input></div><div class='input-group input-group-pkr w-100'><div class='input-group-text menu-block  menu-block-previous-width-default'>Previous Color 2:</div><input type='color' class='form-control form-control-color-pkr' id='colorPicker8' value='" +
    window.clr2p +
    "' disabled></input></div></div><div class='btn-group-vertical w-100' role='group'><div class='input-group input-group-pkr w-100'><div class='input-group-text menu-block  menu-block-highlight-width-default'>Highlighted Color 1:</div><input type='color' class='form-control form-control-color-pkr' id='colorPicker3' value='" +
    window.clr1x +
    "' disabled></input></div><div class='input-group input-group-pkr w-100'><div class='input-group-text menu-block  menu-block-highlight-width-default'>Highlighted Color 2:</div><input type='color' class='form-control form-control-color-pkr' id='colorPicker4' value='" +
    window.clr2x +
    "' disabled></input></div><div class='btn-group-vertical w-100' role='group'><div class='input-group input-group-pkr w-100'><div class='form-check form-switch menu-block w-100'><label class='form-check-label' for='colRowSwitch'> Column & Row :</label><input class='form-check-input' type='checkbox' role='switch' id='colRowSwitch' checked disabled></div></div></div></div>";
  document.getElementById("dd1menu").innerHTML = menuStr;
};
window.changeThemesUI = function () {
  let radioStr = window.themeLogoPaths
    .map(function (ele, index) {
      return (
        "<input type='radio' class='btn-check' name='theme1' id='rt" +
        index +
        "' autocomplete='off' " +
        (window.imagePath === window.baseImagePath + ele ? "checked" : "") +
        "><label class='btn btn-outline-light' for='rt" +
        index +
        "'><button type='button' class='p-3 btn btn-light btn-theme-block' onclick='window.themeLogoChange(\"rt" +
        index +
        "\",true)'><i class='bi bi-sliders2 scale-sliders-icon'></i></button><img src = '" +
        window.baseThemePath +
        ele +
        "' width = '100' draggable=false class = 'theme-img-piece'></label></input><div class='height-break'></div>"
      );
    })
    .join("");
  let menuStr =
    "<div class='btn-group-horizontal radio-piece-class justify-content-center' role='group'>" +
    radioStr +
    "</div>";
  document.getElementById("dd1menu").innerHTML = menuStr;
  const radioButtons = document.querySelectorAll('input[name="theme1"]');
  radioButtons.forEach((button) => {
    button.addEventListener("change", function () {
      window.themeLogoChange(button.id, false);
    });
  });
};

window.themeLogoChange = function (id, localeThemeLoadBool) {
  if (window.virtualBoardStr !== "") {
    window.showCustomAlert("Please Select Piece To Promote");
    return;
  }
  window.setBackgroundImage("");
  let localeJson = window.themesValueArr.find(function (ele) {
    return ele.id === id;
  });
  window.clr1 = localeJson.clr1;
  window.clr2 = localeJson.clr2;
  window.clr1x = localeJson.clr1x;
  window.clr2x = localeJson.clr2x;
  window.clr1c = localeJson.clr1c;
  window.clr2c = localeJson.clr2c;
  window.clr1p = localeJson.clr1p;
  window.clr2p = localeJson.clr2p;
  window.colRowBoolInitial = true;
  window.colRowBool = window.colRowBoolInitial;
  if (localeJson.name === "pastel") {
    window.imagePath = window.baseImagePath + window.pieceImagePaths[2];
  } else window.imagePath = window.baseImagePath + window.pieceImagePaths[0];
  if (localeThemeLoadBool) {
    let menuStr =
      "<div class='btn-group-vertical w-100' role='group'><div class='input-group input-group-pkr w-100'><div class='input-group-text menu-block menu-block-width-default'>Color 1:</div><input type='color' class='form-control form-control-color-pkr' id='colorPicker1' value='" +
      localeJson.clr1 +
      "'></input></div><div class='input-group input-group-pkr w-100'><div class='input-group-text menu-block  menu-block-width-default'>Color 2:</div><input type='color' class='form-control form-control-color-pkr' id='colorPicker2' value='" +
      localeJson.clr2 +
      "'></input></div></div><div class='btn-group-vertical w-100' role='group'><div class='input-group input-group-pkr w-100'><div class='input-group-text menu-block  menu-block-check-width-default'>Check Color 1:</div><input type='color' class='form-control form-control-color-pkr' id='colorPicker5' value='" +
      localeJson.clr1c +
      "'></input></div><div class='input-group input-group-pkr w-100'><div class='input-group-text menu-block  menu-block-check-width-default'>Check Color 2:</div><input type='color' class='form-control form-control-color-pkr' id='colorPicker6' value='" +
      localeJson.clr2c +
      "'></input></div></div><div class='btn-group-vertical w-100' role='group'><div class='input-group input-group-pkr w-100'><div class='input-group-text menu-block  menu-block-previous-width-default'>Previous Color 1:</div><input type='color' class='form-control form-control-color-pkr' id='colorPicker7' value='" +
      localeJson.clr1p +
      "'></input></div><div class='input-group input-group-pkr w-100'><div class='input-group-text menu-block  menu-block-previous-width-default'>Previous Color 2:</div><input type='color' class='form-control form-control-color-pkr' id='colorPicker8' value='" +
      localeJson.clr2p +
      "'></input></div></div><div class='btn-group-vertical w-100' role='group'><div class='input-group input-group-pkr w-100'><div class='input-group-text menu-block  menu-block-highlight-width-default'>Highlighted Color 1:</div><input type='color' class='form-control form-control-color-pkr' id='colorPicker3' value='" +
      localeJson.clr1x +
      "')></input></div><div class='input-group input-group-pkr w-100'><div class='input-group-text menu-block  menu-block-highlight-width-default'>Highlighted Color 2:</div><input type='color' class='form-control form-control-color-pkr' id='colorPicker4' value='" +
      localeJson.clr2x +
      "'></input></div><div class='btn-group-vertical w-100' role='group'><div class='input-group input-group-pkr w-100'><div class='form-check form-switch menu-block w-100'><label class='form-check-label' for='colRowSwitch'> Column & Row :</label><input class='form-check-input' type='checkbox' role='switch' id='colRowSwitch' checked></div></div></div></div>";
    document.getElementById("dd1menu").innerHTML = menuStr;
    const colorPicker1 = document.getElementById("colorPicker1");
    const colorPicker2 = document.getElementById("colorPicker2");
    const colorPicker3 = document.getElementById("colorPicker3");
    const colorPicker4 = document.getElementById("colorPicker4");
    const colorPicker5 = document.getElementById("colorPicker5");
    const colorPicker6 = document.getElementById("colorPicker6");
    const colorPicker7 = document.getElementById("colorPicker7");
    const colorPicker8 = document.getElementById("colorPicker8");
    colorPicker1.addEventListener("input", () => window.colorChanged(1));
    colorPicker2.addEventListener("input", () => window.colorChanged(2));
    colorPicker3.addEventListener("input", () => window.colorChanged(3));
    colorPicker4.addEventListener("input", () => window.colorChanged(4));
    colorPicker5.addEventListener("input", () => window.colorChanged(5));
    colorPicker6.addEventListener("input", () => window.colorChanged(6));
    colorPicker7.addEventListener("input", () => window.colorChanged(7));
    colorPicker8.addEventListener("input", () => window.colorChanged(8));
    colorPicker1.addEventListener("focus", window.updateBoxShadow);
    colorPicker1.addEventListener("blur", window.resetBoxShadow);
    colorPicker1.addEventListener("input", window.updateBoxShadow);
    colorPicker2.addEventListener("focus", window.updateBoxShadow);
    colorPicker2.addEventListener("blur", window.resetBoxShadow);
    colorPicker2.addEventListener("input", window.updateBoxShadow);
    colorPicker3.addEventListener("focus", window.updateBoxShadow);
    colorPicker3.addEventListener("blur", window.resetBoxShadow);
    colorPicker3.addEventListener("input", window.updateBoxShadow);
    colorPicker4.addEventListener("focus", window.updateBoxShadow);
    colorPicker4.addEventListener("blur", window.resetBoxShadow);
    colorPicker4.addEventListener("input", window.updateBoxShadow);
    colorPicker5.addEventListener("focus", window.updateBoxShadow);
    colorPicker5.addEventListener("blur", window.resetBoxShadow);
    colorPicker5.addEventListener("input", window.updateBoxShadow);
    colorPicker6.addEventListener("focus", window.updateBoxShadow);
    colorPicker6.addEventListener("blur", window.resetBoxShadow);
    colorPicker6.addEventListener("input", window.updateBoxShadow);
    colorPicker7.addEventListener("focus", window.updateBoxShadow);
    colorPicker7.addEventListener("blur", window.resetBoxShadow);
    colorPicker7.addEventListener("input", window.updateBoxShadow);
    colorPicker8.addEventListener("focus", window.updateBoxShadow);
    colorPicker8.addEventListener("blur", window.resetBoxShadow);
    colorPicker8.addEventListener("input", window.updateBoxShadow);
    const colRowInput = document.getElementById("colRowSwitch");
    colRowInput.addEventListener("change", function () {
      if (this.checked) {
        window.colRowBool = true;
      } else {
        window.colRowBool = false;
      }
      window.makeBoard();
    });
  }
  window.makeBoard();
  window.makeRightBar();
};

window.changeBoardColorUI = function () {
  let menuStr =
    "<div class='btn-group-vertical w-100' role='group'><div class='input-group input-group-pkr w-100'><div class='input-group-text menu-block menu-block-width'>Pick Color 1:</div><input type='color' class='form-control form-control-color-pkr' id='colorPicker1' value='" +
    window.clr1 +
    "'></input></div><div class='input-group input-group-pkr w-100'><div class='input-group-text menu-block  menu-block-width'>Pick Color 2:</div><input type='color' class='form-control form-control-color-pkr' id='colorPicker2' value='" +
    window.clr2 +
    "'></input></div></div>";
  document.getElementById("dd1menu").innerHTML = menuStr;
  const colorPicker1 = document.getElementById("colorPicker1");
  const colorPicker2 = document.getElementById("colorPicker2");
  colorPicker1.addEventListener("input", () => window.colorChanged(1));
  colorPicker2.addEventListener("input", () => window.colorChanged(2));
  colorPicker1.addEventListener("focus", window.updateBoxShadow);
  colorPicker1.addEventListener("blur", window.resetBoxShadow);
  colorPicker1.addEventListener("input", window.updateBoxShadow);
  colorPicker2.addEventListener("focus", window.updateBoxShadow);
  colorPicker2.addEventListener("blur", window.resetBoxShadow);
  colorPicker2.addEventListener("input", window.updateBoxShadow);
};

window.changeHighlightedColorUI = function () {
  let menuStr =
    "<div class='btn-group-vertical w-100' role='group'><div class='input-group input-group-pkr w-100'><div class='input-group-text menu-block  menu-block-highlight-width'>Pick Highlighted Color 1:</div><input type='color' class='form-control form-control-color-pkr' id='colorPicker3' value='" +
    window.clr1x +
    "'></input></div><div class='input-group input-group-pkr w-100'><div class='input-group-text menu-block  menu-block-highlight-width'>Pick Highlighted Color 2:</div><input type='color' class='form-control form-control-color-pkr' id='colorPicker4' value='" +
    window.clr2x +
    "'></input></div></div>";
  document.getElementById("dd1menu").innerHTML = menuStr;
  const colorPicker3 = document.getElementById("colorPicker3");
  const colorPicker4 = document.getElementById("colorPicker4");
  colorPicker3.addEventListener("input", () => window.colorChanged(3));
  colorPicker4.addEventListener("input", () => window.colorChanged(4));
  colorPicker3.addEventListener("focus", window.updateBoxShadow);
  colorPicker3.addEventListener("blur", window.resetBoxShadow);
  colorPicker3.addEventListener("input", window.updateBoxShadow);
  colorPicker4.addEventListener("focus", window.updateBoxShadow);
  colorPicker4.addEventListener("blur", window.resetBoxShadow);
  colorPicker4.addEventListener("input", window.updateBoxShadow);
};

window.changeCheckColorUI = function () {
  let menuStr =
    "<div class='btn-group-vertical w-100' role='group'><div class='input-group input-group-pkr w-100'><div class='input-group-text menu-block  menu-block-check-width'>Pick Check Color 1:</div><input type='color' class='form-control form-control-color-pkr' id='colorPicker5' value='" +
    window.clr1c +
    "'></input></div><div class='input-group input-group-pkr w-100'><div class='input-group-text menu-block  menu-block-check-width'>Pick Check Color 2:</div><input type='color' class='form-control form-control-color-pkr' id='colorPicker6' value='" +
    window.clr2c +
    "'></input></div></div>";
  document.getElementById("dd1menu").innerHTML = menuStr;
  const colorPicker5 = document.getElementById("colorPicker5");
  const colorPicker6 = document.getElementById("colorPicker6");
  colorPicker5.addEventListener("input", () => window.colorChanged(5));
  colorPicker6.addEventListener("input", () => window.colorChanged(6));
  colorPicker5.addEventListener("focus", window.updateBoxShadow);
  colorPicker5.addEventListener("blur", window.resetBoxShadow);
  colorPicker5.addEventListener("input", window.updateBoxShadow);
  colorPicker6.addEventListener("focus", window.updateBoxShadow);
  colorPicker6.addEventListener("blur", window.resetBoxShadow);
  colorPicker6.addEventListener("input", window.updateBoxShadow);
};

window.changePreviousColorUI = function () {
  let menuStr =
    "<div class='btn-group-vertical w-100' role='group'><div class='input-group input-group-pkr w-100'><div class='input-group-text menu-block  menu-block-previous-width'>Pick Previous Color 1:</div><input type='color' class='form-control form-control-color-pkr' id='colorPicker7' value='" +
    window.clr1p +
    "'></input></div><div class='input-group input-group-pkr w-100'><div class='input-group-text menu-block  menu-block-previous-width'>Pick Previous Color 2:</div><input type='color' class='form-control form-control-color-pkr' id='colorPicker8' value='" +
    window.clr2p +
    "'></input></div></div>";
  document.getElementById("dd1menu").innerHTML = menuStr;
  const colorPicker7 = document.getElementById("colorPicker7");
  const colorPicker8 = document.getElementById("colorPicker8");
  colorPicker7.addEventListener("input", () => window.colorChanged(7));
  colorPicker8.addEventListener("input", () => window.colorChanged(8));
  colorPicker7.addEventListener("focus", window.updateBoxShadow);
  colorPicker7.addEventListener("blur", window.resetBoxShadow);
  colorPicker7.addEventListener("input", window.updateBoxShadow);
  colorPicker8.addEventListener("focus", window.updateBoxShadow);
  colorPicker8.addEventListener("blur", window.resetBoxShadow);
  colorPicker8.addEventListener("input", window.updateBoxShadow);
};

window.colorChanged = function (index) {
  if (index === 1) {
    window.clr1 = document.getElementById("colorPicker1").value;
    window.clr1x = window.blendColors(window.clr1, window.clr2, 0.3);
    window.clr2x = window.blendColors(window.clr2, window.clr1, 0.3);
    window.clr1c = window.blendColors(window.clr1, window.clrRed, 0.6);
    window.clr2c = window.blendColors(window.clr2, window.clrRed, 0.6);
    window.clr1p = window.blendColors(window.clr1, window.clrYellow, 0.5);
    window.clr2p = window.blendColors(window.clr2, window.clrYellow, 0.5);
  } else if (index === 2) {
    window.clr2 = document.getElementById("colorPicker2").value;
    window.clr1x = window.blendColors(window.clr1, window.clr2, 0.3);
    window.clr2x = window.blendColors(window.clr2, window.clr1, 0.3);
    window.clr1c = window.blendColors(window.clr1, window.clrRed, 0.6);
    window.clr2c = window.blendColors(window.clr2, window.clrRed, 0.6);
    window.clr1p = window.blendColors(window.clr1, window.clrYellow, 0.5);
    window.clr2p = window.blendColors(window.clr2, window.clrYellow, 0.5);
  } else if (index === 3) {
    window.clr1x = document.getElementById("colorPicker3").value;
  } else if (index === 4) {
    window.clr2x = document.getElementById("colorPicker4").value;
  } else if (index === 5) {
    window.clr1c = document.getElementById("colorPicker5").value;
  } else if (index === 6) {
    window.clr2c = document.getElementById("colorPicker6").value;
  } else if (index === 7) {
    window.clr1p = document.getElementById("colorPicker7").value;
  } else if (index === 8) {
    window.clr2p = document.getElementById("colorPicker8").value;
  }
  window.makeBoard();
};

window.changePieceType = function () {
  let radioStr = window.pieceImagePaths
    .map(function (ele, index) {
      return (
        "<input type='radio' class='btn-check' name='radio1' id='r" +
        index +
        "' autocomplete='off' " +
        (window.imagePath === window.baseImagePath + ele ? "checked" : "") +
        "><label class='btn btn-outline-light' for='r" +
        index +
        "'><img src = '" +
        window.baseImagePath +
        ele +
        window.pieceImageArr[0] +
        "' draggable=false class = 'radio-img-piece'></label></input><div class='height-break'></div>"
      );
    })
    .join("");
  let menuStr =
    "<div class='btn-group-horizontal radio-piece-class justify-content-center' role='group'>" +
    radioStr +
    "</div>";
  document.getElementById("dd1menu").innerHTML = menuStr;
  const radioButtons = document.querySelectorAll('input[name="radio1"]');
  radioButtons.forEach((button) => {
    button.addEventListener("change", function () {
      window.pieceTypeChange(button.id);
    });
  });
};

window.pieceTypeChange = function (id) {
  if (window.virtualBoardStr !== "") {
    window.showCustomAlert("Please Select Piece To Promote");
    return;
  }
  let index = +id.substring(1, id.length);
  window.imagePath = window.baseImagePath + window.pieceImagePaths[index];
  window.makeBoard();
  window.makeRightBar();
};

window.showColRow = function () {
  let str = window.colRowBool ? "checked" : "";
  let menuStr =
    "<div class='btn-group-vertical w-100' role='group'><div class='input-group input-group-pkr w-100'><div class='form-check form-switch menu-block w-100'><label class='form-check-label' for='colRowSwitch'>Column & Row :</label><input class='form-check-input' type='checkbox' role='switch' id='colRowSwitch' " +
    str +
    "></div></div></div>";
  document.getElementById("dd1menu").innerHTML = menuStr;
  const colRowInput = document.getElementById("colRowSwitch");
  colRowInput.addEventListener("change", function () {
    if (this.checked) {
      window.colRowBool = true;
    } else {
      window.colRowBool = false;
    }
    window.makeBoard();
  });
};

window.addBackgroundPicture = function () {
  let menuStr =
    "<div class='input-group input-group-pkr w-100'><input type='file' id='bgUpload' accept='image/*'/></div>";
  document.getElementById("dd1menu").innerHTML = menuStr;
  document
    .getElementById("bgUpload")
    .addEventListener("change", function (event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
          window.setBackgroundImage(e.target.result);
        };
        reader.readAsDataURL(file);
      }
    });
};

window.setBackgroundImage = function (imageUrl) {
  document.body.style.backgroundImage = `url(${imageUrl})`;
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundPosition = "center";
  document.body.style.backgroundRepeat = "no-repeat";
};

// LeftBar dd2
window.defaultBoardUI2 = function () {
  window.makeDefaultUISettings2();
  window.makeBoard();
  let highlightStr = window.highlightPieceBool ? "checked" : "";
  let legalStr = window.legalBool ? "checked" : "";
  let previousStr = window.highlightPreviousBool ? "checked" : "";
  let menuStr =
    "<div class='btn-group-vertical w-100' role='group'><div class='input-group input-group-pkr w-100'><div class='form-check form-switch menu-block w-100'><label class='form-check-label' for='highlightPreviousSwitch'>Previous Moves :</label><input class='form-check-input' type='checkbox' role='switch' id='highlightPreviousSwitch' " +
    previousStr +
    " disabled></div></div></div><div class='btn-group-vertical w-100' role='group'><div class='input-group input-group-pkr w-100'><div class='form-check form-switch menu-block w-100'><label class='form-check-label' for='highlightPieceSwitch'>Highlight Piece :</label><input class='form-check-input' type='checkbox' role='switch' id='highlightPieceSwitch' " +
    highlightStr +
    " disabled></div></div></div><div class='btn-group-vertical w-100' role='group'><div class='input-group input-group-pkr w-100'><div class='form-check form-switch menu-block w-100'><label class='form-check-label' for='legalMovesSwitch'>Legal Moves :</label><input class='form-check-input' type='checkbox' role='switch' id='legalMovesSwitch' " +
    legalStr +
    " disabled></div></div></div><label for='range1' class='form-label d-inline range-block'><span id='rangeValue' class='range-label'>" +
    "Value : " +
    window.highlightDotRadiusInitial +
    "</span></label><input type='range' class='form-range range-block' id='range1' min='0' max='30' step='1' value='" +
    window.highlightDotRadiusInitial +
    "' disabled>";
  document.getElementById("dd2menu").innerHTML = menuStr;
};

window.changeValidMoveDot = function () {
  let menuStr =
    "<label for='range1' class='form-label d-inline range-block'><span id='rangeValue' class='range-label'>" +
    "Value : " +
    window.highlightDotRadius +
    "</span></label><input type='range' class='form-range range-block' id='range1' min='0' max='30' step='1' value='" +
    window.highlightDotRadius +
    "'>";
  document.getElementById("dd2menu").innerHTML = menuStr;
  const rangeInput = document.getElementById("range1");
  const rangeValueLabel = document.getElementById("rangeValue");
  rangeValueLabel.textContent = "Value : " + rangeInput.value;
  rangeInput.addEventListener("input", function () {
    rangeValueLabel.textContent = "Value : " + rangeInput.value;
    window.highlightDotRadius = rangeInput.value;
    window.makeBoard();
  });
};

window.highlightPreviousMoveSetting = function () {
  let str = window.highlightPreviousBool ? "checked" : "";
  let menuStr =
    "<div class='btn-group-vertical w-100' role='group'><div class='input-group input-group-pkr w-100'><div class='form-check form-switch menu-block w-100'><label class='form-check-label' for='highlightPreviousSwitch'>Previous Moves :</label><input class='form-check-input' type='checkbox' role='switch' id='highlightPreviousSwitch' " +
    str +
    "></div></div></div>";
  document.getElementById("dd2menu").innerHTML = menuStr;
  const highlightPreviousInput = document.getElementById(
    "highlightPreviousSwitch"
  );
  highlightPreviousInput.addEventListener("change", function () {
    if (this.checked) {
      window.highlightPreviousBool = true;
    } else {
      window.highlightPreviousBool = false;
    }
    window.makeBoard();
  });
};

window.highlightSelectedPieceSetting = function () {
  let str = window.highlightPieceBool ? "checked" : "";
  let menuStr =
    "<div class='btn-group-vertical w-100' role='group'><div class='input-group input-group-pkr w-100'><div class='form-check form-switch menu-block w-100'><label class='form-check-label' for='highlightPieceSwitch'>Highlight Piece :</label><input class='form-check-input' type='checkbox' role='switch' id='highlightPieceSwitch' " +
    str +
    "></div></div></div>";
  document.getElementById("dd2menu").innerHTML = menuStr;
  const highlightPieceInput = document.getElementById("highlightPieceSwitch");
  highlightPieceInput.addEventListener("change", function () {
    if (this.checked) {
      window.highlightPieceBool = true;
    } else {
      window.highlightPieceBool = false;
    }
    window.makeBoard();
  });
};

window.showLegalMoveSetting = function () {
  let str = window.legalBool ? "checked" : "";
  let menuStr =
    "<div class='btn-group-vertical w-100' role='group'><div class='input-group input-group-pkr w-100'><div class='form-check form-switch menu-block w-100'><label class='form-check-label' for='legalMovesSwitch'>Legal Moves :</label><input class='form-check-input' type='checkbox' role='switch' id='legalMovesSwitch' " +
    str +
    "></div></div></div>";
  document.getElementById("dd2menu").innerHTML = menuStr;
  const legalMovesInput = document.getElementById("legalMovesSwitch");
  legalMovesInput.addEventListener("change", function () {
    if (this.checked) {
      window.legalBool = true;
    } else {
      window.legalBool = false;
    }
    window.makeBoard();
  });
};

// LeftBar dd3
window.showPGN = function () {
  if (window.pgnStr === "") {
    window.showCustomAlert("Please Play a Move First");
    window.showOptionsLeftDD(-1, -1);
  }
  let menuStr = "<p class = 'pgn-block'>" + window.pgnStr + "</p>";
  if (window.pgnStr.length !== 0) {
    menuStr +=
      "<button class = 'p-3 btn btn-light btn-green w-100 h-100' id='copyPGN'><i class='fa-solid fa-copy'></i> Copy PGN</button>";
  }
  document.getElementById("dd3menu").innerHTML = menuStr;
  if (window.pgnStr.length !== 0) {
    document.getElementById("copyPGN").addEventListener("click", function () {
      const textToCopy = window.pgnStr;
      navigator.clipboard
        .writeText(textToCopy)
        .then(function () {
          window.showCustomAlert("Text copied to clipboard successfully!");
        })
        .catch(function (err) {
          window.showCustomAlert("Could not copy text: ", err);
        });
    });
  }
};

window.importPGNUI = function () {
  let menuStr =
    "<span class = 'text-area-block w-100 justify-content-center'>Enter PGN : </span><div class='input-group'><textarea class='input-group-text text-area-block w-100' id='moveHistory'></textarea></div><button class = 'p-3 btn btn-light btn-import w-100 h-100' id='importGameBtn' onclick = 'window.importGame()' disabled><i class='fa-solid fa-upload'></i> Load Game</button>";
  document.getElementById("dd3menu").innerHTML = menuStr;
  const textarea = document.getElementById("moveHistory");
  textarea.addEventListener("input", window.adjustTextareaHeight);
  textarea.addEventListener("paste", window.adjustTextareaHeight);
};

window.adjustTextareaHeight = function () {
  let maxHeightTextAreaPGN = 318;
  const textarea = document.getElementById("moveHistory");
  textarea.style.height = "auto";
  textarea.style.height = textarea.scrollHeight + "px";
  if (textarea.scrollHeight > maxHeightTextAreaPGN)
    textarea.style.height = maxHeightTextAreaPGN + "px";
  let btnElement = document.getElementById("importGameBtn");
  if (textarea && textarea.value.length > 0) btnElement.disabled = false;
  else btnElement.disabled = true;
};

// UI RightBar Actions
window.copyPGN = function () {
  if (window.virtualBoardStr !== "") {
    window.showCustomAlert("Please Select Piece To Promote");
    return;
  }
  const textToCopy = window.pgnStr;
  navigator.clipboard
    .writeText(textToCopy)
    .then(function () {
      window.showCustomAlert("PGN copied to clipboard successfully!");
    })
    .catch(function (err) {
      window.showCustomAlert("Could not copy text: ", err);
    });
};

window.backwardFastPGN = function () {
  if (window.virtualBoardStr !== "") {
    window.showCustomAlert("Please Select Piece To Promote");
    return;
  }
  window.rightBarMoveNumber(0);
  let tableContainer = document.querySelector(".table-container");
  tableContainer.scrollTop = 0;
};

window.backwardStepPGN = function () {
  if (window.virtualBoardStr !== "") {
    window.showCustomAlert("Please Select Piece To Promote");
    return;
  }
  if (window.previousRightBarMoveNum > 0)
    window.rightBarMoveNumber(window.previousRightBarMoveNum - 1);
};

window.forwardStepPGN = function () {
  if (window.virtualBoardStr !== "") {
    window.showCustomAlert("Please Select Piece To Promote");
    return;
  }
  if (window.previousRightBarMoveNum < window.rightPgnArr.length - 1)
    window.rightBarMoveNumber(window.previousRightBarMoveNum + 1);
};

window.forwardFastPGN = function () {
  if (window.virtualBoardStr !== "") {
    window.showCustomAlert("Please Select Piece To Promote");
    return;
  }
  window.rightBarMoveNumber(window.rightPgnArr.length - 1);
  let tableContainer = document.querySelector(".table-container");
  tableContainer.scrollTop = tableContainer.scrollHeight;
};

window.flipBoard = function () {
  if (window.virtualBoardStr !== "") {
    window.showCustomAlert("Please Select Piece To Promote");
    return;
  }
  let flipBoardArr = window.boardArrLine.map(function (ele) {
    return [...window.boardArrLine];
  });
  for (let i = 0; i <= 7; i++) {
    for (let j = 0; j <= 7; j++) {
      flipBoardArr[i][j] = window.boardArr[7 - i][7 - j];
    }
  }
  window.boardArr = flipBoardArr;
  window.makeBoard();
};

// UI Building
window.makeDefaultColors = function () {
  window.clr1 = window.clrDefaultArr[0];
  window.clr2 = window.clrDefaultArr[1];
  window.clr1x = window.clrDefaultArr[2];
  window.clr2x = window.clrDefaultArr[3];
  window.clr1c = window.clrDefaultArr[4];
  window.clr2c = window.clrDefaultArr[5];
  window.clr1p = window.clrDefaultArr[6];
  window.clr2p = window.clrDefaultArr[7];
};

window.makeDefaultUISettings1 = function () {
  window.makeDefaultColors();
  window.colRowBoolInitial = true;
  window.colRowBool = window.colRowBoolInitial;
  window.imagePath = window.baseImagePath + window.pieceImagePaths[0];
};

window.makeDefaultUISettings2 = function () {
  window.legalBoolInitial = true;
  window.legalBool = window.legalBoolInitial;
  window.highlightPieceBoolInitial = true;
  window.highlightPieceBool = window.highlightPieceBoolInitial;
  window.highlightPreviousBoolInitial = true;
  window.highlightPreviousBool = window.highlightPreviousBoolInitial;
  window.highlightDotRadiusInitial = 16;
  window.highlightDotRadius = window.highlightDotRadiusInitial;
};

window.hello = function (a, b) {
  a++;
  b++;
};

window.blendColors = function (colorA, colorB, amount) {
  const [rA, gA, bA] = colorA.match(/\w\w/g).map((c) => parseInt(c, 16));
  const [rB, gB, bB] = colorB.match(/\w\w/g).map((c) => parseInt(c, 16));
  const r = Math.round(rA + (rB - rA) * amount)
    .toString(16)
    .padStart(2, "0");
  const g = Math.round(gA + (gB - gA) * amount)
    .toString(16)
    .padStart(2, "0");
  const b = Math.round(bA + (bB - bA) * amount)
    .toString(16)
    .padStart(2, "0");
  return "#" + r + g + b;
};

window.showCustomAlert = function (message) {
  let alertBox = document.getElementById("customAlert");
  let alertMessage = document.getElementById("customAlertMessage");

  if (!alertBox) {
    alertBox = document.createElement("div");
    alertBox.id = "customAlert";
    document.body.appendChild(alertBox);
  }
  if (!alertMessage) {
    alertMessage = document.createElement("span");
    alertMessage.id = "customAlertMessage";
    alertBox.appendChild(alertMessage);
  }

  alertMessage.textContent = message || "";
  alertBox.style.display = "block";
  alertBox.style.opacity = 1;

  setTimeout(() => {
    alertBox.style.opacity = 0;
    setTimeout(() => {
      alertBox.style.display = "none";
    }, 500);
  }, 1000);
};
window.updateBoxShadow = function () {
  this.style.boxShadow = `0 0 1px 1px ${this.value}`;
};

window.resetBoxShadow = function () {
  this.style.boxShadow = "none";
};

window.switchNavTab_MakeTimer = function () {
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

  function setActiveTab(tabId) {
    navLinks.forEach((link) => link.classList.remove("active"));
    const targetLink = document.getElementById(tabId);
    if (targetLink) {
      targetLink.classList.add("active");
    }
  }
  setActiveTab("Navbar0");
  window.navActions(0);
};

window.switchNavTab_LoadGame = function () {
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

  function setActiveTab(tabId) {
    navLinks.forEach((link) => link.classList.remove("active"));
    const targetLink = document.getElementById(tabId);
    if (targetLink) {
      targetLink.classList.add("active");
    }
  }
  setActiveTab("Navbar1");
  window.navActions(1);
};

window.showPopup = function (message) {
  let popupOverlay = document.getElementById("popupOverlay");
  let popup = document.getElementById("customPopup");
  let popupMessage = document.getElementById("popupMessage");

  if (!popupOverlay) {
    popupOverlay = document.createElement("div");
    popupOverlay.id = "popupOverlay";
    document.body.appendChild(popupOverlay);
  }
  if (!popup) {
    popup = document.createElement("div");
    popup.id = "customPopup";
    popupOverlay.appendChild(popup);
  }
  if (!popupMessage) {
    popupMessage = document.createElement("span");
    popupMessage.id = "popupMessage";
    popup.appendChild(popupMessage);
  }

  popupMessage.textContent = message || "";
  popupOverlay.classList.add("visible");
  popup.classList.add("visible");
};

window.hidePopup = function () {
  const popupOverlay = document.getElementById("popupOverlay");
  const popup = document.getElementById("customPopup");
  if (popupOverlay) popupOverlay.classList.remove("visible");
  if (popup) popup.classList.remove("visible");
};

window.handleConfirm = function () {
  window.themeLogoChange("rt2");
  window.closeOptionsLeftDD();
  window.hidePopup();
};

window.handleCancel = function () {
  window.hidePopup();
};

// Drag and Drop
window.allowDrop = function (event) {
  event.preventDefault();
};

window.drag = function (event, row, col) {
  if (window.disableBoardForUser) return;
  event.dataTransfer.effectAllowed = "move";
  event.dataTransfer.setData("text/plain", event.target.id);
  document.body.style.cursor = "grabbing";
  if (window.prevrow !== -1 || window.prevcol !== -1) {
    window.previousHighlightData = {
      prevrow: window.prevrow,
      prevcol: window.prevcol,
      showMovesArr: [...window.showMovesArr],
    };
  } else window.previousHighlightData = {};
  window.prevrow = -1;
  window.prevcol = -1;
  window.boardClick(row, col);
  return false;
};

window.drop = function (event, row, col) {
  event.preventDefault();
  document.body.style.cursor = "grab";
  let num = window.showMovesArr.findIndex(function (ele) {
    return ele.row === row && ele.col === col;
  });
  if (num >= 0) window.boardClick(row, col);
  else {
    window.showMovesArr.splice(0, window.showMovesArr.length);
    window.prevrow = -1;
    window.prevcol = -1;
    window.makeBoard();
  }
};

window.updateBoardState = function (fromSquareRowCol, toSquareRowCol) {
  let [fromRow, fromCol] = fromSquareRowCol;
  let [toRow, toCol] = toSquareRowCol;

  window.boardArr[toRow][toCol] = window.boardArr[fromRow][fromCol];
  window.boardArr[fromRow][fromCol] = {};
};

window.dragEnd = function (event) {
  document.body.style.cursor = "grab";
};

// Computer
window.getPiecesofOneColor = function (boardPosition) {
  return boardPosition.reduce(
    function (acc, curr, row) {
      curr.reduce(function (acc, curr1, col) {
        if (curr1.color) {
          acc[curr1.color].pieces.push({
            ...curr1,
            start: { row: row, col: col },
          });
          acc[curr1.color].totalPoints += curr1.points;
        }
        return acc;
      }, acc);
      return acc;
    },
    {
      white: { pieces: [], totalPoints: 0 },
      black: { pieces: [], totalPoints: 0 },
    }
  );
};

window.generateAllPossibleMoves = function (boardPosition, moveColor) {
  let colorWisePosition = window.getPiecesofOneColor(boardPosition);
  let notMoveColor = moveColor === "white" ? "black" : "white";
  let possibleMoves = [];
  colorWisePosition[moveColor].pieces.map(function (piece) {
    window.prevrow = piece.start.row;
    window.prevcol = piece.start.col;
    window.showValidMoves();
    window.prevrow = -1;
    window.prevcol = -1;
    window.showMovesArr.map(function (mv) {
      piece.end = mv;
      let oppositePiece = colorWisePosition[notMoveColor].pieces.find(function (
        ele
      ) {
        return ele.start.row === mv.row && ele.start.col === mv.col;
      });
      piece.score =
        colorWisePosition[moveColor].totalPoints -
        colorWisePosition[notMoveColor].totalPoints +
        (oppositePiece ? oppositePiece.points : 0);
      possibleMoves.push({ ...piece });
      return "";
    });
    return "";
  });
  return possibleMoves;
};

window.playMoveSimulator = function (newMoveSimulator) {
  window.movesSimulated.do++;
  window.prevrow = -1;
  window.prevcol = -1;
  window.boardClick(newMoveSimulator.start.row, newMoveSimulator.start.col);
  window.boardClick(newMoveSimulator.end.row, newMoveSimulator.end.col);
};

window.playToDepth = function (boardPosition, depth, moveColor) {
  let possibleMoves = window.generateAllPossibleMoves(boardPosition, moveColor);
  possibleMoves.splice(2, possibleMoves.length - 2);
  if (depth === 1) {
    let selectedMove = window.selectBestMove(possibleMoves);
    return selectedMove;
  }
  let arr = [];
  for (let i = 0; i < possibleMoves.length; i++) {
    let oneMove = possibleMoves[i];
    window.playMoveSimulator(oneMove);
    let notMoveColor = moveColor === "white" ? "black" : "white";
    arr.push(window.playToDepth(boardPosition, depth - 1, notMoveColor));
    window.undoSimulatedMove();
  }
  let selectedMove = window.selectBestMove(arr);
  return selectedMove;
};

window.selectBestMove = function (possibleMoves) {
  return possibleMoves.reduce(function (acc, curr) {
    if (curr.score > acc.score) acc = curr;
    return acc;
  });
};

window.undoSimulatedMove = function () {
  window.undoMove();
  window.movesSimulated.undo++;
};

window.autoPlay = function (depth) {
  window.movesSimulated = { do: 0, undo: 0 };
  let newMove = window.playToDepth(window.boardArr, depth, "white");
};

// Testing functions
window.runTestCases = function (num) {
  let results = [];
  window.runningTestCases = true;
  for (let i = 0; i < num; i++)
    results.push(window.runOneTestCase(window.testCases[i]));
};

window.runOneTestCase = function (gameJSON) {
  window.makeStartBoard();
  window.makeBoard();
  window.makeRightBar();
  window.pgnStr = gameJSON.pgnStr.trim();
  window.showPGN();
  let testResult = { name: gameJSON.name };
  try {
    window.decodePGN();
    window.isLoadingPGNPawnPromotionJSON = {};
    window.makeBoard();
  } catch (e) {
    testResult.error = e.message;
    testResult.stack = e.stack;
    testResult.decode = "Error";
    return testResult;
  }
  testResult.loadPGN =
    window.pgnStr.trim() === gameJSON.pgnStr.trim() ? "Matched" : "Error";
  for (let i = 0; i < 100; i++) window.undoMove();
  for (let i = 0; i < 100; i++) window.redoMove();
  testResult.undoRedo =
    window.pgnStr.trim() === gameJSON.pgnStr.trim() ? "Matched" : "Error";
  return testResult;
};

// Initial calls with window
document.addEventListener("DOMContentLoaded", function () {
  var navLinks = document.querySelectorAll(".navbar-nav .nav-link");

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      navLinks.forEach(function (nav) {
        nav.classList.remove("active");
      });
      this.classList.add("active");
    });
  });
});

window.dataReload();
window.routineFunctionCalls();
