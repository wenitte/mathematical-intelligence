# 

Source: https://proofwiki.org/wiki/External_Direct_Product_Associativity/Necessary_Condition



Theorem
Let $\struct {S \times T, \circ}$ be the external direct product of the two algebraic structures $\struct {S, \circ_1}$ and $\struct {T, \circ_2}$.
Let $\circ$ be associative.

Then $\circ_1$ and $\circ_2$ are both also associative.


Proof
Let $\circ$ be associative. 
Aiming for a contradiction, suppose it is not the case that both $\circ_1$ and $\circ_2$ are associative.
Without loss of generality, suppose $\circ_1$ is not associative.
Hence:










\(\ds \exists s_1, s_2, s_3 \in S: \, \)



\(\ds \paren {s_1 \circ_1 s_2} \circ_1 s_3\)

\(\ne\)







\(\ds s_1 \circ_1 \paren {s_2 \circ_1 s_3}\)





as $\circ_1$ is not associative








\(\ds \leadsto \ \ \)

\(\ds \forall t_1, t_2, t_3 \in T: \, \)



\(\ds \tuple {\paren {s_1 \circ_1 s_2}, s_3} \circ \tuple {\paren {t_1 \circ_2 t_2}, t_3}\)

\(\ne\)







\(\ds \tuple {s_1 \circ_1 \paren {s_2 \circ_1 s_3}, t_1 \circ_2 \paren {t_2 \circ_2 t_3} }\)





Equality of Ordered Pairs








\(\ds \leadsto \ \ \)

\(\ds \forall t_1, t_2, t_3 \in T: \, \)



\(\ds \paren {\tuple {s_1, t_1} \circ \tuple {s_2, t_2} } \circ \tuple {s_3, t_3}\)

\(\ne\)







\(\ds \tuple {s_1, t_1} \circ \paren {\tuple {s_2, t_2} \circ \tuple {s_3, t_3} }\)





Definition of Operation Induced by Direct Product



This contradicts our assumption that $\circ$ is associative.
The same argument can be applied, mutatis mutandis, to the case where $\circ_2$ is not associative.

Hence, by Proof by Contradiction, $\circ_1$ and $\circ_2$ are both associative.
$\blacksquare$


Also see
External Direct Product Commutativity
External Direct Product Identity
External Direct Product Inverses
Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 13$: Compositions Induced on Cartesian Products and Function Spaces: Exercise $13.5$




