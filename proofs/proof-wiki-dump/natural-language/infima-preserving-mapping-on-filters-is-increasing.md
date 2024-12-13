# 

Source: https://proofwiki.org/wiki/Infima_Preserving_Mapping_on_Filters_is_Increasing

Theorem
Let $\struct {S, \preceq}$, $\struct {T, \precsim}$ be ordered sets.
Let $f: S \to T$ be a mapping.

For every filter $F$ in $\struct {S, \preceq}$, let $f$ preserve the infimum on $F$.

Then $f$ is increasing.


Proof
Let $x, y \in S$ such that:

$x \preceq y$
By Infimum of Singleton:

$\set x$ and $\set y$ admit infima in $\struct {S, \preceq}$
By Infimum of Upper Closure of Set:

$\set x^\succeq$ and $\set y^\succeq$ admit infima in $\struct {S, \preceq}$
where $\set x^\succeq$ denotes the upper closure of $\set x$.
By Upper Closure of Singleton

$x^\succeq$ and $y^\succeq$ admit infima in $\struct {S, \preceq}$
By Upper Closure of Element is Filter:

$x^\succeq$ and $y^\succeq$ are filter in $\struct {S, \preceq}$
By assumption and definition of mapping preserves the infimum on subset:

$\map {f^\to} {x^\succeq}$ and $\map {f^\to} {y^\succeq}$ admit infima in $\struct {T, \precsim}$
and

$\inf \set {\map {f^\to} {x^\succeq} } = \map f {\inf \set {x^\succeq} }$ and $\inf \set {\map {f^\to} {y^\succeq} } = \map f {\inf \set {y^\succeq} }$
By Infimum of Upper Closure of Element:

$\inf \set {x^\succeq} = x$ and $\inf \set {y^\succeq} = y$
By Upper Closure is Decreasing:

$y^\succeq \subseteq x^\succeq$
By Image of Subset under Mapping is Subset of Image:

$\map {f^\to} {y^\succeq} \subseteq \map {f^\to} {x^\succeq}$
Thus by Infimum of Subset:

$\map f x \precsim \map f y$
Thus by definition:

$f$ is increasing.
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL_0:69




