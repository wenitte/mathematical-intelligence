# 

Source: https://proofwiki.org/wiki/Ordered_Set_with_Multiple_Minimal_Elements_has_no_Smallest_Element

Theorem
Let $\struct {S, \preccurlyeq}$ be an ordered set.
Let $\struct {S, \preccurlyeq}$ have more than one minimal element.

Then $\struct {S, \preccurlyeq}$ has no smallest element.


Proof
Let $s$ and $t$ both be minimal elements of $\struct {S, \preccurlyeq}$ such that $s \ne t$.
Then by definition:

$\forall x \in S: x \preccurlyeq s \implies s = x$
and:

$\forall x \in S: x \preccurlyeq t \implies t = x$

Aiming for a contradiction, suppose $S$ has a smallest element $m$.
Then by definition:

$\forall y \in S: m \preccurlyeq y$
Hence:

$m \preccurlyeq s$
and also:

$m \preccurlyeq t$
But because $s$ and $t$ are both minimal elements of $\struct {S, \preccurlyeq}$:

$s = m$
and:

$t = m$
This contradicts the fact that $s \ne t$.
Hence by Proof by Contradiction there can be no smallest element of $\struct {S, \preccurlyeq}$.
$\blacksquare$





