# 

Source: https://proofwiki.org/wiki/Character_on_Banach_Algebra_is_Surjective/Proof_1

Theorem
Let $\struct {A, \norm {\, \cdot \,} }$ be a Banach algebra over $\C$. 
Let $\phi : A \to \C$ be a character on $A$. 

Then $\phi$ is surjective.


Proof
From Image of Submodule under Linear Transformation is Submodule, $\phi \sqbrk A$ is a vector subspace of $\C$. 
From Dimension of Proper Subspace is Less Than its Superspace, we have:

$\dim \phi \sqbrk A \le \dim \C = 1$
and so we either have $\phi \sqbrk A = \set 0$ or $\phi \sqbrk A = \C$.
Since $\phi \ne 0$ by the definition of a character, we have $\phi \sqbrk A = \C$.
$\blacksquare$





