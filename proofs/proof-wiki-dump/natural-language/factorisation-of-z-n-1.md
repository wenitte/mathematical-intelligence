# 

Source: https://proofwiki.org/wiki/Factorisation_of_z%5En%2B1

Theorem
Let $n \in \Z_{>0}$ be a (strictly) positive integer.

Then:

$z^n + 1 = \ds \prod_{k \mathop = 0}^{n - 1} \paren {z - \exp \dfrac {\paren {2 k + 1} i \pi} n}$


Proof
From Factorisation of $z^n - a$, setting $a = -1$:

$z^n + 1 = \ds \prod_{k \mathop = 0}^{n - 1} \paren {z - \alpha^k b}$
where:

$\alpha$ is a primitive complex $n$th root of unity
$b$ is any complex number such that $b^n = a$.

From Euler's Identity:

$-1 = e^{i \pi}$
From Exponential of Product:

$\paren {\exp \dfrac {i \pi} n}^n = e^{i \pi}$
and so:

$b = \exp \dfrac {i \pi} n$
We also have by definition of the first complex $n$th root of unity, and from First Complex Root of Unity is Primitive:

$\alpha = \exp \dfrac {2 i \pi} n$
Hence:














\(\ds z^n + 1\)

\(=\)







\(\ds \prod_{k \mathop = 0}^{n - 1} \paren {z - \paren {\exp \dfrac {2 i \pi} n}^k \exp \dfrac {i \pi} n}\)




















\(\ds \)

\(=\)







\(\ds \prod_{k \mathop = 0}^{n - 1} \paren {z - \exp \dfrac {2 k i \pi} n \exp \dfrac {i \pi} n}\)





Exponential of Product














\(\ds \)

\(=\)







\(\ds \prod_{k \mathop = 0}^{n - 1} \paren {z - \exp \dfrac {\paren {2 k + 1} i \pi} n}\)





Exponential of Sum



$\blacksquare$





