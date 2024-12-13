# 

Source: https://proofwiki.org/wiki/Imaginary_Part_as_Mapping_is_Endomorphism_for_Complex_Addition



Theorem
Let $\struct {\C, +}$ be the additive group of complex numbers.
Let $\struct {\R, +}$ be the additive group of real numbers.
Let $f: \C \to \R$ be the mapping from the complex numbers to the real numbers defined as:

$\forall z \in \C: \map f z = \map \Im z$
where $\map \Im z$ denotes the imaginary part of $z$.

Then $f: \struct {\C, +} \to \struct {\R, +}$ is a group epimorphism.

Its kernel is the set:

$\map \ker f = \R$
of (wholly) real numbers.


Proof
From Imaginary Part as Mapping is Surjection, $f$ is a surjection.

Let $z_1, z_2 \in \C$.
Let $z_1 = x_1 + i y_1, z_2 = x_2 + i y_2$.
Then:














\(\ds \map f {z_1 + z_2}\)

\(=\)







\(\ds \map \Im {z_1 + z_2}\)





Definition of $f$














\(\ds \)

\(=\)







\(\ds \map \Im {x_1 + i y_1 + x_2 + i y_2}\)





Definition of $z_1$ and $z_2$














\(\ds \)

\(=\)







\(\ds y_1 + y_2\)





Definition of Imaginary Part














\(\ds \)

\(=\)







\(\ds \map \Im {z_1} + \map \Im {z_2}\)





Definition of Imaginary Part














\(\ds \)

\(=\)







\(\ds \map f {z_1} + \map f {z_2}\)





Definition of $f$



So $f$ is a group homomorphism.
Thus $f$ is a surjective group homomorphism and therefore by definition a group epimorphism.

Finally:

$\forall y \in \R: \map \Im {x + 0 i} = 0 i = 0$
It follows from Complex Addition Identity is Zero that: 

$\map \ker f = \set {x: x \in \R} = \R$
$\blacksquare$


Also see
Real Part as Mapping is Endomorphism for Complex Addition


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 12$: Homomorphisms: Example $12.3$
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): Chapter $\text{II}$: Groups: Direct Products




