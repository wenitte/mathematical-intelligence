# 

Source: https://proofwiki.org/wiki/Limsup_and_Liminf_are_Limits_of_Bounds

Theorem
Let $\sequence {x_n}$ be a sequence in $\R$.
Let $\sequence {x_n}$ be bounded.
Let $\ds \overline l = \limsup_{n \mathop \to \infty} x_n$ be the limit superior and $\ds \liminf_{n \mathop \to \infty} x_n$ the limit inferior of $\sequence {x_n}$.

Then:

$\ds \overline l = \limsup_{n \mathop \to \infty} x_n = \map {\lim_{n \mathop \to \infty} } {\sup_{k \mathop \ge n} x_k}$
$\ds \underline l = \liminf_{n \mathop \to \infty} x_n = \map {\lim_{n \mathop \to \infty} } {\inf_{k \mathop \ge n} x_k}$


Proof
First we show that:

$\ds \limsup_{n \mathop \to \infty} x_n = \map {\lim_{n \mathop \to \infty} } {\sup_{k \mathop \ge n} x_k}$

Let $M_n = \ds \sup_{k \mathop \ge n} x_k$.
By Supremum of Subset, the sequence $\sequence {M_n}$ decreases, for:

$m \ge n \implies \set {k \in \N: k \ge m} \subseteq \set {k \in \N: k \ge n}$

A lower bound for $\sequence {x_n}$ is also a lower bound for $\sequence {M_n}$.
So from the Monotone Convergence Theorem (Real Analysis) it follows that $\sequence {M_n}$ converges.

Suppose $M_n \to M$ as $n \to \infty$.
From the Bolzano-Weierstrass Theorem there exists a convergent subsequence of $\sequence {x_n}$.
Let $L$ be the set of all numbers which are the limit of some subsequence of $\sequence {x_n}$.
Let $l \in L$ be arbitrary.
Let $\sequence {x_{n_r} }$ be a convergent subsequence of $\sequence {x_n}$ such that $x_{n_r} \to l$ as $r \to \infty$.
Then $\forall n_r \ge n: x_{n_r} \le M_n$.
Hence $l \le M_n$ by Lower and Upper Bounds for Sequences and hence (from the same theorem) $l \le M$.
This is true for all $l \in L$, so $\overline l = \limsup_{n \mathop \to \infty} x_n \le M$.

Now, from Terms of Bounded Sequence Within Bounds, we have that:

$\forall \epsilon > 0: \exists n: \forall k \ge n: x_k < \overline l + \epsilon$
Thus $\overline l + \epsilon$ is an upper bound for $\set {x_k: k \ge n}$.
So $M \le M_n \le \overline l + \epsilon$.
Thus from Real Plus Epsilon, $M \le \overline l$.
Thus we conclude that $M = \overline l$ and hence:

$\ds \overline l = \limsup_{n \mathop \to \infty} x_n = \map {\lim_{n \mathop \to \infty} } {\sup_{k \ge n} x_k}$

This article contains statements that are justified by handwavery.In particular: "similar argument"You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding precise reasons why such statements hold.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Handwaving}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
$\ds \liminf_{n \mathop \to \infty} x_n = \map {\lim_{n \mathop to \infty} } {\inf_{k \mathop \ge n} x_k}$
can be proved using a similar argument.
$\blacksquare$


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 5$: Subsequences: Exercise $\S 5.15 \ (6)$




