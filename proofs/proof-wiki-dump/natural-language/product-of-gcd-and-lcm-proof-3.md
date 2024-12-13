# 

Source: https://proofwiki.org/wiki/Product_of_GCD_and_LCM/Proof_3

Theorem
$\lcm \set {a, b} \times \gcd \set {a, b} = \size {a b}$
where:

$\lcm \set {a, b}$ denotes the lowest common multiple of $a$ and $b$
$\gcd \set {a, b}$ denotes the greatest common divisor of $a$ and $b$.


Proof
Let $d := \gcd \set {a, b}$. 
Then by definition of the GCD, there exist $j_1, j_2 \in \Z$ such that $a = d j_1$ and $b = d j_2$.
Because $d$ divides both $a$ and $b$, it must divide their product:

$\exists l \in \Z$ such that $a b = d l$
Then we have: 














\(\ds d l\)

\(=\)

\(\, \ds \paren {d j_1} b \, \)

\(\, \ds = \, \)



\(\ds a \paren {d j_2}\)














\(\ds \leadsto \ \ \)





\(\ds l\)

\(=\)

\(\, \ds j_1 b \, \)

\(\, \ds = \, \)



\(\ds a j_2\)









showing that $a \divides l$ and $b \divides l$.
That is, $l$ is a common multiple of $a$ and $b$.

Now it must be shown that $l$ is the least such number.
Let $m$ be any common multiple of $a$ and $b$.
Then there exist $k_1, k_2 \in \Z$ such that $m = a k_1 = b k_2$.
By Bézout's Identity:

$\exists x, y \in \Z: d = a x + b y$
So:














\(\ds m d\)

\(=\)







\(\ds m a x + m b y\)




















\(\ds \)

\(=\)







\(\ds \paren {b k_2} a x + \paren {a k_1} b y\)




















\(\ds \)

\(=\)







\(\ds a b \paren {b k_2 + a k_1}\)




















\(\ds \)

\(=\)







\(\ds d l \paren {b k_2 + a k_1}\)









Thus:

$m = l \paren {b k_2 + a k_1}$
that is, $l \divides m$.
Hence by definition of the LCM:

$\lcm \set {a, b} = l$
In conclusion:

$a b = d l = \gcd \set {a, b} \cdot \lcm \set {a, b}$
$\blacksquare$





