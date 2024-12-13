# 

Source: https://proofwiki.org/wiki/Sequence_of_Square_Roots_of_Natural_Numbers_is_not_Cauchy

Theorem
Let $\sequence {x_n}_{n \mathop \in \N_{>0} }$ be the sequence in $\R$ defined as:

$x_n = \sqrt n$
Then, despite the fact that from Difference Between Adjacent Square Roots Converges:

$\size {\sqrt {n + 1} - \sqrt n} \to 0$ as $n \to \infty$
it is not the case that $\sequence {x_n}$ is a Cauchy sequence.


Proof
Aiming for a contradiction, suppose $\sequence {x_n}$ is bounded.
Let $H \in \R$ be an upper bound of $\sequence {x_n}$
By the Axiom of Archimedes:

$\exists N \in \N: N > H^2$
and so:

$\exists N \in \N: \sqrt N > H$
But $\sqrt N$ is a term of $\sequence {x_n}$.
So $H$ cannot be an upper bound of $\sequence {x_n}$
Hence by Proof by Contradiction, $\sequence {x_n}$ is not bounded.
From Real Cauchy Sequence is Bounded, it follows by the Rule of Transposition that $\sequence {x_n}$ is not a Cauchy sequence

So, while we have the case that:

$\size {\sqrt {n + 1} - \sqrt n} \to 0$ as $n \to \infty$

it is not the case that:

$\forall \epsilon \in \R_{>0}: \exists N \in \N: \forall m, n \in \N: m, n \ge N: \size {\sqrt n - \sqrt m} < \epsilon$
$\blacksquare$


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 5$: Subsequences: Exercise $\S 5.21 \ (1)$




