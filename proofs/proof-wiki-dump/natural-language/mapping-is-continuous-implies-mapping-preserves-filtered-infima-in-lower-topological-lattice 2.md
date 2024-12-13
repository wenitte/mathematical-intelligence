# 

Source: https://proofwiki.org/wiki/Mapping_is_Continuous_implies_Mapping_Preserves_Filtered_Infima_in_Lower_Topological_Lattice

Theorem
Let $T = \struct {S, \preceq, \tau}$ and $Q = \struct {X, \preceq', \tau'}$ be complete topological lattices with lower topologies.
Let $f: S \to X$ be a mapping such that:

$f$ is a continuous mapping.

Then $f$ preserves filtered infima.


Proof
Define $B := \set {\relcomp S {x^\succeq}: x \in S}$
By definition of lower topology:

$B$ is an analytic sub-basis.
Let $F$ be a filtered subset of $S$ such that:

$F$ admits an infimum in $T$.
Thus by definition of complete lattice:

$f \sqbrk F$ admits an infimum in $Q$.
We will prove that:

$\forall A \in B: \inf F \in A \implies F \cap A \ne \O$
Let $A \in B$ be such that:

$\inf F \in A$
By definition of $B$:

$\exists x \in S: A = \relcomp S {x^\succeq}$
By definition of relative complement:

$\inf F \notin x^\succeq$
By definition of upper closure of element:

$x \npreceq \inf F$
By definition of infimum:

$x$ is not a lower bound for $F$.
By definition of lower bound:

$\exists y \in F: x \npreceq y$
By definition of upper closure of element:

$y \notin x^\succeq$
By definition of relative complement:

$y \in A$
By definitions of intersection and non-empty set:

$F \cap A \ne \O$
$\Box$

Then by If Infimum of Filtered Subset belongs to Element of Sub-Basis then Subset and Element Intersect implies Infimum of Subset belongs to Closure of Subset:

$\inf F \in F^-$
We will prove that:

$f$ is an increasing mapping.
Let $x, y \in S$ be such that:

$x \preceq y$
By definition of reflexivity:

$\map f x \preceq' \map f x$
By definition of upper closure of element:

$\map f x \in \paren {\map f x}^{\succeq'}$
By definition of preimage of set:

$x \in f^{-1} \sqbrk {\paren {\map f x}^{\succeq'} }$
By Complement of Upper Closure of Element is Open in Lower Topology:

$\paren {\map f x}^{\succeq'}$ is closed.
By Continuity by Closed Sets:

$f^{-1} \sqbrk {\paren {\map f x}^{\succeq'} }$ is closed.
By Closed Subset is Upper Section in Lower Topology:

$f^{-1} \sqbrk {\paren {\map f x}^{\succeq'} }$ isan  upper section.
By definition of upper section:

$y \in f^{-1} \sqbrk {\paren {\map f x}^{\succeq'} }$
By definition of preimage of set:

$\map f y \in \paren {\map f x}^{\succeq'}$
Thus by definition of upper closure of element:

$\map f x \preceq' \map f y$
$\Box$

We will prove that:

$\map f {\inf F}$ is lower bound for $f \sqbrk F$
By definition of infimum:

$\map f {\inf F} \preceq' \map \inf {f \sqbrk F}$
We will prove that:

$F \subseteq f^{-1} \sqbrk {\paren {\map \inf {f \sqbrk F} }^{\succeq'} }$
$\blacksquare$


Sources
Mizar article WAYBEL19:11




