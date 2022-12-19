function initZoom() { console.log("initZoom"); class vanillaZoom {
constructor(element) { this.container = element; this.zoomedImage =
this.container.querySelector(".detail-view"); this.mouseEnter();
this.mouseMove(); this.mouseLeave(); } mouseEnter() {
this.zoomedImage.addEventListener("mouseenter", () => {
this.zoomedImage.style.backgroundSize = "150%"; }) } mouseMove() {
this.zoomedImage.addEventListener("mousemove", (e) => { let dimension =
this.zoomedImage.getBoundingClientRect(), x = e.clientX - dimension.left, y =
e.clientY - dimension.top, xPercent = Math.round(100 / (dimension.width / x)),
yPercent = Math.round(100 / (dimension.height / y));
this.zoomedImage.style.backgroundPosition = xPercent + "%" + yPercent + "%"; });
} mouseLeave() { this.zoomedImage.addEventListener("mouseleave", () => {
this.zoomedImage.style.backgroundSize = "cover";
this.zoomedImage.style.backgroundPosition = "center"; }); } } let zoom =
document.querySelectorAll(".vanilla-zoom"); zoom.forEach((item) => { new
vanillaZoom(item); }); }
