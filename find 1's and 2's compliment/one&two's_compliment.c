#include <stdio.h>
#include<string.h>

int main() {
    char bin[20],one[30],two[30];
    printf("Enter your binary number\n");
    scanf("%s",&bin);

    int digits=strlen(bin);

    //for one's compliment
    for (int i = 0; i < digits; i++)
    {
        if (bin[i]=='0')
        {
            one[i]='1';
        }
        else if (bin[i]=='1')
        {
            one[i]='0';
        }
        else{
        printf("Something Error !\n");
        return 1;
        }
    }
    one[digits]='\0';
    printf("The one's compliment of %s is : %s\n",bin,one);

    //two's compliment
    int carry=1;
    for (int j = digits-1; j >=0; j--)
    {
        if (one[j]=='1' && carry==1)
        {
            two[j]='0';
        }
        else if (one[j]=='0' && carry==1)
        {
            two[j]='1';
            carry=0;
        }
        else{
            two[j]=one[j];
        }
        
        
    }
    two[digits]='\0';
    printf("The two's compliment of %s is : %s\n",bin,two);
    
    
    
    return 0;

}