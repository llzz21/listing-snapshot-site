// Listing Snapshot — waitlist 落地页邮箱入口。零依赖、零统计、不请求任何第三方。
// 真实接收邮箱（与 privacy-policy.html 一致）。拆两段拼接只挡得住纯文本爬虫，
// 执行 JS 的采集器照样能拿到，所以按"这行等于公开"来选择和处理它。
var EMAIL = "edmondzhilin" + "@gmail.com";

document.getElementById("m").textContent = EMAIL;
document.getElementById("ml").href = "mailto:" + encodeURIComponent(EMAIL) +
  "?subject=" + encodeURIComponent("Pro 内测");

document.getElementById("cp").addEventListener("click", function () {
  var t = document.getElementById("t");
  function done(ok) { t.textContent = ok ? "已复制" : "复制失败，请手动选中邮箱"; }
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(EMAIL).then(function () { done(true); }, fallback);
  } else { fallback(); }
  function fallback() {
    var ta = document.createElement("textarea");
    ta.value = EMAIL;
    ta.setAttribute("readonly", "");
    ta.style.position = "fixed";
    ta.style.left = "-9999px";
    document.body.appendChild(ta);
    ta.select();
    var ok = false;
    try { ok = document.execCommand("copy"); } catch (e) { ok = false; }
    document.body.removeChild(ta);
    done(ok);
  }
});
