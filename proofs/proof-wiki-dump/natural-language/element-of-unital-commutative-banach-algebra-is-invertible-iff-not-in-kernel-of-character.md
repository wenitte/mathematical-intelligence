# 

Source: https://proofwiki.org/wiki/Element_of_Unital_Commutative_Banach_Algebra_is_Invertible_iff_not_in_Kernel_of_Character

Theorem
Let $\struct {A, \norm {\, \cdot \,} }$ be a commutative unital Banach algebra over $\C$. 
Let $a \in A$.

Then $x$ is invertible if and only if:

for every character $\phi$ of $A$, we have $a \not \in \ker \phi$.


Proof
From Element of Unital Commutative Algebra Invertible iff not Contained in Maximal Ideal, we have that $a$ is invertible if and only if:

for every maximal ideal $M$ of $A$, we have $a \not \in M$.
From Characterization of Maximal Ideal of Unital Commutative Banach Algebra, we have that:

$M$ is a maximal ideal of $A$ if and only if there exists a character $\phi$ of $A$ with $M = \ker \phi$.
Hence $a$ is invertible if and only if:

for every character $\phi$ of $A$, we have $a \not \in \ker \phi$.
$\blacksquare$





