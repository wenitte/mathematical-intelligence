# 

Source: https://proofwiki.org/wiki/Product_of_GCD_and_LCM



Theorem
$\lcm \set {a, b} \times \gcd \set {a, b} = \size {a b}$
where:

$\lcm \set {a, b}$ denotes the lowest common multiple of $a$ and $b$
$\gcd \set {a, b}$ denotes the greatest common divisor of $a$ and $b$.


Proof 1
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


Proof 2
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


Proof 3
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


Proof 4
From Fundamental Theorem of Arithmetic, let:














\(\ds m\)

\(=\)







\(\ds {p_1}^{k_1} {p_2}^{k_2} \dotsm {p_r}^{k_r}\)




















\(\ds n\)

\(=\)







\(\ds {p_1}^{l_1} {p_2}^{l_2} \dotsm {p_r}r^{l_r}\)










From LCM from Prime Decomposition:

$\lcm \set {m, n} = p_1^{\max \set {k_1, l_1} } p_2^{\max \set {k_2, l_2} } \dotsm p_r^{\max \set {k_r, l_r} }$

From GCD from Prime Decomposition:

$\gcd \set {m, n} = p_1^{\min \set {k_1, l_1} } p_2^{\min \set {k_2, l_2} } \dotsm p_r^{\min \set {k_r, l_r} }$

From Sum of Maximum and Minimum, for all $i \in \set {1, 2, \ldots, r}$:

$\min \set {k_i, l_i} + \max \set {k_i, l_i} = k_i + l_i$

Hence:














\(\ds \gcd \set {m, n} \times \lcm \set {m, n}\)

\(=\)







\(\ds p_1^{k_1 + l_1} p_2^{k_2 + l_2} \dotsm p_r^{k_r + l_r}\)




















\(\ds \)

\(=\)







\(\ds p_1^{k_1} p_1^{l_1} p_2^{k_2} p_2^{l_2} \dotsm p_r^{k_r} p_r^{l_r}\)




















\(\ds \)

\(=\)







\(\ds p_1^{k_1} p_2^{k_2} \dotsm p_r^{k_r} \times p_1^{l_1} p_2^{l_2} \dotsm p_r^{l_r}\)




















\(\ds \)

\(=\)







\(\ds m n\)









$\blacksquare$


Proof 5
Let $d := \gcd \set {a, b}$. 
Then by definition of the GCD, there exist $r, s\in \Z$ such that $a = d r$ and $b = d s$.
Let $m = \dfrac {a b} d$.
Then:

$m = a s = r b$
which makes $m$ a common multiple of $a$ and $b$.

Let $c \in \Z_{>0}$ be a common multiple of $a$ and $b$.
Let us say that:

$c = a u = b v$
From Bézout's Identity:

$\exists x, y \in \Z: d = a x + b y$
Then:














\(\ds \dfrac c m\)

\(=\)







\(\ds \dfrac {c d} {a b}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {c \paren {a x + b y} } {a b}\)




















\(\ds \)

\(=\)







\(\ds \dfrac c b x + \dfrac c a y\)




















\(\ds \)

\(=\)







\(\ds v x + n y\)









That is:

$m \divides c$
where $\divides$ denotes divisibility.
So by Absolute Value of Integer is not less than Divisors:

$m \le c$
Hence by definition of the LCM:

$\lcm \set {a, b} = m$
In conclusion:

$\lcm \set {a, b} = \dfrac {a b} d = \dfrac {a b} {\gcd \set {a, b} }$
and the result follows.
$\blacksquare$


Sources
1951: Nathan Jacobson: Lectures in Abstract Algebra: Volume $\text { I }$: Basic Concepts ... (previous) ... (next): Introduction $\S 6$: The division process in $I$
1971: George E. Andrews: Number Theory ... (previous) ... (next): $\text {2-2}$ Divisibility: Exercise $4$
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $1$: Properties of the Natural Numbers: $\S 23 \gamma$




