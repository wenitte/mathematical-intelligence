# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Convex_Set_(Order_Theory)



Theorem
The following definitions of the concept of Convex Set in the context of Order Theory are equivalent:

Definition 1
A subset $A$ of an ordered set $\struct {S, \preceq}$ is convex (in $S$) if and only if:

$\forall x, y \in A: \forall z \in S: x \preceq z \preceq y \implies z \in A$
Definition 2
A subset $A$ of an ordered set $\struct {S, \preceq}$ is convex (in $S$) if and only if:

$\forall x, y \in A: \forall z \in S: x \prec z \prec y \implies z \in A$


Proof
$(1)$ implies $(2)$
Let $A \subseteq S$ be convex in $S$ by definition 1.
Then by definition:

$\forall x, y \in A: \forall z \in S: x \preceq z \preceq y \implies z \in A$
Let $x, y, z \in A$.
Let $x \prec z \prec y$.
Then by definition:

$x \preceq z \preceq y$
and so by hypothesis $z \in A$.
That is:

$\forall x, y \in A: \forall z \in S: x \prec z \prec y \implies z \in A$
Thus $A \subseteq S$ is convex in $S$ by definition 2.
$\Box$


$(2)$ implies $(1)$
Let $A \subseteq S$ be convex in $S$ by definition 2.
Then by definition:

$\forall x, y \in A: \forall z \in S: x \prec z \prec y \implies z \in A$
Let $x, y, z \in A$.
Let $x \preceq z \preceq y$.
First suppose $z \ne x$ and $z \ne y$.
Then by definition of the relation $\prec$:

$x \prec z \prec y$
and so by hypothesis $z \in A$.
Let $x = z$ or $x = y$
We have that $x \in A$ and $y \in A$.
So $z \in A$.
That is, whether $x \prec z \prec y$ or $z = x$ or $x = y$:

$\forall x, y \in A: \forall z \in S: x \preceq z \preceq y \implies z \in A$
Thus $A \subseteq S$ is convex in $S$ by definition 1.
$\blacksquare$





