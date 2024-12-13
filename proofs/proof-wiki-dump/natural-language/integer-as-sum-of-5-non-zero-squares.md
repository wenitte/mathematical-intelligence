# 

Source: https://proofwiki.org/wiki/Integer_as_Sum_of_5_Non-Zero_Squares

Theorem
Let $n \in \Z$ be an integer such that $n > 33$.
Then $n$ can be expressed as the sum of $5$ non-zero squares.


Proof
From Lagrange's Four Square Theorem, every positive integer can be expressed as the sum of $4$ squares, some of which may be zero.
The existence of positive integers which cannot be expressed as the sum of $4$ non-zero squares is noted by the trivial examples $1$, $2$ and $3$.
Thus Lagrange's Four Square Theorem can be expressed in the form:

$(1): \quad$ Every positive integer can be expressed as the sum of $1$, $2$, $3$ or $4$ non-zero squares.

We note the following from 169 as Sum of up to 155 Squares:














\(\ds 169\)

\(=\)







\(\ds 13^2\)




















\(\ds \)

\(=\)







\(\ds 12^2 + 5^2\)




















\(\ds \)

\(=\)







\(\ds 12^2 + 4^2 + 3^2\)




















\(\ds \)

\(=\)







\(\ds 8^2 + 8^2 + 5^2 + 4^2\)




















\(\ds \)

\(=\)







\(\ds 8^2 + 8^2 + 4^2 + 4^2 + 3^2\)









Let $n > 169$.
Then $n$ can be expressed as:

$n = m + 169$
where $m \ge 1$.
From $(1)$, $m$ can be expressed as the sum of sum of $1$, $2$, $3$ or $4$ non-zero squares.
Thus at least one of the following holds:

$m = a^2$
$m = a^2 + b^2$
$m = a^2 + b^2 + c^2$
$m = a^2 + b^2 + c^2 + d^2$

Thus one of the following holds:














\(\ds n\)

\(=\)







\(\ds a^2 + b^2 + c^2 + d^2 + 13^2\)




















\(\ds n\)

\(=\)







\(\ds a^2 + b^2 + c^2 + 12^2 + 5^2\)




















\(\ds n\)

\(=\)







\(\ds a^2 + b^2 + 12^2 + 4^2 + 3^2\)




















\(\ds n\)

\(=\)







\(\ds a^2 + 8^2 + 8^2 + 5^2 + 4^2\)










It remains to be shown that of the positive integers less than $169$, all but the following can be expressed in this way:

$1, 2, 3, 4, 6, 7, 9, 10, 12, 15, 18, 33$

Note that by Integer as Sum of Three Squares, all integers not of the form:

$4^n \paren {8 m + 7}$
can be written as a sum of $1$, $2$ or $3$ non-zero squares.

Also note that:














\(\ds 18\)

\(=\)







\(\ds 3^2 + 3^2\)




















\(\ds \)

\(=\)







\(\ds 4^2 + 1^2 + 1^2\)




















\(\ds \)

\(=\)







\(\ds 3^2 + 2^2 + 2^2 + 1^2\)










Similar to the above, for $x = y + 18$ where $y \ne 4^n \paren {8 m + 7}$, at least one of the following holds:














\(\ds n\)

\(=\)







\(\ds a^2 + b^2 + c^2 + 3^2 + 3^2\)




















\(\ds n\)

\(=\)







\(\ds a^2 + b^2 + 4^2 + 1^2 + 1^2\)




















\(\ds n\)

\(=\)







\(\ds a^2 + 3^2 + 2^2 + 2^2 + 1^2\)









the ineligible $0 < y < 151$ are:

$7, 15, 23, 28, 31, 39, 47, 55, 60, 63, 71, 79, 87, 92, 95, 103, 111, 112, 119, 124, 127, 135, 143$
with corresponding $x$:

$25, 33, 41, 46, 49, 57, 65, 73, 78, 81, 89, 97, 105, 110, 113, 121, 129, 130, 137, 142, 145, 153, 161$
for $x > 18$.

Similarly, for $45$:














\(\ds 45\)

\(=\)







\(\ds 6^2 + 3^2\)




















\(\ds \)

\(=\)







\(\ds 5^2 + 4^2 + 2^2\)




















\(\ds \)

\(=\)







\(\ds 4^2 + 4^2 + 3^2 + 2^2\)









So if we can write $x = y + 45$ where $y \ne 4^n \paren {8 m + 7}$, $x$ can be expressed as a sum of $5$ non-zero squares.
The ineligible $x > 45$ for $0 < y < 124$ are:

$52, 60, 68, 73, 76, 84, 92, 100, 105, 108, 116, 124, 132, 137, 140, 148, 156, 157, 164$

Comparing both lists, we only need to check:

$x < 18$ and $x = 25, 33, 41, 73, 105, 137$

And we have:














\(\ds 5\)

\(=\)







\(\ds 1^2 + 1^2 + 1^2 + 1^2 + 1^2\)




















\(\ds 8\)

\(=\)







\(\ds 2^2 + 1^2 + 1^2 + 1^2 + 1^2\)




















\(\ds 11\)

\(=\)







\(\ds 2^2 + 2^2 + 1^2 + 1^2 + 1^2\)




















\(\ds 13\)

\(=\)







\(\ds 3^2 + 1^2 + 1^2 + 1^2 + 1^2\)




















\(\ds 14\)

\(=\)







\(\ds 2^2 + 2^2 + 2^2 + 1^2 + 1^2\)




















\(\ds 16\)

\(=\)







\(\ds 3^2 + 2^2 + 1^2 + 1^2 + 1^2\)




















\(\ds 17\)

\(=\)







\(\ds 2^2 + 2^2 + 2^2 + 2^2 + 1^2\)




















\(\ds 25\)

\(=\)







\(\ds 3^2 + 2^2 + 2^2 + 2^2 + 2^2\)




















\(\ds 41\)

\(=\)







\(\ds 4^2 + 4^2 + 2^2 + 2^2 + 1^2\)




















\(\ds 73\)

\(=\)







\(\ds 6^2 + 5^2 + 2^2 + 2^2 + 2^2\)




















\(\ds 105\)

\(=\)







\(\ds 6^2 + 6^2 + 5^2 + 2^2 + 2^2\)




















\(\ds 137\)

\(=\)







\(\ds 10^2 + 5^2 + 2^2 + 2^2 + 2^2\)









while for the rest:

$1, 2, 3, 4 < 5 \times 1^2$
$5 \times 1^2 < 6, 7 < 2^2 + 4 \times 1^2$
$2^2 + 4 \times 1^2 < 9, 10 < 2 \times 2^2 + 3 \times 1^2$

$12, 15, 18, 33$ are divisible by $3$.
By Square Modulo 3, $n^2 \equiv 0$ or $1 \pmod 3$.
We must require the $5$ non-zero squares to be equivalent to:

$0, 0, 1, 1, 1 \pmod 3$
or

$0, 0, 0, 0, 0 \pmod 3$
The smallest non-zero square divisible by $3$ is $3^2 = 9$.
The sum of the squares must therefore be greater than:

$3^2 + 3^2 = 18$
hence $12, 15, 18$ cannot be expressed as the sum of $5$ non-zero squares.

Since $6^2 > 33$, we must have $33 = 3^2 + 3^2 + a^2 + b^2 + c^2$.
But $33 - 3^2 - 3^2 = 15$ cannot be expressed as the sum of $3$ non-zero squares, as it is of the form $4^n \paren {8 m + 7}$.
This proves the theorem.
$\blacksquare$


Sources
Feb. 1993: Kelly Jackson, Francis Masat and Robert Mitchell: Extensions of a Sums-of-Squares Problem (Math. Mag. Vol. 66, no. 1: pp. 41 – 43)  www.jstor.org/stable/2690474
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $33$




