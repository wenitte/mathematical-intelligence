# 

Source: https://proofwiki.org/wiki/Canonical_Homomorphism_to_Polynomial_Ring_is_Ring_Monomorphism



Theorem
Let $R$ be a commutative ring with unity.
Let $\struct {R \sqbrk X, \iota, X}$ be a polynomial ring over $R$ in one indeterminate $X$.

Then the canonical homomorphism $\iota : R \to R \sqbrk X$ is a ring monomorphism.


Proof using explicit construction

This theorem requires a proof.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by crafting such a proof.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{ProofWanted}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Proof using universal property
Outline of Proof
We apply the Universal Property of Polynomial Ring to construct a left inverse of $\iota$.


Proof
Let $\operatorname{id} : R \to R$ be the identity mapping.
Let $1$ be the unity of $R$.
By Identity Mapping is Ring Automorphism, $\operatorname{id}$ is a ring homomorphism.
By Universal Property of Polynomial Ring, there exists a ring homomorphism $h : R \sqbrk X \to R$ with $h \circ \iota = \operatorname{id}$.
By Identity Mapping is Injection, $\operatorname{id}$ is an injection.
By Injection if Composite is Injection, $\iota$ is an injection.
Thus $\iota$ is a ring monomorphism.
$\blacksquare$





