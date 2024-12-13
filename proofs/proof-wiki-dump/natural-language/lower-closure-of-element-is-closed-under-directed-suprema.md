# 

Source: https://proofwiki.org/wiki/Lower_Closure_of_Element_is_Closed_under_Directed_Suprema

Theorem
Let $L = \struct {S, \preceq}$ be an up-complete ordered set.
Let $x \in S$.

Then $x^\preceq$ is closed under directed suprema,
where $x^\preceq$ denotes the lower closure of $x$.


Proof
Let $D$ be a directed subset of $S$ such that

$D \subseteq x^\preceq$
By Lower Closure of Element is Ideal:

$x^\preceq$ is directed.
By definition of up-complete:

$D$ and $x^\preceq$ admit suprema.
By Supremum of Subset:

$\sup D \preceq \map \sup {x^\preceq}$
By Supremum of Lower Closure of Element:

$\sup D \preceq x$
Thus by definition of lower closure of element:

$\sup D \in x^\preceq$
$\blacksquare$


Sources
Mizar article WAYBEL11:8




