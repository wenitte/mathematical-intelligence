# 

Source: https://proofwiki.org/wiki/Intersection_is_Associative/Family_of_Sets/Proof_1

Theorem
Let $\family {S_i}_{i \mathop \in I}$ and $\family {I_\lambda}_{\lambda \mathop \in \Lambda}$ be indexed families of sets.
Let $\ds I = \bigcap_{\lambda \mathop \in \Lambda} I_\lambda$.

Then:

$\ds \bigcap_{i \mathop \in I} S_i = \bigcap_{\lambda \mathop \in \Lambda} \paren {\bigcap_{i \mathop \in I_\lambda} S_i}$


Proof
For every $\lambda \in \Lambda$, let $\ds T_\lambda = \bigcap_{i \mathop \in I_\lambda} S_i$.

Then:














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

\(\ds \forall \lambda \in \Lambda: \forall i \in I_\lambda: \, \)



\(\ds x\)

\(\in\)







\(\ds S_i\)














\(\ds \leadstoandfrom \ \ \)

\(\ds \forall \lambda \in \Lambda: \, \)



\(\ds x\)

\(\in\)







\(\ds \bigcap_{i \mathop \in I_\lambda} S_i = T_\lambda\)














\(\ds \leadstoandfrom \ \ \)





\(\ds x\)

\(\in\)







\(\ds \bigcap_{\lambda \mathop \in \Lambda} T_\lambda\)










Thus:

$\ds \bigcap_{i \mathop \in I} S_i = \bigcap_{\lambda \mathop \in \Lambda} T_\lambda = \bigcap_{\lambda \mathop \in \Lambda} \paren {\bigcap_{i \mathop \in I_\lambda} S_i}$
$\blacksquare$


Sources
1960: Paul R. Halmos: Naive Set Theory ... (previous) ... (next): $\S 9$: Families
1975: T.S. Blyth: Set Theory and Abstract Algebra ... (previous) ... (next): $\S 6$. Indexed families; partitions; equivalence relations: Theorem $6.2$




