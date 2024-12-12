# 

Source: https://proofwiki.org/wiki/Extension_Theorem_for_Isomorphisms

Theorem
Let the following conditions be fulfilled:

Let $\struct {S, \circ}$ be a commutative semigroup with cancellable elements
Let $\phi$ be an isomorphism from $\struct {S, \circ}$ into a semigroup $\struct {T, *}$
Let $\struct {S', \circ'}$ be an inverse completion of $\struct {S, \circ}$
Let $\struct {T', \circ'}$ be an inverse completion of $\struct {T, \circ}$.

Then there is a unique isomorphism $\phi': S' \to T'$ extending $\phi$.


Proof
Let $C$ be the subsemigroup of cancellable elements of $S$.
It is proved that this is a semigroup by Cancellable Elements of Semigroup form Subsemigroup.

The set of cancellable elements of $T$ is $\phi \sqbrk C$.
By the Extension Theorem for Homomorphisms, there is:

A unique homomorphism $\phi'$ from $S'$ into $T'$ extending $\phi$
and:

A unique homomorphism $\psi$ from $T'$ into $S'$ extending $\phi^{-1}$.

Therefore, $\psi \circ \phi'$ is an endomorphism of $S'$ whose restriction to $S$ is the inclusion mapping $\iota_S: S \to S'$:

$\forall x \in S: \map \iota x = x$
From Inclusion Mapping is Monomorphism, $\iota_S$ is a monomorphism from $S$ into $S'$.

But by the Extension Theorem for Homomorphisms, the identity automorphism of $S'$ is the only endomorphism of $S'$ extending $\iota_S$ from $S$ into $S'$, so:

$\psi \circ \phi' = I_{S'}$

Similarly:

$\phi' \circ \psi = I_{T'}$

So by Bijection iff Left and Right Inverse, $\phi'$ is a bijection and therefore an isomorphism.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {IV}$: Rings and Fields: $\S 20$: The Integers: Theorem $20.5$




