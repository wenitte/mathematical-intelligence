# 

Source: https://proofwiki.org/wiki/Canonical_Injection_is_Injection



Theorem
Let $\struct {S_1, \circ_1}$ and $\struct {S_2, \circ_2}$ be algebraic structures with identities $e_1, e_2$ respectively.

The canonical injections:

$\inj_1: \struct {S_1, \circ_1} \to \struct {S_1, \circ_1} \times \struct {S_2, \circ_2}: \forall x \in S_1: \map {\inj_1} x = \tuple {x, e_2}$
$\inj_2: \struct {S_2, \circ_2} \to \struct {S_1, \circ_1} \times \struct {S_2, \circ_2}: \forall x \in S_2: \map {\inj_2} x = \tuple {e_1, x}$
are injections.


General Result
Let $\struct {S_1, \circ_1}, \struct {S_2, \circ_2}, \dotsc, \struct {S_j, \circ_j}, \dotsc, \struct {S_n, \circ_n}$ be algebraic structures with identities $e_1, e_2, \ldots, e_j, \ldots, e_n$ respectively.
The canonical injection:

$\ds \inj_j: \struct {S_j, \circ_j} \to \prod_{i \mathop = 1}^n \struct {S_i, \circ_i}$
defined as:

$\map {\inj_j} x = \tuple {e_1, e_2, \dotsc, e_{j - 1}, x, e_{j + 1}, \dotsc, e_n}$
is an injection.


Proof
Let $x, x' \in S_1$.
Suppose that:

$\map {\inj_1} x = \map {\inj_1} {x'}$
Then by definition of canonical injection:

$\tuple {x, e_2} = \tuple {x', e_2}$
By Equality of Ordered Pairs:

$x = x'$
That is, $\inj_1$ is an injection.
$\Box$

Similarly, let $x, x' \in S_2$.
Suppose that:

$\map {\inj_2} x = \map {\inj_2} {x'}$
Then by definition of canonical injection:

$\tuple {e_1, x} = \tuple {e_1, x'}$
Again by Equality of Ordered Pairs:

$x = x'$
That is, $\inj_2$ is an injection.
$\Box$

So $\inj_1$ and $\inj_2$ are injections.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 13$: Compositions Induced on Cartesian Products and Function Spaces: Theorem $13.3$
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 13$: Compositions Induced on Cartesian Products and Function Spaces: Exercise $13.3$




