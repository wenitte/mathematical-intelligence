# 

Source: https://proofwiki.org/wiki/Finite_Infima_Set_and_Upper_Closure_is_Smallest_Filter

Theorem
Let $L = \struct {S, \wedge, \preceq}$ be a meet semilattice.
Let $X$ be a non-empty subset of $S$.

Then

$X \subseteq \map {\operatorname {fininfs} } X^\succeq$ and
for every a filter $F$ in $L$: $\paren {X \subseteq F \implies \map {\operatorname {fininfs} } X^\succeq \subseteq F}$
where

$\map {\operatorname {fininfs} } X$ denotes the finite infima set of $X$,
$X^\succeq$ denotes the upper closure of $X$.


Proof
By Set is Subset of Finite Infima Set:

$X \subseteq \map {\operatorname {fininfs} } X$
By Upper Closure of Subset is Subset of Upper Closure:

$X^\succeq \subseteq \map {\operatorname {fininfs} } X^\succeq$
By Set is Subset of Upper Closure:

$X \subseteq X^\succeq$
Thus by Subset Relation is Transitive:

$X \subseteq \map {\operatorname {fininfs} } X^\succeq$
Let $F$ be a filter in $L$ such that

$X \subseteq F$
Let $x \in \map {\operatorname {fininfs} } X^\succeq$
By definition of upper closure of subset:

$\exists y \in \map {\operatorname{fininfs} } X: y \preceq x$
By definition of finite infima set:

$\exists A \in \map {\operatorname {Fin} } X: y = \inf A \land A$ admits an infimum
where $\map {\operatorname {Fin} } X$ denotes the set of all finite subsets of $S$.
By Subset Relation is Transitive:

$A \subseteq F$
By Filtered in Meet Semilattice with Finite Infima:

$A \ne \O \implies \inf A \in F$
By Infimum of Empty Set is Greatest Element and Top in Filter:

$A = \O \implies \inf A = \top \in F$
where $\top$ denotes the greatest element of $S$.
So

$y \in F$
Thus by definition of upper section:

$x \in F$
$\blacksquare$


Sources
Mizar article WAYBEL_0:62




