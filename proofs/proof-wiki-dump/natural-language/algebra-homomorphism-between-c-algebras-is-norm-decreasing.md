# 

Source: https://proofwiki.org/wiki/*-Algebra_Homomorphism_between_C*-Algebras_is_Norm-Decreasing

Theorem
Let $\struct {A, \ast, \norm {\, \cdot \,}_A}$ and $\struct {B, \dagger, \norm {\, \cdot \,}_B}$ be $\text C^\ast$-algebras.
Let $\phi : A \to B$ be a $\ast$-algebra homomorphism.

Then:

$\norm {\map \phi x}_B \le \norm x_A$ for each $x \in A$.


Proof
Let $x \in A$.
Then:














\(\ds \norm {\map \phi x}_B\)

\(=\)







\(\ds \norm {\map \phi x \paren {\map \phi x}^\dagger}_B\)





Definition of C*-Algebra














\(\ds \)

\(=\)







\(\ds \map {r_B} {\map \phi x \paren {\map \phi x}^\dagger}\)





Spectral Radius of Normal Element of C*-Algebra Equal to Norm














\(\ds \)

\(=\)







\(\ds \map {r_B} {\map \phi {x x^\ast} }\)





Definition of *-Algebra Homomorphism



From Spectrum of Image of Element of Unital Algebra under Unital Algebra Homomorphism: Corollary, we have:

$\map {\sigma_B} {\map \phi {x x^\ast} } \cup \set 0 \subseteq \map {\sigma_A} {x x^\ast} \cup \set 0$
Hence we have:














\(\ds \map {r_B} {\map \phi {x x^\ast} }\)

\(=\)







\(\ds \sup \set {\cmod z : z \in \map {\sigma_B} {\map \phi {x x^\ast} } }\)





Definition of Spectral Radius














\(\ds \)

\(=\)







\(\ds \sup \set {\cmod z : z \in \map {\sigma_B} {\map \phi {x x^\ast} } \cup \set 0}\)




















\(\ds \)

\(\le\)







\(\ds \sup \set {\cmod z : z \in \map {\sigma_A} {x x^\ast} \cup \set 0}\)





since $\map {\sigma_B} {\map \phi {x x^\ast} } \cup \set 0 \subseteq \map {\sigma_A} {x x^\ast} \cup \set 0$














\(\ds \)

\(=\)







\(\ds \sup \set {\cmod z : z \in \map {\sigma_A} {x x^\ast} }\)




















\(\ds \)

\(=\)







\(\ds \map {r_A} {x x^\ast}\)





Definition of Spectral Radius














\(\ds \)

\(=\)







\(\ds \norm {x x^\ast}_A\)





Spectral Radius of Normal Element of C*-Algebra Equal to Norm














\(\ds \)

\(=\)







\(\ds \norm x^2_A\)





Definition of C*-Algebra



Hence we obtain:

$\norm {\map \phi x}_B^2 \le \norm x^2_A$
So:

$\norm {\map \phi x}_B \le \norm x_A$ for each $x \in A$.
$\blacksquare$





