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
ll n,x;
cin>>n>>x;
if(n>x){
    cout<<x<<endl;
}
else {
    while(x>n){
        x=x-n-1;
    }
    cout<<x<<endl;
}
}
int main() {
ios_base::sync_with_stdio(false);
int t=1;
cin>>t;
for( int k=1;k<=t;k++){
solve();
}
return 0;
}