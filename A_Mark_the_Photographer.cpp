#include<bits/stdc++.h>
#include<vector>
#include <algorithm>
#define ll long long
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
void solve() {
ll n,m;
cin>>n>>m;
 bool ans=1;
  vector<int> vec(n);
  vec.resize(2*n);
   for(int i=0;i<2*n;i++)
   {
    cin>>vec[i];
   }
    
    sort(all(vec));
     for(int i=0;i<n;i++)
     {
        if(vec[n+i]-vec[i]<m)
        {
            ans= false;
             break;
        }
     }
      if(ans)
      {
        cout<<"YES"<<endl;
      }
      else 
      {
        cout<<"NO"<<endl;
      }
}
int_fast32_t main () {
ios_base::sync_with_stdio(false);
int t=1;
cin>>t;
for( int k=1;k<=t;k++){
solve();
}
return 0;
}