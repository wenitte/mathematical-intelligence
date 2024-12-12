# 

Source: https://proofwiki.org/wiki/Closure_of_Singleton_is_Lower_Closure_of_Element_in_Scott_Topological_Lattice

Theorem
Let $T = \struct {S, \preceq, \tau}$ be a up-complete topological lattice with the Scott topology.
Let $x \in S$.

Then:

$\set x^- = x^\preceq$
where

$\set x^-$ denotes the topological closure of $\set x$
$x^\preceq$ denotes the lower closure of $x$.


Proof
By Lower Closure of Element is Closed under Directed Suprema:

$x^\preceq$ is closed under directed suprema.
By Lower Closure of Singleton:

$\set x^\preceq = x^\preceq$
By Lower Closure is Lower Section:

$x^\preceq$ is a lower section.
By Closed Set iff Lower and Closed under Directed Suprema in Scott Topological Ordered Set:

$x^\preceq$ is closed.
By definitions of lower closure of element and reflexivity:

$x \in x^\preceq$
By Singleton of Element is Subset:

$\set x \subseteq x^\preceq$
We will prove that:

for every a closed subset $C$ of $S$: $\set x \subseteq C \implies x^\preceq \subseteq C$
Let $C$ be a closed subset of $S$ such that:

$\set x \subseteq C$
By Closed Set iff Lower and Closed under Directed Suprema in Scott Topological Ordered Set:

$C$ is a lower section.
Let $y \in x^\preceq$.
By definition of lower closure of element:

$y \preceq x$
By definitions of subset and singleton:

$x \in C$
Thus by definition of lower section:

$y \in C$
$\Box$
Thus by definition of topological closure:

$\set x^- = x^\preceq$
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL11:9




