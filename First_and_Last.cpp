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
 ll n; 
    cin>>n; 

    ll*vr = new ll[n]; 

    for (ll i = 0; i < n; i++) 
    { 
        cin>>vr[i]; 
    } 
    ll temp = vr[n-1]+vr[0]; 
    
    for (ll i = 0; i < n-1; i++) 
    { 
        ll ans = vr[i] + vr[i+1]; 

        if (ans > temp) 
        { 
            temp = ans; 
        } 
         
    } 
    cout<<temp<<endl; 
    delete[] vr; 
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