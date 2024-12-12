# 

Source: https://proofwiki.org/wiki/Existence_of_Lowest_Common_Multiple



Theorem
Let $a, b \in \Z: a b \ne 0$.
The lowest common multiple of $a$ and $b$, denoted $\lcm \set {a, b}$, always exists.


Proof 1
We prove its existence thus:
$a b \ne 0 \implies \size {a b} \ne 0$

Also $\size {a b} = \pm a b = a \paren {\pm b} = \paren {\pm a} b$.
So the lowest common multiple definitely exists, and we can say that:

$0 < \lcm \set {a, b} \le \size {a b}$

Now we prove it is the lowest.
That is:

$a \divides n \land b \divides n \implies \lcm \set {a, b} \divides n$

Let $a, b \in \Z: a b \ne 0, m = \lcm \set {a, b}$.
Let $n \in \Z: a \divides n \land b \divides n$.
We have:

$n = x_1 a = y_1 b$
$m = x_2 a = y_2 b$

As $m > 0$, we have:














\(\ds n\)

\(=\)







\(\ds m q + r: 0 \le r < \size m = m\)














\(\ds \leadsto \ \ \)





\(\ds r\)

\(=\)







\(\ds n - m q\)




















\(\ds \)

\(=\)







\(\ds 1 \times n + \paren {-q} \times m\)














\(\ds \leadsto \ \ \)





\(\ds r\)

\(=\)







\(\ds x_1 a + \paren {-q} x_2 a\)




















\(\ds \)

\(=\)







\(\ds y_1 b + \paren {-q} y_2 b\)














\(\ds \leadsto \ \ \)





\(\ds a\)

\(\divides\)







\(\ds r\)


















\(\, \ds \land \, \)

\(\ds b\)

\(\divides\)







\(\ds r\)










Since $r < m$, and $m$ is the smallest positive common multiple of $a$ and $b$, it follows that $r = 0$.
So:

$\forall n \in \Z: a \divides n \land b \divides n: \lcm \set {a, b} \divides n$
That is, $\lcm \set {a, b}$ divides any common multiple of $a$ and $b$.
$\blacksquare$


Proof 2
Either $a$ and $b$ are coprime or they are not.
Let:

$a \perp b$
where $a \perp b$ denotes that $a$ and $b$ are coprime.
Let $a b = c$.
Then:

$a \divides c, b \divides c$
where $a \divides c$ denotes that $a$ is a divisor of $c$.
Suppose both $a \divides d, b \divides d$ for some $d \in \N_{> 0}: d < c$.
Then:

$\exists e \in \N_{> 0}: a e = d$
$\exists f \in \N_{> 0}: b f = d$
Therefore:

$a e = b f$
and from Proposition $19$ of Book $\text{VII} $: Relation of Ratios to Products:

$a : b = f : e$
But $a$ and $b$ are coprime.
From:

Proposition $21$: Coprime Numbers form Fraction in Lowest Terms
and:

Proposition $20$: Ratios of Fractions in Lowest Terms
it follows that $b \divides e$
Since:

$a b = c$
and:

$a e = d$
it follows from Proposition $17$: Multiples of Ratios of Numbers that:

$b : e = c : d$
But $b \divides e$ and therefore:

$c \divides d$
But $c > d$ which is impossible.
Therefore $a$ and $b$ are both the divisor of no number less than $c$.

Now suppose $a$ and $b$ are not coprime.
Let $f$ and $e$ be the least numbers of those which have the same ratio with $a$ and $b$.
Then from Proposition $19$: Relation of Ratios to Products:

$a e = b f$
Let $a e = c$.
Then $b f = c$.
Hence:

$a \divides c$
$b \divides c$
Suppose $a$ and $b$ are both the divisor of some number $d$ which is less than $c$.
Let:

$a g = d$
and:

$b h = d$
Therefore:

$a g = b h$
and so by Proposition $19$: Relation of Ratios to Products:

$a : b = f : e$
Also:

$f : e = h : g$
But $f, e$ are the least such.
From Proposition $20$: Ratios of Fractions in Lowest Terms:

$e \divides g$
Since $a e = c$ and $a g = d$, from Proposition $17$: Multiples of Ratios of Numbers:

$e : g = c : d$
But:

$e \divides g$
So $c \divides d$
But $c > d$ which is impossible.
Therefore $a$ and $b$ are both the divisor of no number less than $c$.
$\blacksquare$


Proof 3
Note that as Integer Divides Zero, both $a$ and $b$ are divisors of zero.
Thus by definition $0$ is a common multiple of $a$ and $b$.
Non-trivial common multiples of $a$ and $b$ exist.
Indeed, $a b$ and $-\paren {a b}$ are common multiples of $a$ and $b$.
Either $a b$ or $-\paren {a b}$ is strictly positive.
Let $S$ denote the set of strictly positive common multiples of $a$ and $b$.
By the Well-Ordering Principle, $S$ contains a smallest element.
This can then be referred to as the lowest common multiple of $a$ and $b$.
$\blacksquare$


Sources
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $1$: Properties of the Natural Numbers: $\S 23 \gamma$
1980: David M. Burton: Elementary Number Theory (revised ed.) ... (previous) ... (next): Chapter $2$: Divisibility Theory in the Integers: $2.3$ The Euclidean Algorithm




