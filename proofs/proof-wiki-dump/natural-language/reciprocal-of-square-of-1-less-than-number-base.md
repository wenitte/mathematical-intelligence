# 

Source: https://proofwiki.org/wiki/Reciprocal_of_Square_of_1_Less_than_Number_Base



Theorem
Let $b \in \Z$ be an integer such that $b > 2$.
Let $n = \paren {b - 1}^2$.

The reciprocal of $n$, expressed in base $b$, recurs with period $b - 1$:

$\dfrac 1 n = \sqbrk {0 \cdotp \dot 012 \ldots c \dot d}_b = \sqbrk {0 \cdotp 012 \ldots cd012 \ldots}_b$
where:

$c = b - 3$
$d = b - 1$


Proof
By Basis Representation Theorem, the number $\sqbrk {12 \ldots cd}_b$ can be written as:














\(\ds \sqbrk {12 \ldots cd}_b\)

\(=\)







\(\ds 1 \times b^{b - 3} + 2 \times b^{b - 4} + \dots + \paren {b - 3} \times b + \paren {b - 1}\)




















\(\ds \)

\(=\)







\(\ds 1 + \sum_{k \mathop = 0}^{b - 3} \paren {b - 2 - k} b^k\)




















\(\ds \)

\(=\)







\(\ds 1 + \frac {\paren{b - 2} \paren {1 - b^{b - 2} } } {1 - b} + \frac {b \paren {1 - \paren {b - 2} b^{b - 3} + \paren {b - 3} b^{b - 2} } } {\paren {1 - b}^2}\)





Sum of Arithmetic-Geometric Sequence, taking $a = n = b - 2, d = -1, r = b$














\(\ds \)

\(=\)







\(\ds \frac {1 - 2 b + b^2 + b - 2 - b^{b - 1} + 2 b^{b - 2} - b^2 + 2 b + b^b - 2 b^{b - 1} - b + b^{b - 1} - 2 b^{b - 2} - b^b + 3 b^{b - 1} } {\paren {1 - b}^2}\)




















\(\ds \)

\(=\)







\(\ds \frac {b^{b - 1} - 1} {\paren {1 - b}^2}\)









Thus the recurring basis expansion $\sqbrk {0 \cdotp \dot 012 \ldots c \dot d}_b$ can be written as:














\(\ds \sqbrk {0 \cdotp \dot 012 \ldots c \dot d}_b\)

\(=\)







\(\ds \sqbrk {12 \ldots cd}_b \sum_{n \mathop = 1}^\infty \paren {b^{1 - b} }^n\)




















\(\ds \)

\(=\)







\(\ds \frac {b^{b - 1} - 1} {\paren {1 - b}^2} \times \frac {b^{1 - b} } {1 - b^{1 - b} }\)





Sum of Infinite Geometric Sequence














\(\ds \)

\(=\)







\(\ds \frac {b^{b - 1} - 1} {\paren {1 - b}^2} \times \frac 1 {b^{b - 1} - 1}\)





multiplying top and bottom by $b^{b - 1}$














\(\ds \)

\(=\)







\(\ds \frac 1 {\paren {1 - b}^2}\)









Hence the result.
$\blacksquare$


Examples
Reciprocal of $5^2$ in Base $6$
Expressed in base $6$, the reciprocal of $5^2$ has the expansion:

$\dfrac 1 {5^2} = \sqbrk {0 \cdotp \dot 0123 \dot 5}_6$


Reciprocal of $81$
$\dfrac 1 {81} = 0 \cdotp \dot 01234 \, 567 \dot 9$


Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $81$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $81$




