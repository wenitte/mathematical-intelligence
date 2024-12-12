# 

Source: https://proofwiki.org/wiki/Cauchy%27s_Convergence_Criterion/Real_Numbers/Sufficient_Condition/Proof_4

Theorem
Let $\sequence {x_n}$ be a sequence in $\R$.
Let $\sequence {x_n}$ be a Cauchy sequence.

Then $\sequence {x_n}$ is convergent.


Proof
Let $\sequence {a_n}$ be a Cauchy sequence in $\R$.
By Real Cauchy Sequence is Bounded, $\sequence {a_n}$ is bounded.
Thus $\sequence {a_n}$ is both bounded above and bounded below.

Let us create a monotone subsequence $\sequence {b_n}$ of $\sequence {a_n}$ using the following construction:
For each $m \in \N$, let $S_m$ denote the set of elements of $\sequence {a_n}$ from $m$ onwards:

$S_m = \set {a_n: n \ge m}$
From Real Cauchy Sequence is Bounded, we have that $S_m$ is also bounded.
Hence, by the Continuum Property, $\sup S_m$ exists.
Let $b_m := \sup S_m$.

Because $S_{m + 1} \subseteq S_m$, it follows from Supremum of Set of Real Numbers is at least Supremum of Subset that:

$\sup S_{m + 1} \le \sup S_m$
Thus $\sequence {b_m}$ is decreasing.
By definition of $b_m$, we also have that:

$b_m \ge a_m$
So, as $\sequence {a_n}$ is bounded below, so is $\sequence {b_m}$.
So, by the Monotone Convergence Theorem (Real Analysis), $\sequence {b_m}$ is convergent.

Let $\sequence {b_m}$ converge to $l$.
Let $\epsilon \in \R_{>0}$ be arbitrary.
We have that $\sequence {a_n}$ is a Cauchy sequence in $\R$.
We also have from Subsequence of Real Cauchy Sequence is Cauchy that $\sequence {b_n}$ is also a Cauchy sequence in $\R$.
Then there exists:

$N_1 \in \N$ such that $\size {a_m - a_n} < \epsilon$ for $m, n \ge N_1$
$N_2 \in \N$ such that $\size {l - b_n} < \epsilon$ for $m \ge N_2$
Let $N = \max \set {N_1, N_2}$.
By definition of $b_N$, we have that $b_N - \epsilon$ is not an upper bound of $S_N = \set {a_n: n \ge N}$.
Thus there exists $M \ge N$ such that $a_M > b_N - \epsilon$.
We note also that $a_M \le b_N$ because $b_N$ is an upper bound for $S_N$.

Now let $n \ge N$.
We have that:














\(\ds \size {a_n - l}\)

\(=\)







\(\ds \size {a_n - a_M + a_M - b_N + b_N - l}\)




















\(\ds \)

\(\le\)







\(\ds \size {a_n - a_M} + \size {a_M - b_N} + \size {b_N - l}\)





Triangle Inequality














\(\ds \)

\(<\)







\(\ds 3 \epsilon\)









Hence by Convergence by Multiple of Error Term we have that $\sequence {a_n}$ converges to $l$.
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $1$: Review of some real analysis: $\S 1.2$: Real Sequences: Theorem $1.2.9$




