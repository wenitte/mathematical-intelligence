# 

Source: https://proofwiki.org/wiki/External_Direct_Product_of_Projection_with_Canonical_Injection



Theorem
Let $\struct {S_1, \circ_1}$ and $\struct {S_2, \circ_2}$ be algebraic structures with identity elements $e_1$ and $e_2$ respectively.
Let $\struct {S_1 \times S_2, \circ}$ be the external direct product of $\struct {S_1, \circ_1}$ and $\struct {S_2, \circ_2}$

Let:

$\pr_1: \struct {S_1 \times S_2, \circ} \to \struct {S_1, \circ_1}$ be the first projection from $\struct {S_1 \times S_2, \circ}$ to $\struct {S_1, \circ_1}$
$\pr_2: \struct {S_1 \times S_2, \circ} \to \struct {S_2, \circ_2}$ be the second projection from $\struct {S_1 \times S_2, \circ}$ to $\struct {S_2, \circ_2}$.

Let:

$\inj_1: \struct {S_1, \circ_1} \to \struct {S_1 \times S_2, \circ}$ be the canonical injection from $\struct {S_1, \circ_1}$ to $\struct {S_1 \times S_2, \circ}$
$\inj_2: \struct {S_2, \circ_2} \to \struct {S_1 \times S_2, \circ}$ be the canonical injection from $\struct {S_2, \circ_2}$ to $\struct {S_1 \times S_2, \circ}$.

Then:

$(1): \quad \pr_1 \circ \inj_1 = I_{S_1}$
$(2): \quad \pr_2 \circ \inj_2 = I_{S_2}$
where $I_{S_1}$ and $I_{S_2}$ are the identity mappings on $S_1$ and $S_2$ respectively.


General Result
Let $\struct {S_1, \circ_1}, \struct {S_2, \circ_2}, \dotsc, \struct {S_j, \circ_j}, \dotsc, \struct {S_n, \circ_n}$ be algebraic structures with identities $e_1, e_2, \dotsc, e_j, \dotsc, e_n$ respectively.
Let $\ds \struct {S, \circ} = \prod_{i \mathop = 1}^n \struct {S_i, \circ_i}$ be the external direct product of $\struct {S_1, \circ_1}, \struct {S_2, \circ_2}, \dotsc, \struct {S_j, \circ_j}, \dotsc, \struct {S_n, \circ_n}$.
Let $\pr_j: \struct {S, \circ} \to \struct {S_j, \circ_j}$ be the $j$th projection from $\struct {S, \circ}$ to $\struct {S_j, \circ_j}$.
Let $\inj_j: \struct {S_j, \circ_j} \to \struct {S, \circ}$ be the canonical injection from $\struct {S_j, \circ_j}$ to $\struct {S, \circ}$.

Then:

$\pr_j \circ \inj_j = I_{S_j}$
where $I_{S_j}$ is the identity mapping from $S_j$ to $S_j$.


Proof
Let $\tuple {s_1, s_2} \in S_1 \times S_2$.
So, $s_1 \in S_1$ and $s_2 \in S_2$.

From the definition of the canonical injection, we have:

$\map {\inj_1} {s_1} = \tuple {s_1, e_2}$
$\map {\inj_2} {s_2} = \tuple {e_1, s_2}$

From the definition of the first projection:

$\map {\pr_1} {s_1, e_2} = s_1$
and similarly from the definition of the second projection:

$\map {\pr_2} {e_1, s_2} = s_2$

Thus:

$\map {\pr_1 \circ \inj_1} {s_1} = s_1$
$\map {\pr_2 \circ \inj_2} {s_2} = s_2$
and the result follows from the definition of the identity mapping.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 13$: Compositions Induced on Cartesian Products and Function Spaces: Theorem $13.3$
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 13$: Compositions Induced on Cartesian Products and Function Spaces: Exercise $13.3$




