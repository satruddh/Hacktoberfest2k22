#include<bits/stdc++.h>
#define fast ios_base::sync_with_stdio(false);cin.tie(NULL)
#include<vector>
#include <algorithm>
#define ll long long
#define lld long double
#define lli long long int 
#define sza(x) ((int)x.size())
#define all(a) (a).begin(),(a).end()
#define vll vector<long long int>
using namespace std;

void inpoutp(){
  fast;
  #ifndef ONLINE_JUDGE
  #endif
}
int main()
{
    ll k;
    cin>>k;
    for(ll test=1;test<=k;test++)
    {
        ll a,b;
        cin>>a>>b;
        a=(a*2+1);
        b=(b*2+1);
        vector<vector<char>> hole(a,vector<char>(b));
        for(ll i=0;i<a;i++)
        {
            for(ll j=0;j<b;j++)
            {
                if(i%2==0 and j%2==0)
                hole[i][j]='+';
                else if(i%2==0 and j%2!=0)
                hole[i][j]='-';
                else if(i%2!=0 and j%2==0)
                hole[i][j]='|';
                else if(i%2!=0 and j%2!=0)
                hole[i][j]='.';
            }
        }
        hole[0][0]='.';
        hole[0][1]='.';
        hole[1][0]='.';
        hole[1][1]='.';
        cout<<"Case #"<<test<<":"<<endl;
        for(ll i=0;i<a;i++)
        {
            for(ll j=0;j<b;j++)
            {
                cout<<hole[i][j];
            }
            cout<<endl;
        }
        
    }
}
