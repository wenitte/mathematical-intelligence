# 

Source: https://proofwiki.org/wiki/Ring_Monomorphism_from_Integers_to_Rationals

Theorem
Let $\phi: \Z \to \Q$ be the mapping from the integers $\Z$ to the rational numbers $\Q$ defined as:

$\forall x \in \Z: \map \phi x = \dfrac x 1$

Then $\phi$ is a (ring) monomorphism, but specifically not an epimorphism.


Proof
First note that:

$\forall a, b \in \Z:  a \ne b \implies \dfrac a 1 = \map \phi a \ne \map \phi b = \dfrac b 1$
and so clearly $\phi$ is an injection.
However, take for example $\dfrac 1 2$:

$\not \exists a \in \Z: \map \phi a = \dfrac 1 2$
as $\dfrac 1 2 \notin \Img \phi$.
So $\phi$ is not a surjection.

Next let $a, b \in \Z$.














\(\ds \map \phi {a + b}\)

\(=\)







\(\ds \frac {a + b} 1\)




















\(\ds \)

\(=\)







\(\ds \frac a 1 + \frac b 1\)




















\(\ds \)

\(=\)







\(\ds \map \phi a + \map \phi b\)
























\(\ds \map \phi {a \times b}\)

\(=\)







\(\ds \frac {a \times b} 1\)




















\(\ds \)

\(=\)







\(\ds \frac {a \times b} {1 \times 1}\)




















\(\ds \)

\(=\)







\(\ds \frac a 1 \times \frac b 1\)




















\(\ds \)

\(=\)







\(\ds \map \phi a \times \map \phi b\)










So $\phi$ can be seen to be an injective, but not surjective, ring homomorphism.
Hence the result by definition of ring monomorphism and ring epimorphism.
$\blacksquare$


Sources
1964: Iain T. Adamson: Introduction to Field Theory ... (previous) ... (next): Chapter $\text {I}$: Elementary Definitions: $\S 3$. Homomorphisms: Example $4$




