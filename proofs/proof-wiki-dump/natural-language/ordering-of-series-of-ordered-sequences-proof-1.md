# 

Source: https://proofwiki.org/wiki/Ordering_of_Series_of_Ordered_Sequences/Proof_1

Theorem
Let $\sequence {a_n}$ and $\sequence {b_n}$ be two real sequences.
Let $\ds \sum_{n \mathop = 1}^{\infty} a_n$ and $\ds \sum_{n \mathop = 1}^\infty b_n$ be convergent series.
For each $n \in \N$, let $a_n < b_n$.

Then:

$\ds \sum_{n \mathop = 0}^\infty a_n < \sum_{n \mathop = 0}^\infty b_n$


Proof
Let $\sequence {\epsilon_n}$ be the real sequence defined by:

$\forall n \in \N : b_n - a_n$

From Linear Combination of Convergent Series, $\ds \sum_{n \mathop = 0}^\infty \epsilon_n$ is convergent with sum $\epsilon > 0$.

Then:














\(\ds \sum_{n \mathop = 0}^\infty b_n - \sum_{n \mathop = 0}^\infty a_n\)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \paren {a_n + \epsilon_n} - \sum_{n \mathop = 0}^\infty a_n\)




















\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \epsilon_n\)





Linear Combination of Convergent Series














\(\ds \)

\(=\)







\(\ds \epsilon\)




















\(\ds \)

\(>\)







\(\ds 0\)









Hence the result, by definition of inequality.
$\blacksquare$





