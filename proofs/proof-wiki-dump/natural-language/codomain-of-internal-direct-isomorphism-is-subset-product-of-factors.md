# 

Source: https://proofwiki.org/wiki/Codomain_of_Internal_Direct_Isomorphism_is_Subset_Product_of_Factors

Theorem
Let $\struct {S, \circ}$ be an algebraic structure with $1$ operation.
Let $\struct {A, \circ {\restriction_A} }$ and $\struct {B, \circ {\restriction_B} }$ be closed algebraic substructures of $\struct {S, \circ}$, where $\circ {\restriction_A}$ and $\circ {\restriction_B}$ are the operations induced by the restrictions of $\circ$ to $A$ and $B$ respectively.

Let $\struct {S, \circ}$ be the internal direct product of $A$ and $B$.
Then $S$ is the subset product of $A$ and $B$:

$S = A \circ B$


Proof
First we establish that from Set of Finite Subsets under Induced Operation is Closed:

$A \times B \subseteq S$
From Condition for Mapping between Structure and Cartesian Product of Substructures to be Bijection:

$\phi$ is a bijection
if and only if:

for all $s \in S$: there exists a unique $\tuple {a, b} \in A \times B$ such that $a \circ b = s$.
By definition of internal direct product:

the mapping $\phi: A \times B \to S$ defined as:
$\forall a \in A, b \in B: \map \phi {a, b} = a \circ b$
is an isomorphism from the (external) direct product $\struct {A, \circ {\restriction_A} } \times \struct {B, \circ {\restriction_B} }$ onto $\struct {S, \circ}$.
Thus $\phi$ is a fortiori a bijection.
From Condition for Mapping between Structure and Cartesian Product of Substructures to be Bijection it follows that:

for all $s \in S$: there exists a unique $\tuple {a, b} \in A \times B$ such that $a \circ b = s$.
That is:

$S = \set {a \circ b: \tuple {a, b} \in A \times B}$
Hence $S = A \circ B$ by definition of subset product.
$\blacksquare$





