# 

Source: https://proofwiki.org/wiki/Count_of_All_Permutations_on_n_Objects



Theorem
Let $S$ be a set of $n$ objects.
Let $N$ be the number of permutations of $k$ objects from $S$, where $1 \le k \le N$.
Then:

$\ds N = n! \sum_{k \mathop = 0}^{n - 1} \dfrac 1 {k!}$


Sequence
The sequence $\sequence {s_n}$ defined as:

$\ds s_n = n! \sum_{k \mathop = 0}^{n - 1} \dfrac 1 {k!}$
begins:

$1, 4, 15, 64, 325, 1956, 13699, 109600, 986409, 9864100, \ldots$


Proof
The number of permutations on $k$ objects, from $n$ is denoted ${}^n P_k$.
From Number of Permutations:

${}^n P_k = \dfrac {n!} {\paren {n - k}!}$
Hence:














\(\ds N\)

\(=\)







\(\ds \sum_{k \mathop = 1}^n {}^n P_k\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^n \dfrac {n!} {\paren {n - k}!}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {n!} {\paren {n - 1}!} + \dfrac {n!} {\paren {n - 2}!} + \cdots + \dfrac {n!} {\paren {n - \paren {n - 1} }!} + \dfrac {n!} {\paren {n - n}!}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {n!} {\paren {n - 1}!} + \dfrac {n!} {\paren {n - 2}!} + \cdots + \dfrac {n!} {1!} + \dfrac {n!} {0!}\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^{n - 1} \dfrac {n!} {k!}\)




















\(\ds \)

\(=\)







\(\ds n! \sum_{k \mathop = 0}^{n - 1} \dfrac 1 {k!}\)









$\blacksquare$


Examples
Even Integers from $\set {1, 2, 3, 4}$
Let $N$ be the number of even integers which can be made using one or more of the digits $1$, $2$, $3$ and $4$ no more than once each.
Then:

$N = 32$




