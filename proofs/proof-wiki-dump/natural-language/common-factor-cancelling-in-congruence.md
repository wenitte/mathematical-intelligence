# 

Source: https://proofwiki.org/wiki/Common_Factor_Cancelling_in_Congruence



Theorem
Let $a, b, x, y, m \in \Z$.
Let:

$a x \equiv b y \pmod m$ and $a \equiv b \pmod m$
where $a \equiv b \pmod m$ denotes that $a$ is congruent modulo $m$ to $b$.

Then:

$x \equiv y \pmod {m / d}$
where $d = \gcd \set {a, m}$.


Corollary 1
If $a$ is coprime to $m$, then:

$x \equiv y \pmod m$


Corollary 2
Let:

$a x \equiv a y \pmod m$
where $a \equiv b \pmod m$ denotes that $a$ is congruent modulo $m$ to $b$.

If $a$ is coprime to $m$, then:

$x \equiv y \pmod m$


Proof
We have that $d = \gcd \set {a, m}$.
From Law of Inverses (Modulo Arithmetic), we have:

$\exists a' \in \Z: a a' \equiv d \pmod m$

Hence:














\(\ds a\)

\(\equiv\)







\(\ds b\)

\(\ds \pmod m\)












\(\ds \leadsto \ \ \)





\(\ds a a'\)

\(\equiv\)







\(\ds b a'\)

\(\ds \pmod m\)



Definition of Modulo Multiplication














\(\ds \)

\(\equiv\)







\(\ds d\)

\(\ds \pmod m\)








Then:














\(\ds a x\)

\(\equiv\)







\(\ds b y\)

\(\ds \pmod m\)












\(\ds \leadsto \ \ \)





\(\ds a a' x\)

\(\equiv\)







\(\ds b a' y\)

\(\ds \pmod m\)



Definition of Modulo Multiplication








\(\ds \leadsto \ \ \)





\(\ds d x\)

\(\equiv\)







\(\ds d y\)

\(\ds \pmod m\)



from above








\(\ds \leadsto \ \ \)





\(\ds x\)

\(\equiv\)







\(\ds y\)

\(\ds \paren {\bmod {\dfrac m d} }\)



Congruence by Product of Moduli



Hence the result.
$\blacksquare$


Examples
Congruence Cancelling: $6 \equiv 12 \pmod 2 \leadsto 2 \equiv 4 \pmod 2$
We have that:

$6 \equiv 12 \pmod 2$
and so:

$2 \equiv 4 \pmod 2$




