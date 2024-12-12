# 

Source: https://proofwiki.org/wiki/Convergent_Real_Sequence/Examples/x_(n%2B1)_%3D_x_n%5E2_%2B_k/Lemma_1



Example of Convergent Real Sequence
Let $\sequence {x_n}$ be the real sequence defined as:

$x_n = \begin {cases} h & : n = 1 \\ {x_{n - 1} }^2 + k & : n > 1 \end {cases}$
where:

$0 < k < \dfrac 1 4$
$a < h < b$, where $a$ and $b$ are the roots of the quadratic equation $x^2 - x + k = 0$.

Then:

$\forall n \in \N_{>0}: a < x_n < b$


Proof
The proof proceeds by induction.
For all $n \in \Z_{\ge 0}$, let $\map P n$ be the proposition:

$a < x_n < b$


Basis for the Induction
$\map P 1$ is the case:

$a < x_1 < b$
By assertion:

$a < h < b$
and:

$x_1 = h$

Thus $\map P 1$ is seen to hold.

This is the basis for the induction.


Induction Hypothesis
Now it needs to be shown that if $\map P k$ is true, where $k \ge 1$, then it logically follows that $\map P {k + 1}$ is true.

So this is the induction hypothesis:

$a < x_k < b$

from which it is to be shown that:

$a < x_{k + 1} < b$


Induction Step
This is the induction step:














\(\ds x_{k + 1} - a\)

\(=\)







\(\ds {x_k}^2 + k - a\)





Definition of $x_{k + 1}$














\(\ds \)

\(>\)







\(\ds a^2 - a + k\)





as $x_k > a$














\(\ds \)

\(=\)







\(\ds 0\)





Definition of $a$








\(\ds \leadsto \ \ \)





\(\ds x_{k + 1}\)

\(>\)







\(\ds a\)










Similarly:














\(\ds x_{k + 1} - b\)

\(=\)







\(\ds {x_k}^2 + k - b\)





Definition of $x_{k + 1}$














\(\ds \)

\(<\)







\(\ds b^2 - b + k\)





as $x_k < b$














\(\ds \)

\(=\)







\(\ds 0\)





Definition of $b$








\(\ds \leadsto \ \ \)





\(\ds x_{k + 1}\)

\(<\)







\(\ds b\)










So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\forall n \in \N_{>0}: a < x_n < b$
$\blacksquare$


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 5$: Subsequences: Exercise $\S 5.7 \ (2)$




