# 

Source: https://proofwiki.org/wiki/Comparison_Test



Theorem
Let $\ds \sum_{n \mathop = 1}^\infty b_n$ be a convergent series of positive real numbers.
Let $\sequence {a_n}$ be a sequence $\R$ or sequence in $\C$.

Let $\forall n \in \N_{>0}: \cmod {a_n} \le b_n$.

Then the series $\ds \sum_{n \mathop = 1}^\infty a_n$ converges absolutely.


Corollary 1
Let $\ds \sum_{n \mathop = 1}^\infty b_n$ be a convergent series of positive real numbers.
Let $\sequence {a_n}$ be a sequence in $\R$ or a sequence in $\C$.
Let $H \in \R$.
Let $\exists M: \forall n > M: \size {a_n} \le H b_n$.

Then the series $\ds \sum_{n \mathop = 1}^\infty a_n$ converges.


Corollary 2
Let $\ds \sum_{n \mathop = 1}^\infty a_n$ and $\ds \sum_{n \mathop = 1}^\infty b_n$ be two series of positive real numbers.
Let $\lim_{n \mathop \to \infty} \dfrac {a_n} {b_n} = k$ for some $k \in \R$.

Then either:

both $\ds \sum_{n \mathop = 1}^\infty a_n$ and $\ds \sum_{n \mathop = 1}^\infty b_n$ are convergent
or:

both $\ds \sum_{n \mathop = 1}^\infty a_n$ and $\ds \sum_{n \mathop = 1}^\infty b_n$ are divergent.


Proof
Let $\epsilon > 0$.
As $\ds \sum_{n \mathop = 1}^\infty b_n$ converges, its tail tends to zero.
So:

$\ds \exists N: \forall n > N: \sum_{k \mathop = n + 1}^\infty b_k < \epsilon$

Let $\sequence {s_n}$ be the sequence of partial sums of $\ds \sum_{n \mathop = 1}^\infty a_n$.
Then $\forall n > m > N$:














\(\ds \cmod {s_n - s_m}\)

\(=\)







\(\ds \cmod {\paren {a_1 + a_2 + \cdots + a_n} - \paren {a_1 + a_2 + \cdots + a_m} }\)




















\(\ds \)

\(=\)







\(\ds \cmod {a_{m + 1} + a_{m + 2} + \cdots + a_n}\)





Indexed Summation over Adjacent Intervals














\(\ds \)

\(\le\)







\(\ds \cmod {a_{m + 1} } + \cmod {a_{m + 2} } + \cdots + \cmod {a_n}\)





Triangle Inequality for Indexed Summations














\(\ds \)

\(\le\)







\(\ds b_{m + 1} + b_{m + 2} + \cdots + b_n\)




















\(\ds \)

\(\le\)







\(\ds \sum_{k \mathop = n + 1}^\infty b_k\)




















\(\ds \)

\(<\)







\(\ds \epsilon\)









So $\sequence {s_n}$ is a Cauchy sequence.
The result follows from Real Number Line is Complete Metric Space or Complex Plane is Complete Metric Space.
$\blacksquare$


Also see
Comparison Test for Divergence


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 6.15$
1992: Larry C. Andrews: Special Functions of Mathematics for Engineers (2nd ed.) ... (previous) ... (next): $\S 1.2.2$: Summary of convergence tests: Theorem $1.3$
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): comparison test
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): convergent series
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): comparison test
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): convergent series




