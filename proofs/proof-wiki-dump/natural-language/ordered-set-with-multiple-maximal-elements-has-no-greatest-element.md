# 

Source: https://proofwiki.org/wiki/Ordered_Set_with_Multiple_Maximal_Elements_has_no_Greatest_Element

Theorem
Let $\struct {S, \preccurlyeq}$ be an ordered set.
Let $\struct {S, \preccurlyeq}$ have more than one maximal element.

Then $\struct {S, \preccurlyeq}$ has no greatest element.


Proof
Let $s$ and $t$ both be maximal elements of $\struct {S, \preccurlyeq}$ such that $s \ne t$.
Then by definition:

$\forall x \in S: s \preccurlyeq x \implies s = x$
and:

$\forall x \in S: t \preccurlyeq x \implies t = x$

Aiming for a contradiction, suppose $S$ has a greatest element $m$.
Then by definition:

$\forall y \in S: y \preccurlyeq m$
Hence:

$s \preccurlyeq m$
and also:

$y \preccurlyeq m$
But because $s$ and $t$ are both maximal elements of $\struct {S, \preccurlyeq}$:

$s = m$
and:

$t = m$
This contradicts the fact that $s \ne t$.
Hence by Proof by Contradiction there can be no greatest element of $\struct {S, \preccurlyeq}$.
$\blacksquare$





