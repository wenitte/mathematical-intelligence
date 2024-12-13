# 

Source: https://proofwiki.org/wiki/Odd_Order_Group_Element_is_Square/Corollary

Corollary to Odd Order Group Element is Square
Let $\struct {G, \circ}$ be a finite group.
Then:

$\forall x \in G: \exists y \in G: y^2 = x$
if and only if $\order G$ is odd.


Proof
Suppose $\order G$ is odd.
Then from Order of Element Divides Order of Finite Group, all elements of $G$ are of odd order.
Hence:

$\forall x \in G: \exists y \in G: y^2 = x$
from Odd Order Group Element is Square.
$\Box$

Now suppose that:

$\forall x \in G: \exists y \in G: y^2 = x$
From Odd Order Group Element is Square it follows that all elements of $G$ are of odd order.
Aiming for a contradiction, suppose $\order G$ is even.
From Cauchy's Lemma (Group Theory) it follows that there exist elements in $G$ of even order.
From that contradiction we conclude that $\order G$ is odd.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {IV}$: Rings and Fields: $25$. Cyclic Groups and Lagrange's Theorem: Exercise $25.12 \ \text{(b)}$




