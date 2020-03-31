$(function(){
  let tabs = $(".bar");
  tabsAry = Array.prototype.slice.call(tabs);
  function tabSwitch() {
    $(".active").removeClass("active");
    $(this).addClass("active");
    $(".show").removeClass("show");
    const index = tabs.index(this); 
    $(".content").removeClass("show").eq(index).addClass("show");
  }
  tabs.click(tabSwitch);
});