# 

Source: https://proofwiki.org/wiki/Morphism_from_Integers_to_Group



Theorem
Let $G$ be a group whose identity is $e$.
Let $g \in G$.
Let $\phi: \Z \to G$ be the mapping defined as:

$\forall n \in \Z: \map \phi n = g^n$.

Then:

If $g$ has infinite order, then $\phi$ is a group isomorphism from $\struct {\Z, +}$ to $\gen g$.
If $g$ has finite order such that $\order g = m$, then $\phi$ is a group epimorphism from $\struct {\Z, +}$ to $\gen g$ whose kernel is the principal ideal $\paren m$.
Thus $\gen g$ is isomorphic to $\struct {\Z, +}$, and $m$ is the smallest (strictly) positive integer such that $g^m = e$.


Proof
By Epimorphism from Integers to Cyclic Group, $\phi$ is an epimorphism from $\struct {\Z, +}$ onto $\gen g$.
By Kernel of Group Homomorphism is Subgroup, the kernel $K$ of $G$ is a subgroup of $\struct {\Z, +}$.
Therefore by Subgroup of Integers is Ideal and Principal Ideals of Integers, $\exists m \in \N_{>0}: K = \paren m$.
Thus $\gen g \cong \struct {\Z, +}$.

By Quotient Epimorphism from Integers by Principal Ideal:

$\forall m \in \N_{>0}: \order {\Z_m} = m$
So, if $\gen g$ is finite, and if $\gen g \cong \struct {\Z, +}$, then $m = \order g$.

Furthermore, $m$ is the smallest (strictly) positive integer such that $g^m = e$, since $m$ is the smallest (strictly) positive integer in $\paren m$ from Principal Ideals of Integers.

If $\gen g$ is infinite, then $m = 0$ and so $\phi$ is a (group) isomorphism from $\struct {\Z, +}$ onto $\gen g$.
$\blacksquare$


Also see
Morphism from Ring with Unity to Module


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {IV}$: Rings and Fields: $25$. Cyclic Groups and Lagrange's Theorem: Theorem $25.5$




