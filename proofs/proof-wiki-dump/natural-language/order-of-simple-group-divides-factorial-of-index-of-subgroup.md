# 

Source: https://proofwiki.org/wiki/Order_of_Simple_Group_divides_Factorial_of_Index_of_Subgroup

Theorem
Let $G$ be a simple group, and let $H$ be a subgroup of $G$ with index $n$. Then $|G|$ divides $n!$.


Proof
Let $G$ act on the cosets of $H$, $G/H$ by the left regular action.
By Group Action defines Permutation Representation, this defines a homomorphism $\tilde \phi: G \to \map \Gamma X$.
By Kernel is Normal Subgroup of Domain, $\ker \tilde \phi$ is a normal subgroup of $G$.
Since $G$ is simple, $\ker \tilde \phi = \{e\}$ or $G$.
If $\ker \tilde \phi = G$, then the action is trivial, but the action consists of an orbit of size $n$, so it is not trivial.
Hence $\ker \tilde \phi = \{e\}$, so $\tilde \phi$ is injective. So $G$ is isomorphic to $\tilde \phi (G)$ which is a subgroup of $\Gamma (X)$.
By Lagrange's Theorem (Group Theory), $|G|$ divides $n!$.

$\blacksquare$





