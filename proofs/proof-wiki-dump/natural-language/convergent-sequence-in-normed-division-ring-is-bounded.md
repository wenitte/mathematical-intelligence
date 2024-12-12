# 

Source: https://proofwiki.org/wiki/Convergent_Sequence_in_Normed_Division_Ring_is_Bounded



Theorem
Let $\struct {R, \norm {\,\cdot\,}}$ be a normed division ring.
Let $\sequence {x_n}$ be a sequence in $R$.
Let $\sequence {x_n}$ be convergent in the norm $\norm {\,\cdot\,}$ to the following limit:

$\ds \lim_{n \mathop \to \infty} x_n = l$

Then $\sequence {x_n}$ is bounded.


Proof 1
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


Proof 2
Let $d$ be the metric induced on $R$ be the norm $\norm {\,\cdot\,}$.
Let $\sequence {x_n}$ be convergent to the limit $l$ in $\struct {R, \norm {\,\cdot\,}}$.
By the definition of a convergent sequence in a normed division ring, $\sequence {x_n} $ is convergent to the limit $l$ in $\struct {R, d}$.
By Convergent Sequence in Metric Space is Bounded, $\sequence {x_n} $ is a bounded sequence in $\struct {R, d}$.
By Sequence is Bounded in Norm iff Bounded in Metric, $\sequence {x_n} $ is a bounded sequence in $\struct {R, \norm {\,\cdot\,} }$.
$\blacksquare$


Proof 3
Let $\sequence {x_n}$ be convergent to the limit $l$ in $\struct {R, \norm {\,\cdot\,} }$.
By modulus of limit in normed division ring, $\sequence {\norm {x_n} }$ is a convergent sequence in $\R$.
By Convergent Real Sequence is Bounded, $\sequence {\norm {x_n} }$ is bounded.
That is:

$\exists M \in \R_{> 0}: \forall n, \norm {x_n} = \size {\norm {x_n} } \le M$
Thus, by definition, $\sequence {x_n}$ is bounded.
$\blacksquare$


Proof 4
Let $\sequence {x_n}$ be convergent to the limit $l$ in $\struct {R, \norm {\,\cdot\,}}$.
By Convergent Sequence is Cauchy Sequence in Normed Division Ring, $\sequence {x_n}$ is a Cauchy sequence in $\struct {R, \norm {\,\cdot\,}}$.
By Cauchy Sequence in Normed Division Ring is Bounded, $\sequence {x_n}$ is a bounded sequence in $\struct {R, \norm {\,\cdot\,}}$.
$\blacksquare$


Sources
2007: Svetlana Katok: p-adic Analysis Compared with Real: $\S 1.2$: Normed Fields, Exercise $11 \ (1)$




