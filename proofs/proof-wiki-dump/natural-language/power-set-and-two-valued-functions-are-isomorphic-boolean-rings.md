# 

Source: https://proofwiki.org/wiki/Power_Set_and_Two-Valued_Functions_are_Isomorphic_Boolean_Rings

Theorem
Let $S$ be a set.
Let $\mathbf 2$ be the Boolean ring two.
Let $\powerset S$ be the power set of $S$; by Power Set is Boolean Ring, it is a Boolean ring.
Let $\mathbf 2^S$ be the set of all mappings $f: S \to \mathbf 2$; by Two-Valued Functions form Boolean Ring, it is also a Boolean ring

Let $\chi_{\paren \cdot}: \powerset S \to \mathbf 2^S$ be the characteristic function operation.

Then $\chi_{\paren \cdot}$ is a ring isomorphism.


Proof
From Support Operation Inverse to Characteristic Function Operation, $\chi_{\paren \cdot}$ is a bijection.
It therefore suffices to establish it is a ring homomorphism.

By Characteristic Function of Symmetric Difference:

$\chi_{A * B} = \chi_A + \chi_B - 2 \chi_A \chi_B$
Since $\mathbf 2^S$ is a Boolean ring, by Idempotent Ring has Characteristic Two, the right hand side reduces to:

$\chi_{A * B} = \chi_A + \chi_B$
showing that $\chi_{\paren \cdot}$ preserves ring addition.
By Characteristic Function of Intersection: Variant 1:

$\chi_{A \cap B} = \chi_A \cdot \chi_B$
showing that $\chi_{\paren \cdot}$ preserves the ring product.

Hence $\chi_{\paren \cdot}$ is a ring homomorphism.
The result follows.
$\blacksquare$


Sources
2008: Paul Halmos and Steven Givant: Introduction to Boolean Algebras ... (previous) ... (next): $\S 3$




