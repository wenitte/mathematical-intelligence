# 

Source: https://proofwiki.org/wiki/GCD_with_Remainder

Theorem
Let $a, b \in \Z$.
Let $q, r \in \Z$ such that $a = q b + r$.
Then:

$\gcd \set {a, b} = \gcd \set {b, r}$
where $\gcd \set {a, b}$ is the greatest common divisor of $a$ and $b$.


Proof













\(\ds \)

\(\)







\(\ds \gcd \set {a, b} \divides a \land \gcd \set {a, b} \divides b\)





Definition of Greatest Common Divisor of Integers








\(\ds \leadsto \ \ \)





\(\ds \)

\(\)







\(\ds \gcd \set {a, b} \divides \paren {a - q b}\)





Common Divisor Divides Integer Combination








\(\ds \leadsto \ \ \)





\(\ds \)

\(\)







\(\ds \gcd \set {a, b} \divides r\)





as $r = a - q b$








\(\ds \leadsto \ \ \)





\(\ds \)

\(\)







\(\ds \gcd \set {a, b} \le \gcd \set {b, r}\)





Definition of Greatest Common Divisor of Integers




The argument works the other way about:














\(\ds \)

\(\)







\(\ds \gcd \set {b, r} \divides b \land \gcd \set {b, r} \divides r\)





Definition of Greatest Common Divisor of Integers








\(\ds \leadsto \ \ \)





\(\ds \)

\(\)







\(\ds \gcd \set {b, r} \divides \paren {q b + r}\)





Common Divisor Divides Integer Combination








\(\ds \leadsto \ \ \)





\(\ds \)

\(\)







\(\ds \gcd \set {b, r} \divides a\)





as $a = q b + r$








\(\ds \leadsto \ \ \)





\(\ds \)

\(\)







\(\ds \gcd \set {b, r} \le \gcd \set {a, b}\)





Definition of Greatest Common Divisor of Integers




Thus:

$\gcd \set {a, b} = \gcd \set {b, r}$
$\blacksquare$


Sources
1980: David M. Burton: Elementary Number Theory (revised ed.) ... (previous) ... (next): Chapter $2$: Divisibility Theory in the Integers: $2.3$ The Euclidean Algorithm




