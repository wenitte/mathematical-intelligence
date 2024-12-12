# 

Source: https://proofwiki.org/wiki/Epimorphism_Preserves_Inverses



Theorem
Let $\struct {S, \circ}$ and $\struct {T, *}$ be algebraic structures.
Let $\phi: \struct {S, \circ} \to \struct {T, *}$ be an epimorphism.
Let $\struct {S, \circ}$ have an identity $e_S$.
Let $x^{-1}$ be an inverse element of $x$ for $\circ$.

Then $\map \phi {x^{-1} }$ is an inverse element of $\map \phi x$ for $*$.
That is:

$\map \phi {x^{-1} } = \paren {\map \phi x}^{-1}$


Proof
Let $\struct {S, \circ}$ be an algebraic structure in which $\circ$ has an identity element $e_S$.
From Epimorphism Preserves Identity, it follows that $\struct {T, *}$ also has an identity element, which is $\map \phi {e_S}$.
Let $y$ be an inverse of $x$ in $\struct {S, \circ}$. 
By definition of inverse element:

$x \circ y = e_S = y \circ x$
Then:














\(\ds \map \phi x * \map \phi y\)

\(=\)







\(\ds \map \phi {x \circ y}\)





Definition of Morphism Property














\(\ds \)

\(=\)







\(\ds \map \phi {e_S}\)





Definition of Inverse Element














\(\ds \)

\(=\)







\(\ds \map \phi {y \circ x}\)





Definition of Inverse Element














\(\ds \)

\(=\)







\(\ds \map \phi y * \map \phi x\)





Definition of Morphism Property




So $\map \phi y$ is an inverse of $\map \phi x$ in $\struct {T, *}$.
$\blacksquare$


Warning
Note that this result is applied to epimorphisms.
For a general homomorphism which is not surjective, nothing definite can be said about the behaviour of the elements of its codomain which are not part of its image.


Also see
Group Homomorphism Preserves Inverses
Epimorphism Preserves Associativity
Epimorphism Preserves Commutativity
Epimorphism Preserves Identity
Epimorphism Preserves Semigroups
Epimorphism Preserves Groups
Epimorphism Preserves Distributivity


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 12$: Homomorphisms: Theorem $12.2$
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 12$: Homomorphisms: Exercise $12.1$




