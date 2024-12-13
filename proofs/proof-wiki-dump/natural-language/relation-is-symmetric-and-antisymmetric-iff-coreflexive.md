# 

Source: https://proofwiki.org/wiki/Relation_is_Symmetric_and_Antisymmetric_iff_Coreflexive



Theorem
Let $S$ be a set.
Let $\RR \subseteq S \times S$ be a relation in $S$.
Then:

$\RR$ is both symmetric and antisymmetric
if and only if:

$\RR$ is coreflexive.


Proof
Necessary Condition
Let $\RR$ be both symmetric and antisymmetric
Suppose $\RR \nsubseteq \Delta_S$.
Then:

$\exists \tuple {x, y} \in \RR: x \ne y$
But then as $\RR$ is symmetric:

$\tuple {y, x} \in \RR$
So we have:

$\tuple {x, y} \in \RR$
and:

$\tuple {y, x} \in \RR$
where $x \ne y$.
Thus $\RR$ is not antisymmetric, contrary to hypothesis.
So our assumption that $\RR \nsubseteq \Delta_S$ is false.
That is:

$\RR \subseteq \Delta_S$
The result follows by definition of coreflexive.
$\Box$


Sufficient Condition
Let $\RR$ be coreflexive.
Then:














\(\ds \tuple {x, y}\)

\(\in\)







\(\ds \RR\)














\(\ds \leadsto \ \ \)





\(\ds x\)

\(=\)







\(\ds y\)





Definition of Coreflexive Relation








\(\ds \leadsto \ \ \)





\(\ds \tuple {x, y}\)

\(=\)







\(\ds \tuple {y, x}\)





Equality of Ordered Pairs








\(\ds \leadsto \ \ \)





\(\ds \tuple {y, x}\)

\(\in\)







\(\ds \RR\)









and so by definition $\RR$ is symmetric.

Let $\tuple {x, y} \in \RR$ and $\tuple {y, x} \in \RR$.
From the above, this can happen only when $x = y$.
That is, by definition, $\RR$ is antisymmetric.
So $\RR$ is both symmetric and antisymmetric.
Hence the result.
$\blacksquare$


Sources
1965: E.J. Lemmon: Beginning Logic ... (previous) ... (next): Chapter $4$: The Predicate Calculus $2$: $5$ Properties of Relations: Exercise $5$
1971: Robert H. Kasriel: Undergraduate Topology ... (previous) ... (next): $\S 1.19$: Some Important Properties of Relations: Exercise $10$




