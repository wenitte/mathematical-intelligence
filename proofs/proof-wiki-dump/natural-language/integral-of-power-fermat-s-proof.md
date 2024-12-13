# 

Source: https://proofwiki.org/wiki/Integral_of_Power/Fermat%27s_Proof



Theorem
$\ds \forall n \in \Q_{>0}: \int_0^b x^n \rd x = \frac {b^{n + 1} } {n + 1}$


Proof
First let $n$ be a positive integer.
Take a real number $r \in \R$ such that $0 < r < 1$ but reasonably close to $1$.
Consider a subdivision $S$ of the closed interval $\closedint 0 b$ defined as:

$S = \set {0, \ldots, r^2 b, r b, b}$
that is, by taking as the points of subdivision successive powers of $r$.

Now we take the upper Darboux sum $\map U S$ over $S$ (starting from the right):














\(\ds \map U S\)

\(=\)







\(\ds b^n \paren {b - r b} + \paren {r b}^n \paren {r b - r^2 b} + \paren {r^2 b}^n \paren {r^2 b - r^3 b} + \cdots\)




















\(\ds \)

\(=\)







\(\ds b^{n + 1} \paren {1 - r} + b^{n + 1} r^{n + 1} \paren {1 - r} + b^{n + 1} r^{2 n + 2} \paren {1 - r} + \cdots\)




















\(\ds \)

\(=\)







\(\ds b^{n + 1} \paren {1 - r} \paren {1 + r^{n + 1} + r^{\paren {n + 1}^2} + \cdots}\)




















\(\ds \)

\(=\)







\(\ds \frac {b^{n + 1} \paren {1 - r} } {1 - r^{n + 1} }\)





Sum of Geometric Sequence














\(\ds \)

\(=\)







\(\ds \frac {b^{n + 1} } {1 + r + r^2 + \cdots + r^n}\)









Now we let $r \to 1$ and see that each of the terms on the bottom also approach $1$.
Thus:

$\ds \lim_{r \mathop \to 1} S = \frac {b^{n + 1} } {n + 1}$
That is:

$\ds \int_0^b x^n \rd x = \frac {b^{n + 1} } {n + 1}$
for every positive integer $n$.

Now assume $n = \dfrac p q$ be a strictly positive rational number.
We set $s = r^{1/q}$ and proceed:














\(\ds \frac {1 - r} {1 - r^{n + 1} }\)

\(=\)







\(\ds \frac {1 - s^q} {1 - \paren {s^q}^{p / q + 1} }\)




















\(\ds \)

\(=\)







\(\ds \frac {1 - s^q} {1 - s^{p + q} }\)




















\(\ds \)

\(=\)







\(\ds \frac {\paren {1 - s^q} / \paren {1 - s} } {\paren {1 - s^{p + q} } / \paren {1 - s} }\)




















\(\ds \)

\(=\)







\(\ds \frac {1 + s + s^2 + \cdots + s^{q - 1} }{1 + s + s^2 + \cdots + s^{p + q - 1} }\)









As $r \to 1$ we have $s \to 1$ and so that last expression shows:














\(\ds \frac {1 - r} {1 - r^{n + 1} }\)

\(\to\)







\(\ds \frac q {p + q}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {p / q + 1}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {n + 1}\)









So the expression for the main result still holds for rational $n$.
$\blacksquare$


Historical Note
The integral of a power for rational power was used by Fermat, and predated the work done by Newton and Leibniz by a considerable period.


Sources
1992: George F. Simmons: Calculus Gems ... (previous) ... (next): Chapter $\text {B}.5$: Fermat's Calculation of $\int_0^b x^n \rd x$ for Positive Rational $n$




