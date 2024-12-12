# 

Source: https://proofwiki.org/wiki/Divisor_of_Fermat_Number/Refinement_by_Lucas

Theorem
Let $F_n$ be a Fermat number.
Let $m$ be divisor of $F_n$.
Let $n \ge 2$.
Then $m$ is in the form:

$k \, 2^{n + 2} + 1$


Proof
It is sufficient to prove the result for prime divisors.
The general argument for all divisors follows from the argument:

$\paren {a \, 2^c + 1} \paren {b \, 2^c + 1} = a b \, 2^{2 c} + \paren {a + b} \, 2^c + 1 = \paren {a b \, 2^c + a + b} \, 2^c + 1$
So the product of two factors of the form preserves that form.

Let $p$ be a prime divisor of $F_n = 2^{2^n} + 1$.
From Euler's Result:

$\exists q \in \Z: p = q \, 2^{n + 1} + 1$
Since $n \ge 2$, $q \, 2^{n + 1}$ is divisible by $2^{2 + 1} = 8$.
Hence:

$p \equiv 1 \pmod 8$

By Second Supplement to Law of Quadratic Reciprocity:

$\paren {\dfrac 2 p} = 1$
so $2$ is a quadratic residue modulo $p$.
Hence:

$\exists x \in \Z: x^2 = 2 \pmod p$
We have shown $2^{2^n} \equiv -1 \pmod p$ and $2^{2^{n + 1} } \equiv 1 \pmod p$.
By Congruence of Powers:

$x^{2^{n + 1} } \equiv 2^{2^n} \equiv -1 \pmod p$
$x^{2^{n + 2} } \equiv 2^{2^{n + 1}} \equiv 1 \pmod p$

From Integer to Power of Multiple of Order, the order of $x$ modulo $p$ divides $2^{n + 2}$ but not $2^{n + 1}$.
Therefore it must be $2^{n + 2}$.

Hence:










\(\ds \exists k \in \Z: \, \)



\(\ds \map \phi p\)

\(=\)







\(\ds k \, 2^{n + 2}\)





Corollary to Integer to Power of Multiple of Order














\(\ds p - 1\)

\(=\)







\(\ds k \, 2^{n + 2}\)





Euler Phi Function of Prime














\(\ds p\)

\(=\)







\(\ds k \, 2^{n + 2} + 1\)









$\blacksquare$


Historical Note
In $1747$, Leonhard Paul Euler proved that a divisor of a Fermat number $F_n$ is always in the form $k \, 2^{n + 1} + 1$.
This was later refined to $k \, 2^{n + 2} + 1$ by François Édouard Anatole Lucas.





