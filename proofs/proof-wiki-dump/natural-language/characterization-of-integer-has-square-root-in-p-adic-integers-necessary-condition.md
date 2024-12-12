# 

Source: https://proofwiki.org/wiki/Characterization_of_Integer_has_Square_Root_in_P-adic_Integers/Necessary_Condition

Theorem
Let $\Z_p$ be the $p$-adic integers for some prime $p \ne 2$.
Let $a \in Z$ be an integer such that $p \nmid a$.
Let the exist $x \in \Z_p$ such that $x^2 = a$.

Then:

$a$ is a quadratic residue of $p$.

That is:

an integer $a$ not divisible by $p$ has a square root in $\Z_p$ ($p \ne 2$)
if and only if:

$a$ is a quadratic residue of $p$.


Proof
Let $F \in \Z \sqbrk X$ be the polynomial:

$\map F X = X^2 - a$
By definition, the formal derivative of $F$ is:

$\map {F'} X = 2 X$

Let there exist $x$ such that $x^2 = a$.
By definition of root of polynomial:

$\map F X$ has a root in $\Z_p$.

From Characterization of Integer Polynomial has Root in P-adic Integers:

there exists an integer sequence $\sequence {a_n}$ such that:
$(1) \quad \ds \lim_{n \mathop \to \infty} {a_n} = a$
$(2) \quad \map F {a_n} \equiv 0 \mod {p^{n + 1} }$

We have:

$a_0^2 - a \equiv 0 \pmod p$
That is:

$a_0^2 \equiv a \pmod p$

Hence by definition:

$a$ is a quadratic residue of $p$.
$\blacksquare$





