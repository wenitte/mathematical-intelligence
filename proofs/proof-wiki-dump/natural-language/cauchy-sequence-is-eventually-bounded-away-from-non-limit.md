# 

Source: https://proofwiki.org/wiki/Cauchy_Sequence_Is_Eventually_Bounded_Away_From_Non-Limit

Theorem
Let $\struct {R, \norm {\, \cdot \,} }$ be a normed division ring.
Let $\sequence {x_n}$ be a Cauchy sequence in $R$.
Suppose $\sequence {x_n}$ does not converge to $l \in R$.
Then:

$\exists K \in \N$ and $C \in \R_{>0}: \forall n > K: C < \norm {x_n - l}$


Proof
Because $\sequence {x_n}$ does not converge to $l$:

$\exists \epsilon \in \R_{>0}: \forall n \in \N: \exists m \ge n: \norm {x_m - l} \ge \epsilon$
Because $\sequence {x_n}$ is a Cauchy sequence:

$\exists K \in \N: \forall n, m \ge K: \norm {x_n - x_m} < \dfrac \epsilon 2$
Let $M \ge K: \norm {x_M - l} \ge \epsilon$.
Then $\forall n > K$:














\(\ds \epsilon\)

\(\le\)







\(\ds \norm {x_M - l}\)




















\(\ds \)

\(=\)







\(\ds \norm {x_M - x_n + x_n - l}\)




















\(\ds \)

\(\le\)







\(\ds \norm {x_M - x_n} + \norm {x_n - l}\)





Norm Axiom $\text N 3$: Triangle Inequality














\(\ds \)

\(<\)







\(\ds \dfrac \epsilon 2 + \norm {x_n - l}\)





because $n, M \ge K$








\(\ds \leadsto \ \ \)





\(\ds \dfrac \epsilon 2\)

\(<\)







\(\ds \norm {x_n - l}\)





subtracting $\dfrac \epsilon 2$ from both sides of the equation



Let $C = \dfrac \epsilon 2$ and the result follows.
$\blacksquare$





