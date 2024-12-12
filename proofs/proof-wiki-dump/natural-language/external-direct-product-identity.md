# 

Source: https://proofwiki.org/wiki/External_Direct_Product_Identity



Theorem
Let $\struct {S \times T, \circ}$ be the external direct product of two algebraic structures $\struct {S, \circ_1}$ and $\struct {T, \circ_2}$.

Then:

$\struct {S, \circ_1}$ has identity element $e_S$ and $\struct {T, \circ_2}$ has identity element $e_T$
if and only if:

$\tuple {e_S, e_T}$ is the identity element for $\struct {S \times T, \circ}$.


Proof
Sufficient Condition
Let $e_S$ and $e_T$ be the identity elements of $\struct {S, \circ_1}$ and $\struct {T, \circ_2}$ respectively.














\(\ds \tuple {s, t} \circ \tuple {e_S, e_T}\)

\(=\)







\(\ds \tuple {s \circ_1 e_S, t \circ_2 e_T}\)




















\(\ds \)

\(=\)







\(\ds \tuple {s, t}\)




















\(\ds \tuple {e_S, e_T} \circ \tuple {s, t}\)

\(=\)







\(\ds \tuple {e_S \circ_1 s, e_T \circ_2 t}\)




















\(\ds \)

\(=\)







\(\ds \tuple {s, t}\)










Thus $\tuple {e_S, e_T}$ is the identity of $\struct {S \times T, \circ}$.
$\Box$


Necessary Condition
Let $\tuple {e_S, e_T}$ be an identity of $\struct {S \times T, \circ}$.
Then we have:










\(\ds \forall \tuple {s, t} \in S \times T: \, \)



\(\ds \tuple {s, t} \circ \tuple {e_S, e_T}\)

\(=\)







\(\ds \tuple {s, t}\)





Definition of Identity Element








\(\ds \leadsto \ \ \)





\(\ds \tuple {s \circ_1 e_S, t \circ_2 e_T}\)

\(=\)







\(\ds \tuple {s, t}\)





Definition of External Direct Product








\(\ds \leadsto \ \ \)

\(\ds \forall s \in S, t \in T: \, \)



\(\ds s \circ_1 e_S\)

\(=\)







\(\ds s\)





Equality of Ordered Pairs












\(\, \ds \land \, \)

\(\ds t \circ_2 e_T\)

\(=\)







\(\ds t\)









and:










\(\ds \forall \tuple {s, t} \in S \times T: \, \)



\(\ds \tuple {e_S, e_T} \circ \tuple {s, t}\)

\(=\)







\(\ds \tuple {s, t}\)





Definition of Identity Element








\(\ds \leadsto \ \ \)





\(\ds \tuple {e_S \circ_1 s, e_T \circ_2 t}\)

\(=\)







\(\ds \tuple {s, t}\)





Definition of External Direct Product








\(\ds \leadsto \ \ \)

\(\ds \forall s \in S, t \in T: \, \)



\(\ds e_S \circ_1 s\)

\(=\)







\(\ds s\)





Equality of Ordered Pairs












\(\, \ds \land \, \)

\(\ds e_T \circ_2 t\)

\(=\)







\(\ds t\)









Thus $e_S$ and $e_T$ are identity elements of $\struct {S, \circ_1}$ and $\struct {T, \circ_2}$ respectively.
$\blacksquare$


Also see
External Direct Product Associativity
External Direct Product Commutativity
External Direct Product Inverses




