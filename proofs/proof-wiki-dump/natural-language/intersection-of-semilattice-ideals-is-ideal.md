# 

Source: https://proofwiki.org/wiki/Intersection_of_Semilattice_Ideals_is_Ideal



Theorem
Let $\struct {S, \preceq}$ be a meet semilattice.
Let $I_1, I_2$ be ideals in $\struct {S, \preceq}$.

Then $I_1 \cap I_2$ is ideal in $\struct {S, \preceq}$


Set of Sets
Let $\struct {S, \preceq}$ be a bounded below join semilattice.
Let $\II$ be a set of ideals in $\struct {S, \preceq}$.

Then $\bigcap \II$ is an ideal in $\struct {S, \preceq}$.


Proof
Directed Subset
Let $x, y \in I_1 \cap I_2$.
By definition of intersection:

$x, y \in I_1$ and $x, y \in I_2$
By definition of directed subset:

$\exists z_1 \in I_1: x \preceq z_1 \land y \preceq z_1$
and

$\exists z_2 \in I_2: x \preceq z_2 \land y \preceq z_2$
By Meet Precedes Operands:

$z_1 \wedge z_2 \preceq z_1$ and $z_1 \wedge z_2 \preceq z_2$
By definition of lower section:

$z_1 \wedge z_2 \in I_1$ and $z_1 \wedge z_2 \in I_2$
By definition of intersection:

$z_1 \wedge z_2 \in I_1 \cap I_2$
By definition of meet:

$z_1 \wedge z_2 = \inf \set {z_1, z_2}$
By definition of infimum:

$x \preceq z_1 \wedge z_2$ and $y \preceq z_1 \wedge z_2$
Thus by definition:

$I_1 \cap I_2$ is directed.
$\Box$


Lower Section
Let $x, y \in S$ such that:

$x \in I_1 \cap I_2$ and $y \preceq x$
By definition of intersection:

$x \in I_1$ and $x \in I_2$
By definition of lower section:

$y \in I_1$ and $y \in I_2$
By definition of intersection:

$y \in I_1 \cap I_2$
Thus by definition:

$I_1 \cap I_2$ is a lower section.
$\Box$


Non-Empty Set
By assumption:

$I_1 \ne \O$ and $I_2 \ne \O$
By definition of non-empty:

$\exists x: x \in I_1$ and $\exists y: y \in I_2$
By Meet Precedes Operands:

$x \wedge y \preceq x$ and $x \wedge y \preceq y$
By definition of lower section:

$x \wedge y \in I_1$ and $x \wedge y \in I_2$
By definition of intersection:

$x \wedge y \in I_1 \cap I_2$
Thus by definition:

$I_1 \cap I_2$ is non-empty.
$\Box$

Thus by definition:

$I_1 \cap I_2$ is ideal in $\struct {S, \preceq}$.
$\blacksquare$


Sources
Mizar article YELLOW_2:40




