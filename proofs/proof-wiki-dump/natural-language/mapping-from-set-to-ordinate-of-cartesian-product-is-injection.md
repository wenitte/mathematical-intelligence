# 

Source: https://proofwiki.org/wiki/Mapping_from_Set_to_Ordinate_of_Cartesian_Product_is_Injection



Theorem
Let $S$ and $T$ be sets such that $T \ne \O$.
Let $S \times T$ denote their cartesian product.
Let $t \in T$ be given.

Let $j_t: S \to S \times T$ be the mapping from $S$ to $S \times T$ defined as:

$\forall s \in S: \map {j_t} s = \tuple {s, t}$

Then $j_t$ is an injection.


Proof
It has been shown in Correspondence between Set and Ordinate of Cartesian Product is Mapping that $j_t$ is a mapping.
Now it is to be shown that $j_t$ is injective, that is:

$\forall s_1, s_2 \in S: \map {j_t} {s_1} = \map {j_t} {s_2} \implies s_1 = s_2$

We have that:














\(\ds \map {j_t} {s_1}\)

\(=\)







\(\ds \map {j_t} {s_2}\)














\(\ds \leadsto \ \ \)





\(\ds \tuple {s_1, t}\)

\(=\)







\(\ds \tuple {s_2, t}\)





Definition of $j_t$








\(\ds \leadsto \ \ \)





\(\ds s_1\)

\(=\)







\(\ds s_2\)





Definition of Ordered Pair



Hence the result.
$\blacksquare$


Also see
Definition:Canonical Injection (Abstract Algebra) for an instance of this construct in the context of algebraic structures


Sources
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $1$: Theory of Sets: $\S 6$: Functions: Exercise $6$




