# 

Source: https://proofwiki.org/wiki/Complement_of_Upper_Closure_of_Element_is_Open_in_Lower_Topology

Theorem
Let $T = \struct {S, \preceq, \tau}$ be a relational structure with lower topology.
Let $x \in S$.

Then $\relcomp S {x^\succeq}$ is open and $x^\succeq$ is closed.


Proof
Define $B := \set {\relcomp S {y^\succeq}: y \in S}$
By definition of lower topology:

$B$ is sub-basis of $T$.
By definition of sub-basis:

$B \subseteq \tau$
By definition of $B$:

$\relcomp S {x^\succeq} \in B$
Thus by definition of subset:

$\relcomp S {x^\succeq} \in \tau$
Thus by definition:

$x^\succeq$ is closed.
$\blacksquare$


Sources
Mizar article WAYBEL19:4




