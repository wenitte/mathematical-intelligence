# 

Source: https://proofwiki.org/wiki/Convergent_Sequence_in_Metric_Space_has_Unique_Limit/Proof_1

Theorem
Let $M = \struct {A, d}$ be a metric space.
Let $\sequence {x_n}$ be a sequence in $M$.

Then $\sequence {x_n}$ can have at most one limit in $M$.


Proof
Suppose $\ds \lim_{n \mathop \to \infty} x_n = l$ and $\ds \lim_{n \mathop \to \infty} x_n = m$.
Let $\epsilon > 0$.

Then, provided $n$ is sufficiently large:














\(\ds \map d {l, m}\)

\(\le\)







\(\ds \map d {l, x_n} + \map d {x_n, m}\)





Triangle Inequality














\(\ds \)

\(<\)







\(\ds \epsilon + \epsilon\)





Definition of Limit of Sequence (Metric Space)














\(\ds \)

\(=\)







\(\ds 2 \epsilon\)









So $0 \le \dfrac {\map d {l, m} } 2 < \epsilon$.
This holds for any value of $\epsilon > 0$.
Thus from Real Plus Epsilon it follows that $\dfrac {\map d {l, m} } 2 = 0$, that is, that $l = m$.
$\blacksquare$





