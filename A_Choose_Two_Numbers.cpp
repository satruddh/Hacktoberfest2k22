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
cin>>n;
 vector<int> a(n);
 
  for(int i=0;i<n;i++)
  {
      cin>>a[i];
  }
   cin>>m;
  vector<int> b(m);
   for (int j=0;j<m;j++)
   {
       cin>>b[j];
   }
    sort(all(a));
    sort(all(b));

     cout<<a[n-1]<<' '<<b[m-1]<<endl;
     
}
int_fast32_t main () {
ios_base::sync_with_stdio(false);
// int t=1;
// cin>>t;
// for( int k=1;k<=t;k++){
solve();
// }
return 0;
}