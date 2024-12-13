# 

Source: https://proofwiki.org/wiki/Ordered_Subset_of_Ordered_Set_is_Ordered_Set



Theorem
Let $L = \struct {S, \preceq}$ be an ordered set.
Let $\struct {S', \preceq'}$ be an ordered subset of $L$.

Then $\struct {S', \preceq'}$ is an ordered set.


Proof
By definition of ordered subset:

$S' \subseteq S$


Reflexivity
Let $x \in S'$.
By definition of subset:

$x \in S$
By definition of reflexivity:

$x \preceq x$
Thus by definition of ordered subset:

$x \preceq' x$
$\Box$


Transitivity
Let $x, y, z \in S'$ such that:

$x \preceq' y$ and $y \preceq' z$
By definition of ordered subset:

$x \preceq  y$ and $y \preceq z$
By definition of transitivity:

$x \preceq z$
Thus by definition of ordered subset:

$x \preceq' z$
$\Box$


Antisymmetry
Let $x, y \in S'$ such that:

$x \preceq' y$ and $y \preceq' x$
By definition of ordered subset:

$x \preceq  y$ and $y \preceq x$
Thus by definition of antisymmetry:

$x = y$
$\blacksquare$


Sources
Mizar article YELLOW_0:condreg 6
Mizar article YELLOW_0:condreg 7
Mizar article YELLOW_0:condreg 8




