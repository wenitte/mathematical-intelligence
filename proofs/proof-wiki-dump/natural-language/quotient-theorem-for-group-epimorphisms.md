# 

Source: https://proofwiki.org/wiki/Quotient_Theorem_for_Group_Epimorphisms



Theorem
Let $\struct {G, \oplus}$ and $\struct {H, \odot}$ be groups.
Let $\phi: \struct {G, \oplus} \to \struct {H, \odot}$ be a group epimorphism.
Let $e_G$ and $e_H$ be the identities of $G$ and $H$ respectively.

Let $K = \map \ker \phi$ be the kernel of $\phi$.

There exists one and only one group isomorphism $\psi: G / K \to H$ satisfying:

$\psi \circ q_K = \phi$
where $q_K$ is the quotient epimorphism from $G$ to $G / K$.


Proof
Let $\RR_\phi$ be the equivalence on $G$ defined by $\phi$.










\(\ds \forall x \in G: \, \)



\(\ds e_G\)

\(\RR_\phi\)







\(\ds x\)














\(\ds \leadstoandfrom \ \ \)





\(\ds \map \phi x\)

\(=\)







\(\ds \map \phi {e_G}\)





Definition of $\RR_\phi$








\(\ds \leadstoandfrom \ \ \)





\(\ds \map \phi x\)

\(=\)







\(\ds e_H\)





Homomorphism to Group Preserves Identity




Thus:

$K = \eqclass {e_G} {\RR_\phi}$

From the Quotient Theorem for Epimorphisms:

$\RR_\phi$ is compatible with $\oplus$
Thus from Kernel is Normal Subgroup of Domain:

$K \lhd G$
From Congruence Relation induces Normal Subgroup, $\RR_\phi$ is the equivalence defined by $K$.

Thus, again by Quotient Theorem for Epimorphisms, there is a unique epimorphism $\psi: G / K \to H$ satisfying $\psi \circ q_K = \phi$.
$\blacksquare$


Also known as
Some sources call this the Factor Theorem for Group Epimorphisms.


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 12$: Homomorphisms: Theorem $12.6$




