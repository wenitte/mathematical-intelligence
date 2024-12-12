# 

Source: https://proofwiki.org/wiki/Finite_Subsets_form_Ideal



Theorem
Let $X$ be a set.
Let $\map {\operatorname {Fin} } X$ be the set of all finite subsets of $X$.

Then $\map {\operatorname {Fin} } X$ is ideal in $\struct {\powerset X, \subseteq}$
where $\powerset X$ denotes the power set of $X$.


Proof
Non-Empty
By Empty Set is Subset of All Sets:

$\O \subseteq X$ and $\O$ is finite.
By definition of $\operatorname {Fin}$:

$\O \in \map {\operatorname {Fin} } X$
Thus by definition:

$\map {\operatorname {Fin} } X$ is non-empty.
$\Box$

Directed
This follows from Finite Subsets form Directed Set.
$\Box$

Lower
Let $x \in \map {\operatorname {Fin} } X$, $y \in \powerset X$ such that

$y \subseteq x$
By definition of $\operatorname {Fin}$:

$x$ is a finite set.
By Subset of Finite Set is Finite:

$y$ is a finite set.
By definition of power set:

$y \subseteq X$
Thus by definition of $\operatorname {Fin}$:

$y \in \map {\operatorname {Fin} } X$
$\Box$
Hence $\map {\operatorname {Fin} } X$ is ideal in $\struct {\powerset X, \subseteq}$
$\blacksquare$


Sources
Mizar article WAYBEL_8:funcreg 13
Mizar article WAYBEL_8:29




