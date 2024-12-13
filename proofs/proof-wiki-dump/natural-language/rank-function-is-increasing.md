# 

Source: https://proofwiki.org/wiki/Rank_Function_is_Increasing

Theorem
Let $M = \struct {S, \mathscr I}$ be a matroid.
Let $\rho: \powerset S \to \Z$ be the rank function of $M$.
Let $A, B \subseteq S$ be subsets of $S$ such that $A \subseteq B$.

Then:

$\map \rho A \le \map \rho B$


Proof
Now:














\(\ds \map \rho A\)

\(=\)







\(\ds \max \set {\size X : X \subseteq A \land X \in \mathscr I}\)





Definition of Rank Function














\(\ds \)

\(=\)







\(\ds \max \set {\size X : X \in \powerset A \land X \in \mathscr I}\)





Definition of Power Set of $\O$














\(\ds \)

\(=\)







\(\ds \max \set {\size X : X \in \powerset A \cap \mathscr I}\)





Definition of Set Intersection




Similarly:














\(\ds \map \rho B\)

\(=\)







\(\ds \max \set {\size X : X \in \powerset B \cap \mathscr I}\)










From Power Set of Subset:

$\powerset A \subseteq \powerset B$
From Set Intersection Preserves Subsets:

$\powerset A \cap \mathscr I \subseteq \powerset B \cap \mathscr I$
It follows that:

$\set {\size X : X \in \powerset A \cap \mathscr I} \subseteq \set {\size X : X \in \powerset B \cap \mathscr I}$
From Max of Subfamily of Operands Less or Equal to Max:

$\max \set {\size X : X \in \powerset B \cap \mathscr I} \le \max \set {\size X : X \in \powerset B \cap \mathscr I}$
$\blacksquare$


Sources
1976: Dominic Welsh: Matroid Theory ... (previous) ... (next) Chapter $1.$ $\S 6.$ Properties of the rank function




