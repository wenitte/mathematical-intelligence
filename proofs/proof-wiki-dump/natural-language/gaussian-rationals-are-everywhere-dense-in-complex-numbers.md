# 

Source: https://proofwiki.org/wiki/Gaussian_Rationals_are_Everywhere_Dense_in_Complex_Numbers

Theorem
Let $\struct {\C, \cmod {\, \cdot \,}}$ be the normed vector space of complex numbers.
Let $\Q \sqbrk i = \set {a + i b: a, b \in \Q}$ be the set of Gaussian rational numbers.

Then $\Q \sqbrk i$ is everywhere dense in $\struct {\C, \cmod {\, \cdot \,}}$.


Proof
Let $z = x + i y \in \C$ be a complex number.
Let $q = a + i b \in \Q \sqbrk i$ be a Gaussian rational number.
Then:














\(\ds \cmod {z - q}\)

\(=\)







\(\ds \cmod {\paren {x + i y} - \paren {a + i b} }\)




















\(\ds \)

\(=\)







\(\ds \cmod {x - a + i \paren {y - b} }\)




















\(\ds \)

\(\le\)







\(\ds \cmod {x - a} + \cmod {i \paren {y - b} }\)





Norm Axiom $\text N 3$: Triangle Inequality














\(\ds \)

\(=\)







\(\ds \size {x - a} + \size {y - b}\)









We have that rationals are everywhere dense in reals.
Then:

$\forall x \in \R: \forall \epsilon_x \in \R_{> 0}: \exists a \in \Q: \size {x - a} < \epsilon_x$
$\forall y \in \R: \forall \epsilon_y \in \R_{> 0}: \exists b \in \Q: \size {y - b} < \epsilon_y$
Let $\epsilon \in \R_{> 0}$.
Let $\epsilon_x, \epsilon_y \in \R_{> 0}$ be such that $\epsilon_x + \epsilon_y < \epsilon$.
Then:

$\exists q \in \Q \sqbrk i: \cmod {z - q} < \epsilon$
$z$ and $\epsilon$ were arbitary.
Therefore:

$\forall z \in \C: \forall \epsilon \in \R_{> 0}: \exists q \in \Q \sqbrk i: \cmod {z - q} < \epsilon$
By definition, $\Q \sqbrk i$ is everywhere dense in $\C$.
$\blacksquare$





