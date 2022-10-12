#include<bits/stdc++.h>
#include<vector>
#include <algorithm>
#define ll long long
#define nl '\n'
#define lld long double
#define lli long long int 
#define sza(x) ((int)x.size())
#define all(a) (a).begin(),(a).end()
#define vll vector<long long int>
using namespace std;
bool compare(ll a , ll b)
{
if(a>b) return true;
return false;
}

int_fast32_t main () {
ios_base::sync_with_stdio(false);
int t=1;
cin>>t;
while(t--){
   string s; cin>>s;
        int ans1 = 0, ans2 = 0;
        for(ll i=0;i<6;i++)
        {
         int temp = s[i]-48;
         if(i<=2)ans1+=temp;
         else ans2+=temp;
        }
        if(ans1==ans2)

        cout<<"YES"<<endl;
        else
        cout<<"NO"<<endl;

}
return 0;
}
