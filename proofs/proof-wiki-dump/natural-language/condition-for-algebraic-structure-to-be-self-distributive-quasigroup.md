# 

Source: https://proofwiki.org/wiki/Condition_for_Algebraic_Structure_to_be_Self-Distributive_Quasigroup



Theorem
Let $\struct {S, \odot}$ be an algebraic structure.
Then:

$\struct {S, \odot}$ is a self-distributive quasigroup
if and only if:

for every $a \in S$, the left and right regular representations $\lambda_a$ and $\rho_a$ on $S$ are automorphisms of $\struct {S, \odot}$.


Proof
Sufficient Condition
Let $\struct {S, \odot}$ be a self-distributive quasigroup.
By definition of quasigroup, we have that $\lambda_a$ and $\rho_a$ are both permutations on $S$.

It remains for the morphism property to be demonstrated.

Indeed:










\(\ds \forall x, y \in S: \, \)



\(\ds \map {\lambda_a} x \odot \map {\lambda_a} y\)

\(=\)







\(\ds \paren {a \odot x} \odot \paren {a \odot y}\)





Definition of Left Regular Representation














\(\ds \)

\(=\)







\(\ds a \odot \paren {x \odot y}\)





Definition of Self-Distributive Structure














\(\ds \)

\(=\)







\(\ds \map {\lambda_a} {x \odot y}\)





Definition of Left Regular Representation



and:










\(\ds \forall x, y \in S: \, \)



\(\ds \map {\rho_a} x \odot \map {\rho_a} y\)

\(=\)







\(\ds \paren {x \odot a} \odot \paren {y \odot a}\)





Definition of Right Regular Representation














\(\ds \)

\(=\)







\(\ds \paren {x \odot y} \odot a\)





Definition of Self-Distributive Structure














\(\ds \)

\(=\)







\(\ds \map {\rho_a} {x \odot y}\)





Definition of Right Regular Representation




Thus $\lambda_a$ and $\rho_a$ have been shown to be automorphisms of $\struct {S, \odot}$.
$\Box$


Necessary Condition
Let $\odot$ be such that for every $a \in S$, the left and right regular representations $\lambda_a$ and $\rho_a$ on $S$ are automorphisms of $\struct {S, \odot}$.
We have a fortiori that:

$\lambda_a$ and $\rho_a$ are both permutations on $S$
$\lambda_a$ and $\rho_a$ are both homomorphisms of $S$.
Hence by definition $\struct {S, \odot}$ is a quasigroup.

It remains to demonstrate self-distributivity.

Indeed:










\(\ds \forall x, y, z \in S: \, \)



\(\ds x \odot \paren {y \odot z}\)

\(=\)







\(\ds \map {\lambda_x} {y \odot z}\)





Definition of Left Regular Representation














\(\ds \)

\(=\)







\(\ds \map {\lambda_x} y \odot \map {\lambda_x} z\)





as $\lambda_x$ is a homomorphism on $S$














\(\ds \)

\(=\)







\(\ds \paren {x \odot y} \odot \paren {x \odot z}\)





Definition of Left Regular Representation



and:










\(\ds \forall x, y, z \in S: \, \)



\(\ds \paren {x \odot y} \odot z\)

\(=\)







\(\ds \map {\rho_z} {x \odot y}\)





Definition of Right Regular Representation














\(\ds \)

\(=\)







\(\ds \map {\rho_z} x \odot \map {\rho_z} y\)





as $\rho_z$ is a homomorphism on $S$














\(\ds \)

\(=\)







\(\ds \paren {x \odot z} \odot \paren {y \odot z}\)





Definition of Right Regular Representation



Thus $\struct {S, \odot}$ is a self-distributive quasigroup.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 16$: The Natural Numbers: Exercise $16.21 \ \text{(b)}$




