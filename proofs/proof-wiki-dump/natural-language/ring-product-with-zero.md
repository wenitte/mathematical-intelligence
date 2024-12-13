# 

Source: https://proofwiki.org/wiki/Ring_Product_with_Zero

Theorem
Let $\struct {R, +, \circ}$ be a ring whose zero is $0_R$.

Then:

$\forall x \in R: 0_R \circ x = 0_R = x \circ 0_R$

That is, the zero is a zero element for the ring product, thereby justifying its name.


Proof
Because $\struct {R, +, \circ}$ is a ring, $\struct {R, +}$ is a group.
Since $0_R$ is the identity in $\struct {R, +}$, we have $0_R + 0_R = 0_R$.
From the Cancellation Laws, all group elements are cancellable, so every element of $\struct {R, +}$ is cancellable for $+$.

Thus:














\(\ds x \circ \paren {0_R + 0_R}\)

\(=\)







\(\ds x \circ 0_R\)





Definition of Ring Zero








\(\ds \leadsto \ \ \)





\(\ds \paren {x \circ 0_R} + \paren {x \circ 0_R}\)

\(=\)







\(\ds x \circ 0_R\)





Ring Axiom $\text D$: Distributivity of Product over Addition








\(\ds \leadsto \ \ \)





\(\ds \paren {x \circ 0_R} + \paren {x \circ 0_R}\)

\(=\)







\(\ds \paren {x \circ 0_R} + 0_R\)





Definition of Ring Zero








\(\ds \leadsto \ \ \)





\(\ds x \circ 0_R\)

\(=\)







\(\ds 0_R\)





Cancellation Laws




Next:














\(\ds \paren {0_R + 0_R} \circ x\)

\(=\)







\(\ds 0_R \circ x\)





Definition of Ring Zero








\(\ds \leadsto \ \ \)





\(\ds \paren {0_R \circ x} + \paren {0_R \circ x}\)

\(=\)







\(\ds 0_R \circ x\)





Ring Axiom $\text D$: Distributivity of Product over Addition








\(\ds \leadsto \ \ \)





\(\ds \paren {0_R \circ x} + \paren {0_R \circ x}\)

\(=\)







\(\ds 0_R + \paren {0_R \circ x}\)





Definition of Ring Zero








\(\ds \leadsto \ \ \)





\(\ds 0_R \circ x\)

\(=\)







\(\ds 0_R\)





Cancellation Laws



$\blacksquare$


Sources
1964: Iain T. Adamson: Introduction to Field Theory ... (previous) ... (next): Chapter $\text {I}$: Elementary Definitions: $\S 2$. Elementary Properties
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {IV}$: Rings and Fields: $20$. The Integers: Theorem $20.9$
1969: C.R.J. Clapham: Introduction to Abstract Algebra ... (previous) ... (next): Chapter $1$: Integral Domains: $\S 4$. Elementary Properties: Theorem $2 \ \text{(iii)}$
1970: B. Hartley and T.O. Hawkes: Rings, Modules and Linear Algebra ... (previous) ... (next): Chapter $1$: Rings - Definitions and Examples: $3$: Some special classes of rings: Lemma $1.2 \ \text{(i)}$
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 54.1$ The definition of a ring and its elementary consequences
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): Chapter $2$: Integers and natural numbers: $\S 2.1$: The integers
1989: Ephraim J. Borowski and Jonathan M. Borwein: Dictionary of Mathematics ... (previous) ... (next): zero: 2b.
2008: Paul Halmos and Steven Givant: Introduction to Boolean Algebras ... (previous) ... (next): $\S 1$: Exercise $6$




