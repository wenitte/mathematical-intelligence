# 

Source: https://proofwiki.org/wiki/Semiperimeter_of_Integer_Heronian_Triangle_is_Composite

Theorem
The semiperimeter of an integer Heronian triangle is always a composite number.


Proof
Let $a, b, c$ be the side lengths of an integer Heronian triangle.
By Heron's Formula, its area is given by:

$\AA = \sqrt {s \paren {s - a} \paren {s - b} \paren {s - c} } \in \N$
where the semiperimeter $s$ is given by:

$s = \dfrac {a + b + c} 2$

First we prove that $s$ is indeed an integer.
Aiming for a contradiction, suppose not.
Since $2 s = a + b + c \in \N$, $2 s$ must be odd.
Hence $2 s - 2 a, 2 s - 2 b, 2 s - 2 c$ are odd as well.
Thus:














\(\ds 16 \AA^2\)

\(=\)







\(\ds 16 s \paren {s - a} \paren {s - b} \paren {s - c}\)




















\(\ds \)

\(=\)







\(\ds 2 s \paren {2 s - 2 a} \paren {2 s - 2 b} \paren {2 s - 2 c}\)









Since $16 \AA^2$ is a product of odd numbers, it must be odd.
But then $\AA^2$ is not an integer, a contradiction.
Therefore $s \in \N$.
$\Box$

Now we show that $s$ is composite number.
Aiming for a contradiction, suppose not.
Then $s$ is either $1$ or prime.
Since $a, b, c \ge 1$, $s \ge \dfrac 3 2 > 1$.
Hence $s$ is prime.
Since:

$\AA^2 = s \paren {s - a} \paren {s - b} \paren {s - c}$
We have $s \divides \AA^2$.
By Prime Divides Power, $s^2 \divides \AA^2$.
Thus $s \divides \paren {s - a} \paren {s - b} \paren {s - c}$.
By Euclid's Lemma, $s$ divides some $s - x$.
However by Absolute Value of Integer is not less than Divisors:

$s \le s - x$
which is a contradiction.
Therefore $s$ is composite.
$\blacksquare$





