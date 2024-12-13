# 

Source: https://proofwiki.org/wiki/Rational_Power_is_of_Exponential_Order_Epsilon

Theorem
Let $r = \dfrac p q$ be a rational number, with $p, q \in \Z: q \ne 0, r > 0$.

Then: 

$t \mapsto t^r$
is of exponential order $\epsilon$ for any  $\epsilon > 0$ arbitrarily small in magnitude.


Proof
Write $t^r = t^{p/q}$, and set $t > 1$.














\(\ds t^{p/q}\)

\(<\)







\(\ds K e^{a t}\)





an Ansatz








\(\ds \impliedby \ \ \)





\(\ds t^p\)

\(<\)







\(\ds \paren {K e^{a t} }^q\)





Rational Power is Strictly Increasing














\(\ds \)

\(=\)







\(\ds K^q e^{q a t}\)





Exponential of Product














\(\ds \)

\(=\)







\(\ds K' e^{a' t}\)





$K^q = K', q a = a'$



Recall from Polynomial is of Exponential Order Epsilon, $t^p < K'e^{a't}$ for any $a' > 0$, arbitrarily small in magnitude.
Therefore the inequality $t^{p/q} < K e^{a t}$ has solutions of the same nature.
$\blacksquare$





