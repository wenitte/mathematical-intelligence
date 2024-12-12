# 

Source: https://proofwiki.org/wiki/Correspondence_Theorem_for_Ring_Epimorphisms/Bijection

Theorem
Let $A$ and $B$ be commutative rings with unity.
Let $\pi : A \to B$ be a ring epimorphism.
Let $I$ be the set of ideals of $A$ containing the kernel $\ker \pi$.
Let $J$ be the set of ideals of $B$.

The direct image mapping $\pi^\to$ and the inverse image mapping $\pi^\gets$ induce reverse bijections between $I$ and $J$, specifically:

For every ideal $\mathfrak a \in I$, its image $\pi^{\to}(\mathfrak a) = \pi(\mathfrak a) \in J$.
For every ideal $\mathfrak b \in J$, its preimage $\pi^{\gets}(\mathfrak b) = \pi^{-1}(\mathfrak b) \in I$.
The restrictions $\pi^\to : I \to J$ and $\pi^\gets : J \to I$ are reverse bijections.


Proof
The first statements follow from:

Preimage of Ideal under Ring Homomorphism is Ideal
Image of Ideal under Ring Epimorphism is Ideal
The last statement follows from:

Image of Preimage of Ideal under Ring Epimorphism
Preimage of Image of Ideal under Ring Homomorphism
$\blacksquare$





