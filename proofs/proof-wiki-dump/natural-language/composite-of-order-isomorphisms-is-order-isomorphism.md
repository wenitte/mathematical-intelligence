# 

Source: https://proofwiki.org/wiki/Composite_of_Order_Isomorphisms_is_Order_Isomorphism


This article is complete as far as it goes, but it could do with expansion.In particular: turn this into a class-theoretic version and make the sets version a sub-page.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding this information.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Expand}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Theorem
Let $\struct {S_1, \preceq_1}$, $\struct {S_2, \preceq_2}$ and $\struct {S_3, \preceq_3}$ be ordered sets.
Let:

$\phi: \struct {S_1, \preceq_1} \to \struct {S_2, \preceq_2}$
and:

$\psi: \struct {S_2, \preceq_2} \to \struct {S_3, \preceq_3}$
be order isomorphisms.

Then $\psi \circ \phi: \struct {S_1, \preceq_1} \to \struct {S_3, \preceq_3}$ is also an order isomorphism.


Proof
From Composite of Bijections is Bijection, $\psi \circ \phi$ is a bijection, as, by definition, an order isomorphism is also a bijection.
From Inverse of Composite Bijection, the inverse of $\psi \circ \phi$ is given by:

$\paren {\psi \circ \phi}^{-1} = \phi^{-1} \circ \psi^{-1}$

By definition of composition of mappings:

$\map {\psi \circ \phi} x = \map \psi {\map \phi x}$
By definition of order isomorphism, we have:

$\phi: \struct {S_1, \preceq_1} \to \struct {S_2, \preceq_2}$ is an increasing mapping
and:

$\psi: \struct {S_2, \preceq_2} \to \struct {S_3, \preceq_3}$ is an increasing mapping.
Hence from Composite of Increasing Mappings is Increasing:

$\psi \circ \phi: \struct {S_1, \preceq_1} \to \struct {S_3, \preceq_3}$ is an increasing mapping.

Similarly by definition of order isomorphism:

$\phi^{-1}: \struct {S_2, \preceq_2} \to \struct {S_1, \preceq_1}$ is an increasing mapping
and:

$\psi^{-1}: \struct {S_3, \preceq_3} \to \struct {S_2, \preceq_2}$ is an increasing mapping.
Hence from Composite of Increasing Mappings is Increasing:

$\phi^{-1} \circ \psi^{-1}: \struct {S_3, \preceq_3} \to \struct {S_1, \preceq_1}$ is an increasing mapping.

Hence we have that:

$\psi \circ \phi: \struct {S_1, \preceq_1} \to \struct {S_3, \preceq_3}$ is an increasing mapping
and:

$\paren {\psi \circ \phi}^{-1}: \struct {S_3, \preceq_3} \to \struct {S_1, \preceq_1}$ is an increasing mapping
and it follows by definition that $\psi \circ \phi$ is an order isomorphism.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 14$: Orderings: Theorem $14.1: \ 3^\circ$
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 14$: Orderings: Exercise $14.6$
1971: Gaisi Takeuti and Wilson M. Zaring: Introduction to Axiomatic Set Theory: $\S 6.30$




