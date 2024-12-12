# 

Source: https://proofwiki.org/wiki/Bijection_on_Total_Ordering_is_Order_Isomorphism

Theorem
Let $\struct {S, \preccurlyeq}$ be a totally ordered set.
Let $f: S \to T$ be a bijection to an arbitrary set $T$.
Let $\RR$ be a relation on $T$ defined such that:

$\RR: = \set {\tuple {\map f x, \map f y}: x \preccurlyeq y}$

Then $f$ is an order isomorphism between $\struct {S, \preccurlyeq}$ and $\struct {T, \RR}$.


Proof
From Bijection on Total Ordering reflects Total Ordering, we have that $\RR$ is a total ordering.
We have that $f$ is a bijection.
Hence a fortiori $f$ is also a surjection.

Let $x, y \in S$ such that $x \preccurlyeq y$.
Then by definition of $\RR$:

$\map f x \mathrel \RR \map f y$

Now let $\map f x \mathrel \RR \map f y$.
Then again by definition of $\RR$:

$x \preccurlyeq y$
That is, $f$ is by definition an order isomorphism between $\struct {S, \preccurlyeq}$ and $\struct {T, \RR}$.
$\blacksquare$


Sources
1996: Winfried Just and Martin Weese: Discovering Modern Set Theory. I: The Basics ... (previous) ... (next): Part $1$: Not Entirely Naive Set Theory: Chapter $2$: Partial Order Relations: Exercise $41 \ \text {(d)}$




