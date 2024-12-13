# 

Source: https://proofwiki.org/wiki/Mapping_on_Total_Ordering_reflects_Transitivity

Theorem
Let $\struct {S, \preccurlyeq}$ be a totally ordered set.
Let $f: S \to T$ be a mapping to an arbitrary set $T$.
Let $\RR$ be a relation on $T$ defined such that:

$\RR: = \set {\tuple {\map f x, \map f y}: x \preccurlyeq y}$

That is, $a$ is related to $b$ in $T$ if and only if they have preimages $x$ and $y$ under $f$ such that $x$ precedes $y$.

Then $\RR$ is transitive.


Proof
Let $a, b, c \in T$ such that:

$a \mathrel \RR b$
$b \mathrel \RR c$
Then there exist $x, y, z \in S$ such that:

$a = \map f x$
$b = \map f y$
$c = \map f z$
such that:

$x \preccurlyeq y$
$y \preccurlyeq z$
As $\preccurlyeq$ is a total ordering, it follows that:

$x \preccurlyeq z$
and so by definition of $\RR$:

$\map f x \mathrel \RR \map f z$
That is:

$a \mathrel \RR c$
As $a$, $b$ and $c$ were arbitrary, it follows that $\RR$ is transitive.
$\blacksquare$


Sources
1996: Winfried Just and Martin Weese: Discovering Modern Set Theory. I: The Basics ... (previous) ... (next): Part $1$: Not Entirely Naive Set Theory: Chapter $2$: Partial Order Relations: Exercise $41 \ \text {(a)}$




