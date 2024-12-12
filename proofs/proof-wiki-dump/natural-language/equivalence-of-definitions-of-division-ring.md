# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Division_Ring



Theorem
The following definitions of the concept of Division Ring are equivalent:
A division ring is a ring with unity $\struct {R, +, \circ}$ with the following properties:

Definition 1
$\forall x \in R_{\ne 0_R}: \exists! x^{-1} \in R_{\ne 0_R}: x^{-1} \circ x = x \circ x^{-1} = 1_R$
where $R^*$ denotes the set of elements of $R$ without the ring zero $0_R$:

$R_{\ne 0_R} = R \setminus \set {0_R}$
That is, every non-zero element of $R$ has a (unique) non-zero product inverse.

Definition 2
Every non-zero element of $R$ is a unit.
Definition 3
$R$ has no proper elements.


Proof
In the following, let:

$0_R$ denote the zero of $R$
$1_R$ denote the unity of $R$
$R^*$ denote the set of elements of $R$ without $0_R$.


$(1)$ implies $(2)$
Let $\struct {R, +, \circ}$ be a division ring by definition 1.
Then by definition:

$\forall x \in R^*: \exists! x^{-1} \in R^*: x^{-1} \circ x = x \circ x^{-1} = 1_R$
That is, $x^{-1}$ is the (unique) product inverse of $x$.
Thus, by definition, $x$ is a unit of $R$.
Thus $\struct {R, +, \circ}$ is a division ring by definition 2.
$\Box$


$(2)$ implies $(1)$
Let $\struct {R, +, \circ}$ be a division ring by definition 2.
Then by definition:

$\forall x \in \R^*: x$ is a unit.
Thus, by definition, $x$ has a product inverse $x^{-1}$.

From Product Inverse in Ring is Unique it follows that:

$\forall x \in R^*: \exists! x^{-1} \in R^*: x^{-1} \circ x = x \circ x^{-1} = 1_R$

Thus $\struct {R, +, \circ}$ is a division ring by definition 1.
$\Box$


$(2)$ is equivalent to $(3)$
By definition, a unit of $R$ is an element of $R$ which has a product inverse.
Also by definition, a proper element of $R$ is a non-zero element of $R$ which does not have a product inverse.

Hence:

a ring with unity whose non-zero elements are all units
and:

a ring with unity whose non-zero elements are all not proper elements
are the same thing.
$\blacksquare$





