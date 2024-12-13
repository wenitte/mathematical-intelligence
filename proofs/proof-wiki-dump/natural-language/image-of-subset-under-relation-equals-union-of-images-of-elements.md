# 

Source: https://proofwiki.org/wiki/Image_of_Subset_under_Relation_equals_Union_of_Images_of_Elements

Theorem
Let $S$ and $T$ be sets.
Let $\RR \subseteq S \times T$ be a relation on $S \times T$.
Let $X \subseteq S$ be a subset of $S$.

Then:

$\ds \RR \sqbrk X = \bigcup_{x \mathop \in X} \map \RR x$
where:

$\RR \sqbrk X$ is the image of the subset $X$ under $\RR$
$\map \RR x$ is the image of the element $x$ under $\RR$.


Proof
By definition:

$\RR \sqbrk X = \set {y \in T: \exists x \in X: \tuple {x, y} \in \RR}$
$\map \RR x = \set {y \in T:\tuple {x, y} \in \RR}$

First:














\(\ds y\)

\(\in\)







\(\ds \RR \sqbrk X\)














\(\ds \leadsto \ \ \)

\(\ds \exists x \in X: \, \)



\(\ds \tuple {x, y}\)

\(\in\)







\(\ds \RR\)





Definition of $\RR \sqbrk X$








\(\ds \leadsto \ \ \)





\(\ds \tuple {x, y}\)

\(\in\)







\(\ds \bigcup_{x \mathop \in X} \set {\tuple {x, y} \in \RR}\)





Definition of Set Union








\(\ds \leadsto \ \ \)





\(\ds y\)

\(\in\)







\(\ds \bigcup_{x \mathop \in X} \set {y \in T: \tuple {x, y} \in \RR}\)





Definition of Relation








\(\ds \leadsto \ \ \)





\(\ds y\)

\(\in\)







\(\ds \bigcup_{x \mathop \in X} \map \RR x\)





Definition of $\map \RR x$








\(\ds \leadsto \ \ \)





\(\ds \RR \sqbrk X\)

\(\subseteq\)







\(\ds \bigcup_{x \mathop \in X} \map \RR x\)





Definition of Subset




Then:














\(\ds y\)

\(\in\)







\(\ds \bigcup_{x \mathop \in X} \map \RR x\)














\(\ds \leadsto \ \ \)





\(\ds y\)

\(\in\)







\(\ds \bigcup_{x \mathop \in X} \set {y \in T: \tuple {x, y} \in \RR}\)





Definition of $\map \RR x$








\(\ds \leadsto \ \ \)

\(\ds \exists x \in X: \, \)



\(\ds \tuple {x, y}\)

\(\in\)







\(\ds \RR\)





Definition of Set Union








\(\ds \leadsto \ \ \)





\(\ds y\)

\(\in\)







\(\ds \set {y \in T: \exists x \in X: \tuple {x, y} \in \RR}\)





Definition of Relation








\(\ds \leadsto \ \ \)





\(\ds y\)

\(\in\)







\(\ds \RR \sqbrk X\)





Definition of $\RR \sqbrk X$








\(\ds \leadsto \ \ \)





\(\ds \bigcup_{x \mathop \in X} \map \RR x\)

\(\subseteq\)







\(\ds \RR \sqbrk X\)





Definition of Subset




So:

$\ds \bigcup_{x \mathop \in X} \map \RR x \subseteq \RR \sqbrk X$
and:

$\ds \RR \sqbrk X \subseteq \bigcup_{x \mathop \in X} \map \RR x$

The result follows by definition of set equality.
$\blacksquare$





