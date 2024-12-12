# 

Source: https://proofwiki.org/wiki/B%C3%A9zout%27s_Identity/Proof_5



Theorem
Let $a, b \in \Z$ such that $a$ and $b$ are not both zero.

Let $\gcd \set {a, b}$ be the greatest common divisor of $a$ and $b$.
Then:

$\exists x, y \in \Z: a x + b y = \gcd \set {a, b}$

That is, $\gcd \set {a, b}$ is an integer combination (or linear combination) of $a$ and $b$.

Furthermore, $\gcd \set {a, b}$ is the smallest positive integer combination of $a$ and $b$.


Proof
Let $\gcd \set {a, b} = d$.
Let $\dfrac a d = p$ and $\dfrac b d = q$.
From Integers Divided by GCD are Coprime:

$\gcd \left\{{p, q}\right\} = 1$
From Integer Combination of Coprime Integers:

$\exists x, y \in \Z: p x + q y = 1$
The result follows by multiplying both sides by $d$.
$\blacksquare$


Source of Name
This entry was named for Étienne Bézout.


Sources
1968: Ian D. Macdonald: The Theory of Groups ... (previous) ... (next): Appendix: Elementary set and number theory




