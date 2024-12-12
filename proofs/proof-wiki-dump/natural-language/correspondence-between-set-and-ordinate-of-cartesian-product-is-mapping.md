# 

Source: https://proofwiki.org/wiki/Correspondence_between_Set_and_Ordinate_of_Cartesian_Product_is_Mapping



Theorem
Let $S$ and $T$ be sets such that $T \ne \O$.
Let $S \times T$ denote their cartesian product.
Let $t \in T$ be given.

Let $j_t \subseteq S \times \paren {S \times T}$ be the relation on $S \times {S \times T}$ defined as:

$\forall s \in S: \map {j_t} s = \tuple {s, t}$

Then $j_t$ is a mapping.


Proof
First it is to be shown that $j_t$ is left-total.
This follows from the fact that $j_t$ is defined for all $s$:

$\map {j_t} s = \tuple {s, t}$
$\Box$

Next it is to be shown that $j_t$ is many-to-one, that is:

$\forall s_1, s_2 \in S: \map {j_t} {s_1} \ne \map {j_t} {s_2} \implies s_1 \ne s_2$

We have that:














\(\ds \map {j_t} {s_1}\)

\(\ne\)







\(\ds \map {j_t} {s_2}\)














\(\ds \leadsto \ \ \)





\(\ds \tuple {s_1, t}\)

\(\ne\)







\(\ds \tuple {s_2, t}\)





Definition of $j_t$








\(\ds \leadsto \ \ \)





\(\ds s_1\)

\(\ne\)







\(\ds s_2\)





Definition of Ordered Pair



Hence the result.
$\blacksquare$


Also see
Definition:Canonical Injection (Abstract Algebra) for an instance of this construct in the context of algebraic structures


Sources
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $1$: Theory of Sets: $\S 6$: Functions: Exercise $6$




