# 

Source: https://proofwiki.org/wiki/Image_Filter_is_Filter

Theorem
Let $X, Y$ be sets.
Let $\powerset X$ and $\powerset Y$ be the power sets of $X$ and $Y$ respectively.
Let $f: X \to Y$ be a mapping.
Let $\FF \subset \powerset X$ be a filter on $X$.

Then the image filter of $\FF$ with respect to $f$:

$f \sqbrk \FF := \set {U \subseteq Y: f^{-1} \sqbrk U \in \FF}$
is a filter on $Y$.


Proof
From the definition of a filter we have to prove four things:

$(1): \quad f \sqbrk \FF \subset \powerset Y$
$(2): \quad Y \in f \sqbrk \FF, \O \notin f \sqbrk \FF$
$(3): \quad U, V \in f \sqbrk \FF \implies U \cap V \in f \sqbrk \FF$
$(4): \quad U \in f \sqbrk \FF, U \subseteq V \subseteq Y \implies V \in f \sqbrk \FF$

By construction we have:

$f \sqbrk \FF \subseteq \powerset Y$
Since $f^{-1} \sqbrk \O = \O \notin \FF$ we know that:

$\O \notin f \sqbrk \FF$
Therefore:

$f \sqbrk \FF \ne \powerset Y$
which implies $(1)$.

Because $f^{-1} \sqbrk Y = X \in \FF$, we have:

$Y \in f \sqbrk \FF$
Since we've already shown $\O \notin f \sqbrk \FF$, this implies $(2)$.

Let $U, V \in f \sqbrk \FF$.
From Preimage of Intersection under Mapping:

$f^{-1} \sqbrk {U \cap V} = f^{-1} \sqbrk U \cap f^{-1} \sqbrk V \in \FF$
(since $\FF$ is a filter).
Thus $U \cap V \in f \sqbrk \FF$, and so $(3)$ holds.

Finally, let $U \in f \sqbrk \FF$ and $V \subseteq Y$ such that $U \subseteq V$.
Then from Preimage of Subset is Subset of Preimage:

$f^{-1} \sqbrk U \subseteq f^{-1} \sqbrk V$
Since $f^{-1} \sqbrk U \in \FF$ and $\FF$ is a filter it follows that:

$f^{-1} \sqbrk V \in \FF$
which implies:

$V \in f \sqbrk \FF$
and thus $(4)$.
$\blacksquare$





