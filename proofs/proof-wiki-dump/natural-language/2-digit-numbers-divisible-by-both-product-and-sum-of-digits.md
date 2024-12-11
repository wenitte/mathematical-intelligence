# 

Source: https://proofwiki.org/wiki/2-Digit_Numbers_divisible_by_both_Product_and_Sum_of_Digits

Theorem
The $2$-digit positive integers which are divisible by both the sum and product of their digits are:

$12, 24, 36$


Proof
We have:














\(\ds 12\)

\(=\)







\(\ds 4 \times \paren {1 + 2}\)




















\(\ds \)

\(=\)







\(\ds 6 \times \paren {1 \times 2}\)






















\(\ds 24\)

\(=\)







\(\ds 4 \times \paren {2 + 4}\)




















\(\ds \)

\(=\)







\(\ds 3 \times \paren {2 \times 4}\)






















\(\ds 36\)

\(=\)







\(\ds 4 \times \paren {3 + 6}\)




















\(\ds \)

\(=\)







\(\ds 2 \times \paren {3 \times 6}\)









It remains to be demonstrated that these are the only ones.

Let $z$ be a $2$-digit positive integer which is divisible by both the sum and product of its digits.
Neither of its digits may be $0$, because the product of the digits is a positive integer.
So, for $a \in \set {1, \dots, 9}$, $b \in \set {1, \dots, 9}$, $m \in \N$, $n \in \N$ we have:




\(\text {(1)}: \quad\)









\(\ds z\)

\(=\)







\(\ds 10 a + b\)





$2$-digit positive integer.




\(\text {(2)}: \quad\)









\(\ds z\)

\(=\)







\(\ds \paren {a + b} m\)





divisible by the sum of its digits




\(\text {(3)}: \quad\)









\(\ds z\)

\(=\)







\(\ds a b n\)





divisible by the product of its digits




Consider $(1) = (2)$:














\(\ds 10 a + b\)

\(=\)







\(\ds \paren {a + b} m\)





Note that if $m = 1$ then $a = 0$; hence $m > 1$














\(\ds 10 a - a m\)

\(=\)







\(\ds b m - b\)





rearranging














\(\ds a \paren {10 - m}\)

\(=\)







\(\ds b \paren {m - 1}\)





factorizing




\(\text {(4)}: \quad\)









\(\ds \frac b a\)

\(=\)







\(\ds \frac {10 - m} {m - 1}\)





rearranging; $a > 0$ and $m > 1$ so both denominators are never zero



In $(4)$ $a$, $b$, and $m - 1$ are all strictly positive; hence $10 - m$ must also be strictly positive.
Hence $1 < m < 10$.

Consider $(1) = (3)$:














\(\ds 10 a + b\)

\(=\)







\(\ds a b n\)




















\(\ds n\)

\(=\)







\(\ds \frac {10 a + b} {a b}\)





rearranging














\(\ds \)

\(=\)







\(\ds \frac {10 + \frac b a} b\)





dividing numerator and denominator by $a > 0$














\(\ds \)

\(=\)







\(\ds \frac {10 + \frac {10 - m} {m - 1} } b\)





from $(4)$














\(\ds \)

\(=\)







\(\ds \frac {10 \paren {m - 1} + 10 - m} {b \paren {m - 1} }\)





multiplying numerator and denominator by $m - 1 > 0$




\(\text {(5)}: \quad\)









\(\ds n\)

\(=\)







\(\ds \frac {9 m} {b \paren {m - 1} }\)





simplifying



Since $n \in \N$, we must have:

$\paren {m - 1} \divides 9 m$
Since $m$ and $m - 1$ are coprime, by Euclid's Lemma:

$\paren {m - 1} \divides 9$
This gives $m \in \set {2, 4}$.

Consider the case $m = 2$:
From $(4)$, $\dfrac b a = 8$.
Hence the only potential value for $b$ is $8$.
From $(5)$, $n = \dfrac {18} 8 \notin \N$.
Hence there are no potential candidates for $z$ for the case $m = 2$.

Consider the case $m = 4$:
From $(4)$, $\dfrac b a = 2$.
Hence the only potential values are $b \in \set {2, 4, 6, 8}$.
From $(5)$, $n = \dfrac {12} b$.
However, $8$ does not divide $12$.
This leaves $b \in \set {2, 4, 6}$.
By virtue of $\dfrac b a = 2$, we have $z \in \set {12, 24, 36}$.

We have now considered all the potential values of $m$.
Hence we conclude that the only $2$-digit positive integers which are divisible by both the sum and product of their digits are $12$, $24$, and $36$.
$\blacksquare$


Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $36$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $36$




