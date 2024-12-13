# 

Source: https://proofwiki.org/wiki/Isomorphism_Preserves_Identity



Theorem
Let $\struct {S, \circ}$ and $\struct {T, *}$ be algebraic structures.
Let $\phi: \struct {S, \circ} \to \struct {T, *}$ be an isomorphism.

Then $\circ$ has an identity $e_S$ if and only if $\map \phi {e_S}$ is the identity for $*$.


Proof 1
Let $\struct {S, \circ}$ be an algebraic structure in which $\circ$ has an identity $e_S$.
Then $\forall x \in S: x \circ e_S = x = e_S \circ x$.
The result follows directly from the morphism property of $\circ$ under $\phi$:














\(\ds \map \phi {x \circ e_S}\)

\(=\)







\(\ds \map \phi x\)




















\(\ds \)

\(=\)







\(\ds \map \phi {e_S \circ x}\)




















\(\ds \map \phi x * \map \phi {e_S}\)

\(=\)







\(\ds \map \phi x\)




















\(\ds \)

\(=\)







\(\ds \map \phi {e_S} * \map \phi x\)










As $\phi$ is an isomorphism, it follows from Inverse of Algebraic Structure Isomorphism is Isomorphism that $\phi^{-1}$ is also a isomorphism.
Thus the result for $\map \phi {e_S}$ can be applied to $\map {\phi^{-1} } {\map \phi {e_S} }$.
$\blacksquare$


Proof 2
We have that an isomorphism is a homomorphism which is also a bijection.
By definition, an epimorphism is a homomorphism which is also a surjection.
That is, an isomorphism is an epimorphism which is also an injection.
Thus Epimorphism Preserves Identity can be applied.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 6$: Isomorphisms of Algebraic Structures: Theorem $6.2: \ 3^\circ$
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 6$: Isomorphisms of Algebraic Structures: Exercise $6.3$




