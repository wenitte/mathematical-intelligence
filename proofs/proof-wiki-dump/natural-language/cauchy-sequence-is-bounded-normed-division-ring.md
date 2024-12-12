# 

Source: https://proofwiki.org/wiki/Cauchy_Sequence_is_Bounded/Normed_Division_Ring



Theorem
Let $\struct {R, \norm {\,\cdot\,} }$ be a normed division ring.
Every Cauchy sequence in $R$ is bounded.


Proof 1
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


Proof 2
Let $d$ be the metric induced on $R$ be the norm $\norm {\,\cdot\,}$.
Let $\sequence {x_n} $ be a Cauchy sequence in $\struct {R, \norm {\,\cdot\,}}$.
By the definition of a Cauchy sequence in a normed division ring then $\sequence {x_n} $ is a Cauchy sequence in $\struct {R, d}$.
By Cauchy sequence is bounded in metric space then $\sequence {x_n} $ is a bounded sequence in $\struct {R, d}$.
By Sequence is Bounded in Norm iff Bounded in Metric then $\sequence {x_n} $ is a bounded sequence in $\struct {R, \norm {\,\cdot\,} }$.
$\blacksquare$


Proof 3
Let $\sequence {x_n} $ be a Cauchy sequence in $R$.
By Norm Sequence of Cauchy Sequence has Limit, $\sequence {\norm {x_n} }$ is a convergent sequence in $\R$.
By Convergent Real Sequence is Bounded, $\sequence {\norm {x_n} }$ is bounded.
That is:

$\exists M \in \R_{\gt 0}: \forall n \in \N: \norm {x_n} = \size {\norm {x_n} } \le M$
Thus, by definition, $\sequence {x_n}$ is bounded.
$\blacksquare$


Sources
2007: Svetlana Katok: p-adic Analysis Compared with Real ... (previous) ... (next): $\S 1.2$: Normed Fields: Exercise $11 \ (1)$




