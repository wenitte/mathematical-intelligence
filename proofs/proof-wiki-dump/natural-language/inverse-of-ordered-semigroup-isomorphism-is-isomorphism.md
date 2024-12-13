# 

Source: https://proofwiki.org/wiki/Inverse_of_Ordered_Semigroup_Isomorphism_is_Isomorphism



Theorem
Let $\struct {S, \circ, \preceq}$ and $\struct {T, *, \preccurlyeq}$ be ordered semigroups.
Let $\phi: \struct {S, \circ, \preceq} \to \struct {T, *, \preccurlyeq}$ be a mapping.

Then:

$\phi$ is an ordered semigroup isomorphism
if and only if:

$\phi^{-1}: \struct {T, *, \preccurlyeq} \to \struct {S, \circ, \preceq}$ is also an ordered semigroup isomorphism.


Proof
Sufficient Condition
Let $\phi$ be an ordered semigroup isomorphism.
Then by definition $\phi$ is a bijection.
Thus $\exists \phi^{-1}$ such that $\phi^{-1}$ is also a bijection from Bijection iff Inverse is Bijection.
That is:

$\exists \phi^{-1}: \struct {T, *, \preccurlyeq} \to \struct {S, \circ, \preceq}$
From Inverse of Algebraic Structure Isomorphism is Isomorphism:

$\phi^{-1}: \struct {T, *} \to \struct {S, \circ}$ is an isomorphism.
Indeed, from Isomorphism Preserves Semigroups, $\phi^{-1}$ is specifically a semigroup isomorphism.
Then from Inverse of Order Isomorphism is Order Isomorphism we have that:

$\phi^{-1}: \struct {T, \preccurlyeq} \to \struct {S, \preceq}$ is an order isomorphism.
$\Box$


Sufficient Condition
Let $\phi^{-1}$ be an ordered semigroup isomorphism.
Then a priori $\paren {\phi^{-1} }^{-1}$ is also an ordered semigroup isomorphism.
From Inverse of Inverse of Bijection:

$\paren {\phi^{-1} }^{-1} = \phi$
and the result follows.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 15$: Ordered Semigroups: Exercise $15.1$




