# 

Source: https://proofwiki.org/wiki/Character_on_Unital_Banach_Algebra_is_Unital_Algebra_Homomorphism

Theorem
Let $\struct {A, \norm {\, \cdot \,} }$ be a unital Banach algebra over $\C$.
Let $\phi : A \to \C$ be a character on $A$. 

Then $\phi$ is a unital algebra homomorphism.


Proof
By the definition of a character, $\phi$ is a non-zero algebra homomorphism.
We only need to verify that:

$\map \phi { {\mathbf 1}_A} = 1$
We have:

$\map \phi { {\mathbf 1}_A} = \map \phi { {\mathbf 1}_A^2} = \paren {\map \phi { {\mathbf 1}_A} }^2$
So, we have:

$\map \phi { {\mathbf 1}_A} \in \set {0, 1}$
Note that for all $x \in A$, we have:

$\map \phi x = \map \phi { {\mathbf 1}_A} \map \phi x$
Hence if we had $\map \phi { {\mathbf 1}_A} = 0$, we would have $\phi = 0$.
Since $\phi \ne 0$, we must therefore have $\map \phi { {\mathbf 1}_A} = 1$.
So $\phi$ is a unital algebra homomorphism.
$\blacksquare$


Sources
2011: Graham R. Allan and H. Garth Dales: Introduction to Banach Spaces and Algebras ... (previous) ... (next): $4.10$: The continuity of characters




