# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Connected_Topological_Space/No_Clopen_Sets_implies_No_Union_of_Separated_Sets

Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let the only clopen sets of $T$ be $S$ and $\O$.

Then there are no two non-empty separated sets of $T$ whose union is $S$.


Proof
Suppose $A$ and $B$ are separated subsets of $T$ such that $A \cup B = S$.
By definition of separated sets:

$A \cap B^- = \O$

Then:














\(\ds S\)

\(=\)







\(\ds A \cup B\)




















\(\ds \)

\(\subseteq\)







\(\ds A \cup B^-\)





Set is Subset of its Topological Closure














\(\ds \)

\(\subseteq\)







\(\ds S\)





by definition of $S$



Hence $A = S \setminus B^-$.

From Topological Closure is Closed, $B^-$ is closed in $T$.
Thus $A$ is open in $T$.

Also by definition of separated sets:

$A^- \cap B = \O$
Hence, by the same reasoning, $B$ must also be open.

But:

$A \cap B \subseteq A \cap B^- = \O$
and $A \cup B = S$, by assumption.
So:

$A = S \setminus B$ and $B = S \setminus A$
and we conclude that both $A$ and $B$ are clopen.
Therefore, by hypothesis, one of them must be $S$ and the other must be $\O$.
That is, there are no two non-empty separated sets of $T$ whose union is $S$.
$\blacksquare$





