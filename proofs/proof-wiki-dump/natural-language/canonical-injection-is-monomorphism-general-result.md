# 

Source: https://proofwiki.org/wiki/Canonical_Injection_is_Monomorphism/General_Result

Theorem
Let $\struct {S_1, \circ_1}, \struct {S_2, \circ_2}, \dotsc, \struct {S_j, \circ_j}, \dotsc, \struct {S_n, \circ_n}$ be algebraic structures with identities $e_1, e_2, \dotsc, e_j, \dotsc, e_n$ respectively.
Then the canonical injection:

$\ds \inj_j: \struct {S_j, \circ_j} \to \prod_{i \mathop = 1}^n \struct {S_i, \circ_i}$
defined as:

$\map {\inj_j} x = \tuple {e_1, e_2, \dotsc, e_{j - 1}, x, e_{j + 1}, \dotsc, e_n}$
is a monomorphism.


Proof
From Canonical Injection is Injection we have that the canonical injections are in fact injective.

It remains to prove the morphism property.
Let $x, y \in \struct {S_j, \circ_j}$.
Then:














\(\ds \map {\inj_j} {x \circ_j y}\)

\(=\)







\(\ds \tuple {e_1, e_2, \dotsc, e_{j - 1}, x \circ_j y, e_{j + 1}, \dotsc, e_n}\)




















\(\ds \)

\(=\)







\(\ds \tuple {e_1 \circ_1 e_1, e_2 \circ_2 e_2, \dotsc, e_{j - 1} \circ_{j - 1} e_{j - 1}, x \circ_j y, e_{j + 1} \circ_{j + 1} e_{j + 1}, \dotsc, e_n \circ_n e_n}\)




















\(\ds \)

\(=\)







\(\ds \tuple {e_1, e_2, \dotsc, e_{j - 1}, x, e_{j + 1}, \dotsc, e_n} \circ \tuple {e_1, e_2, \dotsc, e_{j - 1}, y, e_{j + 1}, \dotsc, e_n}\)




















\(\ds \)

\(=\)







\(\ds \map {\inj_j} x \circ \map {\inj_j} y\)









and the morphism property has been demonstrated to hold.

Thus $\ds \inj_j: \struct {S_j, \circ_j} \to \prod_{i \mathop = 1}^n \struct {S_i, \circ_i}$ has been shown to be an injective homomorphism and therefore a monomorphism.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 18$: Induced $N$-ary Operations: Theorem $18.12$




