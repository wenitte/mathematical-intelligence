# 

Source: https://proofwiki.org/wiki/Prime_Sum_of_Squares_of_3_Prime_Numbers

Theorem
Let $a$, $b$ and $c$ be prime numbers with the property that:

$a^2 + b^2 + c^2 = p$
where $p$ is a prime number.
Then either $1$ or $2$ of $a$, $b$ and $c$ is equal to $3$.


Proof
First we note that sets of $3$ prime numbers with this property are plentiful.
For example, these are all such sets for $a, b, c < 20$:














\(\ds 2^2 + 2^2 + 3^2\)

\(=\)







\(\ds 17\)




















\(\ds 3^2 + 3^2 + 5^2\)

\(=\)







\(\ds 43\)




















\(\ds 3^2 + 3^2 + 7^2\)

\(=\)







\(\ds 67\)




















\(\ds 3^2 + 3^2 + 11^2\)

\(=\)







\(\ds 139\)




















\(\ds 3^2 + 3^2 + 17^2\)

\(=\)







\(\ds 307\)




















\(\ds 3^2 + 3^2 + 19^2\)

\(=\)







\(\ds 379\)




















\(\ds 3^2 + 5^2 + 5^2\)

\(=\)







\(\ds 59\)




















\(\ds 3^2 + 5^2 + 7^2\)

\(=\)







\(\ds 93\)




















\(\ds 3^2 + 7^2 + 7^2\)

\(=\)







\(\ds 107\)




















\(\ds 3^2 + 7^2 + 11^2\)

\(=\)







\(\ds 179\)




















\(\ds 3^2 + 7^2 + 13^2\)

\(=\)







\(\ds 227\)




















\(\ds 3^2 + 7^2 + 17^2\)

\(=\)







\(\ds 347\)




















\(\ds 3^2 + 7^2 + 19^2\)

\(=\)







\(\ds 419\)




















\(\ds 3^2 + 11^2 + 11^2\)

\(=\)







\(\ds 251\)




















\(\ds 3^2 + 11^2 + 17^2\)

\(=\)







\(\ds 467\)




















\(\ds 3^2 + 11^2 + 19^2\)

\(=\)







\(\ds 491\)




















\(\ds 3^2 + 13^2 + 13^2\)

\(=\)







\(\ds 347\)




















\(\ds 3^2 + 13^2 + 17^2\)

\(=\)







\(\ds 467\)




















\(\ds 3^2 + 17^2 + 17^2\)

\(=\)







\(\ds 587\)




















\(\ds 3^2 + 17^2 + 19^2\)

\(=\)







\(\ds 659\)









And indeed, the number of instances of $3$ in all the above is either $1$ or $2$.

First we note that if $a = b = c = 3$ then $a^2 + b^2 + c^2 = 27$ which is not prime.
It remains to demonstrate that if none of $a$, $b$ and $c$ are equal to $3$, then $a^2 + b^2 + c^2$ is not prime.

Let $q$ be a prime number such that $q \ne 3$.
Then by definition of prime number:

$3 \nmid q$
where $\nmid$ denotes non-divisibility.
Then from Square Modulo 3:

$q^2 \pmod 3 = 1$

Suppose none of $a$, $b$ and $c$ is equal to $3$.
Then:














\(\ds a^2\)

\(\equiv\)







\(\ds 1\)

\(\ds \pmod 3\)


















\(\ds b^2\)

\(\equiv\)







\(\ds 1\)

\(\ds \pmod 3\)


















\(\ds c^2\)

\(\equiv\)







\(\ds 1\)

\(\ds \pmod 3\)












\(\ds \leadsto \ \ \)





\(\ds a^2 + b^2 + c^2\)

\(\equiv\)







\(\ds 1 + 1 + 1\)

\(\ds \pmod 3\)



Modulo Addition is Well-Defined








\(\ds \leadsto \ \ \)





\(\ds a^2 + b^2 + c^2\)

\(\equiv\)







\(\ds 0\)

\(\ds \pmod 3\)



Definition of Congruence Modulo Integer








\(\ds \leadsto \ \ \)





\(\ds a^2 + b^2 + c^2\)

\(\equiv\)







\(\ds 0\)

\(\ds \pmod 3\)



Definition of Congruence Modulo Integer



That is:

$3 \divides a^2 + b^2 + c^2$
where $\divides$ denotes divisibility.
Hence if none of $a$, $b$ and $c$ is equal to $3$, $a^2 + b^2 + c^2$ is not prime number.
The result follows.
$\blacksquare$





