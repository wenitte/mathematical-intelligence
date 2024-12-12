# 

Source: https://proofwiki.org/wiki/Convergence_by_Multiple_of_Error_Term

Theorem
Let $\sequence {s_n}$ be a real sequence.
Suppose that $\exists \epsilon \in \R, \epsilon > 0$ such that:

$\exists N \in \N: \forall n \ge N: \size {s_n - l} < K \epsilon$
for any $K \in \R, K > 0$, independent of both $\epsilon$ and $N$.

Then $\sequence {s_n}$ converges to $l$.


Proof
Let $\epsilon > 0$.
Then $\dfrac \epsilon K > 0$.
If the condition holds as stated, then:

$\exists N \in \N: \forall n \ge N: \size {s_n - l} < K \paren {\dfrac \epsilon K}$
Hence the result by definition of a convergent sequence.
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $1$: Review of some real analysis: $\S 1.2$: Real Sequences: Lemma $1.2.4$




