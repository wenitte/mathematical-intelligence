# 

Source: https://proofwiki.org/wiki/Comparison_Test/Corollary_1

Corollary to Comparison Test
Let $\ds \sum_{n \mathop = 1}^\infty b_n$ be a convergent series of positive real numbers.
Let $\sequence {a_n}$ be a sequence in $\R$ or a sequence in $\C$.
Let $H \in \R$.
Let $\exists M: \forall n > M: \size {a_n} \le H b_n$.

Then the series $\ds \sum_{n \mathop = 1}^\infty a_n$ converges.


Proof
Let $\epsilon > 0$.
Then $\dfrac \epsilon H > 0$.
As $\ds \sum_{n \mathop = 1}^\infty b_n$ converges, its tail tends to zero.
So:

$\ds \exists N: \forall n > N: \sum_{k \mathop = n+1}^\infty b_k < \frac \epsilon H$

Let $\sequence {s_n}$ be the sequence of partial sums of $\ds \sum_{n \mathop = 1}^\infty a_n$.
Then $\forall n > m > \max \set {M, N}$:














\(\ds \size {s_n - s_m}\)

\(=\)







\(\ds \size {\paren {a_1 + a_2 + \cdots + a_n} - \paren {a_1 + a_2 + \cdots + a_m} }\)




















\(\ds \)

\(=\)







\(\ds \size {a_{m + 1} + a_{m + 2} + \cdots + a_n}\)




















\(\ds \)

\(\le\)







\(\ds \size {a_{m + 1} } + \size {a_{m + 2} } + \cdots + \size {a_n}\)





Triangle Inequality














\(\ds \)

\(\le\)







\(\ds H b_{m + 1} + H b_{m + 2} + \cdots + H b_n\)




















\(\ds \)

\(\le\)







\(\ds H \sum_{k \mathop = n + 1}^\infty b_k\)




















\(\ds \)

\(<\)







\(\ds H \frac \epsilon H\)




















\(\ds \)

\(=\)







\(\ds \epsilon\)









So $\sequence {s_n}$ is a Cauchy sequence and the result follows from:

Real Number Line is Complete Metric Space
or:

Complex Plane is Complete Metric Space.
$\blacksquare$


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 6.15$




