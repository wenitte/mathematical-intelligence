# 

Source: https://proofwiki.org/wiki/External_Direct_Product_of_Projection_with_Canonical_Injection/General_Result

Theorem
Let $\struct {S_1, \circ_1}, \struct {S_2, \circ_2}, \dotsc, \struct {S_j, \circ_j}, \dotsc, \struct {S_n, \circ_n}$ be algebraic structures with identities $e_1, e_2, \dotsc, e_j, \dotsc, e_n$ respectively.
Let $\ds \struct {S, \circ} = \prod_{i \mathop = 1}^n \struct {S_i, \circ_i}$ be the external direct product of $\struct {S_1, \circ_1}, \struct {S_2, \circ_2}, \dotsc, \struct {S_j, \circ_j}, \dotsc, \struct {S_n, \circ_n}$.
Let $\pr_j: \struct {S, \circ} \to \struct {S_j, \circ_j}$ be the $j$th projection from $\struct {S, \circ}$ to $\struct {S_j, \circ_j}$.
Let $\inj_j: \struct {S_j, \circ_j} \to \struct {S, \circ}$ be the canonical injection from $\struct {S_j, \circ_j}$ to $\struct {S, \circ}$.

Then:

$\pr_j \circ \inj_j = I_{S_j}$
where $I_{S_j}$ is the identity mapping from $S_j$ to $S_j$.


Proof
Let $\ds \tuple {s_1, s_2, \dotsc, s_{j - 1}, s_j, s_{j + 1}, \dotsc, s_n} \in \prod_{i \mathop = 1}^n \struct {S_i, \circ_i}$.
So:

$s_j \in S_j$
From the definition of the canonical injection:

$\map {\inj_j} {s_j} = \tuple {e_1, e_2, \dotsc, e_{j - 1}, s_j, e_{j + 1}, \dotsc, e_n}$
So from the definition of the $j$th projection:

$\map {\pr_j} {e_1, e_2, \dotsc, e_{j - 1}, s_j, e_{j + 1}, \dotsc, e_n} = s_j$

Thus:

$\map {\pr_j \circ \inj_j} {s_j} = s_j$
and the result follows from the definition of the identity mapping.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 18$: Induced $N$-ary Operations: Theorem $18.12$




