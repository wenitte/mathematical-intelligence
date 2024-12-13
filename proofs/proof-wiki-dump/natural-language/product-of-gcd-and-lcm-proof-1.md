# 

Source: https://proofwiki.org/wiki/Product_of_GCD_and_LCM/Proof_1

Theorem
$\lcm \set {a, b} \times \gcd \set {a, b} = \size {a b}$
where:

$\lcm \set {a, b}$ denotes the lowest common multiple of $a$ and $b$
$\gcd \set {a, b}$ denotes the greatest common divisor of $a$ and $b$.


Proof
It is sufficient to prove that $\lcm \set {a, b} \times \gcd \set {a, b} = a b$, where $a, b \in \Z_{>0}$.














\(\ds d\)

\(=\)







\(\ds \gcd \set {a, b}\)














\(\ds \leadsto \ \ \)





\(\ds d\)

\(\divides\)







\(\ds a b\)














\(\ds \leadsto \ \ \)

\(\ds \exists n \in \Z_{>0}: \, \)



\(\ds a b\)

\(=\)







\(\ds d n\)
























\(\ds d \divides a\)

\(\land\)







\(\ds d \divides b\)














\(\ds \leadsto \ \ \)

\(\ds \exists u, v \in \Z: \, \)



\(\ds a = d u\)

\(\land\)







\(\ds b = d v\)














\(\ds \leadsto \ \ \)





\(\ds d u b = d n\)

\(\land\)







\(\ds a d v = d n\)














\(\ds \leadsto \ \ \)





\(\ds n = b u\)

\(\land\)







\(\ds n = a v\)














\(\ds \leadsto \ \ \)





\(\ds a \divides n\)

\(\land\)







\(\ds b \divides n\)










Now we have:

$a \divides m \land b \divides m \implies m = a r = b s$
Also, by Bézout's Identity we have:

$d = a x + b y$
So:














\(\ds m d\)

\(=\)







\(\ds a x m + b y m\)




















\(\ds \)

\(=\)







\(\ds b s a x + a r b y\)




















\(\ds \)

\(=\)







\(\ds a b \paren {s x + r y}\)




















\(\ds \)

\(=\)







\(\ds d n \paren {s x + r y}\)










So:

$m = n \paren {s x + r y}$
Thus:

$n \divides m \implies n \le \size m$
while:

$a b = d n = \gcd \set {a, b} \times \lcm \set {a, b}$
as required.
$\blacksquare$





