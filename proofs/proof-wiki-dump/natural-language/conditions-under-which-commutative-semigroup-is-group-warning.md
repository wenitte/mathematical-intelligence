# 

Source: https://proofwiki.org/wiki/Conditions_under_which_Commutative_Semigroup_is_Group/Warning

Warning concerning Conditions under which Commutative Semigroup is Group
Consider an algebraic structure $\struct {S, \circ}$ fulfilling the following conditions:
Let $\struct {S, \circ}$ be a commutative semigroup.

Let $\struct {S, \circ}$ have the following properties:




\((1)\)  

$:$  





  \(\ds \forall x \in S: \exists y \in S:\)

\(\ds y \circ x = x \)   







  


\((2)\)  

$:$  





  \(\ds \forall x, y \in S:\)

\(\ds y \circ x = x \implies \exists z \in S: z \circ x = y \)   







  


While it is the case that such an algebraic structure $\struct {S, \circ}$ is a group, if $\struct {S, \circ}$ is a semigroup which is not commutative, this does not necessarily follow.


Proof
Let $S$ be a set with more than $1$ element.
Let $\struct {S, \circ}$ be a semigroup such that $\circ$ is the left operation.
From Structure under Left Operation is Semigroup, $\struct {S, \circ}$ is indeed a semigroup.
From Right Operation is Anticommutative we have that $\circ$ is specifically not commutative.
By definition of the left operation:

$\forall x \in S: x \circ x = x$
Thus $x$ fulfils the role of $y$ in condition $(1)$:

$\forall x \in S: \exists y \in S: y \circ x = x$
and so $(1)$ is satisfied.
By definition of the left operation:

$\forall x, y \in S: y \circ x = y$
That is:

$\forall x, y \in S: \exists z \in S: z \circ x = y$
where here $z = y$.
Hence $x$ fulfils the role of $y$ and $y$ fulfils the role of $z$ in:

$\forall x, y \in S: y \circ x = x \implies \exists z \in S: z \circ x = y$
and so $(2)$ is satisfied.
But $\struct {S, \circ}$ is not a group.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 7$: Semigroups and Groups: Exercise $7.16 \ \text {(e)}$




