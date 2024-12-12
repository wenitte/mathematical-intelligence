# 

Source: https://proofwiki.org/wiki/Disjoint_Family_of_Sets/Examples/3_Arbitrary_Sets

Examples of Disjoint Families of Sets
Let $I = \set {1, 2, 3}$ be an indexing set.
Let:














\(\ds S_1\)

\(=\)







\(\ds \set {a, b}\)




















\(\ds S_2\)

\(=\)







\(\ds \set {b, c}\)




















\(\ds S_3\)

\(=\)







\(\ds \set {a, c}\)









Then the family of sets $\family {S_i}_{i \mathop \in I}$ is disjoint, but not pairwise disjoint.


Proof
Let $S = {a, b, c}$, and so:

$S_1, S_2, S_3 \subseteq S$
We have that:














\(\ds a\)

\(\notin\)







\(\ds S_3\)





as $S_3 = \set {a, c}$














\(\ds b\)

\(\notin\)







\(\ds S_2\)





as $S_2 = \set {b, c}$














\(\ds c\)

\(\notin\)







\(\ds S_1\)





as $S_1 = \set {a, b}$



Thus there is no element of $S$ which is also an element of all of $S_1$, $S_2$ and $S_3$.
That is:

$\ds \bigcap_{i \mathop \in I} S_i = \set {x: \forall i \in I: x \in S_i} = \O$
That is:

$\family {S_i}_{i \mathop \in I}$ is disjoint.

However, note that:














\(\ds S_1 \cap S_2\)

\(=\)







\(\ds \set b\)

\(\ds \ne \O\)


















\(\ds S_2 \cap S_3\)

\(=\)







\(\ds \set c\)

\(\ds \ne \O\)


















\(\ds S_1 \cap S_3\)

\(=\)







\(\ds \set a\)

\(\ds \ne \O\)







Thus it is noted that while $\family {S_i}_{i \mathop \in I}$ is disjoint, it is not the case that $\family {S_i}_{i \mathop \in I}$ is pairwise disjoint.
$\blacksquare$





