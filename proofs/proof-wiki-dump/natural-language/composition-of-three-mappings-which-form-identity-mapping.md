# 

Source: https://proofwiki.org/wiki/Composition_of_Three_Mappings_which_form_Identity_Mapping

Theorem
Let $A$, $B$ and $C$ be non-empty sets.
Let $f: A \to B$, $g: B \to C$ and $h: C \to A$ be mappings.

Let the following hold:














\(\ds h \circ g \circ f\)

\(=\)







\(\ds I_A\)




















\(\ds f \circ h \circ g\)

\(=\)







\(\ds I_B\)




















\(\ds g \circ f \circ h\)

\(=\)







\(\ds I_C\)









where:

$g \circ f$ (and so on) denote composition of mappings
$I_A$ (and so on) denote the identity mappings.

Then each of $f$, $g$ and $h$ are bijections, and:














\(\ds f^{-1}\)

\(=\)







\(\ds h \circ g\)




















\(\ds g^{-1}\)

\(=\)







\(\ds f \circ h\)




















\(\ds h^{-1}\)

\(=\)







\(\ds g \circ f\)









where $f^{-1}$ (and so on) denote the inverse mappings.


Proof
First note that from Composition of Mappings is Associative:

$\paren {h \circ g} \circ f = h \circ \paren {g \circ f}$
and so on.
However, while there is no need to use parenthesis to establish the order of composition of mappings, in the following the technique will be used in order to clarify what is being done.

We have that:

$\paren {h \circ g} \circ f = I_A$
It follows from Injection iff Left Inverse that $f$ is an injection.
We also have that:

$f \circ \paren {h \circ g} = I_B$
It follows from Surjection iff Right Inverse that $f$ is a surjection.
So $f$ is a bijection.

It follows from the corollary to Bijection iff Left and Right Inverse that $h \circ g$ is also a bijection.
Thus we have that $h \circ g$ is both a left inverse and a right inverse of $f$.
It follows by definition that $h \circ g$ is the inverse of $f$:

$f^{-1} = h \circ g$

The same argument, mutatis mutandis, can be used to show that:

$g$ and $h$ are bijections
the inverse of $g$ is $f \circ h$
the inverse of $h$ is $g \circ f$.
$\blacksquare$


Sources
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): Chapter $1$: Sets and mappings: $\S 1.3$: Mappings: Exercise $4$




