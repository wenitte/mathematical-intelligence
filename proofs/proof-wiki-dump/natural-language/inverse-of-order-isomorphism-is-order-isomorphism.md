# 

Source: https://proofwiki.org/wiki/Inverse_of_Order_Isomorphism_is_Order_Isomorphism

Theorem
Let $\struct {S, \preceq_1}$ and $\struct {T, \preceq_2}$ be ordered sets.
Let $\phi$ be a bijection from $\struct {S, \preceq_1}$ to $\struct {T, \preceq_2}$.

Then:

$\phi: \struct {S, \preceq_1} \to \struct {T, \preceq_2}$
is an order isomorphism if and only if:

$\phi^{-1}: \struct {T, \preceq_2} \to \struct {S, \preceq_1}$
is also an order isomorphism.


Proof
Follows directly from the definition of order isomorphism.
Let $\phi: \struct {S, \preceq_1} \to \struct {T, \preceq_2}$ be an order isomorphism.
Then:

$\forall x, y, \in S: x \preceq_1 y \implies \map \phi x \preceq_2 \map \phi y$
and:

$\forall \map \phi x, \map \phi y \in T: \map \phi x \preceq_2 \map \phi y \implies \map {\phi^{-1} } {\map \phi x} \preceq_1 \map {\phi^{-1} } {\map \phi y}$
That is:

$\forall \map \phi x, \map \phi y \in T: \map \phi x \preceq_2 \map \phi y \implies x \preceq_1 y$
Hence the result.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 14$: Orderings: Theorem $14.1: \ 2^\circ$
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 14$: Orderings: Exercise $14.6$
1971: Gaisi Takeuti and Wilson M. Zaring: Introduction to Axiomatic Set Theory: $\S 6.30$




