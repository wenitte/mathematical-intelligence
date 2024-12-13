# 

Source: https://proofwiki.org/wiki/Preimage_of_Normal_Subgroup_of_Quotient_Group_under_Quotient_Epimorphism_is_Normal/Proof_1

Theorem
Let $G$ be a group.
Let $H \lhd G$ where $\lhd$ denotes that $H$ is a normal subgroup of $G$.
Let $K \lhd G / H$.
Let $L = q_H^{-1} \sqbrk K$, where:

$q_H: G \to G / H$ is the quotient epimorphism from $G$ to the quotient group $G / H$
$q_H^{-1} \sqbrk K$ is the preimage of $K$ under $q_H$.

Then:

$L \lhd G$
and there exists a group isomorphism $\phi: \paren {G / H} / K \to G / L$ defined as:

$\phi \circ q_K \circ q_H = q_L$


Proof
By Quotient Mapping on Structure is Epimorphism, both $q_K$ and $q_H$ are epimorphisms.
From Composite of Group Epimorphisms is Epimorphism we have that $q_K \circ q_H: G \to \paren {G / H} / K$ is also an epimorphism.

Now:

$\forall x \in G: x \in \map \ker {q_K \circ q_H} \iff \map {q_K} {\map {q_H} x} = K = e_{G / H}$
This means the same as:

$\map {q_H} x \in \map \ker {q_K} = K$
But:

$\map {q_H} x \in K \iff x \in \map {q_H^{-1} } K = L$
Thus:

$L = \map \ker {q_K \circ q_H}$
By Kernel is Normal Subgroup of Domain:

$L \lhd G$
$\Box$

By Quotient Mapping on Structure is Epimorphism, both $q_K$ and $q_H$ are epimorphisms.
From Composite of Group Epimorphisms is Epimorphism we have that $q_K \circ q_H: G \to \paren {G / H} / K$ is also an epimorphism.

Then a priori:

$L \lhd G$
Hence by Quotient Theorem for Group Epimorphisms:

there exists a group isomorphism $\psi: G / L \to \paren {G / H} / K$ satisfying:
$\psi \circ q_L = q_K \circ q_L$

Let $\phi = \psi^{-1}$.
Then $\phi$ is a group isomorphism from $\paren {G / H} / K$ to $G / L$:

$\phi \circ q_k \circ q_H = \phi \circ \psi \circ q_L = q_L$
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 12$: Homomorphisms: Example $12.4$




