# 

Source: https://proofwiki.org/wiki/Intersection_is_Commutative/Family_of_Sets/Proof_1

Theorem
Let $\family {S_i}_{i \mathop \in I}$ be an indexed family of sets.
Let $\ds I = \bigcap_{i \mathop \in I} S_i$ denote the intersection of $\family {S_i}_{i \mathop \in I}$.
Let $J \subseteq I$ be a subset of $I$.

Then:

$\ds \bigcap_{i \mathop \in I} S_i = \bigcap_{j \mathop \in J} S_j \cap \bigcap_{k \mathop \in \relcomp I J} S_k = \bigcap_{k \mathop \in \relcomp I J} S_k \cap \bigcap_{j \mathop \in J} S_j$
where $\relcomp I J$ denotes the complement of $J$ relative to $I$.


Proof
We have that both $\ds \bigcap_{j \mathop \in J} S_j$ and $\ds \bigcap_{k \mathop \in \relcomp I J} S_k$ are sets.
Hence by Intersection is Commutative we have:

$\ds \bigcap_{j \mathop \in J} S_j \cap \bigcap_{k \mathop \in \relcomp I J} S_k = \bigcap_{k \mathop \in \relcomp I J} S_k \cap \bigcap_{j \mathop \in J} S_j$

It remains to be demonstrated that $\ds \bigcap_{i \mathop \in I} S_i = \bigcap_{j \mathop \in J} S_j \cap \bigcap_{k \mathop \in \relcomp I J} S_k$.
So:














\(\ds x\)

\(\in\)







\(\ds \bigcap_{i \mathop \in I} S_i\)














\(\ds \leadstoandfrom \ \ \)

\(\ds \forall i \in I: \, \)



\(\ds x\)

\(\in\)







\(\ds S_i\)





Definition of Intersection of Family








\(\ds \leadstoandfrom \ \ \)

\(\ds \forall j \in J: \, \)



\(\ds x\)

\(\in\)







\(\ds S_j\)





Definition of Relative Complement










\(\ds \forall k \in \relcomp I J: \, \)

\(\, \ds \land \, \)

\(\ds x\)

\(\in\)







\(\ds S_k\)














\(\ds \leadstoandfrom \ \ \)





\(\ds x\)

\(\in\)







\(\ds \bigcap_{j \mathop \in J} S_j\)





Definition of Intersection of Family












\(\, \ds \land \, \)

\(\ds x\)

\(\in\)







\(\ds \bigcap_{k \mathop \in \relcomp I J} S_k\)





Definition of Intersection of Family








\(\ds \leadstoandfrom \ \ \)





\(\ds x\)

\(\in\)







\(\ds \bigcap_{j \mathop \in J} S_j \cap \bigcap_{k \mathop \in \relcomp I J} S_k\)





Definition of Set Intersection



That is:

$\ds x \in \bigcap_{i \mathop \in I} S_i \iff x \in \bigcap_{j \mathop \in J} S_j \cap \bigcap_{k \mathop \in \relcomp I J} S_k$
The result follows by definition of set equality.
$\blacksquare$


Sources
1960: Paul R. Halmos: Naive Set Theory ... (previous) ... (next): $\S 9$: Families




