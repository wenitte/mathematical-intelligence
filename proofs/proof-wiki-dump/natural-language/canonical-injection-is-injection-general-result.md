# 

Source: https://proofwiki.org/wiki/Canonical_Injection_is_Injection/General_Result

Theorem
Let $\struct {S_1, \circ_1}, \struct {S_2, \circ_2}, \dotsc, \struct {S_j, \circ_j}, \dotsc, \struct {S_n, \circ_n}$ be algebraic structures with identities $e_1, e_2, \ldots, e_j, \ldots, e_n$ respectively.
The canonical injection:

$\ds \inj_j: \struct {S_j, \circ_j} \to \prod_{i \mathop = 1}^n \struct {S_i, \circ_i}$
defined as:

$\map {\inj_j} x = \tuple {e_1, e_2, \dotsc, e_{j - 1}, x, e_{j + 1}, \dotsc, e_n}$
is an injection.


Proof
Let:

$x, y \in S_j: \map {\inj_j} x = \map {\inj_j} y$
Then:

$\tuple {e_1, e_2, \dotsc, e_{j - 1}, x, e_{j + 1}, \dotsc, e_n} = \tuple {e_1, e_2, \dotsc, e_{j - 1}, y, e_{j + 1}, \dotsc, e_n}$
By Equality of Ordered Tuples, it follows directly that:

$x = y$
Thus the canonical injections are injective.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 18$: Induced $N$-ary Operations




