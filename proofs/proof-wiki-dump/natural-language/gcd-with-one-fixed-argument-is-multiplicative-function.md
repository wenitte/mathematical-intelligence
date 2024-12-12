# 

Source: https://proofwiki.org/wiki/GCD_with_One_Fixed_Argument_is_Multiplicative_Function

Theorem
Let:

$a, b, c \in \Z: b \perp c$
where $b \perp c$ denotes that $b$ is coprime to $c$.

Then:

$\gcd \set {a, b} \gcd \set {a, c} = \gcd \set {a, b c}$
That is, GCD is multiplicative.


Proof













\(\ds \gcd \set {a, b c}\)

\(=\)







\(\ds \gcd \set {a, \lcm \set {b, c} }\)





LCM equals Product iff Coprime














\(\ds \)

\(=\)







\(\ds \lcm \set {\gcd \set {a, b}, \gcd \set {a, c} }\)





GCD and LCM Distribute Over Each Other














\(\ds \)

\(=\)







\(\ds \frac {\gcd \set {a, b} \gcd \set {a, c} } {\gcd \set {\gcd \set {a, b}, \gcd \set {a, c} } }\)





Product of GCD and LCM














\(\ds \)

\(=\)







\(\ds \frac {\gcd \set {a, b} \gcd \set {a, c} } {\gcd \set {a, \gcd \set {b, \gcd \set {a, c} } } }\)





Greatest Common Divisor is Associative














\(\ds \)

\(=\)







\(\ds \frac {\gcd \set {a, b} \gcd \set {a, c} } {\gcd \set {a, \gcd \set {\gcd \set {b, c}, a} } }\)





Greatest Common Divisor is Associative














\(\ds \)

\(=\)







\(\ds \frac {\gcd \set {a, b} \gcd \set {a, c} } {\gcd \set {a, \gcd \set {1, a} } }\)





Definition of Coprime Integers














\(\ds \)

\(=\)







\(\ds \frac {\gcd \set {a, b} \gcd \set {a, c} } {\gcd \set {a, 1} }\)




















\(\ds \)

\(=\)







\(\ds \frac {\gcd \set {a, b} \gcd \set {a, c} } 1\)




















\(\ds \)

\(=\)







\(\ds \gcd \set {a, b} \gcd \set {a, c}\)









$\blacksquare$





