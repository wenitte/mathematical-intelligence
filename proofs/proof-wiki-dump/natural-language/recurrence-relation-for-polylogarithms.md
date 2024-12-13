# 

Source: https://proofwiki.org/wiki/Recurrence_Relation_for_Polylogarithms

Theorem
$\ds \map {\Li_{s + 1} } z = \int_0^z \dfrac {\map {\Li_s} t} t \rd t$
where:

$\map {\Li_s} z$ denotes the polylogarithm.


Proof













\(\ds \int_0^z \dfrac {\map {\Li_s} t} t \rd t\)

\(=\)







\(\ds \int_0^z \frac 1 t \times \sum_{n \mathop = 1}^\infty \frac {t^n} {n^s} \rd t\)





Definition of Polylogarithm














\(\ds \)

\(=\)







\(\ds \int_0^z \sum_{n \mathop = 1}^\infty \frac {t^{n - 1} } {n^s} \rd t\)





Quotient of Powers














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \int_0^z \frac {t^{n - 1} } {n^s} \rd t\)





Fubini's Theorem














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \intlimits {\frac {t^n} {n^{s + 1} } } 0 z\)





Primitive of Power














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \frac {z^n} {n^{s + 1} }\)




















\(\ds \)

\(=\)







\(\ds \map {\Li_{s + 1} } z\)





Definition of Polylogarithm



$\blacksquare$





