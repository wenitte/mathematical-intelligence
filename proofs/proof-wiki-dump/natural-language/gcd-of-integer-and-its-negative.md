# 

Source: https://proofwiki.org/wiki/GCD_of_Integer_and_its_Negative

Theorem
Let $a \in \Z$ be an integer.
Then:

$\gcd \set {a, -a} = \size a$
where:

$\gcd$ denotes greatest common divisor
$\size a$ denotes the absolute value of $a$.


Proof
From Integer Divisor Results, the divisors of $a$ include $a$ itself.
From Integer Divides its Negative, $a \divides \paren {-a}$.
Thus we have:

$a \divides a$
and:

$a \divides -a$
and so:

$\gcd \set {a, -a} \ge \size a$

From Absolute Value of Integer is not less than Divisors, there is no divisor of $a$ which is greater than $a$.
That is:

$\gcd \set {a, -a} \le \size a$

Hence the result.
$\blacksquare$





