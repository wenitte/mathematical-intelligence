# 

Source: https://proofwiki.org/wiki/Ring_Homomorphism_from_Field_is_Monomorphism_or_Zero_Homomorphism/Proof_2

Theorem
Let $\struct {F, +_F, \circ}$ be a field whose zero is $0_F$.
Let $\struct {S, +_S, *}$ be a ring whose zero is $0_S$.
Let $\phi: F \to S$ be a ring homomorphism.

Then either:

$(1): \quad \phi$ is a monomorphism (that is, $\phi$ is injective)
or

$(2): \quad \phi$ is the zero homomorphism (that is, $\forall a \in F: \map \phi a = 0_S$).


Proof
Let $\phi: F \to S$ be a ring homomorphism.
Suppose $\phi$ is not a monomorphism.
By definition, $\phi$ is not an injection.
So there must exist $a, b \in F: \map \phi a = \map \phi b$.
Let $k = a +_F \paren {-b}$.
Then:














\(\ds \map \phi k\)

\(=\)







\(\ds \map \phi {a +_F \paren {-b} }\)




















\(\ds \)

\(=\)







\(\ds \map \phi a +_S \map \phi {-b}\)




















\(\ds \)

\(=\)







\(\ds \map \phi a +_S \paren {-\map \phi b}\)




















\(\ds \)

\(=\)







\(\ds 0_S\)





as $\map \phi a = \map \phi b$




As $a \ne b$ then $k \ne 0$ and so has a product inverse $\exists k^{-1} \in F$.
So for any $x \in F$ we can write $x = k \circ \paren {k^{-1} \circ x}$ and so:














\(\ds \map \phi x\)

\(=\)







\(\ds \map \phi {k \circ \paren {k^{-1} \circ x} }\)




















\(\ds \)

\(=\)







\(\ds \map \phi k * \map \phi {k^{-1} \circ x}\)




















\(\ds \)

\(=\)







\(\ds 0_S * \map \phi {k^{-1} \circ x}\)




















\(\ds \)

\(=\)







\(\ds 0_S\)









So if $\phi$ is not a monomorphism, it is the zero homomorphism.
$\blacksquare$


Sources
1964: Iain T. Adamson: Introduction to Field Theory ... (previous) ... (next): Chapter $\text {I}$: Elementary Definitions: $\S 3$. Homomorphisms: Theorem $3.1$



