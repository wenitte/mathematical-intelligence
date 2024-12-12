# 

Source: https://proofwiki.org/wiki/Cardinality_of_Set_of_Combinations_with_Repetition

Theorem
Let $S$ be a finite set with $n$ elements
The number of $k$-combinations of $S$ with repetition is given by:

$N = \dbinom {n + k - 1} k$


Proof
Let the elements of $S$ be (totally) ordered in some way, by assigning an index to each element.
Thus let $S = \left\{ {a_1, a_2, a_3, \ldots, a_n}\right\}$.
Thus each $k$-combination of $S$ with repetition can be expressed as:

$\left\{ {\left\{ {a_{r_1}, a_{r_1}, \ldots, a_{r_k} }\right\} }\right\}$
where:

$r_1, r_2, \ldots, r_k$ are all elements of $\left\{ {1, 2, \ldots, n}\right\}$
and such that:

$r_1 \le r_2 \le \cdots \le r_k$

Hence the problem reduces to the number of integer solutions $\left({r_1, r_2, \ldots, r_k}\right)$ such that $1 \le r_1 \le r_2 \le \cdots \le r_k \le n$.

This is the same as the number of solutions to:

$0 < r_1 < r_2 + 1 < \cdots < r_k + k - 1 < n + k$
which is the same as the number of solutions to:

$0 < s_1 < s_2 < \cdots < s_k < n + k$
which is the number of ways to choose $k$ elements from $n + k - 1$.
This is the same as the number of subsets as a set with $n + k - 1$ elements.
From Cardinality of Set of Subsets:

$N = \dbinom {n + k - 1} k$
$\blacksquare$


Sources
1828: H.F. Scherk: Aufgaben und Lehrsätze, erstere aufzulösen, letztere zu beweisen (J. reine angew. Math. Vol. 3: pp. 96 – 100)
1835: W.A. Förstemann: Einfacher Beweis eines Satzes der Combinationslehre (J. reine angew. Math. Vol. 13: pp. 237 – 239)
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.6$: Binomial Coefficients: Exercise $60$




