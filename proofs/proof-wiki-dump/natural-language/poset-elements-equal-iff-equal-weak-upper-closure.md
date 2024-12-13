# 

Source: https://proofwiki.org/wiki/Poset_Elements_Equal_iff_Equal_Weak_Upper_Closure



Theorem
Let $\left({S, \preccurlyeq}\right)$ be an ordered set.
Let $s, t \in S$.

Then $s = t$ if and only if:

$s^\succcurlyeq = t^\succcurlyeq$
where $s^\succcurlyeq$ denotes weak upper closure of $s$.
That is, if and only if, for all $r \in S$:

$s \preccurlyeq r \iff t \preccurlyeq r$


Proof
Necessary Condition
If $s = t$, then trivially also:

$s^\succcurlyeq = t^\succcurlyeq$
$\Box$


Sufficient Condition
Suppose that:

$s^\succcurlyeq = t^\succcurlyeq$

By definition of weak upper closure, we have:

$s \in s^\succcurlyeq$
$t \in t^\succcurlyeq$
and hence:

$s \in s^\succcurlyeq$
$t \in s^\succcurlyeq$
which by definition of weak upper closure means:

$t \preccurlyeq s$ and $s \preccurlyeq t$

Since $\preccurlyeq$ is antisymmetric it follows that $s = t$.
$\blacksquare$





