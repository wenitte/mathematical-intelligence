# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Local_Basis/Neighborhood_Basis_of_Open_Sets_Implies_Local_Basis_for_Open_Sets

Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let $x$ be an element of $S$.
Let $\BB$ be a set of open neighborhoods of $x$ such that:

every neighborhood of $x$ contains a set in $\BB$.

Then $\BB$ satisfies: 

$\forall U \in \tau: x \in U \implies \exists H \in \BB: H \subseteq U$


Proof
Let $U \in \tau$ such that $x \in U$.
From Set is Open iff Neighborhood of all its Points then $U$ is a neighborhood of $x$.
By assumption, there exists $H \in \BB$ such that $H \subseteq U$.
The result follows.
$\blacksquare$





