# 

Source: https://proofwiki.org/wiki/Cauchy%27s_Convergence_Criterion/Real_Numbers/Sufficient_Condition/Proof_2

Theorem
Let $\sequence {x_n}$ be a sequence in $\R$.
Let $\sequence {x_n}$ be a Cauchy sequence.

Then $\sequence {x_n}$ is convergent.


Proof
Let $\sequence {a_n}$ be a Cauchy sequence in $\R$.
By Real Cauchy Sequence is Bounded, $\sequence {a_n}$ is bounded.
By the Bolzano-Weierstrass Theorem, $\sequence {a_n}$ has a convergent subsequence $\sequence {a_{n_r} }$.
Let $a_{n_r} \to l$ as $r \to \infty$.
It is to be shown that $a_n \to l$ as $n \to \infty$.

Let $\epsilon \in \R_{>0}$ be a (strictly) positive real number.
Then $\dfrac \epsilon 2 > 0$.
Hence:

$(1): \quad \exists R \in \R: \forall r > R: \size {a_{n_r} - l} < \dfrac \epsilon 2$

We have that $\sequence {a_n}$ is a Cauchy sequence.
Hence:

$(2): \quad \exists N \in \R: \forall m > N, n > N: \size {x_m - x_n} \le \dfrac \epsilon 2$
Let $n > N$.
Let $r \in \N$ be sufficiently large that:

$n_r > N$
and:

$r > R$
Then $(1)$ is satisfied, and $(2)$ is satisfied with $m = n_r$.
So:










\(\ds \forall n > N: \, \)



\(\ds \size {a_n - l}\)

\(=\)







\(\ds \size {a_n - a_{n_r} + a_{n_r} - l}\)




















\(\ds \)

\(\le\)







\(\ds \size {a_n - a_{n_r} } + \size{a_{n_r} - l}\)





Triangle Inequality for Real Numbers














\(\ds \)

\(<\)







\(\ds \dfrac \epsilon 2 + \dfrac \epsilon 2\)




















\(\ds \)

\(=\)







\(\ds \epsilon\)









So, given $\epsilon > 0$, we have found $n \in \R$ such that:

$\forall n > N: \size {a_n - l} < \epsilon$
Thus:

$x_n \to l$ as $n \to \infty$.
$\blacksquare$


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 5$: Subsequences: Cauchy sequences: $\S 5.19$
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): $\S 1.4$: Normed and Banach spaces. Sequences in a normed space; Banach spaces




