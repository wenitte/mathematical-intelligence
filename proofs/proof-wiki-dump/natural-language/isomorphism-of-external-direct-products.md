# 

Source: https://proofwiki.org/wiki/Isomorphism_of_External_Direct_Products



Theorem
Let:

$\struct {S_1 \times S_2, \circ}$ be the external direct product of two algebraic structures $\struct {S_1, \circ_1}$ and $\struct {S_2, \circ_2}$
$\struct {T_1 \times T_2, *}$ be the external direct product of two algebraic structures $\struct {T_1, *_1}$ and $\struct {T_2, *_2}$
$\phi_1$ be an isomorphism from $\struct {S_1, \circ_1}$ onto $\struct {T_1, *_1}$
$\phi_2$ be an isomorphism from $\struct {S_2, \circ_2}$ onto $\struct {T_2, *_2}$.

Then the mapping $\phi_1 \times \phi_2: \struct {S_1 \times S_2, \circ} \to \struct {T_1 \times T_2, *}$ defined as:

$\map {\paren {\phi_1 \times \phi_2} } {x, y} = \tuple {\map {\phi_1} x, \map {\phi_2} y}$
is an isomorphism from $\struct {S_1 \times S_2, \circ}$ to $\struct {T_1 \times T_2, *}$.


General Result
Let:

$(1): \quad \ds \struct {S, \circ} = \prod_{k \mathop = 1}^n S_k = \struct {S_1, \circ_1} \times \struct {S_2, \circ_2} \times \cdots \times \struct {S_n, \circ_n}$
$(2): \quad \ds \struct {T, \ast} = \prod_{k \mathop = 1}^n T_k = \struct {T_1, \ast_1} \times \struct {T_2, \ast_2} \times \cdots \times \struct {T_n, \ast_n}$
be external direct products of algebraic structures.

Let $\phi_k: \struct {S_k, \circ_k} \to \struct {T_k, \ast_k}$ be an isomorphism for each $k \in \closedint 1 n$.
Then:

$\phi: \struct {s_1, \ldots, s_n} \to \struct {\map {\phi_1} {s_1}, \ldots, \map {\phi_n} {s_n} }$
is an isomorphism from $\struct {S, \circ}$ to $\struct {T, \ast}$.


Proof
From Homomorphism of External Direct Products, we have that $\phi_1 \times \phi_2: \struct {S_1 \times S_2, \circ} \to \struct {T_1 \times T_2, *}$ is a homomorphism.
From Cartesian Product of Bijections is Bijection, we have that $\phi_1 \times \phi_2$ is a bijection.
Thus $\phi_1 \times \phi_2$ is a bijective homomorphism, and so an isomorphism.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 13$: Compositions Induced on Cartesian Products and Function Spaces: Theorem $13.2$
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 13$: Compositions Induced on Cartesian Products and Function Spaces: Exercise $13.2$




