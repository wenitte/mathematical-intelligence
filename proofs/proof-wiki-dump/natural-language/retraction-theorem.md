# 

Source: https://proofwiki.org/wiki/Retraction_Theorem

Theorem
Let $M$ be a compact manifold with boundary $\partial M$.

Then there is no smooth mapping $f: M \to \partial M$ such that $\partial f: \partial M \to \partial M$ is the identity.


Proof

This article needs to be linked to other articles.In particular: one-dimensional, for a startYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Aiming for a contradiction, suppose such a smooth mapping exists.
By the Morse-Sard Theorem, there exists a regular value $x \in \partial M$.
By the Preimage Theorem:

$\map {f^{-1} } x$ is a submanifold of $M$ with boundary.
We have that the codimension of $\map {f^{-1} } x$ in $M$ equals the codimension of $x$ in $\partial M$, that is, $\map \dim M - 1$.
Then $\map {f^{-1} } x$ is one dimensional and compact.
Since $\partial f$ is the identity mapping:

$\map {\partial f^{-1} } x = \map {f^{-1} } x \cap \partial M = \set x$
This contradicts the Classification of Compact One-Manifolds.
$\blacksquare$





