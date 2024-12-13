# 

Source: https://proofwiki.org/wiki/Intersection_is_Associative/Family_of_Sets/Proof_2

Theorem
Let $\family {S_i}_{i \mathop \in I}$ and $\family {I_\lambda}_{\lambda \mathop \in \Lambda}$ be indexed families of sets.
Let $\ds I = \bigcap_{\lambda \mathop \in \Lambda} I_\lambda$.

Then:

$\ds \bigcap_{i \mathop \in I} S_i = \bigcap_{\lambda \mathop \in \Lambda} \paren {\bigcap_{i \mathop \in I_\lambda} S_i}$


Proof













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







\(\ds \map \complement {\bigcup_{\lambda \mathop \in \Lambda} \paren {\bigcup_{i \mathop \in I_\lambda} \map \complement {S_i} } }\)





General Associativity of Set Union














\(\ds \)

\(=\)







\(\ds \map \complement {\bigcup_{\lambda \mathop \in \Lambda} \paren {\map \complement {\bigcap_{i \mathop \in I_\lambda} S_i} } }\)





De Morgan's Laws (Set Theory)/Set Complement/Family of Sets/Complement of Intersection














\(\ds \)

\(=\)







\(\ds \bigcap_{\lambda \mathop \in \Lambda} \paren {\map \complement {\map \complement {\bigcap_{i \mathop \in I_\lambda} S_i} } }\)





De Morgan's Laws (Set Theory)/Set Complement/Family of Sets/Complement of Union














\(\ds \)

\(=\)







\(\ds \bigcap_{\lambda \mathop \in \Lambda} \paren {\bigcap_{i \mathop \in I_\lambda} S_i}\)





Complement of Complement



$\blacksquare$


Sources
1960: Paul R. Halmos: Naive Set Theory ... (previous) ... (next): $\S 9$: Families




