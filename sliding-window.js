//sliding window algorithm checking for contiguous sums of m length for a sum of d

function birthday(s, d, m) {
    // Write your code here
    let numberOfCombos = 0

    let left=0, right=0, sum=0
    
    while(right < s.length) {
        sum += s[right]
        
        if(right-left + 1 < m){
            right++
        }
        
        else if(right-left+1 == m){
            if(sum === d){
                numberOfCombos++
            }
            sum -= s[left]
            left++
            right++
        }
    }
    

    return numberOfCombos;
}
