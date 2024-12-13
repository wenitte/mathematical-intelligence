# 

Source: https://proofwiki.org/wiki/Involution_is_Permutation

Theorem
Let $S$ be a set.
Let $f: S \to S$ be an involution.

Then $f$ is a permutation.


Proof
By definition, a permutation is a bijection from a set to itself.
Thus it is sufficient to show that $f$ is a bijection.
By definition of involution, for each $x \in S$:

$\map f {\map f x} = x$
By Equality of Mappings:

$f \circ f = I_S$
where $I_S$ is the identity mapping on $S$.

Thus $f$ is both a left inverse and a right inverse of itself.
The result follows from Bijection iff Left and Right Inverse.
$\blacksquare$





