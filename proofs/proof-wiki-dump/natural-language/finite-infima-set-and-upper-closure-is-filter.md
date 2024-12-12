# 

Source: https://proofwiki.org/wiki/Finite_Infima_Set_and_Upper_Closure_is_Filter

Theorem
Let $P = \struct {S, \wedge, \preceq}$ be a meet semilattice.
Let $X$ be a non-empty subset of $S$.

Then

$\map {\operatorname {fininfs} } X^\succeq$ is filter in $P$.
where

$\map {\operatorname {fininfs} } X$ denotes the finite infima set of $X$,
$X^\succeq$ denotes the upper closure of $X$.


Proof
By Finite Infima Set and Upper Closure is Smallest Filter:

$X \subseteq \map {\operatorname {fininfs} } X^\succeq$
By definition of non-empty set:

$\map {\operatorname {fininfs} } X^\succeq$ is a non-empty set.
We will prove that

$\map {\operatorname {fininfs} } X$ is filtered.
Let $x, y \in \map {\operatorname {fininfs} } X$
By definition of finite infima set:

$\exists A \in \map {\mathit {Fin} } X: x = \inf A \land A$ admits an infimum
and

$\exists B \in \map {\mathit {Fin} } X: y = \inf B \land B$ admits an infimum
where $\map {\mathit {Fin} } X$ denotes the set of all finite subsets of $X$.
Define $C = A \cup B$.
By Union of Subsets is Subset:

$C \subseteq X$
By Union of Finite Sets is Finite:

$C$ is finite.
Then

$C \in \map {\mathit {Fin} } X$
By Existence of Non-Empty Finite Infima in Meet Semilattice:

$C \ne \O \implies C$ admits an infimum.
By Union is Empty iff Sets are Empty:

$C = \O \implies A = \O$
So

$C$ admits an infimum.
By definition of finite infima set:

$\inf C \in \map {\operatorname {fininfs} } X$
By Set is Subset of Union:

$A \subseteq C$ and $B \subseteq C$
Thus by Infimum of Subset:

$\inf C \preceq x$ and $\inf C \preceq y$
Hence $\map {\operatorname {fininfs} } X$ is filtered.
$\Box$
By Filtered iff Upper Closure Filtered:

$\map {\operatorname {fininfs} } X^\succeq$ is filtered.
By Upper Closure is Upper Section:

$\map {\operatorname {fininfs} } X^\succeq$ is upper.
Hence $\map {\operatorname {fininfs} } X^\succeq$ is filter in $P$.
$\blacksquare$


Sources
Mizar article WAYBEL_0:funcreg 11
Mizar article WAYBEL_0:funcreg 16
Mizar article WAYBEL_0:funcreg 22




