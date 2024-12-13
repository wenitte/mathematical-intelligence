# 

Source: https://proofwiki.org/wiki/Product_of_GCD_and_LCM/Proof_2

Theorem
$\lcm \set {a, b} \times \gcd \set {a, b} = \size {a b}$
where:

$\lcm \set {a, b}$ denotes the lowest common multiple of $a$ and $b$
$\gcd \set {a, b}$ denotes the greatest common divisor of $a$ and $b$.


Proof
Let $a = g m$ and $b = g n$, where $g = \gcd \set {a, b}$ and $m$ and $n$ are coprime.
The existence of $m$ and $n$ are proved by Integers Divided by GCD are Coprime.
It follows that:

$a = g m \divides g m n$
and:

$b = g n \divides g m n$
So $g m n$ is a common multiple of $a$ and $b$. 

Hence there exists an integer $g k \le g m n$ that is divisible by both $a$ and $b$.
Then:














\(\ds a\)

\(=\)







\(\ds g m\)














\(\ds \leadsto \ \ \)





\(\ds g m\)

\(\divides\)







\(\ds g k\)














\(\ds \leadsto \ \ \)





\(\ds m\)

\(\divides\)







\(\ds k\)
























\(\ds b\)

\(=\)







\(\ds g n\)














\(\ds \leadsto \ \ \)





\(\ds g n\)

\(\divides\)







\(\ds g k\)














\(\ds \leadsto \ \ \)





\(\ds n\)

\(\divides\)







\(\ds k\)










As $g k \le g m n$, it follows that:

$k \le m n$
But $m, n$ are coprime.
So:














\(\ds \map \lcm {m, n}\)

\(=\)







\(\ds m n\)














\(\ds \leadsto \ \ \)





\(\ds k\)

\(\not <\)







\(\ds m n\)














\(\ds \leadsto \ \ \)





\(\ds k\)

\(=\)







\(\ds m n\)














\(\ds \leadsto \ \ \)





\(\ds g k\)

\(=\)







\(\ds g m n\)




















\(\ds \)

\(=\)







\(\ds \map \lcm {a, b}\)














\(\ds \leadsto \ \ \)





\(\ds \lcm \set {a, b} \times \gcd \set {a, b}\)

\(=\)







\(\ds g m n \times g\)




















\(\ds \)

\(=\)







\(\ds g m \times g n\)




















\(\ds \)

\(=\)







\(\ds \size {a b}\)









$\blacksquare$





