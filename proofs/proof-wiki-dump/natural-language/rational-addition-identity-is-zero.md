# 

Source: https://proofwiki.org/wiki/Rational_Addition_Identity_is_Zero

Theorem
The identity of rational number addition is $0$:

$\exists 0 \in \Q: \forall a \in \Q: a + 0 = a = 0 + a$


Proof
From the definition, the field $\struct {\Q, +, \times}$ of rational numbers is the field of quotients of the integral domain $\struct {\Z, +, \times}$ of integers.
From Zero of Inverse Completion of Integral Domain, for any $k \in \Z^*$, the element $\dfrac {0_D} k$ of $\Q$ serves as the zero of $\struct {\Q, +, \times}$.

Hence $\dfrac 0 k$ is the identity for $\left({\Q, +}\right)$:














\(\ds \frac a b + \frac 0 k\)

\(=\)







\(\ds \frac {a \times k + b \times 0} {b \times k}\)




















\(\ds \)

\(=\)







\(\ds \frac {a \times k} {b \times k}\)




















\(\ds \)

\(=\)







\(\ds \frac a b\)





Equal Elements of Field of Quotients



Similarly for $\dfrac 0 k + \dfrac a b$.

Next we note that it is a zero:














\(\ds \frac a b \times \frac 0 k\)

\(=\)







\(\ds \frac {a \times 0} {b \times k}\)




















\(\ds \)

\(=\)







\(\ds \frac 0 {b \times k}\)




















\(\ds \)

\(=\)







\(\ds \frac {0 \times b} {k \times b}\)




















\(\ds \)

\(=\)







\(\ds \frac 0 k\)





Equal Elements of Field of Quotients




Hence we define the zero of $\struct {\Q, +, \times}$ as $0$ and identify it with the set of all elements of $\Q$ of the form $\dfrac 0 k$ where $k \in \Z^*$.
$\blacksquare$





