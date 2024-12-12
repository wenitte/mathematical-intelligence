# 

Source: https://proofwiki.org/wiki/Closure_Operator_from_Closed_Sets



Theorem
Let $S$ be a set.
Let $\CC$ be a set of subsets of $S$.
Let $\CC$ be closed under arbitrary intersections:

$\forall \KK \in \powerset \CC: \bigcap \KK \in \CC$
where $\bigcap \O$ is taken to be $S$.

Define $\cl: \powerset S \to \CC$ by letting:

$\map \cl T = \bigcap \set {C \in \CC: T \subseteq C}$

Then $\cl$ is a closure operator whose closed sets are the elements of $\CC$.


Proof
First we will show that $\cl$ is a closure operator.


Inflationary
Let $T \subseteq S$.
By Set Intersection Preserves Subsets/General Result/Corollary, $T \subseteq \map \cl T$.
Since this holds for all such $T$, $\cl$ is inflationary.
$\Box$


Increasing
Let $T \subseteq U \subseteq S$.
Let $\TT$ and $\UU$ be the sets of elements of $\CC$ containing $T$ and $U$, respectively.
Since Subset Relation is Transitive, every set containing $U$ contains $T$, so $\UU \subseteq \TT$.
By Intersection is Decreasing, $\bigcap \TT \subseteq \bigcap \UU$.
Thus $\map \cl T \subseteq \map \cl U$.
$\Box$


Idempotent
Let $T \subseteq S$.
By the premise, the intersection of a subset of $\CC$ is in $\CC$.
Thus in particular $\map \cl T \in \CC$.
Therefore:

$\map \cl {\map \cl T} \subseteq \map \cl T$
Since $\cl$ is inflationary:

$\map \cl T \subseteq \map \cl {\map \cl T}$
By definition of set equality:

$\map \cl {\map \cl T} = \map \cl T$
Since this holds for all $T \subseteq S$, $\cl$ is idempotent.
$\Box$

Finally, we need to show that the elements of $\CC$ are the closed sets with respect to $\cl$.
If $C \in \CC$, then since $\cl$ is inflationary:

$C \subseteq \map \cl C$
But since $C \subseteq C$, $\map \cl C \subseteq C$.
Thus by definition of set equality:

$\map \cl C = C$
so $C$ is closed with respect to $\cl$.

Suppose instead that $C$ is closed with respect to $\cl$.
Then $\map \cl C = C$.
Since $\CC$ is closed under intersections, $C \in \CC$. 
$\blacksquare$





