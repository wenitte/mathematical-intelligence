# 

Source: https://proofwiki.org/wiki/Existence_of_Greatest_Common_Divisor



Theorem
Let $a, b \in \Z$ be integers such that $a \ne 0$ or $b \ne 0$.
Then the greatest common divisor of $a$ and $b$ exists.


Proof 1
Proof of Existence
This is proved in Greatest Common Divisor is at least $1$.
$\Box$


Proof of there being a Largest
Without loss of generality, suppose $a \ne 0$.
First we note that from Absolute Value of Integer is not less than Divisors:

$\forall c \in \Z: \forall a \in \Z_{>0}: c \divides a \implies c \le \size c \le \size a$
The same applies for $c \divides b$.

Now we have three different results depending on $a$ and $b$:














\(\ds a \ne 0 \land b \ne 0\)

\(\implies\)







\(\ds \gcd \set {a, b} \le \min \set {\size a, \size b}\)




















\(\ds a = 0 \lor b = 0\)

\(\implies\)







\(\ds \gcd \set {a, b} = \max \set {\size a, \size b}\)




















\(\ds a = b = 0\)

\(\implies\)







\(\ds \forall x \in \Z: x \divides a \land x \divides b\)










So if $a$ and $b$ are both zero, then any $n \in \Z$ divides both, and there is no greatest common divisor.
This is why the proviso that $a \ne 0 \lor b \ne 0$.

So we have proved that common divisors exist and are bounded above.
Therefore, from Set of Integers Bounded Above by Integer has Greatest Element there is always a greatest common divisor.
$\blacksquare$


Proof 2
By definition of greatest common divisor, we aim to show that there exists $c \in \Z_{>0}$ such that:














\(\ds c\)

\(\divides\)







\(\ds a\)




















\(\ds c\)

\(\divides\)







\(\ds b\)









and:

$d \divides a, d \divides b \implies d \divides c$

Consider the set $S$:

$S = \set {s \in \Z_0: \exists x, y \in \Z: s = a x + b y}$
$S$ is not empty, because by setting $x = 1$ and $y = 0$ we have at least that $a \in S$.
From the Well-Ordering Principle, there exists a smallest $c \in S$.

So, by definition, we have $c > 0$ is the smallest such that $c = a x + b y$ for some $x, y \in \Z$.
Let $d$ be such that $d \divides a$ and $d \divides b$.
Then from Common Divisor Divides Integer Combination:

$d \divides a x + b y$
That is:

$d \divides c$
We have that:










\(\ds \exists t, u \in \Z: \, \)



\(\ds a\)

\(=\)







\(\ds c t + u:\)

\(\ds 0 \le u < c\)



Division Theorem








\(\ds \leadsto \ \ \)





\(\ds a\)

\(=\)







\(\ds a x t + b y t + u\)





Definition of $c$








\(\ds \leadsto \ \ \)





\(\ds u\)

\(=\)







\(\ds r \paren {1 - x t} + b \paren {-y t}\)





rearranging








\(\ds \leadsto \ \ \)





\(\ds u\)

\(=\)







\(\ds 0\)





as $u < c$ and the definition of $c$








\(\ds \leadsto \ \ \)





\(\ds c\)

\(\divides\)







\(\ds a\)





Definition of Divisor of Integer



Mutatis mutandis:

$c \divides b$

Now suppose $c'$ is such that:














\(\ds c'\)

\(\divides\)







\(\ds a\)




















\(\ds c'\)

\(\divides\)







\(\ds b\)









and:

$d \divides a, d \divides b \implies d \divides c'$
Then we have immediately that:

$c' \divides c$
and by the same coin:
$c \divides c'$
and so:

$c = c'$
demonstrating that $c$ is unique.
$\blacksquare$


Proof 3
From Integers form Integral Domain, we have that $\Z$ is an integral domain.
From Euclidean Domain is GCD Domain, $a$ and $b$ have a greatest common divisor $c$.
This proves existence.

From Ring of Integers is Principal Ideal Domain, we have that $\Z$ is a principal ideal domain.
Suppose $c$ and $c'$ are both greatest common divisors of $a$ and $b$.
From Greatest Common Divisors in Principal Ideal Domain are Associates:

$c \divides c'$
and:

$c' \divides c$
and the proof is complete.
$\blacksquare$


Proof 4
From the Euclidean Algorithm, we have calculated a sequence $\tuple {r_1, r_2, \ldots r_{n - 2}, r_{n - 1}, r_n}$ such that:

$b > r_1 > r_2 > \dotsb > r_{n - 2} > r_{n - 1} > r_n = 0$
We have that:

$r_{n - 1} \divides a$
and:

$r_{n - 1} \divides b$
Working backwards from the final equation, we see that:

$r_k \divides r{k - 1}$
for all $k$ such that $1 < k \le n$.
Hence, if $d \divides a$ and $d \divides b$, we can use induction to proceed through the Euclidean Algorithm and see that $d$ divides $r_1, r_2, \ldots, r_{n - 2}, r_{n - 1}$.
Thus we see that $r_{n - 1}$ fulfils the criteria to be the greatest common divisor of $a$ and $b$.
$\Box$

Suppose $c_1$ and $c_2$ are both greatest common divisors of $a$ and $b$.
Then by definition there exist $g, h \in \Z_{>0}$ such that:

$g c_1 = c_2$
$h c_2 = c_1$
Hence:

$c_2 = g h c_2$
and so:

$g h = 1$
That is:

$g = h = 1$
and so:

$c_1 = c_2$
That is, the greatest common divisor of $a$ and $b$ is unique.
$\blacksquare$





