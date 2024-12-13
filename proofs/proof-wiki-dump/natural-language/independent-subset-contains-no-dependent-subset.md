# 

Source: https://proofwiki.org/wiki/Independent_Subset_Contains_No_Dependent_Subset



Theorem
Let $M = \struct {S, \mathscr I}$ be a matroid.
Let $X \subseteq S$ be any independent subset of $M$.

Then:

No dependent subset $D$ of $M$ is a subset of $X$.


Corollary 1
Let $B \subseteq S$ be any base of $M$.

Then:

No dependent subset $D$ of $M$ is a subset of $B$.


Corollary 2
Let $X \subseteq S$ be any independent subset of $M$.

Then:

No circuit $C$ of $M$ is a subset of $X$.


Corollary 3
Let $B \subseteq S$ be any base of $M$.

Then:

No circuit $C$ of $M$ is a subset of $B$.


Proof
By definition of independent subset:

$X \in \mathscr I$
By definition of matroid, specifically matroid axiom $( \text I 2)$:

$\forall Y \subseteq X : Y \in \mathscr I$
By definition of dependent subset:

$\forall Y \subseteq X : Y$ is not a dependent subset
$\blacksquare$





