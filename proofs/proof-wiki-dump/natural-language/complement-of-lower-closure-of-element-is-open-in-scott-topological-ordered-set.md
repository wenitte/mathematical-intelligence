# 

Source: https://proofwiki.org/wiki/Complement_of_Lower_Closure_of_Element_is_Open_in_Scott_Topological_Ordered_Set

Theorem
Let $T = \struct {S, \preceq, \tau}$ be a relational structure with Scott topology
where $\struct {S, \preceq}$ is an up-complete ordered set.
Let $x \in S$.

Then $\relcomp S {x^\preceq}$ is topologically open,
where

$x^\preceq$ denotes the lower closure of $x$,
$\relcomp S {x^\preceq}$ denotes the relative complement of $x^\preceq$.


Proof
By Lower Closure of Element is Topologically Closed in Scott Topological Ordered Set:

$x^\preceq$ is closed.
By definition of closed set:

$\relcomp S {x^\preceq} \in \tau$
Thus by definition:

$\relcomp S {x^\preceq}$ is a open set.
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL11:12




