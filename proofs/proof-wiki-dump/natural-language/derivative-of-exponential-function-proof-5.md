# 

Source: https://proofwiki.org/wiki/Derivative_of_Exponential_Function/Proof_5

Theorem
Let $\exp$ be the exponential function.
Then:

$\map {\dfrac \d {\d x} } {\exp x} = \exp x$


Proof
This proof assumes the limit definition of $\exp$.
So let:

$\forall n \in \N: \forall x \in \R: \map {f_n} x = \paren {1 + \dfrac x n}^n$
Let $x_0 \in \R$.
Consider $I := \closedint {x_0 - 1} {x_0 + 1}$.
Let:

$N = \ceiling {\max \set {\size {x_0 - 1}, \size {x_0 + 1} } }$
where $\ceiling {\, \cdot \,}$ denotes the ceiling function.

From Closed Real Interval is Compact in Metric Space, $I$ is compact.
From Chain Rule for Derivatives:

$\dfrac \d {\d x} \map {f_n} x = \dfrac n {n + x} \map {f_n} x$


Lemma
$\forall x \in \R : n \ge \ceiling {\size x} \implies \sequence {\dfrac n {n + x} \paren {1 + \dfrac x n}^n}$ is increasing.
$\Box$

From the lemma:

$\forall x \in I: \sequence {\dfrac \d {\d x} \map {f_{n + N} } x}$ is increasing
Hence, from Dini's Theorem, $\sequence {\dfrac \d {\d x} f_{n + N} }$ is uniformly convergent on $I$.

Therefore, for $x \in I$:














\(\ds \frac \d {\d x} \exp x\)

\(=\)







\(\ds \frac \d {\d x} \lim_{n \mathop \to \infty} \map {f_n} x\)




















\(\ds \)

\(=\)







\(\ds \frac \d {\d x} \lim_{n \mathop \to \infty} \map {f_{n + N} } x\)





Tail of Convergent Sequence














\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \frac \d {\d x} \map {f_{n + N} } x\)





Derivative of Uniformly Convergent Sequence of Differentiable Functions














\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \frac n {n + x} \map {f_n} x\)





from above














\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \map {f_n} x\)





Combination Theorem for Sequences














\(\ds \)

\(=\)







\(\ds \exp x\)










In particular:

$\dfrac \d {\d x} \exp x_0 = \exp x_0$
$\blacksquare$





