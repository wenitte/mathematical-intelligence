# 

Source: https://proofwiki.org/wiki/Number_of_Permutations/Examples/Numbers_Greater_than_200_from_1,_2,_3,_4

Example of Use of Number of Permutations
Let $N$ be the number of ways you can make a number greater than $200$ using the digits $1$, $2$, $3$ and $4$ no more than once each.
Then:

$N = 42$


Proof
From Number of Permutations, you can make $24$ numbers using all $4$ digits once each, and all will be over $200$.
You cannot make a number greater than $200$ using $2$ digits or fewer.
From Number of Permutations, you can make $\dfrac {4!} {\paren {4 - 3}!} = \dfrac {24} 1 = 24$ numbers using only $3$ digits.
$6$ of those begin with $1$, and so are not greater than $200$.
Hence:

$N = 24 + 24 - 6$
Hence the result.
$\blacksquare$


Sources
1953: L. Harwood Clarke: A Note Book in Pure Mathematics ... (previous) ... (next): $\text I$. Algebra: Permutations and Combinations: Exercises $\text I$: $5$




