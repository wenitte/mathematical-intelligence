# 

Source: https://proofwiki.org/wiki/Largest_Number_not_Expressible_as_Sum_of_Multiples_of_Coprime_Integers



Theorem
Let $a, b$ be coprime integers, each greater than $1$.
Then the largest number not expressible as a sum of multiples of $a$ and $b$ (possibly zero) is the number:

$a b - a - b = \paren {a - 1} \paren {b - 1} - 1$


Generalization
Let $a, b$ be integers greater than $1$.
Let $d = \gcd \set {a, b}$.
Then the largest multiple of $d$ not expressible as a sum of multiples of $a$ and $b$ (possibly zero) is the number:

$\dfrac {a b} d - a - b$


Proof
First we show that $a b - a - b$ is not expressible as a sum of multiples of $a$ and $b$.
Aiming for a contradiction, suppose $a b - a - b = s a + t b$ for some $s, t \in \N$.
Note that $t b \le s a + t b < a b - b = \paren {a - 1} b$.
This gives $t < a - 1$.

We also have $\paren {a - t - 1} b = \paren {s + 1} a$.
Hence $a \divides \paren {a - t - 1} b$.
Since $a$ and $b$ are coprime, by Euclid's Lemma:

$a \divides a - t - 1$
As $a - t - 1 > 0$, by Absolute Value of Integer is not less than Divisors:

$a \le a - t - 1$
which is a contradiction.
Hence $a b - a - b$ is not expressible as a sum of multiples of $a$ and $b$.
$\Box$

Next we need to show that all numbers greater than $a b - a - b$ can be so expressed.
Without loss of generality assume that $a > b$ and we split the numbers into two cases:


Case $1$: $x = a b - a - b + k$ for $1 \le k \le b$
For $k = b$, we have $a b - a = a \paren {b - 1}$.

Notice that for $1 \le k < b$ and $0 \le s \le b - 2$:














\(\ds a b - a - b + k - s a\)

\(\ge\)







\(\ds a b - a - b + k - \paren {b - 2} a\)




















\(\ds \)

\(=\)







\(\ds a - b + k\)




















\(\ds \)

\(>\)







\(\ds 0\)









and we see that, by Absolute Value of Integer is not less than Divisors:

$a b - a - b + k - \paren {b - 1} a = k - b$
cannot be a multiple of $b$.

We claim that one of $a b - a - b + k - s a$ is divisible by $b$, where $0 \le s \le b - 1$.
Suppose not. Then we consider each of the remainders when dividing by $b$.
There are $b - 1$ remainders excluding $0$.
However we have a set of $b$ integers.
By Pigeonhole Principle, two integers must share the same remainder.

Suppose we have $a b - a - b + k - s_1 a$ and $a b - a - b + k - s_2 a$ both having remainder $r$ with $s_1 \ne s_2$:

$\exists p, q \in \Z: a b - a - b + k - s_1 a = p b + r, a b - a - b + k - s_2 a = q b + r$
Then:














\(\ds \size {s_1 - s_2} a\)

\(=\)







\(\ds \size {a b - a - b + k - s_2 a - \paren {a b - a - b + k - s_1 a} }\)




















\(\ds \)

\(=\)







\(\ds \size {q b + r - p b - r}\)




















\(\ds \)

\(=\)







\(\ds \size {q - p} b\)









Hence $b \divides \size {s_1 - s_2} a$.
By Euclid's Lemma, $b \divides \size {s_1 - s_2}$.
But $0 < \size {s_1 - s_2} \le b - 1$.
This contradicts Absolute Value of Integer is not less than Divisors.
Therefore one of $a b - a - b + k - s a$ must be divisible by $b$, where $0 \le s \le b - 1$.

We have shown that $s \ne b - 1$.
Hence for some $s$ with $0 \le s \le b - 2$, $a b - a - b + k - s a$ is a positive multiple of $b$.
This gives:

$a b - a - b + k = s a + t b$ for some $s, t \in \N$
as required.
$\Box$


Case $2$: $x > a b - a$
By Division Theorem:

$\exists q, r \in \Z: 0 \le r < b: x - \paren {a b - a - b + 1} = q b + r$
We have:














\(\ds q b\)

\(=\)







\(\ds x - \paren {a b - a - b + 1} - r\)




















\(\ds \)

\(>\)







\(\ds b - 1 - r\)




















\(\ds \)

\(\ge\)







\(\ds 0\)









hence $q > 0$.

Moreover:

$x - q b = a b - a - b + \paren {r + 1}$
which falls into Case $1$.

We have shown that:

$\exists s, t \in \N: a b - a - b + \paren {r + 1} = s a + t b$
Hence:

$x = s a + t b + q b = s a + \paren {t + q} b$
as required.
$\blacksquare$





