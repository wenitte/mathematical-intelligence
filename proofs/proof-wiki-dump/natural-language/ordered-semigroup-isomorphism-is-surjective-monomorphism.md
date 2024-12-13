# 

Source: https://proofwiki.org/wiki/Ordered_Semigroup_Isomorphism_is_Surjective_Monomorphism



Theorem
Let $\struct {S, \circ, \preceq}$ and $\struct {T, *, \preccurlyeq}$ be ordered semigroups.
Let $\phi: \struct {S, \circ, \preceq} \to \struct {T, *, \preccurlyeq}$ be a mapping.

Then $\phi$ is an ordered semigroup isomorphism if and only if:

$(1): \quad \phi$ is an ordered semigroup monomorphism
$(2): \quad \phi$ is a surjection.


Proof
Necessary Condition
Let $\phi: \struct {S, \circ, \preceq} \to \struct {T, *, \preccurlyeq}$ be an ordered semigroup isomorphism.
Then by definition:

$\phi$ is a semigroup isomorphism from the semigroup $\struct {S, \circ}$ to the semigroup $\struct {T, *}$
$\phi$ is an order isomorphism from the ordered set $\struct {S, \preceq}$ to the ordered set $\struct {T, \preccurlyeq}$.

A semigroup isomorphism is by definition:

A semigroup homomorphism
which is:

A monomorphism and an epimorphism.

From Order Isomorphism is Surjective Order Embedding, an order isomorphism is an order embedding which is also a surjection.

Putting this all together, we see that an ordered semigroup isomorphism is:

A monomorphism
An order embedding
A surjection.

An ordered semigroup monomorphism is by definition: 

A monomorphism
which is also

An order embedding

Hence $\phi$ is:

An ordered semigroup monomorphism
A surjection.
$\Box$


Sufficient Condition
Let $\phi$ be:

An ordered semigroup monomorphism
A surjection.
By definition, that means $\phi$ be:

A monomorphism
An order embedding
A surjection.

From Order Isomorphism is Surjective Order Embedding, an order isomorphism is an order embedding which is also a surjection.

A semigroup isomorphism is by definition:

A semigroup homomorphism
which is:

A semigroup monomorphism and an semigroup epimorphism.
Thus a semigroup monomorphism which is also a surjection is a semigroup isomorphism.

So $\phi$ is:

A semigroup isomorphism from the semigroup $\struct {S, \circ}$ to the semigroup $\struct {T, *}$
An order isomorphism from the ordered set $\struct {S, \preceq}$ to the ordered set $\struct {T, \preccurlyeq}$.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 15$: Ordered Semigroups




