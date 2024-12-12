# 

Source: https://proofwiki.org/wiki/Continuous_implies_Increasing_in_Scott_Topological_Lattices

Theorem
Let $T_1 = \struct {S_1, \preceq_1, \tau_1}$ and $T_2 = \struct {S_2, \preceq_2, \tau_2}$ be up-complete topological lattices with Scott topologies.
Let $f: S_1 \to S_2$ be a continuous mapping.

Then $f$ is an increasing mapping.


Proof
Let $x, y \in S_1$ such that

$x \preceq_1 y$
Aiming for a contradiction, suppose that

$\map f x \npreceq_2 \map f y$
By definition of lower closure of element:

$\map f x \notin \paren {\map f y}^\preceq$
By definition of relative complement:

$\map f x \in \relcomp {S_2} {\paren {\map f y}^\preceq}$
By definition of reflexivity:

$\map f y \preceq_2 \map f y$
By definition of lower closure of element:

$\map f y \in \paren {\map f y}^{\preceq_2}$
By Closure of Singleton is Lower Closure of Element in Scott Topological Lattice:

$\set {\map f y}^- = \paren {\map f y}^{\preceq_2}$
By definition of closure:

$\paren {\map f y}^{\preceq_2}$ is a closed set.
By definition of closed set:

$\relcomp {S_2} {\paren {\map f y}^{\preceq_2} }$ is a open set.
By definition of continuous:

$f^{-1} \sqbrk {\relcomp {S_2} {\paren {\map f y}^{\preceq_2} } }$ is an open set.
By definition of Definition:Scott Topology:

$f^{-1} \sqbrk {\relcomp {S_2} {\paren {\map f y}^{\preceq_2} } }$ is an upper section.
By definition of preimage of set:

$x \in f^{-1} \sqbrk {\relcomp {S_2} {\paren {\map f y}^{\preceq_2} } }$
By definition of upper section:

$y \in f^{-1} \sqbrk {\relcomp {S_2} {\paren {\map f y}^{\preceq_2} } }$
By definition of preimage of set:

$\map f y \in \relcomp {S_2} {\paren {\map f y}^{\preceq_2} }$
Thus this contradicts $\map f y \in \paren {\map f y}^{\preceq_2}$
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL17:4




