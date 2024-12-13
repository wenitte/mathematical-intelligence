# 

Source: https://proofwiki.org/wiki/Order_Embedding/Examples/Finite_Subsets_of_Natural_Numbers_in_Divisibility_Structure

Example of Order Embedding
Consider the relational structures:

$\struct {\Z_{>0}, \divides}$, where $\Z_{>0}$ denotes the strictly positive integers and $\divides$ denotes the divisor relation
$\struct {\FF, \subseteq}$, where $\FF$ denotes the finite subsets of the natural numbers without zero $\N_{\ne 0}$ and $\subseteq$ denotes the subset relation.
Let $\pi: \FF \to \Z_{>0}$ be the mapping defined as:

$\forall S \in \FF: \map \pi S = \ds \prod_{n \mathop \in S} \map p n$
where $\map p n$ denotes the $n$th prime number:

$\map p 1 = 2, \map p 2 = 3, \map p 3 = 5, \ldots$

Then $\pi$ is an order embedding of $\FF$ into $\Z_{>0}$.


Proof
Let $S \subseteq T$ where $S, T \in \F$.
Then:














\(\ds S\)

\(\subseteq\)







\(\ds T\)














\(\ds \leadstoandfrom \ \ \)

\(\ds \forall n \in S: \, \)



\(\ds n\)

\(\in\)







\(\ds T\)














\(\ds \leadstoandfrom \ \ \)





\(\ds \prod_{n \mathop \in S} \map p n\)

\(\divides\)







\(\ds \prod_{n \mathop \in T} \map p n\)














\(\ds \leadstoandfrom \ \ \)





\(\ds \map \pi S\)

\(\divides\)







\(\ds \map \pi T\)









$\blacksquare$


Sources
1996: Winfried Just and Martin Weese: Discovering Modern Set Theory. I: The Basics ... (previous) ... (next): Part $1$: Not Entirely Naive Set Theory: Chapter $2$: Partial Order Relations: Exercise $21 \ \text {(a)}$




