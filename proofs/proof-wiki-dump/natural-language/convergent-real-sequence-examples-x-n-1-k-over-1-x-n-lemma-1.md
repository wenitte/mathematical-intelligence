# 

Source: https://proofwiki.org/wiki/Convergent_Real_Sequence/Examples/x_(n%2B1)_%3D_k_over_1_%2B_x_n/Lemma_1



Example of Convergent Real Sequence
Let $h, k \in \R_{>0}$.
Let $\sequence {x_n}$ be the real sequence defined as:

$x_n = \begin {cases} h & : n = 1 \\ \dfrac k {1 + x_{n - 1} } & : n > 1 \end {cases}$

Then:

$\forall n \in \N_{>1}: k > x_n > 0$


Proof
The proof proceeds by induction.
For all $n \in \Z_{>1}$, let $\map P n$ be the proposition:

$k > x_n > 0$


Basis for the Induction
$\map P 2$ is the case:

$k > x_2 > 0$
We have:














\(\ds x_2\)

\(=\)







\(\ds \dfrac k {1 + x_1}\)




















\(\ds \)

\(<\)







\(\ds \dfrac k 1\)





as $x_1 > 0$














\(\ds \)

\(=\)







\(\ds k\)









Also, as $k > 0$ and $x_1 > 0$ we have that:

$\dfrac k {1 + x_1} > 0$

Thus $\map P 2$ is seen to hold.

This is the basis for the induction.


Induction Hypothesis
Now it needs to be shown that if $\map P r$ is true, where $r \ge 2$, then it logically follows that $\map P {r + 1}$ is true.

So this is the induction hypothesis:

$k > x_r > 0$

from which it is to be shown that:

$k > x_{r + 1} > 0$


Induction Step
This is the induction step:














\(\ds x_{r + 1}\)

\(=\)







\(\ds \dfrac k {1 + x_r}\)




















\(\ds \)

\(<\)







\(\ds \dfrac k 1\)





Induction Hypothesis: $x_r > 0$














\(\ds \)

\(=\)







\(\ds k\)









Also, as $k > 0$ and $x_r > 0$ we have that:

$\dfrac k {1 + x_r} > 0$
So $\map P r \implies \map P {r + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\forall n \in \N_{>1}: k > x_n > 0$
$\blacksquare$


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 5$: Subsequences: Exercise $\S 5.7 \ (3)$




