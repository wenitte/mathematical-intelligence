# 

Source: https://proofwiki.org/wiki/Intersection_is_Commutative/Family_of_Sets/Proof_2

Theorem
Let $\family {S_i}_{i \mathop \in I}$ be an indexed family of sets.
Let $\ds I = \bigcap_{i \mathop \in I} S_i$ denote the intersection of $\family {S_i}_{i \mathop \in I}$.
Let $J \subseteq I$ be a subset of $I$.

Then:

$\ds \bigcap_{i \mathop \in I} S_i = \bigcap_{j \mathop \in J} S_j \cap \bigcap_{k \mathop \in \relcomp I J} S_k = \bigcap_{k \mathop \in \relcomp I J} S_k \cap \bigcap_{j \mathop \in J} S_j$
where $\relcomp I J$ denotes the complement of $J$ relative to $I$.


Proof













\(\ds \bigcap_{j \mathop \in J} S_j \cap \bigcap_{k \mathop \in \relcomp I J} S_k\)

\(=\)







\(\ds \map \complement {\map \complement {\bigcap_{j \mathop \in J} S_j \cap \bigcap_{k \mathop \in \relcomp I J} S_k} }\)





Complement of Complement














\(\ds \)

\(=\)







\(\ds \map \complement {\map \complement {\bigcap_{j \mathop \in J} S_j} \cup \map \complement {\bigcap_{k \mathop \in \relcomp I J} S_k} }\)





De Morgan's Laws (Set Theory)/Set Complement/Complement of Intersection




\(\text {(1)}: \quad\)









\(\ds \)

\(=\)







\(\ds \map \complement {\bigcup_{j \mathop \in J} \map \complement {S_j} \cup \bigcup_{k \mathop \in \relcomp I J} \map \complement {S_k} }\)





De Morgan's Laws (Set Theory)/Set Complement/Family of Sets/Complement of Intersection














\(\ds \)

\(=\)







\(\ds \map \complement {\bigcup_{k \mathop \in \relcomp I J} \map \complement {S_k} \cup \bigcup_{j \mathop \in J} \map \complement {S_j} }\)





General Commutativity of Set Union














\(\ds \)

\(=\)







\(\ds \map \complement {\map \complement {\bigcap_{k \mathop \in \relcomp I J} S_k}\cup \map \complement {\bigcap_{j \mathop \in J} S_j} }\)





De Morgan's Laws (Set Theory)/Set Complement/Family of Sets/Complement of Intersection














\(\ds \)

\(=\)







\(\ds \map \complement {\map \complement {\bigcap_{k \mathop \in \relcomp I J} \cap S_k \bigcap_{j \mathop \in J} S_j} }\)





De Morgan's Laws (Set Theory)/Set Complement/Complement of Intersection














\(\ds \)

\(=\)







\(\ds \bigcap_{k \mathop \in \relcomp I J} S_k \cap \bigcap_{j \mathop \in J} S_j\)





Complement of Complement




Also:














\(\ds \bigcap_{i \mathop \in I} S_i\)

\(=\)







\(\ds \map \complement {\map \complement {\bigcap_{i \mathop \in I} S_i} }\)





Complement of Complement














\(\ds \)

\(=\)







\(\ds \map \complement {\bigcup_{i \mathop \in I} \map \complement {S_i} }\)





De Morgan's Laws (Set Theory)/Set Complement/Family of Sets/Complement of Intersection














\(\ds \)

\(=\)







\(\ds \map \complement {\bigcup_{j \mathop \in J} \map \complement {S_j} \cup \bigcup_{k \mathop \in \relcomp I J} \map \complement {S_k} }\)





General Commutativity of Set Union














\(\ds \)

\(=\)







\(\ds \bigcap_{j \mathop \in J} S_j \cap \bigcap_{k \mathop \in \relcomp I J} S_k\)





from $(1)$ above



$\blacksquare$


Sources
1960: Paul R. Halmos: Naive Set Theory ... (previous) ... (next): $\S 9$: Families




