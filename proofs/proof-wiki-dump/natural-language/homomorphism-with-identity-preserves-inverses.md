# 

Source: https://proofwiki.org/wiki/Homomorphism_with_Identity_Preserves_Inverses

Theorem
Let $\struct {S, \circ}$ and $\struct {T, *}$ be algebraic structures.
Let $\phi: \struct {S, \circ} \to \struct {T, *}$ be a homomorphism.
Let $\struct {S, \circ}$ have an identity $e_S$.
Let $\struct {T, *}$ also have an identity $e_T = \map \phi {e_S}$.

If $x^{-1}$ is an inverse of $x$ for $\circ$, then $\map \phi {x^{-1} }$ is an inverse of $\map \phi x$ for $*$.
That is:

$\map \phi {x^{-1} } = \paren {\map \phi x}^{-1}$


Proof
Let $\struct {S, \circ}$ be an algebraic structure in which $\circ$ has an identity $e_S$.
Let $\phi: \struct {S, \circ} \to \struct {T, *}$ be a homomorphism.
Let $\struct {T, *}$ be an algebraic structure in which $*$ has an identity $e_T = \map \phi {e_S}$.

Let $x^{-1}$ be an inverse of $x$ for $\circ$.
Then by existence of identity $e_S$:


This article needs to be tidied.Please fix formatting and $\LaTeX$ errors and inconsistencies. It may also need to be brought up to our standard house style.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Tidy}} from the code.
$\forall x \in S: x \circ x^{-1}, x^{-1} \circ x \in \Dom \phi$
Hence:














\(\ds \map \phi x * \map \phi {x^{-1} }\)

\(=\)







\(\ds \map \phi {x \circ x^{-1} }\)





Definition of Morphism Property














\(\ds \)

\(=\)







\(\ds \map \phi {e_S} = e_T\)




















\(\ds \)

\(=\)







\(\ds \map \phi {x^{-1} \circ x}\)




















\(\ds \)

\(=\)







\(\ds \map \phi {x^{-1} } * \map \phi x\)





Definition of Morphism Property



$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 12$: Homomorphisms: Theorem $12.3: \ 2^\circ$




