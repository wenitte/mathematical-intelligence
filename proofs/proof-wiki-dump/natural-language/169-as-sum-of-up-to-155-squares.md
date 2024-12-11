# 

Source: https://proofwiki.org/wiki/169_as_Sum_of_up_to_155_Squares

Theorem
$169$ can be expressed as the sum of $n$ non-zero squares for all $n$ from $1$ to $155$.


Proof
We note the following:














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










Let $41 \le n \le 155$.
Let $n \equiv 0 \pmod 3$.
Then $169$ can be represented as:

$169 = 2 \times 3^2 + \left({37 - \dfrac {n - 42} 3}\right) \times 2^2 + \left({\dfrac {4 \left({n - 42}\right)} 3 + 3}\right) \times 1^2$
Let $n \equiv 1 \pmod 3$.
Then $169$ can be represented as:

$169 = \left({42 - \dfrac {n - 43} 3}\right) \times 2^2 + \left({\dfrac {4 \left({n - 43}\right)} 3 + 1}\right) \times 1^2$
Let $n \equiv 2 \pmod 3$.
Then $169$ can be represented as:

$169 = 3^2 + \left({40 - \dfrac {n - 41} 3}\right) \times 2^2 + \left({\dfrac {4 \left({n - 41}\right)} 3}\right) \times 1^2$
Thus in each case $169$ has been expressed in terms of $n$ squares: a combination of varying numbers of $1^2$, $2^2$ and $3^2$.
For $n > 155$ this construction does not work, because it results in a negative number of instances of $2^2$.
Similarly, for $n < 41$ this construction does not work, because it results in a negative number of instances of $1^2$.

For $n < 41$, we have:

$169 = 25 + k$
where $k$ equals one of:

$1 \times 12^2$
$9 \times 4^2$
$16 \times 3^2$
$14 \times 3^2 + 3 \times 2^2 + 6 \times 1^2$
$10 \times 3^2 + 11 \times 2^2 + 10 \times 1^2$
That is, $169$ equals $25$ plus $1$, $9$, $16$, $23$ or $31$ other squares.
But from 25 as Sum of 4 to 11 Squares, $25$ can also be written as a sum of $n$ squares for $4 \le n \le 11$.
Thus, by using judicious combinations of:

sums of squares totalling $25$
sums of squares totalling $169 - 25$
we can obtain a representation of $169$ as the sum of $n$ squares where $5 \le n \le 40$.

In summary, therefore, there exists a representation of $169$ as the sum of $n$ squares for $1 \le n \le 155$.
$\blacksquare$


Sources
Feb. 1993: Kelly Jackson, Francis Masat and Robert Mitchell: Extensions of a Sums-of-Squares Problem (Math. Mag. Vol. 66, no. 1: pp. 41 – 43)  www.jstor.org/stable/2690474
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $169$




