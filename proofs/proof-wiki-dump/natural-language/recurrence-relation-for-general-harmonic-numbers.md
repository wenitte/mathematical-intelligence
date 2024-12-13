# 

Source: https://proofwiki.org/wiki/Recurrence_Relation_for_General_Harmonic_Numbers

Theorem
$\harm r x = \harm r {x - 1} + \dfrac 1 {x^r}$
where:

$\harm r x$ denotes the general harmonic number of order $r$ evaluated at $x$.


Proof













\(\ds \harm r x\)

\(=\)







\(\ds \sum_{k \mathop = 1}^{\infty} \paren {\frac 1 {k^r} - \frac 1 {\paren {k + x}^r} }\)





Definition of General Harmonic Numbers














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^{\infty} \paren {\frac 1 {k^r} - \frac 1 {\paren {k + x}^r} } - \dfrac 1 {x^r} + \dfrac 1 {x^r}\)





add $0$














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^{\infty} \paren {\frac 1 {k^r} - \frac 1 {\paren {\paren {k - 1} + x }^r} } + \dfrac 1 {x^r}\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^{\infty} \paren {\frac 1 {k^r} - \frac 1 {\paren {k + \paren {x - 1} }^r} } + \dfrac 1 {x^r}\)




















\(\ds \)

\(=\)







\(\ds \harm r {x - 1} + \dfrac 1 {x^r}\)









$\blacksquare$


Also see
Recurrence Relation for Digamma Function
Recurrence Relation for Polygamma Function




