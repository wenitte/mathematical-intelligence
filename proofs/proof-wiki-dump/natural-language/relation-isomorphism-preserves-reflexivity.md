# 

Source: https://proofwiki.org/wiki/Relation_Isomorphism_Preserves_Reflexivity

Theorem
Let $\struct {S, \RR_1}$ and $\struct {T, \RR_2}$ be relational structures.
Let $\struct {S, \RR_1}$ and $\struct {T, \RR_2}$ be (relationally) isomorphic.

Then $\RR_1$ is a reflexive relation if and only if $\RR_2$ is also a reflexive relation.


Proof
Without loss of generality it is necessary to prove only that if $\RR_1$ is reflexive then $\RR_2$ is reflexive.
Let $\phi: S \to T$ be a relation isomorphism.
Let $y \in T$.
Let $x = \map {\phi^{-1} } y$.
As $\phi$ is a bijection it follows from Inverse Element of Bijection that:

$y = \map \phi x$
As $\RR_1$ is a reflexive relation it follows that:

$x \mathrel {\RR_1} x$
As $\phi$ is a relation isomorphism it follows that:

$\map \phi x \mathrel {\RR_2} \map \phi x$
Hence the result.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 14$: Orderings: Exercise $14.9 \ \text{(c)}$




