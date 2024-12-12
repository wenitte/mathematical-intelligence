# 

Source: https://proofwiki.org/wiki/Finite_Suprema_Set_and_Lower_Closure_is_Ideal

Theorem
Let $P = \struct {S, \vee, \preceq}$ be a join semilattice.
Let $X$ be a non-empty subset of $S$.

Then

$\map {\operatorname{finsups} } X^\preceq$ is ideal in $P$.
where

$\map {\operatorname{finsups} } X$ denotes the finite suprema set of $X$,
$X^\preceq$ denotes the lower closure of $X$.


Proof
By Finite Suprema Set and Lower Closure is Smallest Ideal:

$X \subseteq \map {\operatorname{finsups} } X^\preceq$
By definition of non-empty set:

$\map {\operatorname{finsups} } X^\preceq$ is a non-empty set.
We will prove that

$\map {\operatorname{finsups} } X$ is directed.
Let $x, y \in \map {\operatorname{fininfs} } X$
By definition of finite suprema set:

$\exists A \in \map {\operatorname {Fin} } X: x = \sup A \land A$ admits a supremum
and

$\exists B \in \map {\operatorname {Fin} } X: y = \sup B \land B$ admits an supremum
where $\map {\operatorname {Fin} } X$ denotes the set of all finite subsets of $X$.
Define $C = A \cup B$.
By Union of Subsets is Subset:

$C \subseteq X$
By Union of Finite Sets is Finite:

$C$ is finite.
Then

$C \in \map {\operatorname {Fin} } X$
By Existence of Non-Empty Finite Suprema in Join Semilattice:

$C \ne \O \implies C$ admits a supremum.
By Union is Empty iff Sets are Empty:

$C = \O \implies A = \O$
So

$C$ admits a supremum.
By definition of finite suprema set:

$\sup C \in \map {\operatorname{finsups} } X$
By Set is Subset of Union:

$A \subseteq C$ and $B \subseteq C$
Thus by Supremum of Subset:

$x \preceq \sup C$ and $y \preceq \sup C$
Hence $\map {\operatorname{finsups} } X$ is directed.
$\Box$

By Directed iff Lower Closure Directed:

$\map {\operatorname{finsups} } X^\preceq$ is directed.
By Lower Closure is Lower Section:

$\map {\operatorname{finsups} } X^\preceq$ is lower.
Hence $\map {\operatorname{finsups}} X^\preceq$ is ideal in $P$.
$\blacksquare$


Sources
Mizar article WAYBEL_0:funcreg 10
Mizar article WAYBEL_0:funcreg 15
Mizar article WAYBEL_0:funcreg 21




