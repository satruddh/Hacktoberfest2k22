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
  ll n;cin>>n;
        if(n%2==1){
            if(n==1 || n==3){
                cout<<"-1"<<endl;
            }else{
                cout<<"3 5 1 2 4 ";
                for(int i=n;i>=6;i--){
                    cout<<i<<" ";
                }
                cout<<endl;
            }
        }else{
            for(int i=1;i<=n;i++){
                cout<<n+1-i<<" ";
            }
            cout<<endl;
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
