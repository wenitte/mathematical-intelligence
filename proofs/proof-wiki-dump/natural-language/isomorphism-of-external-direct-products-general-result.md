# 

Source: https://proofwiki.org/wiki/Isomorphism_of_External_Direct_Products/General_Result

Theorem
Let:

$(1): \quad \ds \struct {S, \circ} = \prod_{k \mathop = 1}^n S_k = \struct {S_1, \circ_1} \times \struct {S_2, \circ_2} \times \cdots \times \struct {S_n, \circ_n}$
$(2): \quad \ds \struct {T, \ast} = \prod_{k \mathop = 1}^n T_k = \struct {T_1, \ast_1} \times \struct {T_2, \ast_2} \times \cdots \times \struct {T_n, \ast_n}$
be external direct products of algebraic structures.

Let $\phi_k: \struct {S_k, \circ_k} \to \struct {T_k, \ast_k}$ be an isomorphism for each $k \in \closedint 1 n$.
Then:

$\phi: \struct {s_1, \ldots, s_n} \to \struct {\map {\phi_1} {s_1}, \ldots, \map {\phi_n} {s_n} }$
is an isomorphism from $\struct {S, \circ}$ to $\struct {T, \ast}$.


Proof
By definition of isomorphism, each $\phi_k$ is a homomorphism which is a bijection.
From Cartesian Product of Bijections is Bijection: General Result, $\phi$ is a bijection.
From Homomorphism of External Direct Products: General Result, $\phi$ is a homomorphism.
Hence the result.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 18$: Induced $N$-ary Operations: Theorem $18.11$




