# 

Source: https://proofwiki.org/wiki/M%C3%B6bius_Function_is_Multiplicative/Corollary

Theorem
Let $\gcd \set {m, n} > 1$.
Then:

$\map \mu {m n} = 0$
where $\mu$ denotes the Möbius function.


Proof
Let $\gcd \set {m, n} = k$ where $k > 1$.
Then $m = k r$ and $n = k s$ for some $r, s \in \Z$.
Thus $m n = k^2 r s$.
From Integer is Expressible as Product of Primes there exists $p \in \Z$ such that $p$ is prime and $p \divides k$.
That is:

$\exists t \in \Z: k = p t$
and so:

$m n = p^2 t^2 r s$
That is:

$p^2 \divides m $
Hence the result by definition of the Möbius function.
$\blacksquare$





