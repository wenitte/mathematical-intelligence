# 

Source: https://proofwiki.org/wiki/Rational_Root_Theorem

Theorem
Let $\map P x$ be a polynomial whose coefficients are all integers:

$\map P x = a_n x^n + a_{n - 1} x^{n - 1} + \cdots + a_1 x + a_0$
where $a_n \ne 0$ and $a_0 \ne 0$.
Let the polynomial equation $\map P x = 0$ have a root which is a rational number expressed in canonical form as $\dfrac p q$.
Then:

the leading coefficent $a_n$ of $\map P x$ is divisible by $q$
the constant term $a_0$ of $\map P x$ is divisible by $p$.


Proof
Recall the definition of Canonical Form of Rational Number:
Let $r \in \Q$ be a rational number.
The canonical form of $r$ is the expression $\dfrac p q$, where:

$r = \dfrac p q: p \in \Z, q \in \Z_{>0}, p \perp q$
where $p \perp q$ denotes that $p$ and $q$ have no common divisor except $1$.

We have by hypothesis that $\dfrac p q$ is a root of $P$.
Hence:














\(\ds \map P {\dfrac p q}\)

\(=\)







\(\ds 0\)





Definition of Root of Polynomial








\(\ds \leadsto \ \ \)





\(\ds 0\)

\(=\)







\(\ds a_n \paren {\dfrac p q}^n + a_{n - 1} \paren {\dfrac p q}^{n - 1} + \cdots + a_1 \paren {\dfrac p q} + a_0\)





Definition of $P$




\(\text {(1)}: \quad\)









\(\ds \)

\(=\)







\(\ds a_n p^n + a_{n - 1} p^{n - 1} q + \cdots + a_1 p q^{n - 1} + a_0 q^n\)





multiplying both sides by $q^n$








\(\ds \leadsto \ \ \)





\(\ds -a_0 q^n\)

\(=\)







\(\ds a_n p^n + a_{n - 1} p^{n - 1} q + \cdots + a_1 p q^{n - 1}\)





subtracting $a_0 q^n$ from both sides














\(\ds \)

\(=\)







\(\ds p \paren {a_n p^{n - 1} + a_{n - 1} p^{n - 2} q + \cdots + a_1 q^{n - 1} }\)





Distributive Laws of Arithmetic




By the closure of addition and multiplication over the integers:

$a_n p^{n - 1} + a_{n - 1} p^{n - 2} q + \cdots + a_1 q^{n - 1} \in \Z$
By Euclid's Lemma, either:

$p \divides q^n$
or:

$p \divides a_0$
where $\divides$ denotes divisibility.
Because $p \nmid q$ we have that:

$p \nmid q^n$
Hence:

$p \divides a_0$
$\Box$

Then:














\(\ds 0\)

\(=\)







\(\ds a_n p^n + a_{n - 1} p^{n - 1} q + \cdots + a_1 p q^{n - 1} + a_0 q^n\)





from $(1)$








\(\ds \leadsto \ \ \)





\(\ds -a_n p^n\)

\(=\)







\(\ds q \paren {a_{n - 1} p^{n - 1} + \cdots + a_1 p q^{n - 2} + a_0 q^{n - 1} }\)










Using the same argument as for $p \divides a_0$, it follows that:

$q \divides a_n$
$\blacksquare$


Sources
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): rational root theorem
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): rational root theorem




