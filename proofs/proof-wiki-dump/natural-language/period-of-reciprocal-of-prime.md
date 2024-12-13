# 

Source: https://proofwiki.org/wiki/Period_of_Reciprocal_of_Prime



Theorem
Consider the decimal expansion of the reciprocal $\dfrac 1 p$ of a prime $p$.
If $p \nmid a$, the decimal expansion of $\dfrac 1 p$ is periodic in base $a$ and its period of recurrence is the order of $a$ modulo $p$.
If $p \divides a$, the decimal expansion of $\dfrac 1 p$ in base $a$ terminates.


Proof
Case $1$: $p \divides a$
Let $q = \dfrac a p$.
Then $\dfrac 1 p = \dfrac q a$.
So the decimal expansion of $\dfrac 1 p$ in base $a$ is $0.q$ and terminates.
$\Box$


Case $2$: $p \nmid a$
Let $d$ be the order of $a$ modulo $p$.
By definition, $d$ is the smallest integer such that:

$a^d \equiv 1 \pmod p$
By definition of modulo arithmetic:

$\exists x \in \Z: a^d - 1 = xp$

We can rearrange the terms to achieve the following expression:














\(\ds \frac 1 p\)

\(=\)







\(\ds \frac x {a^d - 1}\)




















\(\ds \)

\(=\)







\(\ds \frac x {a^d} \frac 1 {1 - \frac 1 {a^d} }\)





factorizing














\(\ds \)

\(=\)







\(\ds \frac x {a^d} \paren {1 + \paren {\frac 1 {a^d} } + \paren {\frac 1 {a^d} }^2 + \paren {\frac 1 {a^d} }^3 + \cdots}\)





Power Series Expansion for Reciprocal of 1 + x: $-1 < -\dfrac 1 {a^d} < 1$














\(\ds \)

\(=\)







\(\ds \paren {\frac 1 {a^d} } x + \paren {\frac 1 {a^d} }^2 x + \paren {\frac 1 {a^d} }^3 x + \cdots\)





rearranging



so the decimal expansion of $\dfrac 1 p$ in base $a$ is $0.xxx...$ and is periodic of length $d$, which is the order of $a$ modulo $p$.
$\blacksquare$





