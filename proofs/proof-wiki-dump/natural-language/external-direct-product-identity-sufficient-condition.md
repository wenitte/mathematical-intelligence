# 

Source: https://proofwiki.org/wiki/External_Direct_Product_Identity/Sufficient_Condition



Theorem
Let $\struct {S \times T, \circ}$ be the external direct product of two algebraic structures $\struct {S, \circ_1}$ and $\struct {T, \circ_2}$.
Let:

$\struct {S, \circ_1}$ have identity element $e_S$
and:

$\struct {T, \circ_2}$ have identity element $e_T$.

Then $\tuple {e_S, e_T}$ is the identity element for $\struct {S \times T, \circ}$.


General Result
Let $\ds \struct {\SS, \circ} = \prod_{k \mathop = 1}^n S_k$ be the external direct product of the algebraic structures $\struct {S_1, \circ_1}, \struct {S_2, \circ_2}, \ldots, \struct {S_n, \circ_n}$.

Let $e_1, e_2, \ldots, e_n$ be the identity elements of $\struct {S_1, \circ_1}, \struct {S_2, \circ_2}, \ldots, \struct {S_n, \circ_n}$ respectively.
Then $\tuple {e_1, e_2, \ldots, e_n}$ is the identity element of $\struct {\SS, \circ}$.


Proof
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
$\blacksquare$


Also see
External Direct Product Associativity
External Direct Product Commutativity
External Direct Product Inverses


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 13$: Compositions Induced on Cartesian Products and Function Spaces: Theorem $13.1: \ 2^\circ$
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 13$: Compositions Induced on Cartesian Products and Function Spaces: Exercise $13.1$




