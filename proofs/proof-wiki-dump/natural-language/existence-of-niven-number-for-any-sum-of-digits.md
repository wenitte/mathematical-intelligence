# 

Source: https://proofwiki.org/wiki/Existence_of_Niven_Number_for_Any_Sum_of_Digits

Theorem
Let $b, s$ be integers such that $b > 1$ and $s > 0$.
Then there exists a Niven Number in base $b$ with sum of digits $s$.


Proof
Consider the prime factorization of $b$:

$b = p_1^{a_1} p_2^{a_2} \dots p_k^{a_k}$
where $a_1, a_2, \dots, a_k \ge 1$.
Write:

$s = p_1^{c_1} p_2^{c_2} \dots p_k^{c_k} t$
where $b$ and $t$ are coprime.
Let $c = \max \set {c_1, c_2, \dots, c_k}$.
We will show that the number:

$n = b^c \paren {b^{\map \phi t} + b^{2 \map \phi t} + \dots + b^{s \map \phi t} }$
is a Niven Number in base $b$, where $\map \phi t$ denotes the Euler totient function.

Notice that $n$ is a sum of distinct powers of $b$.
By Basis Representation Theorem, we can write:

$\ds n = \sum_{j \mathop = 0}^d r_j b^j$
and we see that:

$r_j = 1$ for $j = c + x \map \phi t$ for $x = 1, 2, \dots, s$
$r_j = 0$ otherwise
Therefore the base $b$ representation of $n$ contains $s$ $1$'s and all other digits are zero.
Thus the sum of digits of $n$ in base $b$ is $s$.
It remains to show that $n$ is divisible by $s$.

We have:

$c_i \le c \le a_1 c$
for any $1 \le i \le k$.
Thus we have, by Product of Divisors is Divisor of Product:

$\dfrac s t = p_1^{c_1} p_2^{c_2} \dots p_k^{c_k} \divides p_1^{a_1 c} p_2^{a_2 c} \dots p_k^{a_k c} = b^c$
We also have:














\(\ds b^{\map \phi t} + b^{2 \map \phi t} + \dots + b^{s \map \phi t}\)

\(\equiv\)







\(\ds 1 + 1^2 + \dots + 1^s\)

\(\ds \pmod t\)



Euler's Theorem (Number Theory), Congruence of Powers














\(\ds \)

\(\equiv\)







\(\ds s\)

\(\ds \pmod t\)


















\(\ds \)

\(\equiv\)







\(\ds 0\)

\(\ds \pmod t\)



because $t \divides s$



and thus $t \divides b^{\map \phi t} + b^{2 \map \phi t} + \dots + b^{s \map \phi t}$.
By Product of Divisors is Divisor of Product again:

$s = \dfrac s t \times t \divides b^c \paren {b^{\map \phi t} + b^{2 \map \phi t} + \dots + b^{s \map \phi t} } = n$
Hence the result.
$\blacksquare$


Sources
1970: Wacław Sierpiński: 250 Problems in Elementary Number Theory: No. $37$




