# 

Source: https://proofwiki.org/wiki/Number_of_Multiples_less_than_Given_Number



Theorem
Let $m, n \in \N_{\ge 1}$.
The number of multiples of $m$ not greater than $n$ is given by:

$q = \floor {\dfrac n m}$
where $\floor {\cdot}$ denotes the floor function


Proof
By the Division Theorem:

$(1): \quad n = q m + r$
where $0 \le r < q$.
As $r < q$, it follows that the greatest multiple of $m$ up to $n$ is $q m$.
So all the multiples of $m$ up to $n$ are:

$m, 2 m, 3 m, \ldots, q m$
Dividing both sides of $(1)$ by $m$:

$(2): \quad \dfrac n m = q + \dfrac r m$
Taking the floor of $(2)$:

$\floor {\dfrac n m} = \floor {q + \dfrac r m}$
But as $0 \le \dfrac r m < 1$:

$\floor {q + \dfrac r m} = q$

Recall that all the multiples of $m$ up to $n$ are $m, 2 m, 3 m, \ldots, q m$.
It follows that the number of multiples of $m$ up to $n$ is:

$q = \floor {\dfrac n m}$
$\blacksquare$


Also see
De Polignac's Formula


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.5$: Permutations and Factorials
2013: James S. Kraft and Lawrence C. Washington: An Introduction to Number Theory with Cryptography: $\S 3.6$




