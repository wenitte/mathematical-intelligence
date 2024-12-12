# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Weakly_Locally_Connected_at_Point/Definition_1_implies_Definition_2

Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let $x \in S$.
Let $x$ have a neighborhood basis consisting of connected sets.

Then:

Every open neighborhood $U$ of $x$ contains an open neighborhood $V$ of $x$ such that every two points of $V$ lie in some connected subset of $U$.


Proof
Let $U$ be an open neighborhood of $x$.
By assumption there exists a connected neighborhood $C$ of $x$ such that $C \subseteq U$.
By definition of a neighborhood, there exists an open neighborhood $V$ of $x$ such that $V \subseteq C$.
From Subset Relation is Transitive, $V \subseteq U$.
By definition of a subset:

$\forall y, z \in V: y, z \in C$
The result follows.
$\blacksquare$





