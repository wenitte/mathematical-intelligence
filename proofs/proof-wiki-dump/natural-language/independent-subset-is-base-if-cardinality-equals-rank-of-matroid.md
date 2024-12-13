# 

Source: https://proofwiki.org/wiki/Independent_Subset_is_Base_if_Cardinality_Equals_Rank_of_Matroid

Theorem
Let $M = \struct {S, \mathscr I}$ be a matroid.
Let $\rho: \powerset S \to \Z$ be the rank function of $M$.
Let $B \in \mathscr I$ such that:

$\size B = \map \rho S$

Then:

$B$ is a base of $M$.
Corollary
Let $B \subseteq S$ be a base of $M$.
Let $X \subseteq S$ be any independent subset of $M$.
Let $\card X = \card B$.

Then:

$X$ is a base of $M$.


Proof
Let $Z \in \mathscr I$ such that:

$B \subseteq Z$
From Cardinality of Subset of Finite Set:

$\size B \le \size Z$
By definition of the rank function:

$\size Z \le \map \rho S$
Then:

$\size Z = \size B$
From the contrapositive statement of Cardinality of Proper Subset of Finite Set:

$B = Z$
It follows that $B$ is a maximal independent subset by definition.
That is, $B$ is a base by definition.
$\blacksquare$





