# 

Source: https://proofwiki.org/wiki/Bijection_on_Total_Ordering_reflects_Total_Ordering



Theorem
Let $\struct {S, \preccurlyeq}$ be a totally ordered set.
Let $f: S \to T$ be a mapping to an arbitrary set $T$.
Let $\RR$ be a relation on $T$ defined such that:

$\RR: = \set {\tuple {\map f x, \map f y}: x \preccurlyeq y}$

That is, $a$ is related to $b$ in $T$ if and only if they have preimages $x$ and $y$ under $f$ such that $x$ precedes $y$.

Then:

$f$ is a bijection
if and only if:

$\RR$ is a total ordering.


Proof
Sufficient Condition
Let $f$ be a bijection.
Then $f$ is a fortiori a surjection.
Hence from Surjection on Total Ordering reflects Preordering it follows that $\RR$ is a preordering.

A total ordering is a preordering which is also antisymmetric and connected.
Hence it remains to be shown that:

$\RR$ is antisymmetric
$\RR$ is connected.


Antisymmetry
Let $a, b \in T$ such that:

$a \mathrel \RR b$
$b \mathrel \RR a$

Because $f$ is a surjection, it follows that:

$\exists x \in S: a = \map f x$
$\exists y \in S: b = \map f y$
Thus by definition of $\RR$:

$x \preccurlyeq y$
$y \preccurlyeq x$
But as $\preccurlyeq$ is an ordering, it is a fortiori antisymmetric.
That is:

$x = y$
So:

$\map f x = \map f y$
and so $a = b$.
Hence it follows that $\RR$ is antisymmetric.
$\Box$


Connectedness
Let $a, b \in T$.
Because $f$ is a surjection, it follows that:

$\exists x \in S: a = \map f x$
$\exists y \in S: b = \map f y$
Because $\preccurlyeq$ is an ordering, it is a fortiori connected.
That is, either:

$x \preccurlyeq y$
or:

$y \preccurlyeq x$

Hence by definition of $\RR$, either:

$\map f x \mathrel \RR \map f y$
or:

$\map f y \mathrel \RR \map f x$
That means either:

$a \mathrel \RR b$
or:

$b \mathrel \RR a$

As $a$ and $b$ were arbitrary, it follows that $\RR$ is connected.
$\Box$

Hence $\RR$ is a total ordering.
$\Box$


Necessary Condition
Let $\RR$ be a total ordering.
Then $\RR$ is a fortiori an ordering.
From Ordering is Preordering, $\RR$ is also a preordering.
From Surjection on Total Ordering reflects Preordering it follows that $f$ is a surjection.

It remains to be demonstrated that $f$ is an injection.
Let $x, y \in S$ such that $x \ne y$.
As $\preccurlyeq$ is an ordering, we have that $\preccurlyeq$ is a fortiori an antisymmetric relation.
Then either:

$x \preccurlyeq y$
or:

$y \preccurlyeq x$
but not both.
Hence by definition of $\RR$:

$\map f x \mathrel \RR \map f y$
or:

$\map f y \mathrel \RR \map f x$
but not both.
That is:

$\map f x \ne \map f y$
and so by definition $f$ is an injection.
$\blacksquare$


Sources
1996: Winfried Just and Martin Weese: Discovering Modern Set Theory. I: The Basics ... (previous) ... (next): Part $1$: Not Entirely Naive Set Theory: Chapter $2$: Partial Order Relations: Exercise $41 \ \text {(c)}$




