# 

Source: https://proofwiki.org/wiki/Infimum_is_Product_in_Order_Category



Theorem
Let $\mathbf P$ be an order category whose ordering is $\preceq$.
Let $p, q \in \mathbf P_0$, and suppose that they have some infimum $r = \inf \set {p, q}$.

Then $r$ is a binary product of $p$ and $q$ in $\mathbf P$.


Proof
Suppose that there are morphisms $l \to p$ and $l \to q$ in $\mathbf P$.
That is to say, suppose $l \preceq p$ and $l \preceq q$.
Then $l$ is a lower bound for $\set {p, q}$.
By definition of infimum, we then have:

$l \preceq r = \inf \set {p, q}$

By definition of $\mathbf P$ as an order category, this means there is a morphism:

$l \to r$
By definition of $\mathbf P$, this morphism is necessarily unique.

Thus $r$ satisfies the UMP for the binary product of $p$ and $q$.
The result follows.
$\blacksquare$


Also see
Supremum is Coproduct in Order Category, the dual result


Sources
2010: Steve Awodey: Category Theory (2nd ed.) ... (previous) ... (next): $\S 2.5.4$




