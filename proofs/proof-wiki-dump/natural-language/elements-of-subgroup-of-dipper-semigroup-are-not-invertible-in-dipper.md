# 

Source: https://proofwiki.org/wiki/Elements_of_Subgroup_of_Dipper_Semigroup_are_not_Invertible_in_Dipper



Theorem
Let $m, n \in \Z$ be integers such that $m, n > 0$.
Let $\struct {N_{< \paren {m \mathop + n} }, +_{m, n} }$ denote the dipper semigroup.

Let $\struct {H, +_{m, n} }$ be the subgroup of $\struct {N_{< \paren {m \mathop + n} }, +_{m, n} }$ where $H = \set {k \in \N: m \le k < m + n}$

Then the elements of $\struct {H, +_{m, n} }$ are not invertible in $\struct {N_{< \paren {m \mathop + n} }, +_{m, n} }$.


Proof
From Identity of Subgroup of Dipper Semigroup is not Identity of Dipper, the identity of $\struct {H, +_{m, n} }$ is not an identity of $\struct {N_{< \paren {m \mathop + n} }, +_{m, n} }$.
Hence (indirectly) from Identity of Submagma containing Identity of Magma is Same Identity, $\struct {N_{< \paren {m \mathop + n} }, +_{m, n} }$ can have no identity.
Hence there can be no elements of $\struct {H, +_{m, n} }$ that are invertible, by definition.
$\blacksquare$


Examples
Example: $\struct {H, +_{3, 4} }$
Consider the dipper semigroup $\struct {N_{<7}, +_{3, 4} }$.
Let $H = \set {x \in \N: 3 \le x < 7} = \set {3, 4, 5, 6}$.
From Existence of Subgroup of Dipper Semigroup Example: $\struct {H, +_{3, 4} }$

$\struct {H, +_{3, 4} }$ is a subgroup of $\struct {N_{<7}, +_{3, 4} }$
whose identity is $4$.
But from Elements of Subgroup of Dipper Semigroup are not Invertible in Dipper, $\struct {H, +_{3, 4} }$ has no invertible elements in $\struct {N_{<7}, +_{3, 4} }$.





