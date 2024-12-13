# 

Source: https://proofwiki.org/wiki/Restriction_of_Transitive_Relation_is_Transitive



Theorem
Let $S$ be a set.
Let $\RR \subseteq S \times S$ be a transitive relation on $S$.

Let $T \subseteq S$ be a subset of $S$.
Let $\RR {\restriction_T} \subseteq T \times T$ be the restriction of $\RR$ to $T$.

Then $\RR {\restriction_T}$ is a transitive relation on $T$.


Proof
Suppose $\RR$ is transitive on $S$.
Then by definition:

$\set {\tuple {x, y}, \tuple {y, z} } \subseteq \RR \implies \tuple {x, z} \in \RR$

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

\(\in\)







\(\ds \paren {T \times T} \cap \RR\)





$\RR$ is transitive on $S$








\(\ds \leadsto \ \ \)





\(\ds \tuple {x, z}\)

\(\in\)







\(\ds \RR {\restriction_T}\)





Definition of Restriction of Relation




Therefore, if $x, y, z \in T$, it follows that:

$\set {\tuple {x, y}, \tuple {y, z} } \subseteq \RR {\restriction_T} \implies \tuple {x, z} \in \RR {\restriction_T}$
and so by definition $\RR {\restriction_T}$ is a transitive relation on $T$.
$\blacksquare$


Also see
Properties of Restriction of Relation‎ for other similar properties of the restriction of a relation.


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 14$: Orderings




