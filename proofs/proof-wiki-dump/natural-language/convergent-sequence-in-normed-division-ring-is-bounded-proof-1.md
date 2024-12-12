# 

Source: https://proofwiki.org/wiki/Convergent_Sequence_in_Normed_Division_Ring_is_Bounded/Proof_1

Theorem
Let $\struct {R, \norm {\,\cdot\,}}$ be a normed division ring.
Let $\sequence {x_n}$ be a sequence in $R$.
Let $\sequence {x_n}$ be convergent in the norm $\norm {\,\cdot\,}$ to the following limit:

$\ds \lim_{n \mathop \to \infty} x_n = l$

Then $\sequence {x_n}$ is bounded.


Proof
Let $\sequence {x_n}$ be convergent in the norm $\norm {\,\cdot\,}$ to the limit $l$, then:

$\forall \epsilon \in \R_{>0}: \exists N \in \N : \forall n \ge N: \norm {x_n - l} < \epsilon$

Let $n_1$ satisfy:

$\forall n \ge n_1: \norm {x_n - l} < 1$

Then $\forall n \ge n_1$:














\(\ds \norm {x_n}\)

\(=\)







\(\ds \norm {x_n - l + l}\)




















\(\ds \)

\(\le\)







\(\ds \norm {x_n - l} + \norm l\)





Norm Axiom $\text N 3$: Triangle Inequality














\(\ds \)

\(\le\)







\(\ds 1 + \norm l\)





as $n \ge n_1$




Let $K = \max \set {\norm {x_1}, \norm {x_2}, \dots, \norm {x_{n_1 - 1} }, 1 + \norm l}$.
Then:

$\forall n < n_1: \norm {x_n} \le K$
$\forall n \ge n_1: \norm {x_n} \le 1 + \norm l \le K$
Thus, by definition, $\sequence {x_n}$ is bounded.
$\blacksquare$


Sources
2007: Svetlana Katok: p-adic Analysis Compared with Real: $\S 1.2$: Normed Fields, Exercise $11 \ (1)$




