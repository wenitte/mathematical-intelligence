# 

Source: https://proofwiki.org/wiki/Restriction_of_Mapping_is_Mapping/General_Result



Theorem
Let $f: S \to T$ be a mapping.
Let $X \subseteq S$.
Let $f \sqbrk X \subseteq Y \subseteq T$.
Let $f \restriction_{X \times Y}$ be the restriction of $f$ to $X \times Y$.

Then $f \restriction_{X \times Y}: X \to Y$ is a mapping:

whose domain is $X$
whose preimage is $X$
whose codomain is $Y$.


Proof
$f \restriction_{X \times Y}$ is Many-to-one
We have:










\(\ds \forall x \in X: \, \)



\(\ds \tuple {x, y_1}, \tuple {x, y_2} \in f \restriction_{X \times Y}\)

\(\leadsto\)







\(\ds \tuple {x, y_1}, \tuple {x, y_2} \in f \cap \paren{X \times Y}\)





Definition of Restriction of Mapping














\(\ds \)

\(\leadsto\)







\(\ds \tuple {x, y_1}, \tuple {x, y_2} \in f\)





Intersection is Subset














\(\ds \)

\(\leadsto\)







\(\ds y_1 = y_2\)





Definition of Mapping



$\Box$

$f \restriction_{X \times Y}$ is Left-total
We have:














\(\ds \forall x \in X\)

\(\leadsto\)







\(\ds x \in S\)





Definition of Subset














\(\ds \)

\(\leadsto\)







\(\ds \exists y \in T: \tuple {x, y} \in f\)





Definition of Mapping














\(\ds \)

\(\leadsto\)







\(\ds \exists y \in T: y \in f \sqbrk X\)





Definition of Image of subset














\(\ds \)

\(\leadsto\)







\(\ds \exists y \in Y: \tuple {x, y} \in f\)





Subset Relation is Transitive














\(\ds \)

\(\leadsto\)







\(\ds \exists y \in Y: \tuple {x, y} \in f \cap \paren{X \times Y}\)





Definition of Cartesian product and Definition of Set intersection














\(\ds \)

\(\leadsto\)







\(\ds \exists y \in Y: \tuple {x, y} \in f \restriction_{X \times Y}\)





Definition of Restriction of mapping



$\Box$

Hence by definition, $f \restriction_{X \times Y}: X \to Y$ is a mapping.

By definition of domain, the domain of $f \restriction_{X \times Y}$ is $X$.
By definition of codomain, the codomain of $f \restriction_{X \times Y}$ is $Y$.
From Preimage of Mapping equals Domain, the preimage of $f \restriction_{X \times Y}$ is also $X$.
$\blacksquare$





