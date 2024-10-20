document.addEventListener('DOMContentLoaded', function () {
  // 示例：添加一个按钮，点击后显示弹窗  
  const button = document.createElement('button');
  button.textContent = '戳我';
  button.style.position = 'fixed';
  button.style.bottom = '50px';
  button.style.right = '50px';
  button.style.zIndex = '1000';
  button.onclick = function () {
    alert('啊，仙贝！Ciallo～(∠・ω< )⌒★');
  };
  document.body.appendChild(button);
});