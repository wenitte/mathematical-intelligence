# 

Source: https://proofwiki.org/wiki/Monomorphism_that_is_Split_Epimorphism_is_Split_Monomorphism

Theorem
Let $\mathbf C$ be a metacategory.
Let $f: C \to D$ be a morphism in $\mathbf C$ such that $f$ is a monomorphism and a split epimorphism.
Then $f: C \to D$ is a split monomorphism.


This article, or a section of it, needs explaining.In particular: What are $C$ and $D$?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.


Proof
Let $g: D \to C$ be the right inverse of $f$:

$f \circ g = \operatorname{id}_D$
which is guaranteed to exist by definition of split epimorphism.
Therefore:

$f \circ g \circ f = \operatorname{id}_D \circ f = f \circ \operatorname{id}_C$
by the property of the identity morphism.
Since $f$ is left cancellable, by the definition of monomorphism, we have:

$g \circ f = \operatorname{id}_C$
Hence $f$ is a split monomorphism with left inverse $g$.
$\blacksquare$





