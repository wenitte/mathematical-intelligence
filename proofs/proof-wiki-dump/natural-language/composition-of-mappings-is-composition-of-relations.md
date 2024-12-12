# 

Source: https://proofwiki.org/wiki/Composition_of_Mappings_is_Composition_of_Relations

Theorem
Let $f_1: S_1 \to S_2$ and $f_2: S_2 \to S_3$ be mappings such that the domain of $f_2$ is the same as the codomain of $f_1$.
Let $f_2 \circ f_1$ be the composite of $f_1$ and $f_2$.

Let $f_1$ and $f_2$ be considered as relations on $S_1 \times S_2$ and $S_2 \times S_3$ respectively.
Then $f_2 \circ f_1$ defined as the composition of relations coincides with the definition of $f_2 \circ f_1$ as the composition of mappings.


Proof
By definition of composition of mappings:

$f_2 \circ f_1 = \set {\tuple {x, z} \in S_1 \times S_3: \exists y \in S_2: \tuple {x, y} \in f_1 \land \tuple {y, z} \in f_2}$

Let $\RR_1 \subseteq S_1 \times T_1$ and $\RR_2 \subseteq S_2 \times T_2$ be relations.
The composite of $\RR_1$ and $\RR_2$ is defined as:

$\RR_2 \circ \RR_1 := \set {\tuple {x, z} \in S_1 \times T_2: \exists y \in S_2 \cap T_1: \tuple {x, y} \in \RR_1 \land \tuple {y, z} \in \RR_2}$

When $T_1 = S_2$ and $T_2 = S_3$, this becomes:

$\RR_2 \circ \RR_1 := \set {\tuple {x, z} \in S_1 \times T_3: \exists y \in S_2: \tuple {x, y} \in \RR_1 \land \tuple {y, z} \in \RR_2}$
The definitions can be seen to be identical.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 5$: Composites and Inverses of Functions: Exercise $5.8 \ \text{(a)}$




