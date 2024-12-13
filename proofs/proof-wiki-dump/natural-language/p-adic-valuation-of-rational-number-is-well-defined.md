# 

Source: https://proofwiki.org/wiki/P-adic_Valuation_of_Rational_Number_is_Well_Defined



Theorem
The $p$-adic valuation:

$\nu_p: \Q \to \Z \cup \set {+\infty}$
is well defined.


Proof
Let $\dfrac a b = \dfrac c d \in \Q$.
Thus:

$a d = b c \in \Z$

By Definition of Rational Number:

$b, d \ne 0$
By Definition of Restricted $p$-adic Valuation:

$\map {\nu_p^\Z} b, \map {\nu_p^\Z} d < +\infty$


Case 1 : $a \ne 0$
Let $a \ne 0$.
It follows:

$c \ne 0$
By Definition of Restricted $p$-adic Valuation:

$\map {\nu_p^\Z} a, \map {\nu_p^\Z} c < +\infty$

Then:














\(\ds \map {\nu_p^\Z} a + \map {\nu_p^\Z} d\)

\(=\)







\(\ds \map {\nu_p^\Z} {a d}\)





Restricted $p$-adic Valuation is Valuation: Axiom $\text V 1$














\(\ds \)

\(=\)







\(\ds \map {\nu_p^\Z} {b c}\)




















\(\ds \)

\(=\)







\(\ds \map {\nu_p^\Z} c + \map {\nu_p^\Z} b\)





Restricted $p$-adic Valuation is Valuation: Axiom $\text V 1$








\(\ds \leadsto \ \ \)





\(\ds \map {\nu_p^\Z} a - \map {\nu_p^\Z} b\)

\(=\)







\(\ds \map {\nu_p^\Z} c - \map {\nu_p^\Z} d\)









$\Box$


Case 2 : $a = 0$
Let $a = 0$.
It follows:

$c = 0$
By Definition of Restricted $p$-adic Valuation:

$\map {\nu_p^\Z} a  = \map {\nu_p^\Z} c = +\infty$

Then:














\(\ds \map {\nu_p^\Z} a - \map {\nu_p^\Z} b\)

\(=\)







\(\ds +\infty - \map {\nu_p^\Z} b\)




















\(\ds \)

\(=\)







\(\ds +\infty\)





as $\map {\nu_p^\Z} b < +\infty$














\(\ds \)

\(=\)







\(\ds +\infty - \map {\nu_p^\Z} d\)





as $\map {\nu_p^\Z} d < +\infty$














\(\ds \)

\(=\)







\(\ds \map {\nu_p^\Z} c - \map {\nu_p^\Z} d\)









$\Box$

In either case:




\(\text {(1)}: \quad\)









\(\ds \map {\nu_p^\Z} a - \map {\nu_p^\Z} b\)

\(=\)







\(\ds \map {\nu_p^\Z} c - \map {\nu_p^\Z} d\)









So:














\(\ds \map {\nu_p^\Q} {\frac a b}\)

\(=\)







\(\ds \map {\nu_p^\Z} a - \map {\nu_p^\Z} b\)





Definition of $p$-adic Valuation














\(\ds \)

\(=\)







\(\ds \map {\nu_p^\Z} c - \map {\nu_p^\Z} d\)





from $(1)$














\(\ds \)

\(=\)







\(\ds \map {\nu_p^\Q} {\dfrac c d}\)





Definition of $p$-adic Valuation




Thus, by definition, $\nu_p: \Q \to \Z \cup \set {+\infty}$ is well defined.
$\blacksquare$





