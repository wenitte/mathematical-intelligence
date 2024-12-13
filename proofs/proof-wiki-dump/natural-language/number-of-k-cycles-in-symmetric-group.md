# 

Source: https://proofwiki.org/wiki/Number_of_k-Cycles_in_Symmetric_Group



Theorem
Let $n \in \N$ be a natural number.
Let $S_n$ denote the symmetric group on $n$ letters.
Let $k \in N$ such that $k \le n$.

The number of elements $m$ of $S_n$ which are $k$-cycles is given by:

$m = \paren {k - 1}! \dbinom n k = \dfrac {n!} {k \paren {n - k}!}$


Proof 1
Let $m$ be the number of elements of $S_n$ which are $k$-cycles.
From Cardinality of Set of Subsets, there are $\dfrac {n!} {k! \paren {n - k}!}$ different ways to select $k$ elements of $\set {1, 2, \ldots, n}$.
From Number of k-Cycles on Set of k Elements, each of these $\dfrac {n!} {k! \paren {n - k}!}$ sets with $k$ elements has $\paren {k - 1}!$ $k$-cycles.
It follows from Product Rule for Counting that:














\(\ds m\)

\(=\)







\(\ds \paren {k - 1}! \dfrac {n!} {k! \paren {n - k}!}\)




















\(\ds \)

\(=\)







\(\ds \paren {k - 1}! \dbinom n k\)





Definition of Binomial Coefficient














\(\ds \)

\(=\)







\(\ds \dfrac {n! \paren {k - 1}! } {k! \paren {n - k}!}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {n!} {k \paren {n - k}!}\)









$\blacksquare$


Proof 2
Suppose $n \ge k$, and consider the number of $k$-cycles in $S_n$.
A $k$-cycle can be represented by a selection of $k$ elements from $n$ without any repeats.
From Number of Permutations, the number of permutations of $k$ elements from $n$ possible elements is $\dfrac {n!} {\paren {n - k}!}$.
However, each such string is merely a representation of an $k$-cycle; the $k$-cycle itself does not depend on the starting elements in the string.
Since there are $k$ possible starting elements, we must divide this number by $k$.

Hence, the number of $m$-cycles is

$\dfrac {n!} {k \paren {n - k}!}$
$\blacksquare$


Sources
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: The Symmetric Groups: $\S 79 \alpha$




