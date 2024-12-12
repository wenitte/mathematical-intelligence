# 

Source: https://proofwiki.org/wiki/External_Direct_Product_Associativity/Sufficient_Condition



Theorem
Let $\struct {S \times T, \circ}$ be the external direct product of the two algebraic structures $\struct {S, \circ_1}$ and $\struct {T, \circ_2}$.
Let $\circ_1$ and $\circ_2$ be associative.

Then $\circ$ is also associative.


General Result
Let $\ds \struct {S, \circ} = \prod_{k \mathop = 1}^n S_k$ be the external direct product of the algebraic structures $\struct {S_1, \circ_1}, \struct {S_2, \circ_2}, \ldots, \struct {S_n, \circ_n}$.

If $\circ_1, \ldots, \circ_n$ are all associative, then so is $\circ$.


Proof
Let $\circ_1$ and $\circ_2$ be associative. 














\(\ds \paren {\tuple {s_1, t_1} \circ \tuple {s_2, t_2} } \circ \tuple {s_3, t_3}\)

\(=\)







\(\ds \tuple {\paren {s_1 \circ_1 s_2} \circ_1 s_3, \paren {t_1 \circ_2 t_2} \circ_2 t_3}\)





Definition of Operation Induced by Direct Product














\(\ds \)

\(=\)







\(\ds \tuple {s_1 \circ_1 s_2 \circ_1 s_3, t_1 \circ_2 t_2 \circ_2 t_3}\)





Definition of Associative Operation














\(\ds \)

\(=\)







\(\ds \tuple {s_1 \circ_1 \paren {s_2 \circ_1 s_3}, t_1 \circ_2 \paren {t_2 \circ_2 t_3} }\)





Definition of Associative Operation














\(\ds \)

\(=\)







\(\ds \tuple {s_1, t_1} \circ \paren {\tuple {s_2, t_2} \circ \tuple {s_3, t_3} }\)





Definition of Operation Induced by Direct Product



Thus $\circ$ is associative.
$\blacksquare$


Also see
External Direct Product Commutativity
External Direct Product Identity
External Direct Product Inverses
Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 13$: Compositions Induced on Cartesian Products and Function Spaces: Theorem $13.1: \ 1^\circ$
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 13$: Compositions Induced on Cartesian Products and Function Spaces: Exercise $13.1$




