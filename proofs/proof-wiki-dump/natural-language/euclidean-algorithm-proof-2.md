# 

Source: https://proofwiki.org/wiki/Euclidean_Algorithm/Proof_2



Algorithm
The Euclidean algorithm is a method for finding the greatest common divisor (GCD) of two integers $a$ and $b$.

Let $a, b \in \Z$ and $a \ne 0 \lor b \ne 0$.
The steps are:

$(1): \quad$ Start with $\tuple {a, b}$ such that $\size a \ge \size b$. If $b = 0$ then the task is complete and the GCD is $a$.
$(2): \quad$ If $b \ne 0$ then you take the remainder $r$ of $\dfrac a b$.
$(3): \quad$ Set $a \gets b, b \gets r$ (and thus $\size a \ge \size b$ again).
$(4): \quad$ Repeat these steps until $b = 0$.
Thus the GCD of $a$ and $b$ is the value of the variable $a$ after the termination of the algorithm.


Proof
Suppose $a, b \in \Z$ and $a \lor b \ne 0$.
Let $d = \gcd \set {a, b}$.
By definition of common divisor:

$d \divides a$
and:

$d \divides b$
Hence from Common Divisor Divides Integer Combination:

$d \divides \paren {a - q b}$
That is:

$d \divides r$
Thus $d$ is a common divisor of $b$ and $r$.

Let $c$ be an arbitrary common divisor of $b$ and $r$.
Then:

$c \divides \paren {q b + r}$
That is:

$c \divides a$
Thus $c$ is a common divisor of $a$ and $b$.
Hence by definition of GCD:

$c \le d$
Hence, again by definition of GCD:
$d = \gcd \set {b, r}$

Then we work down the system of equations:














\(\ds \gcd \set {a, b}\)

\(=\)







\(\ds \gcd \set {b, r_1}\)




















\(\ds \)

\(=\)







\(\ds \gcd \set {r_1, r_2}\)




















\(\ds \)

\(=\)







\(\ds \cdots\)




















\(\ds \)

\(=\)







\(\ds \gcd \set {r_{n - 1}, r_n}\)




















\(\ds \)

\(=\)







\(\ds \gcd \set {r_n, 0}\)




















\(\ds \)

\(=\)







\(\ds r_n\)









$\blacksquare$


Source of Name
This entry was named for Euclid.


Sources
1980: David M. Burton: Elementary Number Theory (revised ed.) ... (previous) ... (next): Chapter $2$: Divisibility Theory in the Integers: $2.3$ The Euclidean Algorithm




