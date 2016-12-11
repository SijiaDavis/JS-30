const spacingRange = document.querySelector("#spaceRange");
const blurRange    = document.querySelector("#blurRange");
const baseColor    = document.querySelector("#baseColor");


// attach event handlers
spacingRange.addEventListener('change', function(){
  document.documentElement.style.setProperty("--spacing", `${this.value}px`);
});

baseColor.addEventListener('change', function(){
  document.documentElement.style.setProperty("--base", this.value);
});

blurRange.addEventListener('change', function(){
  document.documentElement.style.setProperty("--blur", `${this.value/15}px`);
});

