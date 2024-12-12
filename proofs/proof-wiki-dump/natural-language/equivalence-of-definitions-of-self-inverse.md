# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Self-Inverse



Theorem
Let $\struct {S, \circ}$ be a monoid whose identity is $e_S$.
Let $x \in S$.

The following definitions of the concept of Self-Inverse Element in the context of Abstract Algebra are equivalent:

Definition 1
$x$ is a self-inverse element of $\struct {S, \circ}$ if and only if $x \circ x = e_S$.

Definition 2
$x$ is a self-inverse element of $\struct {S, \circ}$ if and only if:

$x$ is invertible
and:

$x = x^{-1}$, where $x^{-1}$ is the inverse of $x$.


Proof
Let $x \in S$.














\(\ds x \circ x\)

\(=\)







\(\ds e_S\)





by hypothesis








\(\ds \leadstoandfrom \ \ \)





\(\ds \paren {x \circ x} \circ x^{-1}\)

\(=\)







\(\ds e_S \circ x^{-1}\)





Monoid Axiom $\text S 0$: Closure








\(\ds \leadstoandfrom \ \ \)





\(\ds x \circ \paren {x \circ x^{-1} }\)

\(=\)







\(\ds e_S \circ x^{-1}\)





Monoid Axiom $\text S 1$: Associativity








\(\ds \leadstoandfrom \ \ \)





\(\ds x \circ \paren {x \circ x^{-1} }\)

\(=\)







\(\ds x^{-1}\)





Monoid Axiom $\text S 2$: Identity








\(\ds \leadstoandfrom \ \ \)





\(\ds x \circ e_S\)

\(=\)







\(\ds x^{-1}\)





Definition of Inverse Element








\(\ds \leadstoandfrom \ \ \)





\(\ds x\)

\(=\)







\(\ds x^{-1}\)





Monoid Axiom $\text S 2$: Identity



$\blacksquare$





