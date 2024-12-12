# 

Source: https://proofwiki.org/wiki/Equivalence_Relation_on_Power_Set_induced_by_Intersection_with_Subset/Equivalence_Class_of_Empty_Set

Theorem
Let $A, T$ be sets such that $A \subseteq T$.
Let $S = \powerset T$ denote the power set of $T$.

Let $\alpha$ denote the relation defined on $S$ by:

$\forall X, Y \in S: X \mathrel \alpha Y \iff X \cap A = Y \cap A$
We have that $\alpha$ is an equivalence relation.

The equivalence class of $\O$ in $S$ with respect to $\alpha$ is given by:

$\eqclass \O \alpha = \powerset {T \setminus A}$


Proof
That $\alpha$ is an equivalence relation is proved in Equivalence Relation on Power Set induced by Intersection with Subset.

We have that:

$\eqclass \O \alpha = \set {X \in S: X \cap A = \O \cap A = \O}$

Thus:














\(\ds X\)

\(\in\)







\(\ds \eqclass \O \alpha\)














\(\ds \leadsto \ \ \)





\(\ds X \cap A\)

\(=\)







\(\ds \O\)





Definition of Equivalence Class








\(\ds \leadsto \ \ \)





\(\ds X \cap A\)

\(\subseteq\)







\(\ds \relcomp T A\)





Empty Intersection iff Subset of Complement








\(\ds \leadsto \ \ \)





\(\ds X\)

\(\subseteq\)







\(\ds T \setminus A\)





Definition of Relative Complement








\(\ds \leadsto \ \ \)





\(\ds X\)

\(\in\)







\(\ds \powerset {T \setminus A}\)





Definition of Power Set








\(\ds \leadsto \ \ \)





\(\ds \eqclass \O \alpha\)

\(\subseteq\)







\(\ds \powerset {T \setminus A}\)





Definition of Subset




Then:














\(\ds X\)

\(\in\)







\(\ds \powerset {T \setminus A}\)














\(\ds \leadsto \ \ \)





\(\ds X \cap A\)

\(=\)







\(\ds \O\)





reversing the above argument








\(\ds \leadsto \ \ \)





\(\ds X\)

\(\alpha\)







\(\ds \O\)














\(\ds \leadsto \ \ \)





\(\ds X\)

\(\in\)







\(\ds \eqclass \O \alpha\)














\(\ds \leadsto \ \ \)





\(\ds \powerset {T \setminus A}\)

\(\subseteq\)







\(\ds \eqclass \O \alpha\)





Definition of Subset



$\blacksquare$


Sources
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $3$: Equivalence Relations and Equivalence Classes: Exercise $2 \ \text {(ii)}$




