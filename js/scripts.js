$(document).ready(function() {
  var triangleCheck = function(side1, side2, side3) {
    var result;
    if (side1 === 0 || side2 === 0 || side3 === 0) {
      result= "NaN";
    } else if (side1 + side2 <= side3 || side2 + side3 <= side1 || side1 + side3 <= side2) {
      result = "Not a"
    } else if (side1 === side2 && side2 === side3) {
      result = "an equilateral";
    } else if (side1 === side2 || side2 === side3 || side1 === side2) {
      result = "isosceles";
    } else if (side1 != side2 && side2 != side3 && side1 != side3) {
      result = "a scalene";
    }
    return result;
  }
  $("form#triangles").submit(function() {
    event.preventDefault();
    var side1 = parseInt($("#input1").val());
    var side2 = parseInt($("#input2").val());
    var side3 = parseInt($("#input3").val());
    var result = triangleCheck(side1, side2, side3);

    if (result === "NaN") {
      $("#output").addClass("panel-danger");
    }
    else if (result === "Not a") {
      $("#output").addClass("panel-warning");
    }
    else {
      $("#output").removeClass("panel-warning, panel-danger");
      result = triangleCheck(side1, side2, side3);
    }
    $("#output").show(result);
    $(".result").text(result);
  });
});
