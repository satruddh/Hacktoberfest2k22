/*A happy number is a number defined by the following process:

a)Starting with any positive integer, replace the number by the sum of the squares of its digits.
b)Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
c)Those numbers for which this process ends in 1 are happy.*/

class Solution {
public:
    int digitSqSum(int n){
        int sum=0;
        while(n>0){
            sum=sum+((n%10)*(n%10));
            n=n/10;
        }
        return sum;
    }

    bool isHappy(int n) {
        int temp=n;
        while(1)
        {
            if(temp==89)
                return false;
            if(temp==1)
                return true;
            temp=digitSqSum(temp);
        }

    }
};
