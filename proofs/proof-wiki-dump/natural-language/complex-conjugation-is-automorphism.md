# 

Source: https://proofwiki.org/wiki/Complex_Conjugation_is_Automorphism

Theorem
Consider the field of complex numbers $\C$.
The operation of complex conjugation:

$\forall z \in \C: z \mapsto \overline z$
is a field automorphism.


Proof
Let $z_1 = x_1 + i y_1, z_2 = x_2 + i y_2$.
Let us define the mapping $\phi: \C \to \C$ defined as:

$\forall z \in \C: \map \phi z = \overline z$

We check that $\phi$ has the morphism property:
By Sum of Complex Conjugates:

$\map \phi {z_1 + z_2} = \map \phi {z_1} + \map \phi {z_2}$
By Product of Complex Conjugates:

$\map \phi {z_1 z_2} = \map \phi {z_1} \map \phi {z_2}$
So the morphism property holds for both complex addition and complex multiplication.
Hence we can say that complex conjugation is a field homomorphism.
We note that $\overline z_1 = \overline z_2 \implies z_1 = z_2$ and so complex conjugation is injective.
Also, complex conjugation is trivially surjective, and hence bijective.
The result then follows by definition of field automorphism.
$\blacksquare$


Sources
1964: Iain T. Adamson: Introduction to Field Theory ... (previous) ... (next): Chapter $\text {I}$: Elementary Definitions: $\S 3$. Homomorphisms: Example $5$
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): automorphism
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): automorphism




