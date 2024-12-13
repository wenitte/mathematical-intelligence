# 

Source: https://proofwiki.org/wiki/Quotient_Theorem_for_Group_Homomorphisms/Corollary_2



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


Proof 1
From Quotient Theorem for Group Homomorphisms: Corollary 1:

$N \subseteq K$
if and only if:

there exists a group homomorphism $\psi: G / N \to H$ such that $\phi = \psi \circ q_N$
From Surjection if Composite is Surjection, it follows that the group homomorphism $\psi$ is a surjection.
Hence by definition, $\psi$ is an epimorphism.
$\blacksquare$


Proof 2
Let $e$ be the identity element of $G$.

Let $\RR$ be the congruence relation defined by $N$ in $G$.
Let $\RR_\phi$ be the equivalence relation induced by $\phi$.

From Condition for Existence of Epimorphism from Quotient Structure to Epimorphic Image:

there exists an epimorphism $\psi$ from $G / N$ to $H$ which satisfies $\psi \circ q_N = \phi$
if and only if:

$\RR \subseteq \RR_\phi$

It remains to be shown that:

$\RR \subseteq \RR_\phi$
if and only if:

$N \subseteq K$

This needs considerable tedious hard slog to complete it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Finish}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 12$: Homomorphisms: Exercise $12.14$




