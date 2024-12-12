# 

Source: https://proofwiki.org/wiki/Euler%27s_Theorem_(Number_Theory)/Corollary_1

Corollary to Euler's Theorem (Number Theory)
Let $p^n$ be a prime power for some prime number $p > 1$.
Let $a$ be an integer not divisible by $p: p \nmid a$.
Then:

$a^{\paren {p - 1} p^{n - 1} } \equiv 1 \pmod {p^n}$


Proof
We have that Divisor Relation is Transitive.
Since $p \divides p^n$, it follows that:

$p^n \nmid a$
From Euler's Theorem (Number Theory):

$a^{\map \phi {p^n} } \equiv 1 \pmod {p^n}$
From Euler Phi Function of Prime Power:

$\map \phi {p^n} = \paren {p - 1} p^{n - 1}$
Then:

$a^{\paren {p - 1} p^{n - 1} } \equiv 1 \pmod {p^n}$
$\blacksquare$





