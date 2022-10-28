#include<iostream.h>
#include<bits/stdc++.h>

int longestValidParentheses(string s) {
       int maxVal = 0;
    	stack<int> st;
	    st.push(-1);

    	for(int i = 0; i < s.size(); i++)
	    	if(s[i] == '(')
                st.push(i);

    		else {       
	    		st.pop();

		    	if(st.empty())
                    st.push(i);
    			else
                    maxVal = max(maxVal, i - st.top());
    		}        
        
	    return maxVal;
        
    }
void main()
{
  string s;
  int r;
  cin>>s;
  r=longestPalindrome(s);
  cout<<r;

}
