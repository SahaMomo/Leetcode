#include <iostream>
using namespace std;

int main(){
     
    cout << "Enter the size of the array"
    cin >> n;

    int array[n];

    cout << "Enter" << n << " elements "
    for(int i = 0; i < n ; i++){
        cin >> array[i];
    }
}