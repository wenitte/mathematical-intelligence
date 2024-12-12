# 

Source: https://proofwiki.org/wiki/External_Direct_Product_Identity/Necessary_Condition



Theorem
Let $\struct {S \times T, \circ}$ be the external direct product of two algebraic structures $\struct {S, \circ_1}$ and $\struct {T, \circ_2}$.

Let $\struct {S \times T, \circ}$ have an identity element $\tuple {e_S, e_T}$.
Then:

$\struct {S, \circ_1}$ has an identity element $e_S$
and:

$\struct {T, \circ_2}$ has an identity element $e_T$.


Proof
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


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 13$: Compositions Induced on Cartesian Products and Function Spaces: Exercise $13.5$




