# 

Source: https://proofwiki.org/wiki/External_Direct_Product_Inverses



Theorem
Let $\struct {S \times T, \circ}$ be the external direct product of the two algebraic structures $\struct {S, \circ_1}$ and $\struct {T, \circ_2}$.
Then:

$s^{-1}$ and $t^{-1}$ are inverse elements of $s \in \struct {S, \circ_1}$ and $t \in \struct {T, \circ_2}$ respectively
if and only if:

$\tuple {s^{-1}, t^{-1} }$ is an inverse element of $\tuple {s, t} \in \struct {S \times T, \circ}$.


Proof
Sufficient Condition
Let:

$e_S$ be the identity for $\struct {S, \circ_1}$
and:

$e_T$ be the identity for $\struct {T, \circ_2}$.
Also let:

$s^{-1}$ be the inverse of $s \in \struct {S, \circ_1}$
and

$t^{-1}$ be the inverse of $t \in \struct {T, \circ_2}$.

Then:














\(\ds \tuple {s, t} \circ \tuple {s^{-1}, t^{-1} }\)

\(=\)







\(\ds \tuple {s \circ_1 s^{-1}, t \circ_2 t^{-1} }\)




















\(\ds \)

\(=\)







\(\ds \tuple {e_S, e_T}\)




















\(\ds \)

\(=\)







\(\ds \tuple {s^{-1} \circ_1 s, t^{-1} \circ_2 t}\)




















\(\ds \)

\(=\)







\(\ds \tuple {s^{-1}, t^{-1} } \circ \tuple {s, t}\)










Thus the inverse of $\tuple {s, t}$ is $\tuple {s^{-1}, t^{-1} }$.
$\Box$


Necessary Condition
Let $\tuple {e_S, e_T}$ be the identity element of $\struct {S \times T, \circ}$.
Let $\tuple {s^{-1}, t^{-1} }$ be an inverse element of $\tuple {s, t} \in \struct {S \times T, \circ}$.
Then we have:














\(\ds \tuple {s, t} \circ \tuple {s^{-1}, t^{-1} }\)

\(=\)







\(\ds \tuple {e_S, e_T}\)





Definition of Inverse Element








\(\ds \leadsto \ \ \)





\(\ds \tuple {s \circ_1 s^{-1}, t \circ_2 t^{-1} }\)

\(=\)







\(\ds \tuple {e_S, e_T}\)





Definition of External Direct Product








\(\ds \leadsto \ \ \)

\(\ds \forall s \in S, t \in T: \, \)



\(\ds s \circ_1 s^{-1}\)

\(=\)







\(\ds e_S\)





Equality of Ordered Pairs












\(\, \ds \land \, \)

\(\ds t \circ_2 t^{-1}\)

\(=\)







\(\ds e_T\)









and:














\(\ds \tuple {s^{-1}, t^{-1} } \circ \tuple {s, t}\)

\(=\)







\(\ds \tuple {e_S, e_T}\)





Definition of Inverse Element








\(\ds \leadsto \ \ \)





\(\ds \tuple {s^{-1} \circ_1 s, t^{-1} \circ_2 t}\)

\(=\)







\(\ds \tuple {e_S, e_T}\)





Definition of External Direct Product








\(\ds \leadsto \ \ \)





\(\ds s^{-1} \circ_1 s\)

\(=\)







\(\ds e_S\)





Equality of Ordered Pairs












\(\, \ds \land \, \)

\(\ds t^{-1} \circ_2 t\)

\(=\)







\(\ds e_T\)









Thus $s^{-1}$ and $t^{-1}$ are inverse elements of $s \in \struct {S, \circ_1}$ and $t \in \struct {T, \circ_2}$ respectively.
$\blacksquare$


Also see
External Direct Product Associativity
External Direct Product Commutativity
External Direct Product Identity




