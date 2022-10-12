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
ll a,b,c,x,y;
cin>>a>>b>>c;
cin>>x>>y;
if(a>=x && b>=y)
cout<<"YES"<<endl;

  else  if(a+c>=x && b>=y)

  cout<<"YES"<<endl;

  else  if(a>=x && b+c>=y)
  
  cout<<"YES"<<endl;


  else  if(abs(x-a)+abs(y-b)<=c)

  cout<<"YES"<<endl;

  else 

  cout<<"NO"<<endl;
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