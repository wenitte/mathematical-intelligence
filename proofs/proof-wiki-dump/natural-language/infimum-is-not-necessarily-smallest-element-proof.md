# 

Source: https://proofwiki.org/wiki/Infimum_is_not_necessarily_Smallest_Element/Proof

Theorem
Let $\struct {S, \preceq}$ be an ordered set.
Let $T$ admit a infimum in $S$.

Then the infimum of $T$ in $S$ is not necessarily the smallest element of $T$.


Proof
Let $V$ be the subset of the real numbers $\R$ defined as:

$V := \set {x \in \R: x > 0}$
From Infimum of Subset of Real Numbers: Example 3, $V$ admits an infimum:

$\inf V = 0$

But $V$ has no smallest element, as follows.
We note that $\inf V = 0 \notin V$.
Aiming for a contradiction, suppose $x \in V$ is the smallest element of $V$.
Then $\dfrac x 2$ is also in $V$ as $\dfrac x 2 > 0$.
But $\dfrac x 2 < x$ which contradicts $x$ as being the smallest element of $V$.
Hence there can be no smallest element of $V$.
$\blacksquare$


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 2$: Continuum Property: $\S 2.8$: Example $\text{(iii)}$




