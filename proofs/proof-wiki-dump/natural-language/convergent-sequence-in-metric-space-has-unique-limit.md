# 

Source: https://proofwiki.org/wiki/Convergent_Sequence_in_Metric_Space_has_Unique_Limit



Theorem
Let $M = \struct {A, d}$ be a metric space.
Let $\sequence {x_n}$ be a sequence in $M$.

Then $\sequence {x_n}$ can have at most one limit in $M$.


Proof 1
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


Proof 2
We have that a Metric Space is Hausdorff.
The result then follows from Convergent Sequence in Hausdorff Space has Unique Limit‎.
$\blacksquare$


Sources
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $2$: Metric Spaces: $\S 5$: Limits: Exercise $2$




