# 

Source: https://proofwiki.org/wiki/Mapping_is_Involution_iff_Bijective_and_Symmetric



Theorem
Let $S$ be a set.
Let $f: S \to S$ be a mapping on $S$.

Then $f$ is an involution if and only if $f$ is both a bijection and a symmetric relation.


Proof
By definition an involution on $S$ is a mapping such that:

$\forall x \in S: \map f {\map f x} = x$


Necessary Condition
Let $f$ be an involution.
By Involution is Permutation, $f$ is a permutation and therefore by definition a bijection.

Then:














\(\ds \tuple {x, y}\)

\(\in\)







\(\ds f\)





considering $f$ as a relation: $f \subseteq S \times S$








\(\ds \leadsto \ \ \)





\(\ds \map f x\)

\(=\)







\(\ds y\)





Definition of Mapping








\(\ds \leadsto \ \ \)





\(\ds \map f {\map f x}\)

\(=\)







\(\ds \map f y\)





Definition of Mapping: $a = b \implies \map f a = \map f b$








\(\ds \leadsto \ \ \)





\(\ds x\)

\(=\)







\(\ds \map f y\)





Definition of Involution








\(\ds \leadsto \ \ \)





\(\ds \tuple {y, x}\)

\(\in\)







\(\ds f\)





considering $f$ as a relation: $f \subseteq S \times S$



Thus $f$, considered as a relation, is symmetric.

Thus it has been shown that if $f$ is an involution, it is both a bijection and a symmetric relation.
$\Box$


Sufficient Condition
Let $f$ be a mapping which is both a bijection and a symmetric relation.
Then:














\(\ds \map f x\)

\(=\)







\(\ds y\)





for some unique $y \in S$ as $f$ is a bijection








\(\ds \leadsto \ \ \)





\(\ds \tuple {x, y}\)

\(\in\)







\(\ds f\)





considering $f$ as a relation: $f \subseteq S \times S$








\(\ds \leadsto \ \ \)





\(\ds \tuple {y, x}\)

\(\in\)







\(\ds f\)





Definition of Symmetric Relation








\(\ds \leadsto \ \ \)





\(\ds \map f y\)

\(=\)







\(\ds x\)





Definition of Mapping








\(\ds \leadsto \ \ \)





\(\ds \map f {\map f x}\)

\(=\)







\(\ds x\)





as $y = \map f x$



and so $f$ is shown to be an involution.
$\blacksquare$


Sources
1975: T.S. Blyth: Set Theory and Abstract Algebra ... (previous) ... (next): $\S 5$. Induced mappings; composition; injections; surjections; bijections: Exercise $11$




