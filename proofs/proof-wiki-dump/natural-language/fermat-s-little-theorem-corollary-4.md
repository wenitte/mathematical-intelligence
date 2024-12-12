# 

Source: https://proofwiki.org/wiki/Fermat%27s_Little_Theorem/Corollary_4

Corollary to Fermat's Little Theorem
Let $p^k$ be a prime power for some prime number $p$ and $k \in \Z_{\gt 0}$.
Let $n \in \Z_{>0}$ with $p \nmid n$.
Then:

$n^{p^k - 1} \equiv 1 \pmod p$


Proof
From Fermat's Little Theorem: Corollary $3$:

$n^{p^k} \equiv n \pmod p$
That is:

$p \divides \paren {n^{p^k} - n} = n \paren {n^{p^k - 1} - 1}$
Since $p \nmid n$, from Prime Divisor of Coprime Integers:

$p \divides \paren {n^{p^k - 1} - 1}$
That is:

$n^{p^k - 1} \equiv 1 \pmod p$
$\blacksquare$





