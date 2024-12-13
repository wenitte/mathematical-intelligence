# 

Source: https://proofwiki.org/wiki/Restriction_of_Antisymmetric_Relation_is_Antisymmetric



Theorem
Let $S$ be a set.
Let $\RR \subseteq S \times S$ be an antisymmetric relation on $S$.

Let $T \subseteq S$ be a subset of $S$.
Let $\RR {\restriction_T} \subseteq T \times T$ be the restriction of $\RR$ to $T$.

Then $\RR {\restriction_T}$ is an antisymmetric relation on $T$.


Proof
Suppose $\RR$ is antisymmetric on $S$.
Then:














\(\ds \set {\tuple {x, y}, \tuple {y, x} }\)

\(\subseteq\)







\(\ds \RR {\restriction_T}\)














\(\ds \leadsto \ \ \)





\(\ds \set {\tuple {x, y}, \tuple {y, x} }\)

\(\subseteq\)







\(\ds \paren {T \times T} \cap \RR\)





Definition of Restriction of Relation








\(\ds \leadsto \ \ \)





\(\ds \set {\tuple {x, y}, \tuple {y, x} }\)

\(\subseteq\)







\(\ds \RR\)





Intersection is Subset








\(\ds \leadsto \ \ \)





\(\ds x\)

\(=\)







\(\ds y\)





$\RR$ is Antisymmetric on $S$



Thus $\RR {\restriction_T}$ is antisymmetric on $T$.
$\blacksquare$


Also see
Properties of Restriction of Relation‎ for other similar properties of the restriction of a relation.


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 14$: Orderings




