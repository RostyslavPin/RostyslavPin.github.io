$(document).ready(function () {

    $('.form-group').on('click', 'button', function () {
        function insertionSort(unsortedList) {
            var len = unsortedList.length;
            for (var i = 0; i < len; i++) {
                var tmp = unsortedList[i];
                for (var j = i - 1; j >= 0 && (unsortedList[j] > tmp); j--) {
                    unsortedList[j + 1] = unsortedList[j];
                }
                unsortedList[j + 1] = tmp;
            }
        }

        var arr = [];
        $('#focusedInput1').each(function () {
            arr.push($(this).val());
        });
        var ul = arr.toString().split(' ');
        for (var i = 0; i < ul.length; i++) {
            ul[i] = +ul[i];
        }
        insertionSort(ul);
        $("p").append(ul+'<br>');
        // $(document).createElement("p").append(ul);
    });

});