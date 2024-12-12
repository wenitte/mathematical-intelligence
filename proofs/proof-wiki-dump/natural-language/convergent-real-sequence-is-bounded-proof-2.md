# 

Source: https://proofwiki.org/wiki/Convergent_Real_Sequence_is_Bounded/Proof_2

Theorem
Let $\sequence {x_n}$ be a sequence in $\R$.
Let $l \in A$ such that $\ds \lim_{n \mathop \to \infty} x_n = l$.

Then $\sequence {x_n}$ is bounded.


Proof
Let $\sequence {x_n}$ be a sequence in $\R$.
Let $x_n \to l$ as $n \to \infty$.
To show that $\sequence {x_n}$ is bounded sequence, we need to find $K$ such that:

$\forall n \in \N: \size {x_n} \le K$
Because $\sequence {x_n}$ converges:

$\forall \epsilon > 0: \exists N: n > N \implies \size {x_n - l} < \epsilon$
In particular, this is true when $\epsilon = 1$.
That is:

$\exists N_1: \forall n > N_1: \size {x_n - l} < 1$
By Backwards Form of Triangle Inequality:

$\forall n > N_1: \size {x_n} - \size l \le \size {x_n - l} < 1$
That is:

$\size {x_n} < \size l + 1$
So we set:

$K = \max \set {\size {x_1}, \size {x_2}, \ldots, \size {x_{N_1} }, \size l + 1}$
and the result follows.
$\blacksquare$


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 4$: Convergent Sequences: Some simple properties of convergent sequences: $\S 4.25$




