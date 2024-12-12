# 

Source: https://proofwiki.org/wiki/Complex_General_Harmonic_Numbers_extend_Integer_version



Theorem
The following definitions of the concept of General Harmonic Numbers are equivalent:

Valid over Integers
Let $r \in \R_{>0}$.
For $n \in \N_{> 0}$ the harmonic numbers order $r$ are defined as follows:

$\ds \map {H^{\paren r} } n = \sum_{k \mathop = 1}^n \frac 1 {k^r}$
Complex Extension
Let $r \in \R_{>0}$.
For $z \in \C \setminus \Z_{< 0}$ the harmonic numbers order $r$ can be extended to the complex plane as:

$\ds \harm r z = \sum_{k \mathop = 1}^{\infty} \paren {\frac 1 {k^r} - \frac 1 {\paren {k + z}^r} }$


Proof
For $x \in \C$ the harmonic numbers order $r$ are defined as follows:

$\ds \harm r x = \sum_{k \mathop = 1}^\infty \paren {\frac 1 {k^r} - \frac 1 {\paren {k + x}^r} }$













\(\ds \harm r x\)

\(=\)







\(\ds \sum_{k \mathop = 1}^\infty \paren {\dfrac 1 {k^r} - \dfrac 1 {\paren {k + x}^r} }\)





Let $x \in \Z_{>0} $














\(\ds \)

\(=\)







\(\ds \paren {\dfrac 1 {1^r} - \dfrac 1 {\paren {1 + x}^r} } + \paren {\dfrac 1 {2^r} - \dfrac 1 {\paren {2 + x}^r} } + \cdots\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^x \frac 1 {k^r}\)




















\(\ds \)

\(=\)







\(\ds \harm r x\)









$\blacksquare$





