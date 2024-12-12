# 

Source: https://proofwiki.org/wiki/External_Direct_Product_Associativity



Theorem
Let $\struct {S \times T, \circ}$ be the external direct product of the two algebraic structures $\struct {S, \circ_1}$ and $\struct {T, \circ_2}$.

Then:

$\circ_1$ and $\circ_2$ are associative
if and only if:

$\circ$ is associative.


Proof
Sufficient Condition
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
$\Box$


Necessary Condition
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




