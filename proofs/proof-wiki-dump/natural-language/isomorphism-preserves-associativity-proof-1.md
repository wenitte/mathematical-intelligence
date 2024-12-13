# 

Source: https://proofwiki.org/wiki/Isomorphism_Preserves_Associativity/Proof_1

Theorem
Let $\struct {S, \circ}$ and $\struct {T, *}$ be algebraic structures.
Let $\phi: \struct {S, \circ} \to \struct {T, *}$ be an isomorphism.

Then $\circ$ is associative if and only if $*$ is associative.


Proof
Let $\struct {S, \circ}$ be an algebraic structure in which $\circ$ is associative.
Let $\phi: \struct {S, \circ} \to \struct {T, *}$ be an isomorphism.
As an isomorphism is surjective, it follows that:

$\forall u, v, w \in T: \exists x, y, z \in S: \map \phi x = u, \map \phi y = v, \map \phi z = w$

So:














\(\ds \paren {u * v} * w\)

\(=\)







\(\ds \paren {\map \phi x * \map \phi y} * \map \phi z\)





as $\phi$ is a Surjection














\(\ds \)

\(=\)







\(\ds \map \phi {x \circ y} * \map \phi z\)





Definition of Morphism Property














\(\ds \)

\(=\)







\(\ds \map \phi {\paren {x \circ y} \circ z}\)





Definition of Morphism Property














\(\ds \)

\(=\)







\(\ds \map \phi {x \circ \paren {y \circ z} }\)





Associativity of $\circ$














\(\ds \)

\(=\)







\(\ds \map \phi x * \map \phi {y \circ z}\)





Definition of Morphism Property














\(\ds \)

\(=\)







\(\ds \map \phi x * \paren {\map \phi y * \map \phi z}\)





Definition of Morphism Property














\(\ds \)

\(=\)







\(\ds u * \paren {v * w}\)





by definition as above




As $\phi$ is an isomorphism, it follows from Inverse of Algebraic Structure Isomorphism is Isomorphism that $\phi^{-1}$ is also an isomorphism.
Thus the result for $\phi$ can be applied to $\phi^{-1}$.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 6$: Isomorphisms of Algebraic Structures: Theorem $6.2: \ 1^\circ$




