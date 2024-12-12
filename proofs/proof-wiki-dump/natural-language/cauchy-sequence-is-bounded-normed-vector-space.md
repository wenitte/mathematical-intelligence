# 

Source: https://proofwiki.org/wiki/Cauchy_Sequence_is_Bounded/Normed_Vector_Space

Theorem
Let $V = \struct {X, \norm {\,\cdot\,} }$ be a normed vector space.

Every Cauchy sequence in $X$ is bounded.


Proof
Let $\sequence {x_n} $ be a Cauchy sequence in $V$.
Then by definition:

$\forall \epsilon \in \R_{>0}: \exists N \in \N : \forall n, m \ge N: \norm {x_n - x_m} < \epsilon$
Let $N$ satisfy:

$\forall n, m \ge N: \norm {x_n - x_m} < 1$
Let $m = N + 1 > N$.
Then $\forall n \ge N$:














\(\ds \norm {x_n}\)

\(=\)







\(\ds \norm {x_n - x_{N + 1} + x_{N + 1} }\)




















\(\ds \)

\(\le\)







\(\ds \norm {x_n - x_{N + 1} } + \norm {x_{N + 1} }\)





Norm Axiom $\text N 3$: Triangle Inequality














\(\ds \)

\(\le\)







\(\ds 1 + \norm {x_{N + 1} }\)










Let $M = \max \set {\norm {x_1}, \norm {x_2}, \dots, \norm {x_N}, 1 + \norm {x_{N + 1} } }$.
Then:

$\forall n < N: \norm {x_n} \le M$
$\forall n \ge N: \norm {x_n} \le 1 + \norm {x_{N + 1} } \le M$
It follows by definition that $\sequence {x_n}$ is bounded.
$\blacksquare$


Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): $\S 1.4$: Normed and Banach spaces. Sequences in a normed space; Banach spaces




