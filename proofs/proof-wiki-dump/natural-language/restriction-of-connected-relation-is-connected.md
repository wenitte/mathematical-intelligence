# 

Source: https://proofwiki.org/wiki/Restriction_of_Connected_Relation_is_Connected

Theorem
Let $S$ be a set.
Let $\RR \subseteq S \times S$ be a connected relation on $S$.

Let $T \subseteq S$ be a subset of $S$.
Let $\RR {\restriction_T} \subseteq T \times T$ be the restriction of $\RR$ to $T$.

Then $\RR {\restriction_T}$ is a connected relation on $T$.


Proof
Suppose $\RR$ is connected on $S$.
That is:

$\forall a, b \in S: a \ne b \implies \tuple {a, b} \in \RR \lor \tuple {b, a} \in \RR$

So:














\(\ds a, b\)

\(\in\)







\(\ds T\)














\(\ds \leadsto \ \ \)





\(\ds \tuple {a, b}\)

\(\in\)







\(\ds T \times T\)


















\(\, \ds \land \, \)

\(\ds \tuple {b, a}\)

\(\in\)







\(\ds T \times T\)





Definition of Ordered Pair and Definition of Cartesian Product








\(\ds \leadsto \ \ \)





\(\ds \tuple {a, b}\)

\(\in\)







\(\ds \paren {T \times T} \cap \RR\)


















\(\, \ds \lor \, \)

\(\ds \tuple {b, a}\)

\(\in\)







\(\ds \paren {T \times T} \cap \RR\)





as $\RR$ is connected on $S$








\(\ds \leadsto \ \ \)





\(\ds \tuple {a, b}\)

\(\in\)







\(\ds R \restriction_T\)


















\(\, \ds \lor \, \)

\(\ds \tuple {b, a}\)

\(\in\)







\(\ds R {\restriction_T}\)





Definition of Restriction of Relation




and so $\RR {\restriction_T}$ is connected on $T$.
$\blacksquare$


Also see
Properties of Restriction of Relation‎ for other similar properties of the restriction of a relation.




