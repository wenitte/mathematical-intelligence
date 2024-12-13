# 

Source: https://proofwiki.org/wiki/Operator_Generated_by_Closure_System_is_Closure_Operator



Theorem
Let $L = \left({X, \vee, \wedge, \preceq}\right)$ be a complete lattice.
Let $S = \left({T, \precsim}\right)$ be a closure system of $L$.

Then $\operatorname{operator}\left({S}\right)$ is closure operator,
where $\operatorname{operator}\left({S}\right)$ denotes the operator generated by $S$.


Proof
Define $f = \operatorname{operator}\left({S}\right)$.

Inflationary
By Intersection is Subset:

$x^\succeq \cap T \subseteq x^\succeq$
By Infimum of Subset:

$\inf x^\succeq \preceq \inf\left({x^\succeq \cap T}\right)$
By Infimum of Upper Closure of Element:

$x \preceq \inf\left({x^\succeq \cap T}\right)$
Thus by definition of operator generated by $S$:

$x \preceq f\left({x}\right)$
$\Box$

Increasing
Let $x, y \in X$ such that

$x \preceq y$
By Upper Closure is Decreasing:

$y^\succeq \subseteq x^\succeq$
By Set Intersection Preserves Subsets/Corollary:

$y^\succeq \cap T \subseteq x^\succeq \cap T$
By Infimum of Subset:

$\inf\left({x^\succeq \cap T}\right) \preceq \inf\left({y^\succeq \cap T}\right)$
Thus by definition of operator generated by $S$:

$f\left({x}\right) \preceq f\left({y}\right)$
$\Box$

Idempotent
Let $x \in X$.
By Intersection is Subset:

$x^\succeq \cap T \subseteq T$
By definition of complete lattice:

$x^\succeq \cap T$ admits an infimum in $L$.
By definition of infima inheriting:

$x^\succeq \cap T$ admits an infimum in $S$ and $\inf_S\left({x^\succeq \cap T}\right) = \inf_L \left({x^\succeq \cap T}\right)$
Then by definition of operator generated by $S$:

$f\left({x}\right) \in T$
and

$f\left({f\left({x}\right)}\right) = \inf_L \left({f\left({x}\right)^\succeq \cap T}\right)$
By definitions of upper closure of element and reflexivity:

$f\left({x}\right) \in f\left({x}\right)^\succeq$
By definition of intersection:

$f\left({x}\right) \in f\left({x}\right)^\succeq \cap T$
By definitions of infimum and lower bound:

$\inf_L \left({f\left({x}\right)^\succeq \cap T}\right) \preceq f\left({x}\right)$
By Intersection is Subset:

$f\left({x}\right)^\succeq \cap T \subseteq f\left({x}\right)^\succeq$
By Infimum of Subset:

$\inf_L \left({f\left({x}\right)^\succeq}\right) \preceq \inf_L \left({f\left({x}\right)^\succeq \cap T}\right)$
By Infimum of Upper Closure of Element:

$f\left({x}\right) \preceq \inf_L \left({f\left({x}\right)^\succeq \cap T}\right)$
Thus by definition of antisymmetry:

$f\left({f\left({x}\right)}\right) = f\left({x}\right)$
$\Box$
Hence $f$ is closure operator.
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL10:funcreg 10



