# 

Source: https://proofwiki.org/wiki/Dependent_Subset_Contains_a_Circuit

Theorem
Let $M = \struct {S, \mathscr I}$ be a matroid.
Let $\mathscr C$ denote the set of all circuits of $M$.
Let $A$ be a dependent subset.

Then:

$\exists C \in \mathscr C : C \subseteq A$


Proof
Consider the ordered set $\struct {\powerset S \setminus \mathscr I, \subseteq}$.
From Element of Finite Ordered Set is Between Maximal and Minimal Elements:

$\exists C \in \mathscr I : C \subseteq A$ and $A$ is minimal in $\struct {\powerset S \setminus \mathscr I, \subseteq}$.
By definition of a circuit:

$C \in \mathscr C$
$\blacksquare$





