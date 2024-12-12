# 

Source: https://proofwiki.org/wiki/Composition_of_Product_Mappings_on_Natural_Numbers

Theorem
Let $a \in \N$ be a natural number.
Let $\mu_a: \N \to \N$ be the mapping defined as:

$\forall x \in \N: \map {\mu_a} x = x a$

Then:

$\mu_{a b} = \mu_b \circ \mu_a$


Proof













\(\ds \mu_{a b}\)

\(=\)







\(\ds x \paren {a b}\)





Definition of $\mu$














\(\ds \)

\(=\)







\(\ds \paren {x a} b\)




















\(\ds \)

\(=\)







\(\ds \paren {\map {\mu_a} x} b\)





Definition of $\mu$














\(\ds \)

\(=\)







\(\ds \map {\mu_b} {\map {\mu_a} x}\)





Definition of $\mu$














\(\ds \)

\(=\)







\(\ds \map {\paren {\mu_b \circ \mu_a} } x\)





Definition of Composition of Mappings



$\blacksquare$


Sources
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): Chapter $1$: Sets and mappings: $\S 1.3$: Mappings: Exercise $7$




