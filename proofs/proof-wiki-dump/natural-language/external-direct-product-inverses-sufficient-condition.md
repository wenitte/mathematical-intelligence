# 

Source: https://proofwiki.org/wiki/External_Direct_Product_Inverses/Sufficient_Condition



Theorem
Let $\struct {S \times T, \circ}$ be the external direct product of the two algebraic structures $\struct {S, \circ_1}$ and $\struct {T, \circ_2}$.
Let:

$s^{-1}$ be an inverse of $s \in \struct {S, \circ_1}$
and:

$t^{-1}$ be an inverse of $t \in \struct {T, \circ_2}$.

Then $\tuple {s^{-1}, t^{-1} }$ is an inverse of $\tuple {s, t} \in \struct {S \times T, \circ}$.


General Result
Let $\ds \struct {\SS, \circ} = \prod_{k \mathop = 1}^n S_k$ be the external direct product of the algebraic structures $\struct {S_1, \circ_1}, \struct {S_2, \circ_2}, \ldots, \struct {S_n, \circ_n}$.
Let $\tuple {x_1, x_2, \ldots, x_n} \in S$.

Let $y_k$ be an inverse of $x_k$ in $\struct {S_k, \circ_k}$ for each of $k \in \N^*_n$.
Then $\tuple {y_1, y_2, \ldots, y_n}$ is the inverse of $\tuple {x_1, x_2, \ldots, x_n} \in \SS$ in $\struct {\SS, \circ}$.


Proof
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
$\blacksquare$


Also see
External Direct Product Associativity
External Direct Product Commutativity
External Direct Product Identity


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 13$: Compositions Induced on Cartesian Products and Function Spaces: Theorem $13.1: \ 3^\circ$
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 13$: Compositions Induced on Cartesian Products and Function Spaces: Exercise $13.1$




