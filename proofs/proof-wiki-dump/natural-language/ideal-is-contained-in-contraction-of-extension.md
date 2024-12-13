# 

Source: https://proofwiki.org/wiki/Ideal_is_Contained_in_Contraction_of_Extension

Theorem
Let $A$ and $B$ be commutative rings with unity.
Let $f : A \to B$ be a ring homomorphism.
Let $\mathfrak a \subseteq A$ be an ideal.

Then $\mathfrak a$ is contained in the contraction of its extension by $f$:

$\mathfrak a \subseteq \mathfrak a^{ec}$


Proof
By definition of extension and generated ideal:

$f \sqbrk {\mathfrak a} \subseteq \mathfrak a^e$
By Subset of Domain is Subset of Preimage of Image:

$\mathfrak a \subseteq f^{-1} \sqbrk {f \sqbrk {\mathfrak a}}$
By Preimage of Subset is Subset of Preimage:

$\mathfrak a \subseteq f^{-1} \sqbrk {f \sqbrk {\mathfrak a }} \subseteq f^{-1} \sqbrk {\mathfrak a^e}$
$\blacksquare$





