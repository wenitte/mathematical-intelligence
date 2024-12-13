# 

Source: https://proofwiki.org/wiki/Integer_as_Sum_of_Two_Squares



Theorem
Let $n$ be a positive integer.

Then:

$n$ can be expressed as the sum of two squares
if and only if:

each of its prime divisors of the form $4 k + 3$ (if any) occur to an even power.


Proof
Let us extract the largest square divisor of $n$, and write:

$n = m^2 r$
where $r$ is square-free.


Necessary Condition
Suppose $r$ has no prime divisor in the form $4 k + 3$.
If $r = 1$ then $n^2 = m^2 + 0^2$ and nothing needs to be proved.
If $r > 1$ then $r$ is a product of one or more primes, each of which is either $2$ or in the form $4 k + 1$.
Now from Fermat's Two Squares Theorem, each of these can be expressed as the sum of two squares.
By the extension to the Brahmagupta-Fibonacci Identity, the product of all these can itself be expressed as the sum of two squares.
So $r = a^2 + b^2$, say.
Then:

$n = m^2 \paren {a^2 + b^2} = \paren {m a}^2 + \paren {m b}^2$
So $n$ can be expressed as the sum of two squares.
$\Box$


Sufficient Condition
Now suppose that $n$ can be expressed as the sum of two squares, say:

$n = m^2 r = a^2 + b^2$
First, any common divisor of $a$ and $b$ may be cancelled as follows.
If $\gcd \set {a, b} = d$, then we can write:

$a = a' d, b = b' d$
where $\gcd \set {a', b'} = 1$ from Integers Divided by GCD are Coprime.
So:

$m^2 r = d^2 \paren {a'^2 + b'^2}$
As $r$ is square-free, $d \divides m$ and so, writing $m' = \dfrac m d$, we get:

$m'^2 r = a'^2 + b'^2$

We need to show that $r$ has no prime factor of the form $4 k + 3$.
Aiming for a contradiction, suppose $p = 4 k + 3$ divides $r$.
Then:

$a'^2 + b'^2 \equiv 0 \implies a'^2 \equiv -b'^2 \pmod p$
If $p \divides a'$ we would have:

$p \divides b'$
which contradicts $\gcd \set {a', b'} = 1$.
So:

$\gcd \set {a', p} = \gcd \set {b', p} = 1$
and we can apply Fermat's Little Theorem:

$a'^{p-1} \equiv b'^{p-1} \equiv 1 \pmod p$
So, we put $p = 4 k + 3$:














\(\ds 1\)

\(\equiv\)







\(\ds a'^{p - 1}\)

\(\ds \pmod p\)


















\(\ds \)

\(\equiv\)







\(\ds a'^{4 k + 2}\)

\(\ds \pmod p\)


















\(\ds \)

\(\equiv\)







\(\ds \paren {a'^2}^{2 k + 1}\)

\(\ds \pmod p\)


















\(\ds \)

\(\equiv\)







\(\ds \paren {-b'^2}^{2 k + 1}\)

\(\ds \pmod p\)


















\(\ds \)

\(\equiv\)







\(\ds \paren {-1}^{2 k + 1} \paren {b'^2}^{2 k + 1}\)

\(\ds \pmod p\)


















\(\ds \)

\(\equiv\)







\(\ds \paren {-1} b'^{p - 1}\)

\(\ds \pmod p\)


















\(\ds \)

\(\equiv\)







\(\ds -1\)

\(\ds \pmod p\)







$-1 \equiv 1 \pmod p$ is not possible for an odd prime.
So we have obtained our contradiction.
The result follows.
$\blacksquare$


Sources
2008: Ian Stewart: Taming the Infinite ... (previous) ... (next): Chapter $7$: Patterns in Numbers: Fermat




