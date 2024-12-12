# 

Source: https://proofwiki.org/wiki/Cardinality_of_Maximal_Independent_Subset_Equals_Rank_of_Set

Theorem
Let $M = \struct{S, \mathscr I}$ be a matroid.
Let $A \subseteq S$.
Let $X$ be a maximal independent subset of $A$.

Then:

$\card X = \map \rho A$
where $\rho$ is the rank function on $M$.


Proof
From Independent Subset is Contained in Maximal Independent Subset:

$\exists Y \in \mathscr I : X \subseteq Y \subseteq A : \card Y = \map \rho A$
By definition of a maximal independent Subset of $A$:

$X = Y$
The result follows.
$\blacksquare$





