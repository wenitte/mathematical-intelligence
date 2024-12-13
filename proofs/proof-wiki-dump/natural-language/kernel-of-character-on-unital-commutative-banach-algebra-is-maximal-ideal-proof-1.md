# 

Source: https://proofwiki.org/wiki/Kernel_of_Character_on_Unital_Commutative_Banach_Algebra_is_Maximal_Ideal/Proof_1

Theorem
Let $\struct {A, \norm {\, \cdot \,} }$ be a unital commutative Banach algebra over $\C$. 
Let $\phi : A \to \C$ be a character on $A$. 

Then $\ker \phi$ is a maximal ideal of $A$.


Proof
From Kernel of Ring Homomorphism is Ideal, $\ker \phi$ is a ring ideal of $A$. 
From the First Ring Isomorphism Theorem, we have:

$\phi \sqbrk A$ and $\dfrac A {\ker \phi}$ are isomorphic as rings.
From Character on Banach Algebra is Surjective, we have that $\phi \sqbrk A = \C$.
Hence:

$\dfrac A {\ker \phi} \cong \C$
That is:

$\dfrac A {\ker \phi}$ is a field.
From Maximal Ideal iff Quotient Ring is Field, we conclude that $\ker \phi$ is a maximal ideal of $A$ in the sense of a ring.
From Kernel of Linear Transformation is Linear Subspace, $\ker \phi$ is a maximal ideal in the sense of an algebra as well.
$\blacksquare$





