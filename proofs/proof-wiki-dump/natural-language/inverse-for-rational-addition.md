# 

Source: https://proofwiki.org/wiki/Inverse_for_Rational_Addition

Theorem
Each element $x$ of the set of rational numbers $\Q$ has an inverse element $-x$ under the operation of rational number addition:

$\forall x \in \Q: \exists -x \in \Q: x + \paren {-x} = 0 = \paren {-x} + x$


Proof
Let $x = \dfrac a b$ where $b \ne 0$.
We take the definition of rational numbers as the field of quotients of the integral domain $\struct {\Z, +, \times}$ of integers.
From Existence of Field of Quotients, we have that the inverse of $\dfrac a b$ for $+$ is $\dfrac {-a} b$:














\(\ds \frac a b + \frac {-a} b\)

\(=\)







\(\ds \frac {a \times b + b \times \paren {-a} } {b \times b}\)




















\(\ds \)

\(=\)







\(\ds \frac {b \times \paren {a + \paren {-a} } } {b \times b}\)




















\(\ds \)

\(=\)







\(\ds \frac {b \times 0} {b \times b}\)




















\(\ds \)

\(=\)







\(\ds \frac 0 {b \times b}\)




















\(\ds \)

\(=\)







\(\ds 0\)





Rational Addition Identity is Zero




From Negative of Division Product, we have that:

$-\dfrac a b = \dfrac {-a} b = \dfrac a {-b}$
So $\dfrac a b$ has a unique and unambiguous inverse for $+$.
$\blacksquare$





