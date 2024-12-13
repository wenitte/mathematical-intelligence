# 

Source: https://proofwiki.org/wiki/Lower_Closure_of_Element_is_Topologically_Closed_in_Scott_Topological_Ordered_Set

Theorem
Let $\struct {S, \preceq}$ be an up-complete ordered set.
Let $T = \struct {S, \preceq, \tau}$ be a relational structure with the Scott topology.

Let $x \in S$.
Let $x^\preceq$ denote the lower closure of $x$.

Then $x^\preceq$ is topologically closed.


Proof
By Lower Closure of Element is Closed under Directed Suprema:

$x^\preceq$ is closed under directed suprema.
By Lower Closure of Singleton:

$\set x^\preceq = x^\preceq$
By Lower Closure is Lower Section:

$x^\preceq$ is a lower section.
Thus by Closed Set iff Lower and Closed under Directed Suprema in Scott Topological Ordered Set:

$x^\preceq$ is closed.
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL11:11




