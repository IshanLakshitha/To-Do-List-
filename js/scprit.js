var first = 0;
var ex = 0;
var tr = 0;

function TodoList(title, listarg) {
    this._title = title;
    this._array = new Array().push(listarg)
    var length = listarg.length
    var flist = new Array();
    flist = []
    for (var x = 0; x < length; x++) {
        flist.push(listarg[x])
    }

    this.getTitle = function () {
        return this._title;
    }
    this.getList = function () {
        return flist;
    }

}

var no = 0
var trs = 1;
var clssno = tr;
$("i").mouseenter(function () {

    $("i").css("cursor", "pointer")

    $("i").off();
    $("i").click(function () {
        // console.log("trs" + tr)
        // $("#divlist").sortable();
        // $( "#divlist" ).disableSelection();
        var newitem = "<div id = di" + trs + "><i></i><input type=text class = txtIn" + trs + "> <span id=close" + trs + "></span></div>"

        $("#divlist").append(newitem);
        $("i").css("display", "inline-block");
        $("i").attr("class", "fas fa-plus");
        $("i").attr("class", "fas fa-plus");
        $("#close" + trs).attr("class", "glyphicon glyphicon-remove")
        $(".txtIn" + trs).attr("placeholder", "List Item");
        $(".txtIn" + trs).css("display", "inline-block");


        // $("#divlist").sortable();
        // $( "#divlist" ).disableSelection();

        $("span").off()
        $("span").mouseenter(function (eventData) {
            $("span").css("cursor", "pointer")

        })

        $("span").click(function (eventData) {
            var spid = (eventData.toElement.id).split("close")
            var num = spid[1];
            console.log(num)
            console.log(tr)
            $("#di" + num).fadeOut("slow", function () {

                console.log("click")
                $("#di" + num).remove();
                trs--;
            })
        })

        $(".txtIn" + trs).off()
        $(".txtIn" + trs).keyup(function (e) {

            if (e.keyCode == 13) {
                no = no + first + 1;
                console.log("first" + first)
                console.log("no" + no)
                no++;
                var title = $(".title").val()

                var newTodolist = "<div id = tod" + no + ' class= div' + tr + '><h5 class = tdtitle>' + title + "</h5></div>"

                $("#row").append(newTodolist)
                var mlist = new Array();
                var todolist = new Array();

                var getList = new Array();;
                mlist = []

                for (var x = 0; x <= trs - 1; x++) {
                    console.log(x)
                    mlist.push($(".txtIn" + x).val());
                }

                $("button").click(function (eventData) {
                    var btnid = eventData.toElement.id
                    var divclass = btnid.split("clsbtn")
                    console.log(divclass[1])
                    $("#div" + divclass[1]).remove()

                })

                todolist.push(new TodoList(title, mlist));

                todolist.forEach(mylist => {

                    var listlen = mylist.getList().length;
                    getList = []
                    for (var a = 0; a < listlen; a++) {
                        getList.push(mylist.getList()[a])
                    }

                });

                var len = getList.length;
                console.log("apped" + no)
                for (var e = 0; e < len; e++) {
                    var listss = "<b><p class = para" + tr + ">" + getList[e] + "</b></p><br>"

                    $("#tod" + no).append(listss)

                }

                $("#tod" + no).css("background-color", "white")
                $("#tod" + no).css("box-shadow", "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)")
                $("#tod" + no).attr("class", $("#tod" + no).attr("class") + " col col-md-3 col-sm-12")
                $("#tod" + no).css("margin-left", "10px")
                $("#tod" + no).css("margin-top", "10px")
                $("#tod" + no).css("padding-bottom", "10px")
                $(".tdtitle").css("margin-left", "20px")
                $(".tdtitle").css("margin-top", "20px")
                $(".tdtitle").css("padding-bottom", "5px")
           
                getList.length = 0;
                mlist.length = 0;
                todolist.length = 0;
                console.log("trs" + tr)
            }

        })

        trs++
        $("i").mouseenter(cursor)
        $("i").click(addList)
    })
})

function cursor() {
    $("i").css("cursor", "pointer")

}
