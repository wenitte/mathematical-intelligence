# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Connected_Topological_Space/No_Union_of_Closed_Sets_implies_No_Subsets_with_Empty_Boundary

Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let $T$ have no two disjoint non-empty closed sets whose union is $S$.

Then the only subsets of $S$ whose boundary is empty are $S$ and $\O$.


Proof
Let $H \subseteq S$ be a non-empty subset whose boundary $\partial H$ is empty.
Thus:














\(\ds \partial H\)

\(=\)







\(\ds \O\)





by hypothesis








\(\ds \leadsto \ \ \)





\(\ds H^- \cap \paren {S \setminus H}^-\)

\(=\)







\(\ds \O\)





Boundary is Intersection of Closure with Closure of Complement




From Topological Closure is Closed, both $H^-$ and $\paren {S \setminus H}^-$ are closed sets of $T$.
From Union of Closure with Closure of Complement is Whole Space:

$H^- \cup \paren {S \setminus H}^- = S$
Thus $H^-$ and $\paren {S \setminus H}^-$ are two disjoint closed sets of $T$ whose union is $S$.

Hence, by hypothesis, one of them must be empty.
Suppose $H$ is not empty.
It must therefore follow that:

$S \setminus H = \O$
Therefore $H = S$.
Thus the only subsets of $S$ whose boundary is empty are $S$ and $\O$.
$\blacksquare$





