# 

Source: https://proofwiki.org/wiki/Fermat%27s_Little_Theorem/Proof_1

Theorem
Let $p$ be a prime number.
Let $n \in \Z_{>0}$ be a positive integer such that $p$ is not a divisor of $n$.

Then:

$n^{p - 1} \equiv 1 \pmod p$


Proof
Consider the integer sequence $n, 2 n, 3 n, \dotsc, \paren {p - 1} n$.
Note that none of these integers is congruent modulo $p$ to any of the others.
If this were the case, we would have $a n \equiv b n \pmod p$ for some $1 \le a < b \le p - 1$.
Then as $\map \gcd {n, p} = 1$, and we can cancel the $n$, we get $a \equiv b \pmod p$ and so $a = b$.

We have that:

$\forall c \in \set {1, 2, \dotsc, p - 1}: p \nmid n \land p \nmid c$
So by Euclid's Lemma:

$p \nmid c n$
for any such $c n$, which means:

$c n \not \equiv 0 \pmod p$
Thus, each integer in the sequence can be reduced modulo $p$ to exactly one of $1, 2, 3, \ldots, p - 1$.
So $\set {1, 2, 3, \ldots, p - 1}$ is the set of Reduced Residue System modulo $p$.

So, upon taking the product of these congruences, we see that:

$n \times 2 n \times 3 n \times \dots \times \paren {p - 1} n \equiv 1 \times 2 \times 3 \times \cdots \times \paren {p - 1} \pmod p$
This simplifies to:

$n^{p - 1} \times \paren {p - 1}! \equiv \paren {p - 1}! \pmod p$
Since $p \nmid \paren {p - 1}!$, we can cancel $\paren {p - 1}!$ from both sides, leaving us with:

$n^{p - 1} \equiv 1 \pmod p$
$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.4$: Integer Functions and Elementary Number Theory: Theorem $\text{F}$




