# 

Source: https://proofwiki.org/wiki/Composite_of_Homomorphisms_is_Homomorphism/R-Algebraic_Structure

Theorem
Let $\struct {R, +_R, \times_R}$ be a ring.
Let:

$\struct {S_1, \odot_1, \ldots, \odot_n}$
$\struct {S_2, {\odot'}_1, \ldots, {\odot'}_n}$
$\struct {S_3, {\odot}_1, \ldots, {\odot}_n}$
be algebraic structures each with $n$ operations.
Let:

$\struct {S_1, *_1}_R$
$\struct {S_2, *_2}_R$
$\struct {S_3, *_3}_R$
be $R$-algebraic structures.
Let:

$\phi: \struct {S_1, *_1}_R \to \struct {S_2, *_2}_R$
$\psi: \struct {S_2, *_2}_R \to \struct {S_3, *_3}_R$
be homomorphisms.

Then the composite of $\phi$ and $\psi$ is also a homomorphism.


Proof
What we are trying to prove is that $\paren {\psi \circ \phi}: \struct {S_1, *_1}_R \to \struct {S_3, *_3}_R$ is a homomorphism.
That is:

$(1): \quad \forall k \in \closedint 1 n: \forall x, y \in S_1: \map {\paren {\psi \circ \phi} } {x \odot_k y} = \map {\paren {\psi \circ \phi} } x {\odot}_k \map {\paren {\psi \circ \phi} } y$
$(2): \quad \forall x \in S: \forall \lambda \in R: \map {\paren {\psi \circ \phi} } {\lambda *_1 x} = \lambda *_3 \map \phi x$
where $\closedint 1 n = \set {1, 2, \ldots, n}$ denotes an integer interval.

To prove the above is the case, we need to demonstrate that the morphism property is held by each of the operations $\odot_1, \odot_2, \ldots, \odot_n$ under $\psi \circ \phi$.
Let $\odot_k$ be one of these operations.

We take two elements $x, y \in S_1$, and put them through the following wringer:














\(\ds \map {\paren {\psi \circ \phi} } {x \odot_k y}\)

\(=\)







\(\ds \map \psi {\map \phi {x \odot_k y} }\)





Definition of Composition of Mappings














\(\ds \)

\(=\)







\(\ds \map \psi {\map \phi x {\odot'}_k \map \phi y}\)





Definition of Morphism Property applied to $\phi$














\(\ds \)

\(=\)







\(\ds \map \psi {\map \phi x} {\odot}_k \map \psi {\map \phi y}\)





Definition of Morphism Property applied to $\psi$














\(\ds \)

\(=\)







\(\ds \map {\paren {\psi \circ \phi} } x {\odot}_k \map {\paren {\psi \circ \phi} } y\)





Definition of Composition of Mappings




Hence the morphism property is held by $\odot_k$ under $\psi \circ \phi$.
As $\odot_k$ is an arbitrary operation in $\struct {S_1, \odot_1, \ldots, \odot_n}$, it follows that morphism property is held by all of $\odot_1, \ldots, \odot_n$.
Thus $\paren {\psi \circ \phi}: \struct {S_1, *_1}_R \to \struct {S_3, *_3}_R$ satisfies $(1)$ above.

We take an element $x \in S_1$, and apply the following:














\(\ds \map {\paren {\psi \circ \phi} } {\lambda *_1 x}\)

\(=\)







\(\ds \map \psi {\map \phi {\lambda *_1 x} }\)





Definition of Composition of Mappings














\(\ds \)

\(=\)







\(\ds \map \psi {\lambda *_2 \map \phi x}\)





Definition of Morphism Property applied to $\phi$














\(\ds \)

\(=\)







\(\ds \lambda *_3 \map \psi {\map \phi x}\)





Definition of Morphism Property applied to $\psi$














\(\ds \)

\(=\)







\(\ds \lambda *_3 \map {\paren {\psi \circ \phi} } x\)





Definition of Composition of Mappings




Hence the morphism property is held by $\odot_k$ under $\psi \circ \phi$.
As $\odot_k$ is an arbitrary operation in $\struct {S_1, \odot_1, \ldots, \odot_n}$, it follows that morphism property is held by all of $\odot_1, \ldots, \odot_n$.
Thus $\paren {\psi \circ \phi}: \struct {S_1, *_1}_R \to \struct {S_3, *_3}_R$ satisfies $(2)$ above.

Hence the result.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {V}$: Vector Spaces: $\S 28$. Linear Transformations: Theorem $28.1$




