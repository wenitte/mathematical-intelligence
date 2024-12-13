# 

Source: https://proofwiki.org/wiki/Scalar_Multiple_of_Simple_Function_is_Simple_Function

Theorem
Let $\struct {X, \Sigma}$ be a measurable space.
Let $f: X \to \R$ be a simple function, and let $\lambda \in \R$.

Then the pointwise scalar multiple $\lambda f: X \to \R$ of $f$ is also a simple function.


Proof
Let $\Img f$ denote the image of $f$.
Let $\Img {\lambda f}$ denote the image of $\lambda f$.
Consider the surjection $l_\lambda: \Img f \to \Img {\lambda f}$ defined by:

$\map {l_\lambda} {\map f x} := \lambda \map f x$
By Measurable Function is Simple Function iff Finite Image Set, $\card {\Img f}$ is finite.
Hence Cardinality of Codomain of Surjection yields that $\size {\Img {\lambda f} }$ is finite as well.

The result follows from a second application of Measurable Function is Simple Function iff Finite Image Set.
$\blacksquare$





