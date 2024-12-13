# 

Source: https://proofwiki.org/wiki/Quotient_Theorem_for_Group_Homomorphisms/Corollary_2/Proof_1

Theorem
Let $\struct {G, \odot}$ and $\struct {H, *}$ be groups whose identities are $e_G$ and $e_H$ respectively.
Let $\phi: G \to H$ be a group epimorphism.
Let $K$ be the kernel of $\phi$.
Let $N$ be a normal subgroup of $G$.
Let $q_N: G \to G / N$ denote the quotient epimorphism from $G$ to the quotient group $G / N$.

Then:

$N \subseteq K$
if and only if:

there exists a group epimorphism $\psi: G / N \to H$ such that $\phi = \psi \circ q_N$


Proof
From Quotient Theorem for Group Homomorphisms: Corollary 1:

$N \subseteq K$
if and only if:

there exists a group homomorphism $\psi: G / N \to H$ such that $\phi = \psi \circ q_N$
From Surjection if Composite is Surjection, it follows that the group homomorphism $\psi$ is a surjection.
Hence by definition, $\psi$ is an epimorphism.
$\blacksquare$





