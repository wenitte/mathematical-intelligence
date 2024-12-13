# 

Source: https://proofwiki.org/wiki/Order_Isomorphism_is_Surjective_Order_Embedding



Theorem
Let $\struct {S, \preceq_1}$ and $\struct {T, \preceq_2}$ be ordered sets.
Let $f: S \to T$ be a mapping.

Then $f$ is an order isomorphism if and only if:

$(1): \quad f$ is a surjection
$(2): \quad \forall x, y \in S: x \preceq_1 y \iff \map f x \preceq_2 \map f y$

That is, if and only if $f$ is an order embedding which is also a surjection.


Proof
Necessary Condition
Suppose $f$ is an order isomorphism.
Then by definition $f$ is a bijection and so a surjection.
Also by definition, $f$ is increasing, and so:

$\forall x, y \in S: x \preceq_1 y \implies \map f x \preceq_2 \map f y$
Also by definition $f^{-1}$ is also a bijection which is increasing, and so:

$\forall x, y \in S: \map f x \preceq_2 \map f y \implies x = \map {f^{-1} } {\map f x} \preceq_1 \map {f^{-1} } {\map f y} = y$
and so:

$\forall x, y \in S: x \preceq_1 y \iff \map f x \preceq_2 \map f y$
$\Box$


Sufficient Condition
Suppose $f: S \to T$ is a mapping such that:

$f$ is a surjection;
$\forall x, y \in S: x \preceq_1 y \iff \map f x \preceq_2 \map f y$

From Order Embedding is Injection we have that $f$ is an injection.
As, by hypothesis, it is also surjective, it follows that it is a bijection.

Now, suppose $a, b \in T$.
As $f$ is surjective:

$\exists x, y \in S: \map f x = a, \map f y = b$
As $f$ is bijective, then:

$x = \map {f^{-1} } a, y = \map {f^{-1} } b$
So by hypothesis:

$a \preceq_2 b \implies \map f x \preceq_2 \map f y \implies \map {f^{-1} } a = x \preceq_1 y = \map {f^{-1} } b$
$\Box$

Hence, by definition, $f$ is an order isomorphism.
$\blacksquare$


Sources
1975: T.S. Blyth: Set Theory and Abstract Algebra ... (previous) ... (next): $\S 7$: Theorem $7.1$
1996: Winfried Just and Martin Weese: Discovering Modern Set Theory. I: The Basics ... (previous) ... (next): Part $1$: Not Entirely Naive Set Theory: Chapter $2$: Partial Order Relations: Exercise $19$




