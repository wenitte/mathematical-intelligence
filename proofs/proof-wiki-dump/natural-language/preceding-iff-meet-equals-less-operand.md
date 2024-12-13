# 

Source: https://proofwiki.org/wiki/Preceding_iff_Meet_equals_Less_Operand



Theorem
Let $\struct {S, \preceq}$ be a meet semilattice.
Let $x, y \in S$.
Then

$x \preceq y$ if and only if $x \wedge y = x$


Proof
Sufficient Condition
Let

$x \preceq y$
By definition of meet:

$x \wedge y = \inf \set {x, y}$
By definitions of lower bound and reflexivity:

$x$ is lower bound for $\set {x, y}$
and

$\forall z \in S: z$ is lower bound for $\set {x, y} \implies z \preceq x$
Thus by definition of infimum:

$x = \inf \set {x, y} = x \wedge y$
$\Box$


Necessary Condition
Let

$x \wedge y = x$
Thus by Meet Precedes Operands:

$x \preceq y$
$\blacksquare$


Sources
Mizar article YELLOW_0:25




