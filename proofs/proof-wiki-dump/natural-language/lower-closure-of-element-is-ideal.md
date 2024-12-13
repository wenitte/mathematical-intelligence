# 

Source: https://proofwiki.org/wiki/Lower_Closure_of_Element_is_Ideal

Theorem
Let $\struct {S, \preceq}$ ne an ordered set.
Let $s$ be an element of $S$.

Then $s^\preceq$ is ideal in $\struct {S, \preceq}$
where $s^\preceq$ denotes the lower closure of $s$.


Proof
By Singleton is Directed and Filtered Subset:

$\set s$ is a directed subset of $S$
By Directed iff Lower Closure Directed:

$\set s^\preceq$ is a directed subset of $S$
By Lower Closure is Lower Section:

$\set s^\preceq$ is a lower section in $S$
By Lower Closure of Singleton

$\set s^\preceq = s^\preceq$
By definition of reflexivity:

$s \preceq s$
By definition of lower closure of element:

$s \in s^\preceq$
Thus by definition:

$s^\succeq$ is non-empty, directed and lower.
Thus by definition:

$s^\preceq$ is a ideal in $\struct {S, \preceq}$
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL_0:funcreg 8
Mizar article WAYBEL_0:funcreg 12




