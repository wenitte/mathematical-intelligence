# 

Source: https://proofwiki.org/wiki/Congruence_of_Product

Theorem
Let $a, b, z \in \R$.

Let $a$ be congruent to $b$ modulo $z$, that is:

$a \equiv b \pmod z$

Then:

$\forall m \in \Z: m a \equiv m b \pmod z$


Proof
Let $m \in \Z$ and $a \equiv b \pmod z$.
Suppose $m = 0$.
Then the right hand side of the assertion degenerates to $0 \equiv 0 \pmod z$ which is trivially true.

Otherwise, from Congruence by Product of Moduli, we have:

$a \equiv b \iff m a \equiv m b \pmod z$
As $m \in \Z$, it follows that $m z$ is an integer multiple of $z$.
Hence from Congruence by Divisor of Modulus, it follows that:

$m a \equiv m b \implies m a \equiv m b \pmod z$
$\blacksquare$


Sources
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 14.4 \ \text{(i)}$: Congruence modulo $m$ ($m \in \N$)




