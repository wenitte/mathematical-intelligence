# 

Source: https://proofwiki.org/wiki/Condition_for_Algebra_Loop_to_be_Abelian_Group

Theorem
Let $\struct {S, \odot}$ be an algebra loop.
Let $\struct {S \times S, \otimes}$ denote the external direct product of $\struct {S, \odot}$ with itself:

$\forall \tuple {x_1, y_1}, \tuple {x_2, y_2} \in S \times S: \tuple {x_1, y_1} \otimes \tuple {x_2, y_2} = \tuple {x_1 \odot x_2, y_1 \odot y_2}$

Let $f$ and $g$ be mappings from $\struct {S \times S, \otimes}$ to $\struct {S, \odot}$.
Let $f \odot g$ denote the pointwise operation on $S^{S \times S}$ induced by $\odot$.

Let $\struct {S, \odot}$ satisfy the condition that:
If $f$ and $g$ are homomorphisms, then $f \odot g$ is also a homomorphism.

Then $\struct {S, \odot}$ is an abelian group.


Proof
Recall that an algebra loop $\struct {S, \circ}$ is a quasigroup with an identity element:

$\exists e \in S: \forall x \in S: x \circ e = x = e \circ x$
From Equivalent Conditions for Entropic Structure: Pointwise Operation of Homomorphisms from External Direct Product is Homomorphism:

$\struct {S, \odot}$ is an entropic structure.
From Entropic Structure with Identity is Commutative Monoid, $\struct {S, \odot}$ is a commutative monoid.
Hence a fortiori $\struct {S, \odot}$ is a commutative semigroup.
From Structure is Group iff Semigroup and Quasigroup, it follows that $\struct {S, \odot}$ is a group.
As $\odot$ is a commutative operation, it follows that $\struct {S, \odot}$ is an abelian group.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 13$: Compositions Induced on Cartesian Products and Function Spaces: Exercise $13.13$




