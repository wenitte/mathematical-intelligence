# 

Source: https://proofwiki.org/wiki/360_divides_a%5E2_(a%5E2_-_1)_(a%5E2_-_4)

Theorem
Let $a \in \Z$ be an integer.

Then:

$360 \divides a^2 \paren {a^2 - 1} \paren {a^2 - 4}$
where $\divides$ denotes divisibility.


Proof
By Difference of Two Squares:

$a^2 \paren {a^2 - 1} \paren {a^2 - 4} = a \paren {a - 2} \paren {a - 1} a \paren {a + 1} \paren {a + 2}$
We have that $a - 2, a - 1, a, a + 1, a + 2$ are $5$ consecutive integers.
Hence from Product of 5 Consecutive Integers is Divisible by 120:

$120 \divides a \paren {a^2 - 1} \paren {a^2 - 4}$
and so:

$120 \divides a^2 \paren {a^2 - 1} \paren {a^2 - 4}$

As $120 = 2^3 \cdot 3 \cdot 5$, it suffices to show that

$9 \divides a^2 \paren {a^2 - 1} \paren {a^2 - 4}$
Consider the following 3 cases.
If $a \in 3 \Z$, then $9 \divides a^2$.
If $a \in 3 \Z + 1$, then $a-1, a+2 \in 3 \Z$, so that $9 \divides \paren {a-1} \paren {a+2}$.
If $a \in 3 \Z + 2$, then $a-2, a+1 \in 3 \Z$, so that $9 \divides \paren {a-2} \paren {a+1}$.
$\blacksquare$


Sources
1980: David M. Burton: Elementary Number Theory (revised ed.) ... (previous) ... (next): Chapter $2$: Divisibility Theory in the Integers: $2.2$ The Greatest Common Divisor: Problems $2.2$: $15 \ \text {(d)}$




