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
int LIS(vector<int> arr)
{
    multiset<int> s;
    multiset<int>::iterator it;
    int sizeOfarray = arr.size();
    for (int i = 0; i < sizeOfarray; i++)
    {
        s.insert(arr[i]);
        it = s.upper_bound(arr[i]);
        if (it != s.end())
            s.erase(it);
    }
    return s.size();
}

void solve()
{

    int n, m;
    cin >> n >> m;
    vector<int> a(n);
    vector<int> b(m);
    for (int i = 0; i < n; i++)
    {
        cin >> a[i];
    }
    for (int i = 0; i < m; i++)
    {
        cin >> b[i];
    }
    

    cout << LIS(a) + LIS(b) << '\n';
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
