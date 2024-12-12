# 

Source: https://proofwiki.org/wiki/Composition_of_Addition_Mappings_on_Natural_Numbers

Theorem
Let $a \in \N$ be a natural number.
Let $\alpha_a: \N \to \N$ be the mapping defined as:

$\forall x \in \N: \map {\alpha_a} x = x + a$

Then:

$\alpha_{a + b} = \alpha_b \circ \alpha_a$


Proof













\(\ds \alpha_{a + b}\)

\(=\)







\(\ds x + \paren {a + b}\)





Definition of $\alpha$














\(\ds \)

\(=\)







\(\ds \paren {x + a} + b\)




















\(\ds \)

\(=\)







\(\ds \paren {\map {\alpha_a} x} + b\)





Definition of $\alpha$














\(\ds \)

\(=\)







\(\ds \map {\alpha_b} {\map {\alpha_a} x}\)





Definition of $\alpha$














\(\ds \)

\(=\)







\(\ds \map {\paren {\alpha_b \circ \alpha_a} } x\)





Definition of Composition of Mappings



$\blacksquare$


Sources
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): Chapter $1$: Sets and mappings: $\S 1.3$: Mappings: Exercise $7$




