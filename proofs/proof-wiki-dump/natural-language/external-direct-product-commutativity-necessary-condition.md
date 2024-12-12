# 

Source: https://proofwiki.org/wiki/External_Direct_Product_Commutativity/Necessary_Condition



Theorem
Let $\struct {S \times T, \circ}$ be the external direct product of the two algebraic structures $\struct {S, \circ_1}$ and $\struct {T, \circ_2}$.
Let $\circ$ be commutative.

Then $\circ_1$ and $\circ_2$ are both also commutative.


Proof
Let $\circ$ be commutative. 
Aiming for a contradiction, suppose it is not the case that both $\circ_1$ and $\circ_2$ are commutative.
Without loss of generality, suppose $\circ_1$ is not commutative.
Hence:










\(\ds \exists s_1, s_2 \in S: \, \)



\(\ds s_1 \circ_1 s_2\)

\(\ne\)







\(\ds s_2 \circ_1 s_1\)





as $\circ_1$ is not commutative








\(\ds \leadsto \ \ \)

\(\ds \forall t_1, t_2 \in T: \, \)



\(\ds \tuple {s_1 \circ_1 s_2} \circ \tuple {t_1 \circ_2 t_2}\)

\(\ne\)







\(\ds \tuple {s_2 \circ_1 s_1} \circ \tuple {t_2 \circ_2 t_1}\)





Equality of Ordered Pairs








\(\ds \leadsto \ \ \)

\(\ds \forall t_1, t_2 \in T: \, \)



\(\ds \tuple {s_1, t_1} \circ \tuple {s_2, t_2}\)

\(\ne\)







\(\ds \tuple {s_2, t_2} \circ \tuple {s_1, t_1}\)





Definition of Operation Induced by Direct Product



This contradicts our assumption that $\circ$ is commutative.
The same argument can be applied, mutatis mutandis, to the case where $\circ_2$ is not commutative.

Hence, by Proof by Contradiction, $\circ_1$ and $\circ_2$ are both commutative.
$\blacksquare$


Also see
External Direct Product Associativity
External Direct Product Identity
External Direct Product Inverses


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 13$: Compositions Induced on Cartesian Products and Function Spaces: Exercise $13.5$




