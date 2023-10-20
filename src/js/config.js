$(document).on("click", "#sidebarBtn", (e) => {
    e.preventDefault()
    const type = $("#sidebarBtn").attr("data-opt")

    if (type == "open") {
        $("#sidebar").addClass("sidebarActive");
        $("#sidebarBtn").attr("data-opt", "close")
    } else if (type == "close") {
        $("#sidebar").removeClass("sidebarActive");
        $("#sidebarBtn").attr("data-opt", "open")
    }
})

