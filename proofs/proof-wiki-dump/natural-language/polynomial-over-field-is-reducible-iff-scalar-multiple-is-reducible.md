# 

Source: https://proofwiki.org/wiki/Polynomial_over_Field_is_Reducible_iff_Scalar_Multiple_is_Reducible



Theorem
Let $K$ be a field.
Let $K \sqbrk X$ be the ring of polynomial forms over $K$.
Let $P \in K \sqbrk X$.

Let $\lambda \in K \setminus \set 0$.

Then $P$ is irreducible in $K \sqbrk X$ if and only if $\lambda P$ is also irreducible in $K \sqbrk X$.


This article is complete as far as it goes, but it could do with expansion.In particular: Investigate whether this result also holds where $K$ is a general ring.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding this information.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Expand}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Proof
Necessary Condition
Let $P$ be irreducible.
Suppose further that $ \lambda P$ has a non-trivial factorization:

$\lambda P = Q_1 Q_2$
that is, such that $Q_1$ and $Q_2$ are not units of $K \sqbrk X$.
By Units of Ring of Polynomial Forms over Field it follows that $\deg Q_1 \ge 1$ and $\deg Q_2 \ge 1$.
Let $Q_1' = \lambda^{-1} Q_1$.
This implies that:

$P = Q_1' Q_2$
with $\deg Q_1' = \deg Q_1 \ge 1$.
But this is a non-trivial factorization of $P$ in $K \sqbrk X$.
This contradicts our supposition that $P$ is irreducible.
Therefore $\lambda P$ has no non-trivial factorization, that is, $\lambda P$ is irreducible.
$\Box$


Sufficient Condition
Let $\lambda P$ be irreducible.
Let $Q = \lambda P$.
From the necessary condition, we know that any scalar multiple of $Q$ is irreducible.
In particular:

$\lambda^{-1} Q = \lambda^{-1} \lambda P = P$
is irreducible, the required result.
$\blacksquare$





