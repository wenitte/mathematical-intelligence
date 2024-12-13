# 

Source: https://proofwiki.org/wiki/Homomorphism_of_Ring_Subtraction

Theorem
Let $\phi: \struct {R_1, +_1, \circ_1} \to \struct {R_2, +_2, \circ_2}$ be a ring homomorphism.

Then:

$\forall a, b \in R_1: \map \phi {a -_1 b} = \map \phi a -_2 \map \phi b$
where $a -_1 b$ denotes subtraction of $b$ from $a$.


Proof













\(\ds \map \phi {a -_1 b}\)

\(=\)







\(\ds \map \phi {a +_1 \paren {-b} }\)





Definition of Ring Subtraction














\(\ds \)

\(=\)







\(\ds \map \phi a +_2 \map \phi {-b}\)





Definition of Ring Homomorphism














\(\ds \)

\(=\)







\(\ds \map \phi a +_2 \paren {-\map \phi b}\)





Ring Homomorphism Preserves Negatives














\(\ds \)

\(=\)







\(\ds \map \phi a -_2 \map \phi b\)





Definition of Ring Subtraction



$\blacksquare$


Sources
1969: C.R.J. Clapham: Introduction to Abstract Algebra ... (previous) ... (next): Chapter $5$: Rings: $\S 24$. Homomorphisms: Theorem $44 \ \text{(iii)}$




