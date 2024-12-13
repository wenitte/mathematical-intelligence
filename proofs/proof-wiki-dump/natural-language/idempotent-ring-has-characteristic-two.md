# 

Source: https://proofwiki.org/wiki/Idempotent_Ring_has_Characteristic_Two



Theorem
Let $\struct {R, +, \circ}$ be an idempotent non-null ring.
Denote with $0_R$ the zero of $R$.

Then $\struct {R, +, \circ}$ has characteristic $2$.


Corollary
$\forall x \in R: -x = x$


Proof
Let $x \in R$.
Then:














\(\ds x + x\)

\(=\)







\(\ds \paren {x + x}^2\)





Definition of Idempotent Ring














\(\ds \)

\(=\)







\(\ds \paren {x + x} \paren {x + x}\)




















\(\ds \)

\(=\)







\(\ds x \paren {x + x} + x \paren {x + x}\)





Ring Axiom $\text D$: Distributivity of Product over Addition














\(\ds \)

\(=\)







\(\ds x^2 + x^2 + x^2 + x^2\)





Ring Axiom $\text D$: Distributivity of Product over Addition again














\(\ds \)

\(=\)







\(\ds x + x + x + x\)





Definition of Idempotent Ring








\(\ds \leadsto \ \ \)





\(\ds 0_R\)

\(=\)







\(\ds x + x\)





$\struct {\R, +}$ is a group, so Cancellation Laws apply



Hence the result.
$\blacksquare$


Sources
2008: Paul Halmos and Steven Givant: Introduction to Boolean Algebras ... (previous) ... (next): $\S 1$




