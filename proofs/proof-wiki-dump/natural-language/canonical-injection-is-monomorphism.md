# 

Source: https://proofwiki.org/wiki/Canonical_Injection_is_Monomorphism



Theorem
Let $\struct {S_1, \circ_1}$ and $\struct {S_2, \circ_2}$ be algebraic structures with identities $e_1, e_2$ respectively.

The canonical injections:

$\inj_1: \struct {S_1, \circ_1} \to \struct {S_1, \circ_1} \times \struct {S_2, \circ_2}: \forall x \in S_1: \map {\inj_1} x = \tuple {x, e_2}$
$\inj_2: \struct {S_2, \circ_2} \to \struct {S_1, \circ_1} \times \struct {S_2, \circ_2}: \forall x \in S_2: \map {\inj_2} x = \tuple {e_1, x}$
are monomorphisms.


General Result
Let $\struct {S_1, \circ_1}, \struct {S_2, \circ_2}, \dotsc, \struct {S_j, \circ_j}, \dotsc, \struct {S_n, \circ_n}$ be algebraic structures with identities $e_1, e_2, \dotsc, e_j, \dotsc, e_n$ respectively.
Then the canonical injection:

$\ds \inj_j: \struct {S_j, \circ_j} \to \prod_{i \mathop = 1}^n \struct {S_i, \circ_i}$
defined as:

$\map {\inj_j} x = \tuple {e_1, e_2, \dotsc, e_{j - 1}, x, e_{j + 1}, \dotsc, e_n}$
is a monomorphism.


Proof
From Canonical Injection is Injection we have that the canonical injections are in fact injective.

It remains to prove the morphism property.
Let $x, y \in \struct {S_1, \circ_1}$.
Then:














\(\ds \map {\inj_1} {x \circ_1 y}\)

\(=\)







\(\ds \tuple {x \circ_1 y, e_2}\)




















\(\ds \)

\(=\)







\(\ds \tuple {x \circ_1 y, e_2 \circ_2 e_2}\)




















\(\ds \)

\(=\)







\(\ds \tuple {x, e_2} \circ \tuple {y, e_2}\)




















\(\ds \)

\(=\)







\(\ds \map {\inj_1} x \circ \map {\inj_1} y\)









and the morphism property has been demonstrated to hold for $\inj_1$.

Thus $\inj_1: \struct {S_1, \circ_1} \to \struct {S_1, \circ_1} \times \struct {S_2, \circ_2}$ has been shown to be an injective homomorphism and therefore a monomorphism.

The same argument applies to $\inj_2$.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 13$: Compositions Induced on Cartesian Products and Function Spaces: Theorem $13.3$
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 13$: Compositions Induced on Cartesian Products and Function Spaces: Exercise $13.3$




