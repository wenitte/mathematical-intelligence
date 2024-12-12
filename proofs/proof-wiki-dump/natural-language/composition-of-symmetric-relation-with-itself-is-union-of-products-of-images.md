# 

Source: https://proofwiki.org/wiki/Composition_of_Symmetric_Relation_with_Itself_is_Union_of_Products_of_Images

Theorem
Let $\RR$ be a symmetric relation on a set $S$.
Then:

$\RR \circ \RR = \ds \map {\bigcup_{s \mathop \in S} } {\map \RR s \times \map \RR s}$
where

$\RR \circ \RR$ is the composition of $\RR$ with itself
$\map \RR s$ is the image of $s$ under $\RR$
$\map \RR s \times \map \RR s$ is the Cartesian product of $\map \RR s$ with itself


Proof
We have:














\(\ds \tuple {x, y} \in \RR \circ \RR\)

\(\leadstoandfrom\)







\(\ds \exists s \in S : \tuple {x, s}, \tuple {s, y} \in \RR\)





Definition of Composite Relation














\(\ds \)

\(\leadstoandfrom\)







\(\ds \exists s \in S : \tuple {s, x}, \tuple {s, y} \in \RR\)





Definition of Symmetric Relation














\(\ds \)

\(\leadstoandfrom\)







\(\ds \exists s \in S : x, y \in \map \RR s\)





Definition of Image of Element under Relation














\(\ds \)

\(\leadstoandfrom\)







\(\ds \exists s \in S : \tuple {x, y} \in \map \RR s \times \map \RR s\)





Definition of Cartesian Product














\(\ds \)

\(\leadstoandfrom\)







\(\ds \tuple{x,y} \in \map {\bigcup_{s \mathop \in S} } {\map \RR s \times \map \RR s}\)





Definition of Set Union



$\blacksquare$





