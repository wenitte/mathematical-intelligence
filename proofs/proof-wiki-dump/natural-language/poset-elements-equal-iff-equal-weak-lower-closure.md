# 

Source: https://proofwiki.org/wiki/Poset_Elements_Equal_iff_Equal_Weak_Lower_Closure



Theorem
Let $\left({S, \preccurlyeq}\right)$ be an ordered set.
Let $s, t \in S$.

Then $s = t$ if and only if:

$s^\preccurlyeq = t^\preccurlyeq$
where $s^\preccurlyeq$ denotes weak lower closure of $s$.
That is, if and only if, for all $r \in S$:

$r \preccurlyeq s \iff r \preccurlyeq t$


Proof
Necessary Condition
If $s = t$, then trivially also:

$s^\preccurlyeq = t^\preccurlyeq$
$\Box$


Sufficient Condition
Suppose that:

$s^\preccurlyeq = t^\preccurlyeq$

By definition of weak lower closure, we have:

$s \in s^\preccurlyeq$
$t \in t^\preccurlyeq$
and hence:

$s \in t^\preccurlyeq$
$t \in s^\preccurlyeq$
which by definition of weak lower closure means:

$s \preccurlyeq t$ and $t \preccurlyeq s$

Since $\preccurlyeq$ is antisymmetric it follows that $s = t$.
$\blacksquare$





