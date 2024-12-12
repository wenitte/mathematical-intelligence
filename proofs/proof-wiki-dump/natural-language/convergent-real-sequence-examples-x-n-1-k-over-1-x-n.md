# 

Source: https://proofwiki.org/wiki/Convergent_Real_Sequence/Examples/x_(n%2B1)_%3D_k_over_1_%2B_x_n



Example of Convergent Real Sequence
Let $h, k \in \R_{>0}$.
Let $\sequence {x_n}$ be the real sequence defined as:

$x_n = \begin {cases} h & : n = 1 \\ \dfrac k {1 + x_{n - 1} } & : n > 1 \end {cases}$

Then $\sequence {x_n}$ is convergent to the positive root of the quadratic equation:

$x^2 + x = k$


Proof
First some lemmata:

Lemma 1
$\forall n \in \N_{>1}: k > x_n > 0$
$\Box$

Lemma 2
Consider the subsequences $\sequence {x_{2 n} }$ and $\sequence {x_{2 n - 1} }$.
One of them is strictly increasing and the other is strictly decreasing.
$\Box$

From Lemma 2, We have that both $\sequence {x_{2 n} }$ and $\sequence {x_{2 n - 1} }$ is strictly monotone (one strictly increasing and the other strictly decreasing).
From Lemma 1, they are both bounded above by $k$ and bounded below by $0$.
Hence from the Monotone Convergence Theorem (Real Analysis), they both converge.

Let:

$x_{2 n} \to l$ as $n \to \infty$
$x_{2 n - 1} \to m$ as $n \to \infty$

Then:














\(\ds l\)

\(=\)







\(\ds \dfrac k {1 + m}\)




















\(\ds m\)

\(=\)







\(\ds \dfrac k {1 + l}\)














\(\ds \leadsto \ \ \)





\(\ds l + l m\)

\(=\)







\(\ds k\)




















\(\ds m + l m\)

\(=\)







\(\ds k\)














\(\ds \leadsto \ \ \)





\(\ds l\)

\(=\)







\(\ds m\)














\(\ds \leadsto \ \ \)





\(\ds l^2 + l\)

\(=\)







\(\ds k\)









Hence the result.
$\blacksquare$


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 5$: Subsequences: Exercise $\S 5.7 \ (3)$




