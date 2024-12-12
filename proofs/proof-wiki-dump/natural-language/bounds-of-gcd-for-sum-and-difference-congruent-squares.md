# 

Source: https://proofwiki.org/wiki/Bounds_of_GCD_for_Sum_and_Difference_Congruent_Squares

Theorem
Let $x, y, n$ be integers.
Let:

$x \not \equiv \pm y \pmod n$
and:

$x^2 \equiv y^2 \pmod n$
where $a \equiv b \pmod n$ denotes that $a$ is congruent to $b$ modulo $n$.

Then:

$1 < \gcd \set {x - y, n} < n$
and:

$1 < \gcd \set {x + y, n} < n$
where $\gcd \set {a, b}$ is the GCD of $a$ and $b$.


Proof













\(\ds x^2\)

\(\equiv\)







\(\ds y^2\)

\(\ds \pmod n\)












\(\ds \leadsto \ \ \)





\(\ds n\)

\(\divides\)







\(\ds \paren {x^2 - y^2}\)














\(\ds \leadsto \ \ \)





\(\ds n\)

\(\divides\)







\(\ds \paren {x + y} \paren {x - y}\)














\(\ds \leadsto \ \ \)





\(\ds p\)

\(\divides\)







\(\ds \paren {x + y} \paren {x - y}\)





for all prime divisors $p$ of $n$








\(\ds \leadsto \ \ \)





\(\ds p\)

\(\divides\)







\(\ds \paren {x - y}\)


















\(\, \ds \lor \, \)

\(\ds p\)

\(\divides\)







\(\ds \paren {x + y}\)










But since $x \not \equiv -y \pmod n$, then:

$n \nmid \paren {x + y}$
and since $x \not \equiv y \pmod n$, then:

$n \nmid \paren {x - y}$
Therefore:

$\gcd \set {x - y, n} < n$
and:

$\gcd \set {x + y, n} < n$

So if $p \divides \paren {x - y}$ then:

$1 < \gcd \set {x - y, n} < n$
and also there exists $q$ such that:

$q \divides n$
$q \divides \paren {x + y}$
$1 < q \le \gcd \set {x + y, n}$

Likewise if $p \divides \paren {x + y}$ then:

$1 < \gcd \set {x + y, n} < n$
and also there exists $q$ such that:

$q \divides n$
$q \divides \paren {x - y}$
$1 < q \le \gcd \set {x - y, n}$
$\blacksquare$





