# 

Source: https://proofwiki.org/wiki/Legendre%27s_Theorem



Theorem
Let $n \in \Z_{>0}$ be a (strictly) positive integer.
Let $p$ be a prime number.
Let $n$ be expressed in base $p$ representation.
Let $r$ be the digit sum of the representation of $n$ in base $p$.

Then $n!$ is divisible by $p^\mu$ but not by $p^{\mu + 1}$, where:

$\mu = \dfrac {n - r} {p - 1}$


Corollary
Let $n \in \Z_{>0}$ be a (strictly) positive integer.
Let $B$ be the binary representation of $n$.
Let $r$ be the number of unit digits in $B$.
Let $n!$ denote the factorial of $n$.

Then $2^{n - r}$ is a divisor of $n!$, but $2^{n - r + 1}$ is not.


Proof
$n$ can be represented as:














\(\ds n\)

\(=\)







\(\ds \sum_{j \mathop = 0}^m a_j p^j\)





where $0 \le a_j < p$














\(\ds \)

\(=\)







\(\ds a_0 + a_1 p + a_2 p^2 + \cdots + a_m p^m\)





for some $m > 0$




Using De Polignac's Formula, we may extract all the powers of $p$ from $n!$.

$\mu = \ds \sum_{k \mathop > 0} \floor {\dfrac n {p^k} }$
where $\mu$ is the multiplicity of $p$ in $n!$:

$p^\mu \divides n!$
$p^{\mu + 1} \nmid n!$

We have that:














\(\ds \floor {\dfrac {n!} p}\)

\(=\)







\(\ds \floor {\dfrac {a_0 + a_1 p + a_2 p^2 + a_3 p^3 + \cdots + a_m p^m} p}\)




















\(\ds \)

\(=\)







\(\ds a_1 + a_2 p + a_3 p^2 + \cdots + a_m p^{m - 1}\)




















\(\ds \floor {\dfrac {n!} {p^2} }\)

\(=\)







\(\ds \floor {\dfrac {a_0 + a_1 p + a_2 p^2 +  + a_2 p^2 + \cdots + a_m p^m} {p^2} }\)




















\(\ds \)

\(=\)







\(\ds a_2 + a_3 p + \cdots + a_m p^{m - 2}\)




















\(\ds \)

\(\vdots\)







\(\ds \)




















\(\ds \floor {\dfrac {n!} {p^m} }\)

\(=\)







\(\ds \floor {\dfrac {a_0 + a_1 p + a_2 p^2 +  + a_2 p^2 + \cdots + a_m p^m} {p^m} }\)




















\(\ds \)

\(=\)







\(\ds a_m\)










Thus:














\(\ds \mu\)

\(=\)







\(\ds a_m \paren {p^{m - 1} + p^{m - 2} + \cdots + p + 1}\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds a_{m - 1} \paren {p^{m - 2} + p^{m - 3} + \cdots + p + 1}\)




















\(\ds \)

\(\vdots\)







\(\ds \)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds a_2 \paren {p + 1}\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds a_1\)




















\(\ds \)

\(=\)







\(\ds a_m \paren {\dfrac {p^m - 1} {p - 1} } + a_{m - 1} \paren {\dfrac {p^{m - 1} - 1} {p - 1} }\)





Sum of Geometric Sequence














\(\ds \)

\(\vdots\)







\(\ds \)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds a_2 \paren {\dfrac {p^2 - 1} {p - 1} } + a_1 \paren {\dfrac {p^1 - 1} {p - 1} } + a_0 \paren {\dfrac {p^0 - 1} {p - 1} }\)





where the last term evaluates to $0$














\(\ds \)

\(=\)







\(\ds \dfrac {\paren {a_m p^m + a_{m - 1} p^{m - 1} + \cdots + a_2 p^2 + a_1 p + a_0} - \paren {a_m + a_{m - 1} + \cdots + a_2 + a_1 + a_0} } {p - 1}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {n - r} {p - 1}\)










Hence the result.
$\blacksquare$


Source of Name
This entry was named for Adrien-Marie Legendre.


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.5$: Permutations and Factorials: Exercise $12$




