# 

Source: https://proofwiki.org/wiki/Quotient_Epimorphism_is_Epimorphism/Ring

Theorem
Let $\struct {R, +, \circ}$ be a ring whose zero is $0_R$ and whose unity is $1_R$.
Let $J$ be an ideal of $R$.
Let $\struct {R / J, +, \circ}$ be the quotient ring defined by $J$.

Let $\phi: R \to R / J$ be the quotient (ring) epimorphism from $R$ to $R / J$:

$x \in R: \map \phi x = x + J$

Then $\phi$ is a ring epimorphism whose kernel is $J$.


Proof
Let $x, y \in R$.
Then:














\(\ds \map \phi {x + y}\)

\(=\)







\(\ds \paren {x + y} + J\)





Definition of $\phi$














\(\ds \)

\(=\)







\(\ds \paren {x + J} + \paren {y + J}\)





Definition of Quotient Ring Addition














\(\ds \)

\(=\)







\(\ds \map \phi x + \map \phi y\)









and:














\(\ds \map \phi {x \circ y}\)

\(=\)







\(\ds \paren {x \circ y} + J\)





Definition of $\phi$














\(\ds \)

\(=\)







\(\ds \paren {x + J} \circ \paren {y + J}\)





Definition of Quotient Ring Product














\(\ds \)

\(=\)







\(\ds \map \phi x \, \map \phi y\)









Thus $\phi$ is a homomorphism.

$\phi$ is surjective because:

$\forall x + J \in R / J: x + J = \map \phi x$
Therefore $\phi$ is an epimorphism.

Let $x \in \map \ker \phi$.
Then:














\(\ds x\)

\(\in\)







\(\ds \map \ker \phi\)














\(\ds \leadstoandfrom \ \ \)





\(\ds \map \phi x\)

\(=\)







\(\ds 0_{R/J}\)





Definition of Kernel of Ring Homomorphism








\(\ds \leadstoandfrom \ \ \)





\(\ds x + J\)

\(=\)







\(\ds J\)





$J$ is the zero of $\struct {R / J, +, \circ}$








\(\ds \leadstoandfrom \ \ \)





\(\ds x\)

\(\in\)







\(\ds J\)





Left Coset Equals Subgroup iff Element in Subgroup




Thus:

$\map \ker \phi = J$
$\blacksquare$


Sources
1969: C.R.J. Clapham: Introduction to Abstract Algebra ... (previous) ... (next): Chapter $5$: Rings: $\S 24$. Homomorphisms: Example $46$
1970: B. Hartley and T.O. Hawkes: Rings, Modules and Linear Algebra ... (previous) ... (next): $\S 2.2$: Homomorphisms: Lemma $2.7$
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 60.2$ Factor rings: $\text{(ii)}$




