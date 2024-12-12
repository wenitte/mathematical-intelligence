# 

Source: https://proofwiki.org/wiki/Finite_Suprema_Set_and_Lower_Closure_is_Smallest_Ideal

Theorem
Let $L = \struct {S, \vee, \preceq}$ be a join semilattice.
Let $X$ be a subset of $S$.

Then $X \subseteq \map {\operatorname {finsups} } X^\preceq$ and

for every ideal $I$ in $L$: $X \subseteq I \implies \map {\operatorname {finsups} } X^\preceq \subseteq I$
where

$\map {\operatorname {finsups} } X$ denotes the finite suprema set of $X$,
$X^\preceq$ denotes the lower closure of $X$.


Proof
By Set is Subset of Finite Suprema Set:

$X \subseteq \map {\operatorname {finsups} } X$
By Lower Closure of Subset is Subset of Lower Closure:

$X^\preceq \subseteq \map {\operatorname {finsups} } X^\preceq$
By Set is Subset of Lower Closure:

$X \subseteq X^\preceq$
Thus by Subset Relation is Transitive:

$X \subseteq \map {\operatorname {finsups} } X^\preceq$
Let $I$ be a ideal in $L$ such that

$X \subseteq I$
Let $x \in \map {\operatorname {finsups} } X^\preceq$
By definition of lower closure of subset:

$\exists y \in \map {\operatorname {finsups} } X: x \preceq y$
By definition of finite suprema set:

$\exists A \in \map {\operatorname {Fin} } X: y = \sup A \land A$ admits a supremum
where $\map {\operatorname {Fin} } X$ denotes the set of all finite subsets of $S$.
By Subset Relation is Transitive:

$A \subseteq I$
By Directed in Join Semilattice with Finite Suprema:

$A \ne \O \implies \sup A \in I$
By Supremum of Empty Set is Smallest Element and Bottom in Ideal:

$A = \O \implies \sup A = \bot \in I$
where $\bot$ denotes the smallest element of $S$.
So

$y \in I$
Thus by definition of lower section:

$x \in I$
$\blacksquare$


Sources
Mizar article WAYBEL_0:61




