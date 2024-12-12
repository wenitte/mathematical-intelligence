# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Local_Basis/Local_Basis_for_Open_Sets_Implies_Neighborhood_Basis_of_Open_Sets

Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let $x$ be an element of $S$.
Let $\BB$ be a set of open neighborhoods of $x$ such that:

$\forall U \in \tau: x \in U \implies \exists H \in \BB: H \subseteq U$

Then $\BB$ satisfies: 

every neighborhood of $x$ contains a set in $\BB$.


Proof
Let $N$ be a neighborhood of $x$.
Then there exists $U \in \tau$ such that $x \in U$ and $U \subseteq N$ by definition.
By assumption, there exists $H \in \BB$ such that $H \subseteq U$.
From Subset Relation is Transitive, $H \subseteq N$.
The result follows.
$\blacksquare$





