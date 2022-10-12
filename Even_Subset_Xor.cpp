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
int  main() {
 vll temp;
 for(ll i=0;i<17;i++){
     for(ll j=i+1;j<18;j++)
     {
         for(ll k=j+1;k<19;k++){

             for(ll m=k+1;m<20;m++)
             {
                 ll ans=(1<<m)+(1<<k)+(1<<j)+(1<<i);
                 temp.push_back(ans);
             }
             if(temp.size()==1000)
             {
                 break;
             }
         }
         if(temp.size()==1000){
             break;
         }
     }
     if(temp.size()==1000){
             break;
 }
 }
   int tc = 0, tt = 1;
    cin >> tt;
    while (tc++ < tt){
 ll n;
 cin>>n;
 for(ll i=0;i<n;i++){
     cout<<temp[i]<<" ";
 }
 cout<<endl;
}
  return 0;
}
