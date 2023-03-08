// 获取页面元素
const homeBtn = document.getElementById("home-btn");
const aboutBtn = document.getElementById("about-btn");
const archiveBtn = document.getElementById("archive-btn");
const imageContainer = document.querySelector(".image-container");
const poem = document.querySelector(".poem");

// 点击首页按钮
homeBtn.addEventListener("click", function () {
  homeBtn.classList.add("active");
  // 重置为默认状态
  imageContainer.innerHTML = '<img src="image/女生.jpg" alt="花开的效果" class="image">';
  poem.innerHTML = `
    <p>这个世界上，总会有一场完美的相遇。</p>
    <p>就像三月遇见花开，为整个春天都带来了颜色。</p>
  `;
});

// 点击晚晚档案按钮
archiveBtn.addEventListener("click", function () {
  archiveBtn.classList.add("active");
  imageContainer.innerHTML = '<img src="image/背景.jpg" alt="晚晚档案的效果" class="image">';
  poem.innerHTML = `
  <p>这是晚晚最自豪的夕阳照片,保存了很久,经得起时间的考验。</p>
  `;
});

// 点击关于我们按钮
aboutBtn.addEventListener("click", function () {
  aboutBtn.classList.add("active");
  imageContainer.innerHTML = `
    <div class="image-item">
      <img src="image/游戏1.jpg" alt="关于我们的效果" class="image-small">
      <p>我们在一起玩游戏---连胜。</p>
    </div>
    <div class="image-item">
      <img src="image/游戏2.jpg" alt="关于我们的效果" class="image-small">
      <p>我们在一起玩游戏---连败</p>
    </div>
    <div class="image-item">
      <img src="image/讲故事.jpg" alt="关于我们的效果" class="image-small">
      <p>我们也会打电话---讲着小兔子睡前故事。</p>
    </div>
  `;
  imageContainer.classList.add("image-container");
  poem.innerHTML = "";

});

// 创建audio元素
var audio = new Audio('music/天若有情.mp3');
// 自动播放
audio.autoplay = true;

// 定义播放暂停函数
function playPause() {
  if (audio.paused) {
    // 如果当前是暂停状态，则播放音乐
    audio.play();
  } else {
    // 如果当前是播放状态，则暂停音乐
    audio.pause();
  }
}
