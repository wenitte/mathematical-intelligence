# 

Source: https://proofwiki.org/wiki/Character_on_Unital_C*-Algebra_has_Modulus_One_at_Unitary_Elements

Theorem
Let $\tuple {A, \ast, \norm {\, \cdot \,} }$ be a unital $\text C^\ast$-algebra.
Let $\phi$ be a character on $A$.
Let $x \in A$ be unitary.

Then:

$\cmod {\map \phi x} = 1$


Proof
Let ${\mathbf 1}_A$ be the identity element of $A$. 
Since $x$ is unitary, we have:

$x x^\ast = {\mathbf 1}_A$
Hence:

$\map \phi {x x^\ast} = \map \phi { {\mathbf 1}_A}$
From Character on C*-Algebra is *-Algebra Homomorphism, we have:

$\map \phi {x x^\ast} = \map \phi x \map \phi {x^\ast} = \map \phi x \overline {\map \phi x}$
From Product of Complex Number with Conjugate, we therefore have:

$\map \phi {x x^\ast} = \cmod {\map \phi x}^2$
From Character on Unital Banach Algebra is Unital Algebra Homomorphism, we have:

$\map \phi { {\mathbf 1}_A} = 1$
So we have:

$\cmod {\map \phi x}^2 = 1$
giving:

$\cmod {\map \phi x} = 1$
$\blacksquare$





