# 

Source: https://proofwiki.org/wiki/Isomorphism_Preserves_Inverses/Proof_1

Theorem
Let $\struct {S, \circ}$ and $\struct {T, *}$ be algebraic structures.
Let $\phi: \struct {S, \circ} \to \struct {T, *}$ be an isomorphism.
Let $\struct {S, \circ}$ have an identity $e_S$.

Then $x^{-1}$ is an inverse of $x$ for $\circ$ if and only if $\map \phi {x^{-1} }$ is an inverse of $\map \phi x$ for $*$.

That is, if and only if:

$\map \phi {x^{-1} } = \paren {\map \phi x}^{-1}$


Proof
Let $\struct {S, \circ}$ be an algebraic structure in which $\circ$ has an identity $e_S$.
From Epimorphism Preserves Identity, it follows that $\struct {T, *}$ also has an identity, which is $\map \phi {e_S}$.
Let $y$ be an inverse of $x$ in $\struct {S, \circ}$. 

Then:














\(\ds \map \phi x * \map \phi y\)

\(=\)







\(\ds \map \phi {x \circ y}\)




















\(\ds \)

\(=\)







\(\ds \map \phi {e_S}\)




















\(\ds \)

\(=\)







\(\ds \map \phi {y \circ x}\)




















\(\ds \)

\(=\)







\(\ds \map \phi y * \map \phi x\)










So $\map \phi y$ is an inverse of $\map \phi x$ in $\struct {T, *}$.

As $\phi$ is an isomorphism, it follows from Inverse of Algebraic Structure Isomorphism is Isomorphism that $\phi^{-1}$ is also a isomorphism.
Thus the result for $\map \phi x$ can be applied to $\map {\phi^{-1} } {\map \phi x}$.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 6$: Isomorphisms of Algebraic Structures: Theorem $6.2: \ 4^\circ$




