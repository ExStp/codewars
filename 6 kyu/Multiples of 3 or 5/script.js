function solution(number) {
    start_num = 0;
    number--;
    sum = 0;
    for (let i = 0; i < number; ++i) {
        start_num++;
        if ((start_num % 2) == 0) {
            sum += start_num;
        }
        if ((start_num % 5) == 0) {
            sum += start_num;
        }
    }
    console.log(sum);
}
solution(10);