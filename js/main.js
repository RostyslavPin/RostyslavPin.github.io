$(document).ready(function () {

    setTimeout(function () {
        $('body').addClass('loaded');
        $('h1').css('color', '#222222');
    }, 500);

    $('.form-group').on('click', 'button', function () {
        function insertionSort(A) {
            var t0 = performance.now();
            var n = A.length;
            for (var i = 0; i < n; i++) {
                var v = A[i], j = i - 1;
                while (j >= 0 && A[j] > v) {
                    A[j + 1] = A[j];
                    j--;
                }
                A[j + 1] = v;
            }
            var t1 = performance.now();
            // console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.")
            $('.time').append('<span>' + (t1 - t0) + " - Insert Sort Time<br>");
            return A;


        }

        function bubbleSort(A) {
            var t0 = performance.now();
            var n = A.length;
            for (var i = 0; i < n - 1; i++) {
                for (var j = 0; j < n - 1 - i; j++) {
                    if (A[j + 1] < A[j]) {
                        var t = A[j + 1];
                        A[j + 1] = A[j];
                        A[j] = t;
                    }
                }
            }
            var t1 = performance.now();
            $('.time').append('<span>' + (t1 - t0) + " - Bubble Sort Time<br>");
            return A;
        }

        function selectionSort(A) {
            var t0 = performance.now();
            var n = A.length;
            for (var i = 0; i < n - 1; i++) {
                var min = i;
                for (var j = i + 1; j < n; j++) {
                    if (A[j] < A[min]) min = j;
                }
                var t = A[min];
                A[min] = A[i];
                A[i] = t;
            }
            var t1 = performance.now();
            $('.time').append('<span>' + (t1 - t0) + " - Selection Sort Time<br>");
            return A;
        }

        function shellSort(A) {
            var t0 = performance.now();
            var n = A.length, i = Math.floor(n / 2);
            while (i > 0) {
                for (var j = 0; j < n; j++) {
                    var k = j, t = A[j];
                    while (k >= i && A[k - i] > t) {
                        A[k] = A[k - i];
                        k -= i;
                    }
                    A[k] = t;
                }
                i = (i == 2) ? 1 : Math.floor(i * 5 / 11);
            }
            var t1 = performance.now();
            $('.time').append('<span>' + (t1 - t0) + " - Shell Sort Time<br>");
            return A;
        }

        function simpleCountingSort(A) {
            var t0 = performance.now();
            var n = A.length, Count = [], B = [];
            for (var i = 0; i < n; i++) Count[i] = 0;
            for (var i = 0; i < n - 1; i++) {
                for (var j = i + 1; j < n; j++) {
                    if (A[i] < A[j]) Count[j]++;
                    else Count[i]++;
                }
            }
            for (var i = 0; i < n; i++) B[Count[i]] = A[i];
            var t1 = performance.now();
            $('.time').append('<span>' + (t1 - t0) + " - Simple Counting Sort Time<br>");
            return B;
        }

        function merge(a, low, mid, high) {
            var b = new Array(high + 1 - low), h, i, j = mid + 1, k, h = low, i = 0;
            while (h <= mid && j <= high) {
                if (a[h] <= a[j]) {
                    b[i] = a[h];
                    h++;
                }
                else {
                    b[i] = a[j];
                    j++;
                }
                i++;
            }
            if (h > mid) {
                for (k = j; k <= high; k++) {
                    b[i] = a[k];
                    i++;
                }
            }
            else {
                for (k = h; k <= mid; k++) {
                    b[i] = a[k];
                    i++;
                }
            }
            for (k = 0; k <= high - low; k++) a[k + low] = b[k];
            return a;
        }

        function mergeSort(A) {
            var t0 = performance.now();

            function merge_sort(a, low, high) {
                if (low < high) {
                    var mid = Math.floor((low + high) / 2);
                    merge_sort(a, low, mid);
                    merge_sort(a, mid + 1, high);
                    merge(a, low, mid, high);
                }
            }

            var n = A.length;
            merge_sort(A, 0, n - 1);
            var t1 = performance.now();
            $('.time').append('<span>' + (t1 - t0) + " - Merge Sort Time<br>");
            return A;
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
        $(".sort").append(ul + ' << Insertion Sort <br>');
        bubbleSort(ul);
        $(".sort").append(ul + ' << Bubble Sort <br>');
        selectionSort(ul);
        $(".sort").append(ul + ' << Selection Sort <br>');
        shellSort(ul);
        $(".sort").append(ul + ' << Shell Sort <br>');
        simpleCountingSort(ul);
        $(".sort").append(ul + ' << Simple Counting Sort <br>');
        mergeSort(ul);
        $(".sort").append(ul + ' << Merge Sort <br>');
    });

});