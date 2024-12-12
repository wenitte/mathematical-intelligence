# 

Source: https://proofwiki.org/wiki/Condition_for_Divisibility_of_Powers_of_Prime



Theorem
Let $p$ be a prime.
Let $k, l \in \Z_{>0}$.

Then:

$p^k \divides p^l \iff k \le l$


Proof
Necessary Condition
Let $k \le l$.
Then:

$l - k \ge 0$
Thus $p^k, p^{l - k} \in \Z$ such that $p^l = p^k p^{l - k}$.
Thus:

$p^k \divides p^l$
$\Box$


Sufficient Condition
Let $p^k \divides p^l$.
Then:

$\exists b \in \Z_{>0}: p^l = p^k b$
By the Fundamental Theorem of Arithmetic, $b$ has a unique prime decomposition.
Either $b = 1$ (in which case $k = l$) or $b$ has a prime decomposition consisting entirely of $p$'s.
In this case:

$\exists m \in \Z: b = p^m$
Hence:

$p^{l - k} = p^m$
Thus from the Fundamental Theorem of Arithmetic:

$l - k = m > 0$
Thus:

$l > k$
$\Box$

The result follows from combining the two results.
$\blacksquare$





