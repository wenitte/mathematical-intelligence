# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Unit_of_Ring



Theorem
Let $\struct {R, +, \circ}$ be a ring with unity whose unity is $1_R$.
The following definitions of the concept of Unit of Ring are equivalent:

Definition 1
An element $x \in R$ is a unit of $\struct {R, +, \circ}$ if and only if $x$ is invertible under $\circ$.

That is, a unit of $R$ is an element of $R$ which has an inverse.

$\exists y \in R: x \circ y = 1_R = y \circ x$
Definition 2
An element $x \in R$ is a unit of $\struct {R, +, \circ}$ if and only if $x$ is divisor of $1_R$.


Proof
Let $\struct {R, +, \circ}$ be a ring with unity.

$(1)$ implies $(2)$
Let $x \in R$ be a unit of $\struct {R, +, \circ}$ by definition 1.
Then by definition:

$\exists y \in R: x \circ y = 1_R = y \circ x$
That is, by definition of divisor:

$x \divides 1_R$
Thus $x$ is a unit of $\struct {R, +, \circ}$ by definition 2.
$\Box$


$(2)$ implies $(1)$
Let $x \in R$ be a unit of $\struct {R, +, \circ}$ by definition 2.
Then by definition:

$x \divides 1_R$
By definition of divisor:

$\exists t \in R: 1_R = t \circ x$
Thus $x$ is a unit of $\struct {R, +, \circ}$ by definition 1.
$\blacksquare$





