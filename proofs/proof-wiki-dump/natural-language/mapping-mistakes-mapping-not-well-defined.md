# 

Source: https://proofwiki.org/wiki/Mapping/Mistakes/Mapping_not_Well-Defined

Example of Mistake in Definition of Mapping
This example of an attempted definition of a mapping contains a mistake.

$\theta: \Q \to \Z$ defined as: $\forall m, n \in \Z, n \ne 0: \dfrac m n \mapsto m + n$


Explanation
The mapping $\theta$ is not well-defined.
Let $x \in \Q$ be such that $x = \dfrac 1 2$.
Then:

$\theta \paren {\dfrac 1 2} = 1 + 2 = 3$
$\theta \paren {\dfrac 2 4} = 2 + 4 = 6$
$\theta \paren {\dfrac 3 6} = 3 + 6 = 9$
and so on.
Thus $\theta \paren {\dfrac 1 2} = \set {3, 6, 9, \ldots}$

If $\theta$ were to be defined as:

$\theta: \Z \times \Z: \tuple {m, n} \mapsto m + n$
that would be valid.
However, the fact that each of $\dfrac 1 2, \dfrac 2 4, \dfrac 3 6, \ldots$ all refer to the same $x \in \Q$ renders $\theta$ as not actually a mapping.
$\blacksquare$


Sources
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $4$: Mappings: Exercise $1 \ \text {(iv)}$




