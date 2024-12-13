# 

Source: https://proofwiki.org/wiki/Restriction_of_Symmetric_Relation_is_Symmetric



Theorem
Let $S$ be a set.
Let $\RR \subseteq S \times S$ be a symmetric relation on $S$.

Let $T \subseteq S$ be a subset of $S$.
Let $\RR {\restriction_T} \subseteq T \times T$ be the restriction of $\RR$ to $T$.

Then $\RR {\restriction_T}$ is a symmetric relation on $T$.


Proof
Suppose $\RR$ is symmetric on $S$.

Then:














\(\ds \tuple {x, y}\)

\(\in\)







\(\ds \RR {\restriction_T}\)














\(\ds \leadsto \ \ \)





\(\ds \tuple {x, y}\)

\(\in\)







\(\ds \paren {T \times T} \cap \RR\)





Definition of Restriction of Relation








\(\ds \leadsto \ \ \)





\(\ds \tuple {x, y}\)

\(\in\)







\(\ds T \times T\)


















\(\, \ds \land \, \)

\(\ds \tuple {x, y}\)

\(\in\)







\(\ds \RR\)





Definition of Set Intersection








\(\ds \leadsto \ \ \)





\(\ds \tuple {y, x}\)

\(\in\)







\(\ds T \times T\)


















\(\, \ds \land \, \)

\(\ds \tuple {y, x}\)

\(\in\)







\(\ds \RR\)





$\RR$ is symmetric on $S$








\(\ds \leadsto \ \ \)





\(\ds \tuple {y, x}\)

\(\in\)







\(\ds \paren {T \times T} \cap \RR\)





Definition of Set Intersection








\(\ds \leadsto \ \ \)





\(\ds \tuple {y, x}\)

\(\in\)







\(\ds \RR {\restriction_T}\)





Definition of Restriction of Relation




and so $\RR {\restriction_T}$ is symmetric on $T$.
$\blacksquare$


Also see
Properties of Restriction of Relation‎ for other similar properties of the restriction of a relation.


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 14$: Orderings




