# 

Source: https://proofwiki.org/wiki/Convergent_Real_Sequence_has_Unique_Limit

Theorem
Let $\sequence {s_n}$ be a real sequence.

Then $\sequence {s_n}$ can have at most one limit.


Proof 1
Aiming for a contradiction, suppose that $\sequence {s_n}$ converges to $l$ and also to $m$.
That is, suppose that:

$\ds \lim_{n \mathop \to \infty} x_n = l$
and:

$\ds \lim_{n \mathop \to \infty} x_n = m$

Without loss of generality, assume that $l \ne m$.
Let:

$\epsilon = \dfrac {\size {l - m} } 2$
As $l \ne m$, it follows that $\epsilon > 0$.
As $\sequence {s_n} \to l$:

$\exists N_1 \in \N: \forall n \in \N: n > N_1: \size {s_n - l} < \epsilon$
Similarly, since $\sequence {s_n} \to m$:

$\exists N_2 \in \N: \forall n \in \N: n > N_2: \size {s_n - m} < \epsilon$

Now set $N = \max \set {N_1, N_2}$.
We have:














\(\ds \size {l - m}\)

\(=\)







\(\ds \size {l - s_N + s_N - m}\)




















\(\ds \)

\(\le\)







\(\ds \size {l - s_N} + \size {s_N - m}\)





Triangle Inequality for Real Numbers














\(\ds \)

\(<\)







\(\ds 2 \epsilon\)




















\(\ds \)

\(=\)







\(\ds \size {l - m}\)









This constitutes a contradiction.
It follows from Proof by Contradiction that $l = m$.
$\blacksquare$


Proof 2
We have that the real number line is a metric space
The result then follows from Convergent Sequence in Metric Space has Unique Limit‎.
$\blacksquare$





