# 

Source: https://proofwiki.org/wiki/Cauchy_Sequence_is_Bounded/Normed_Division_Ring/Proof_1

Theorem
Let $\struct {R, \norm {\,\cdot\,} }$ be a normed division ring.
Every Cauchy sequence in $R$ is bounded.


Proof
Let $\sequence {x_n} $ be a Cauchy sequence in $R$.
Then by definition:

$\forall \epsilon \in \R_{\gt 0}: \exists N \in \N : \forall n, m \ge N: \norm {x_n - x_m} < \epsilon$

Let $n_1$ satisfy:

$\forall n, m \ge n_1: \norm {x_n - x_m} < 1$

Then $\forall n \ge n_1$:














\(\ds \norm {x_n}\)

\(=\)







\(\ds \norm {x_n - x_{n_1} + x_{n_1} }\)




















\(\ds \)

\(\le\)







\(\ds \norm {x_n - x_{n_1} } + \norm {x_{n_1} }\)





Norm Axiom $\text N 3$: Triangle Inequality














\(\ds \)

\(\le\)







\(\ds 1 + \norm {x_{n_1} }\)





as $n, n_1 \ge n_1$




Let $K = \max \set {\norm {x_1}, \norm {x_2}, \dots, \norm {x_{n_1 - 1} }, 1 + \norm {x_{n_1} } }$.
Then:

$\forall n < n_1: \norm {x_n} \le K$
$\forall n \ge n_1: \norm {x_n} \le 1 + \norm {x_{n_1} } \le K$
It follows by definition that $\sequence {x_n}$ is bounded.
$\blacksquare$


Sources
2007: Svetlana Katok: p-adic Analysis Compared with Real: $\S 1.2$: Normed Fields, Exercise $11 \ (2)$




