# 

Source: https://proofwiki.org/wiki/Restriction_of_Antitransitive_Relation_is_Antitransitive

Theorem
Let $S$ be a set.
Let $\RR \subseteq S \times S$ be an antitransitive relation on $S$.

Let $T \subseteq S$ be a subset of $S$.
Let $\RR {\restriction_T} \subseteq T \times T$ be the restriction of $\RR$ to $T$.

Then $\RR {\restriction_T}$ is an antitransitive relation on $T$.


Proof
Suppose $\RR$ is antitransitive on $S$.
Then by definition:

$\set {\tuple {x, y}, \tuple {y, z} } \subseteq \RR \implies \tuple {x, z} \notin \RR$

So:














\(\ds \set {\tuple {x, y}, \tuple {y, z} }\)

\(\subseteq\)







\(\ds \RR {\restriction_T}\)














\(\ds \leadsto \ \ \)





\(\ds \set {\tuple {x, y}, \tuple {y, z} }\)

\(\subseteq\)







\(\ds \paren {T \times T} \cap \RR\)





Definition of Restriction of Relation








\(\ds \leadsto \ \ \)





\(\ds \tuple {x, z}\)

\(\notin\)







\(\ds \paren {T \times T} \cap \RR\)





as $\RR$ is antitransitive on $S$








\(\ds \leadsto \ \ \)





\(\ds \tuple {x, z}\)

\(\in\)







\(\ds \RR {\restriction_T}\)





Definition of Restriction of Relation




Therefore, if $x, y, z \in T$, it follows that:

$\set {\tuple {x, y}, \tuple {y, z} } \subseteq \RR {\restriction_T} \implies \tuple {x, z} \notin \RR {\restriction_T}$
and so by definition $\RR {\restriction_T}$ is an antitransitive relation on $T$.
$\blacksquare$


Also see
Properties of Restriction of Relation‎ for other similar properties of the restriction of a relation.




