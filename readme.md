##TDD_91
####Homewok@20170107
目的: 在於用測試案例來描述需求，並帶出需求的 domain 意義，以及如何設計一個好用、有彈性的 API 供呼叫端很簡便的使用，而這些是 TDD 的入門基礎

[sample solution](https://gist.github.com/hatelove/f5a4c2591293828b637f#file-getsumbypagesize_v2-cs)

1. Data grouped by 3, and the sum of cost should be 6, 15, 24 and 21
2. Data grouped by 4, and the sum of revenue should be 50, 66 and 60
3. [Boundary condition]Data grouped by 1, and the sum of id should be 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 and 11
4. [Boundary condition]Data grouped by 11, and the sum of sellPrice should be 286
5. [Outside the Boundary]Grouped by 0, should throw error message
6. [Outside the Boundary]Grouped by 100, and the sum of cost should be 66