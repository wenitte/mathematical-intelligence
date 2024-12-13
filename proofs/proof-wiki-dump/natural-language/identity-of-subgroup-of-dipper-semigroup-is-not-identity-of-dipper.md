# 

Source: https://proofwiki.org/wiki/Identity_of_Subgroup_of_Dipper_Semigroup_is_not_Identity_of_Dipper



Theorem
Let $m, n \in \Z$ be integers such that $m, n > 0$.
Let $\struct {N_{< \paren {m \mathop + n} }, +_{m, n} }$ denote the dipper semigroup.

Let $\struct {H, +_{m, n} }$ be the subgroup of $\struct {N_{< \paren {m \mathop + n} }, +_{m, n} }$ where $H = \set {k \in \N: m \le k < m + n}$

Then the identity of $\struct {H, +_{m, n} }$ is not the identity of $\struct {N_{< \paren {m \mathop + n} }, +_{m, n} }$.


Proof
This is demonstrated by Proof by Counterexample.
First we note that by Existence of Subgroup of Dipper Semigroup:

$\struct {H, +_{m, n} }$ is indeed a subgroup of $\struct {N_{< \paren {m \mathop + n} }, +_{m, n} }$
the identity of $\struct {H, +_{m, n} }$ is $n$.
But we note that by definition of $+_{m, n}$:

$0 +_{m, n} n = n - k n$
where $m \le n - k n$
As we have specified that $m > 0$, it follows that:

$0 +_{m, n} n > 0$
Thus $n$ is not the identity of $\struct {N_{< \paren {m \mathop + n} }, +_{m, n} }$.
$\blacksquare$


Examples
Example: $\struct {H, +_{3, 4} }$
Consider the dipper semigroup $\struct {N_{<7}, +_{3, 4} }$.
Let $H = \set {x \in \N: 3 \le x < 7} = \set {3, 4, 5, 6}$.
From Existence of Subgroup of Dipper Semigroup Example: $\struct {H, +_{3, 4} }$

$\struct {H, +_{3, 4} }$ is a subgroup of $\struct {N_{<7}, +_{3, 4} }$
whose identity is $4$.
We have that:

$0 +_{3, 4} 4 = 4$
and so $4$ is not the identity of $\struct {N_{<7}, +_{3, 4} }$.





