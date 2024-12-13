# 

Source: https://proofwiki.org/wiki/Largest_Number_not_Expressible_as_Sum_of_Multiples_of_Coprime_Integers/Generalization

Theorem
Let $a, b$ be integers greater than $1$.
Let $d = \gcd \set {a, b}$.
Then the largest multiple of $d$ not expressible as a sum of multiples of $a$ and $b$ (possibly zero) is the number:

$\dfrac {a b} d - a - b$


Proof
By Integers Divided by GCD are Coprime:

$\dfrac a d \perp \dfrac b d$
By Largest Number not Expressible as Sum of Multiples of Coprime Integers, the largest number not expressible as a sum of multiples of $\dfrac a d$ and $\dfrac b d$ is the number:

$\dfrac {a b} {d^2} - \dfrac a d - \dfrac b d$

Let $k d$ be a multiple of $d$ expressible as a sum of multiples of $a$ and $b$:

$\exists s, t \in \N: s a + t b = k d$
Then:

$s \dfrac a d + t \dfrac b d = k$
showing that $k$ is a sum of multiples of $\dfrac a d$ and $\dfrac b d$.

This argument reverses.
Hence the largest multiple of $d$ not expressible as a sum of multiples of $a$ and $b$ is the number:

$d \paren {\dfrac {a b} {d^2} - \dfrac a d - \dfrac b d} = \dfrac {a b} d - a - b$
$\blacksquare$





