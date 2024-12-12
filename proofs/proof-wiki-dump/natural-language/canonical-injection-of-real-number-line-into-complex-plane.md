# 

Source: https://proofwiki.org/wiki/Canonical_Injection_of_Real_Number_Line_into_Complex_Plane

Theorem
Let $\struct {\C, +}$ be the additive group of complex numbers.
Let $\struct {\R, +}$ be the additive group of real numbers.
Let $f: \R \to \C$ be the mapping from the real numbers to the complex numbers defined as:

$\forall x \in \R: \map f z = x + 0 y$

Then $f: \struct {\R, +} \to \struct {\C, +}$ is a monomorphism.


Proof
Consider the mapping $g: \C \to \R$ defined as:

$\forall z \in \C: \map f z = \map \Re z$
where $\map \Re z$ denotes the real part of $z$.
From Real Part as Mapping is Endomorphism for Complex Addition, this is a projection from $\C$ to $\R$.
The result follows from Canonical Injection is Right Inverse of Projection.
$\blacksquare$


Sources
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): Chapter $\text{II}$: Groups: Direct Products




