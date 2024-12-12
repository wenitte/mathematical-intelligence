# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Connected_Topological_Space/No_Separation_iff_No_Union_of_Closed_Sets



Theorem
The following definitions of the concept of Connected Topological Space are equivalent:
Let $T = \struct {S, \tau}$ be a topological space.

Definition by Separation
$T$ is connected if and only if it admits no separation.

Definition by Union of Disjoint Closed Sets
$T$ is connected if and only if it has no two disjoint nonempty closed sets whose union is $S$.


Proof
From Biconditional Equivalent to Biconditional of Negations it follows that the statement can be expressed as:

$T$ admits a separation
if and only if:

there exist two closed sets of $T$ which form a (set) partition of $S$.

By definition, a separation of $T$ is a (set) partition of $S$ by $A, B$ which are open in $T$.

From Complements of Components of Two-Component Partition form Partition:

$A \mid B$ is a (set) partition of $S$ if and only if $\relcomp S A \mid \relcomp S B$ is a (set) partition of $S$.
Hence the result by definition of closed set.
$\blacksquare$





