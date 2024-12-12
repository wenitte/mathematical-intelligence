# 

Source: https://proofwiki.org/wiki/Convergent_Real_Sequence/Examples/x_(n%2B1)_%3D_x_n%5E2_%2B_k



Example of Convergent Real Sequence
Let $\sequence {x_n}$ be the real sequence defined as:

$x_n = \begin {cases} h & : n = 1 \\ {x_{n - 1} }^2 + k & : n > 1 \end {cases}$
where:

$0 < k < \dfrac 1 4$
$a < h < b$, where $a$ and $b$ are the roots of the quadratic equation: $x^2 - x + k = 0$.

Then $\sequence {x_n}$ is convergent such that:

$\ds \lim_{n \mathop \to \infty} x_n = a$


Proof
First some lemmata:

Lemma 1
$\forall n \in \N_{>0}: a < x_n < b$
$\Box$


Lemma 2
Let $a$ and $b$ be the roots of the quadratic equation:

$(1): \quad x^2 - x + k = 0$
Let:

$0 < k < \dfrac 1 4$

Then $a$ and $b$ are both strictly positive real numbers.
$\Box$

From Lemma 1 and Lemma 2 we have that:

$0 < a < x_n < b$
for all $n \in \N_{>0}$.
Then:














\(\ds x_{n + 1} - x_n\)

\(=\)







\(\ds {x_n}^2 - x_n + k\)




















\(\ds \)

\(<\)







\(\ds 0\)





Sign of Quadratic Function Between Roots








\(\ds \leadsto \ \ \)





\(\ds x_{n + 1}\)

\(<\)







\(\ds x_n\)









Hence:

$0 < a < x_{n + 1} < x_n < b$
Thus $\sequence {x_n}$ is decreasing and bounded below by $a$.
Hence by the Monotone Convergence Theorem (Real Analysis), $\sequence {x_n}$ converges to its infimum.

It remains to be shown that $\map \inf {x_n} = a$.
Suppose that:

$\ds \lim_{n \mathop \to \infty} x_n = l$
Thus:














\(\ds \lim_{n \mathop \to \infty} x_n\)

\(=\)







\(\ds l\)














\(\ds \leadsto \ \ \)





\(\ds \lim_{n \mathop \to \infty} x_{n + 1}\)

\(=\)







\(\ds l\)














\(\ds \leadsto \ \ \)





\(\ds l^2 + k\)

\(=\)







\(\ds l\)





as $x_{n + 1} = {x_n}^2 + k$








\(\ds \leadsto \ \ \)





\(\ds l^2 - l + k\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds l\)

\(=\)







\(\ds a\)


















\(\, \ds \text {or} \, \)

\(\ds l\)

\(=\)







\(\ds b\)










But $b$ cannot be the infimum of $\sequence {x_n}$ because it is not a lower bound.
Hence:

$\ds \lim_{n \mathop \to \infty} x_n = a$
and the result follows.
$\blacksquare$


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 5$: Subsequences: Exercise $\S 5.7 \ (2)$




