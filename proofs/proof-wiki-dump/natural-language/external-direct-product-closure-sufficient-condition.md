# 

Source: https://proofwiki.org/wiki/External_Direct_Product_Closure/Sufficient_Condition

Theorem
Let $\struct {S, \circ_1}$ and $\struct {T, \circ_2}$ be algebraic structures.
Let $\struct {S \times T, \circ}$ be the external direct product of $\struct {S, \circ_1}$ and $\struct {T, \circ_2}$.
Let $\struct {S, \circ_1}$ and $\struct {T, \circ_2}$ be closed.

Then $\struct {S \times T, \circ}$ is also closed. 


General Result
Let $\ds \struct {S, \circ} = \prod_{k \mathop = 1}^n S_k$ be the external direct product of the algebraic structures $\struct {S_1, \circ_1}, \struct {S_2, \circ_2}, \ldots, \struct {S_n, \circ_n}$.
Let $\struct {S_1, \circ_1}, \struct {S_2, \circ_2}, \ldots, \struct {S_n, \circ_n}$ all be closed algebraic structures.

Then $\struct {S, \circ}$ is also a closed algebraic structure.


Proof
Let $\struct {S, \circ_1}$ and $\struct {T, \circ_2}$ be closed.
Let $\tuple {s_1, t_1} \in S \times T$ and $\tuple {s_2, t_2} \in S \times T$.

Then:














\(\ds \tuple {s_1, t_1} \circ \tuple {s_2, t_2}\)

\(=\)







\(\ds \tuple {s_1 \circ_1 s_2, t_1 \circ_2 t_2}\)





Definition of External Direct Product














\(\ds \)

\(\in\)







\(\ds S \times T\)





as $S$ and $T$ are closed: $s_1 \circ_1 s_2 \in S, t_1 \circ_2 t_2 \in T$



demonstrating that $\struct {S \times T, \circ}$ is closed.
$\blacksquare$





