//
// 定義
//

const actionOpen = document.querySelectorAll(".main__list");
const descBlocks = document.querySelectorAll(".main__descBlock");
//console.log(descBlocks);

//
// 関数
//

const openAco = (e) => {
  const target = e.currentTarget;
  //console.log(target);
  const hiddenBlock = target.querySelector(".main__descBlock");
  //console.log(hiddenBlock);
  const descList = target.querySelector(".main__listBlock");
  //console.log(descList);
  const descListHeight = descList.offsetHeight;

  descBlocks.forEach((elem) => {
    elem.style.height = `0`;
  });

  if(target.classList.contains('on')) {
    target.classList.remove('on');
    hiddenBlock.style.height = `0`;
    
  } else {
    target.classList.add('on');
    hiddenBlock.style.height = `${descListHeight}px`;
  }
}

//
// イベント付与
//

actionOpen.forEach((elem) => {
 //console.log(elem);
  elem.addEventListener("click",(e) => {
    openAco(e);
  });
});
