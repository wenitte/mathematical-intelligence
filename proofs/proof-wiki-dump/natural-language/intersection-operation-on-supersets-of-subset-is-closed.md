# 

Source: https://proofwiki.org/wiki/Intersection_Operation_on_Supersets_of_Subset_is_Closed



Theorem
Let $S$ be a set.
Let $T \subseteq S$ be a given subset of $S$.
Let $\powerset S$ denote the power set of $S$

Let $\mathscr S$ be the subset of $\powerset S$ defined as:

$\mathscr S = \set {Y \in \powerset S: T \subseteq Y}$

Then the algebraic structure $\struct {\mathscr S, \cap}$ is closed.


Proof
Let $A, B \in \mathscr S$.
We have that:














\(\ds T\)

\(\subseteq\)







\(\ds A\)





Definition of $\mathscr S$














\(\ds T\)

\(\subseteq\)







\(\ds B\)





Definition of $\mathscr S$




\(\text {(1)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds T\)

\(\subseteq\)







\(\ds A \cap B\)





Intersection is Largest Subset



and:














\(\ds A\)

\(\subseteq\)







\(\ds S\)





Definition of Power Set














\(\ds B\)

\(\subseteq\)







\(\ds S\)





Definition of Power Set








\(\ds \leadsto \ \ \)





\(\ds A \cap B\)

\(\subseteq\)







\(\ds S\)





Intersection is Subset




\(\text {(2)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds A \cap B\)

\(\in\)







\(\ds \powerset S\)





Definition of Power Set




Thus we have:














\(\ds T\)

\(\subseteq\)







\(\ds A \cap B\)





from $(1)$














\(\ds A \cap B\)

\(\in\)







\(\ds \powerset S\)





from $(2)$








\(\ds \leadsto \ \ \)





\(\ds A \cap B\)

\(\in\)







\(\ds \mathscr S\)





Definition of $\mathscr S$




Hence the result by definition of closed algebraic structure.
$\blacksquare$


Also see
Union Operation on Supersets of Subset is Closed


Sources
1965: J.A. Green: Sets and Groups ... (previous) ... (next): Chapter $5$: Subgroups: Exercise $1$




