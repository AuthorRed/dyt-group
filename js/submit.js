var issubmit = false;
$(document).ready(function () {
    //������
    if ($("#Resumefrom").size() > 0) {
        $("#Resume_Btn").click(function () {
            if (issubmit == true) {
                alert("���Ѿ��ύ���� �����ظ��ύ");
                return false;
            }
            try {
                if (trim($("#txtName").val()).length == 0){
                    alert("����д����");
                    return false;
                }
                if(trim($("#txtBirthday").val()).length == 0){
                    alert("����д��������");
                    return false;
                }
                if(trim($("#txtSex").val()).length == 0){
                    alert("����д�Ա�");
                    return false;
                }
                if(trim($("#txtBirthplace").val()).length == 0){
                    alert("����д����");
                    return false;
                }
                if(trim($("#txtCurrentPlace").val()).length == 0){
                    alert("����дĿǰ���ڵ�");
                    return false;
                }
                if(trim($("#txtExperience").val()).length == 0){
                    alert("����д��������");
                    return false;
                }
                if(trim($("#txtPay").val()).length == 0){
                    alert("����д��нҪ��");
                    return false;
                }
                if(trim($("#txtEmployJob").val()).length == 0){
                    alert("����дӦƸ��λ");
                    return false;
                }
                if(trim($("#txtAbility").val()).length == 0){
                    alert("����д��������");
                    return false;
                }
                if(trim($("#txtEdu").val()).length == 0){
                    alert("����д��������");
                    return false;
                }
                if(trim($("#txtMobile").val()).length == 0){
                    alert("����д�ֻ���");
                    return false;
                }
                if(!checkMobil($("#txtMobile").val())){
                    alert("����д��ȷ���ֻ���");
                    return false;
                }
                if(trim($("#txtEMail").val()).length == 0){
                    alert("����д����");
                    return false;
                }
                if(!checkEmail($("#txtEMail").val())){
                    alert("����д��ȷ������");
                    return false;
                }
                $('body').append("<div id='solutionfromdiv' style='display:none;'></div>");
                $("#solutionfromdiv").html($("#Resumefrom").clone().attr("id", "solutionfromcopy"));
                var imputelement = $("#solutionfromcopy").find("input:text")
                var inputCount = imputelement.size()
                for (var j = 0; j < inputCount; j++) {
                    imputelement.eq(j).replaceWith(imputelement.eq(j).val());
                }

                imputelement = $("#solutionfromcopy textarea")
                inputCount = imputelement.size()
                for (var j = 0; j < inputCount; j++) {
                    imputelement.eq(j).replaceWith($("#Resumefrom textarea").eq(j).val());
                }

                imputelement = $("#solutionfromcopy").find("input:radio")
                inputCount = imputelement.size()
                for (var j = 0; j < inputCount; j++) {
                    if (imputelement.eq(j).attr("checked") != "checked") {
                        imputelement.eq(j).parent().html("");
                    } else {
                        var radioval = imputelement.eq(j).val();
                        imputelement.eq(j).parent().html(radioval);
                    }
                }

                imputelement = $("#solutionfromcopy").find("input:submit")
                inputCount = imputelement.size()
                for (var j = 0; j < inputCount; j++) {
                    imputelement.eq(j).parent().html("");
                }

                imputelement = $("#solutionfromcopy").find("input:reset")
                inputCount = imputelement.size()
                for (var j = 0; j < inputCount; j++) {
                    imputelement.eq(j).parent().html("");
                }

                imputelement = $("#solutionfromcopy").find("img")
                inputCount = imputelement.size()
                for (var j = 0; j < inputCount; j++) {
                    imputelement.eq(j).parent().html("");
                }

                var content = $("#solutionfromdiv").html();
                var title = "  �ύ�ˣ�" + $("#txtName").val();
                var summary = "";
                var scid = $("#scid").html();
                var wid = $("#wid").html();
                SubmitComment(wid, scid, title, content, summary);
            } catch (e) {
                alert(e);
            }
        })
    }

    //�������Ա�
    if ($("#Onlinefrom").size() > 0) {
        $("#Online_Btn").click(function () {
            if (issubmit == true) {
                alert("���Ѿ��ύ���� �����ظ��ύ");
                return false;
            }
            try {
                if (trim($("#txtTitle").val()).length == 0){
                    alert("����д����");
                    return false;
                }
                if (trim($("#txtContent").val()).length == 0){
                    alert("����д����");
                    return false;
                }
                if (trim($("#txtContent").val()).length < 10){
                    alert("�������ݱ������10���ַ�");
                    return false;
                }
                if (trim($("#txtName").val()).length == 0){
                    alert("����д����");
                    return false;
                }
                if(trim($("#txtMobile").val()).length == 0){
                    alert("����д�ֻ���");
                    return false;
                }
                if(!checkMobil($("#txtMobile").val())){
                    alert("����д��ȷ���ֻ���");
                    return false;
                }
                $('body').append("<div id='solutionfromdiv' style='display:none;'></div>");
                $("#solutionfromdiv").html($("#Onlinefrom").clone().attr("id", "solutionfromcopy"));

                var imputelement = $("#solutionfromcopy").find("input:text")
                var inputCount = imputelement.size()
                for (var j = 0; j < inputCount; j++) {
                    imputelement.eq(j).replaceWith(imputelement.eq(j).val());
                }

                imputelement = $("#solutionfromcopy textarea")
                inputCount = imputelement.size()
                for (var j = 0; j < inputCount; j++) {
                    imputelement.eq(j).replaceWith($("#Onlinefrom textarea").eq(j).val());
                }

                imputelement = $("#solutionfromcopy").find("input:radio")
                inputCount = imputelement.size()
                for (var j = 0; j < inputCount; j++) {
                    if (imputelement.eq(j).attr("checked") != "checked") {
                        imputelement.eq(j).parent().html("");
                    } else {
                        var radioval = imputelement.eq(j).val();
                        imputelement.eq(j).parent().html(radioval);
                    }
                }

                imputelement = $("#solutionfromcopy").find("input:submit")
                inputCount = imputelement.size()
                for (var j = 0; j < inputCount; j++) {
                    imputelement.eq(j).parent().html("");
                }

                imputelement = $("#solutionfromcopy").find("input:reset")
                inputCount = imputelement.size()
                for (var j = 0; j < inputCount; j++) {
                    imputelement.eq(j).parent().html("");
                }

                imputelement = $("#solutionfromcopy").find("img")
                inputCount = imputelement.size()
                for (var j = 0; j < inputCount; j++) {
                    imputelement.eq(j).parent().html("");
                }

                imputelement = $("#solutionfromcopy").find("select").find("option:selected");
                var inputCount = imputelement.size()
                for (var j = 0; j < inputCount; j++) {
                    imputelement.eq(j).replaceWith(imputelement.eq(j).text());
                }

                var content = $("#solutionfromdiv").html();
                var title = $("#txtContent").val();
                var summary = "";
                var scid = $("#scid").html();
                var wid = $("#wid").html();
                SubmitComment(wid, scid, title, content, summary);
            } catch (e) {
                alert(e);
            }
        })
    }

    //�ͻ����Ա�
    if ($("#clientfrom").size() > 0) {
        $("#client_Btn").click(function () {
            if (issubmit == true) {
                alert("���Ѿ��ύ���� �����ظ��ύ");
                return false;
            }
            try {
                if (trim($("#txtCompany").val()).length == 0){
                    alert("����д��˾����");
                    return false;
                }
                if (trim($("#txtName").val()).length == 0){
                    alert("����д����");
                    return false;
                }
                if(trim($("#txtMobile").val()).length == 0){
                    alert("����д�ֻ���");
                    return false;
                }
                if(!checkMobil($("#txtMobile").val())){
                    alert("����д��ȷ���ֻ���");
                    return false;
                }
                if (trim($("#txtTitle").val()).length == 0){
                    alert("����д��������");
                    return false;
                }
                if (trim($("#txtContent").val()).length == 0){
                    alert("����д����");
                    return false;
                }
                $('body').append("<div id='solutionfromdiv' style='display:none;'></div>");
                $("#solutionfromdiv").html($("#clientfrom").clone().attr("id", "solutionfromcopy"));
                var imputelement = $("#solutionfromcopy").find("input:text")
                var inputCount = imputelement.size()
                for (var j = 0; j < inputCount; j++) {
                    imputelement.eq(j).replaceWith(imputelement.eq(j).val());
                }

                imputelement = $("#solutionfromcopy textarea")
                inputCount = imputelement.size()
                for (var j = 0; j < inputCount; j++) {
                    imputelement.eq(j).replaceWith($("#clientfrom textarea").eq(j).val());
                }

                imputelement = $("#solutionfromcopy").find("input:radio")
                inputCount = imputelement.size()
                for (var j = 0; j < inputCount; j++) {
                    if (imputelement.eq(j).attr("checked") != "checked") {
                        imputelement.eq(j).parent().html("");
                    } else {
                        var radioval = imputelement.eq(j).val();
                        imputelement.eq(j).parent().html(radioval);
                    }
                }

                imputelement = $("#solutionfromcopy").find("input:submit")
                inputCount = imputelement.size()
                for (var j = 0; j < inputCount; j++) {
                    imputelement.eq(j).parent().html("");
                }

                imputelement = $("#solutionfromcopy").find("img")
                inputCount = imputelement.size()
                for (var j = 0; j < inputCount; j++) {
                    imputelement.eq(j).parent().html("");
                }

                imputelement = $("#solutionfromcopy").find("input:reset")
                inputCount = imputelement.size()
                for (var j = 0; j < inputCount; j++) {
                    imputelement.eq(j).parent().html("");
                }

                var content = $("#solutionfromdiv").html();
                var title = "  �ύ�ˣ�" + $("#txtName").val();
                var summary = "";
                var scid = $("#scid").html();
                var wid = $("#wid").html();
                SubmitComment(wid, scid, title, content, summary);
            } catch (e) {
                alert(e);
            }
        })
    }
})

function SubmitComment(wid, scid, title, content, summary) {
    var link = "/IHandler/submitmsg.ashx?timespan=" + new Date().getTime();
    $.post(link, {
        "wid" : wid,
        "scid" : scid,
        "title" : escape(title),
        "summary" : escape(summary),
        "content" : escape(content)
    }, function (data) {
        if (data.success == true) {
            issubmit = true;
            alert("�ύ�ɹ�");
        } else {
            alert(data.error);
        }
    })
}

function checkMobil(tel){
    var reg=/^(0?1[358]\d{9})|((0(10|2[1-3]|[3-9]\d{2}))?[1-9]\d{6,7})$/;
    if(!reg.test(tel)){
        return false;
    }
    return true;
}

function checkEmail(email){
    var reg=/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    if(!reg.test(email)){
        return false;
    }
    return true;
}

function trim(str) {
    return str.replace(/(^\s*)|(\s*$)/g, "");
}
