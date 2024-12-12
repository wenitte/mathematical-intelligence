# 

Source: https://proofwiki.org/wiki/Complete_Elliptic_Integral_of_the_Second_Kind_as_Power_Series

Theorem
The complete elliptic integral of the second kind:

$\ds \map E k = \int_0^{\pi / 2} \sqrt {1 - k^2 \sin^2 \phi} \, \rd \phi = \int_0^1 \dfrac {\sqrt {1 - k^2 v^2} } {\sqrt {1 - v^2}} \, \rd v$
can be expressed as the power series:














\(\ds \map E k\)

\(=\)







\(\ds \frac \pi 2 \sum_{i \mathop \ge 0} \paren {\prod_{j \mathop = 1}^i \frac {2 j - 1} { 2 j} }^2 \frac {k^{2 i} } {1 - 2 i}\)




















\(\ds \)

\(=\)







\(\ds \frac \pi 2 \paren {1 - \paren {\frac 1 2}^2 k^2 - \paren {\frac {1 \cdot 3} {2 \cdot 4} }^2 \frac {k^4} 3 - \paren {\frac {1 \cdot 3 \cdot 5} {2 \cdot 4 \cdot 6} }^2 \frac {k^6} 5 - \cdots}\)











Proof
From Reduction Formula for Integral of Power of Sine, $\forall i \in \N$:














\(\ds \int_0^{\pi / 2} \sin^{2 i} \phi \rd \phi\)

\(=\)







\(\ds \frac {2 i - 1} {2 i} \int_0^{\pi / 2} \sin^{2 i - 2} \phi \rd \phi - \intlimits {\frac {\sin^{2 i - 1} x \cos x} i} {x = 0} {x = \frac \pi 2}\)




















\(\ds \)

\(=\)







\(\ds \frac {2 i - 1} {2 i} \int_0^{\pi / 2} \sin^{2 i - 2} \phi \rd \phi\)





$\sin 0 = \cos \dfrac \pi 2 = 0$














\(\ds \)

\(=\)







\(\ds \cdots\)




















\(\ds \)

\(=\)







\(\ds \prod_{j \mathop = 1}^i \frac {2 j - 1} {2 j} \int_0^{\pi / 2} 1 \rd \phi\)




















\(\ds \)

\(=\)







\(\ds \frac \pi 2 \prod_{j \mathop = 1}^i \frac {2 j - 1} {2 j}\)









Hence:














\(\ds \map E k\)

\(=\)







\(\ds \int_0^{\pi / 2} \sqrt {1 - k^2 \sin^2 \phi} \, \rd \phi\)




















\(\ds \)

\(=\)







\(\ds \int_0^{\pi / 2} \sum_{i \mathop \ge 0} \binom {\frac 1 2} i \paren {- k^2 \sin^2 \phi}^i \rd \phi\)





General Binomial Theorem














\(\ds \)

\(=\)







\(\ds \sum_{i \mathop \ge 0} k^{2 i} \paren {\prod_{j \mathop = 1}^i \frac {\frac 3 2 - j} j} \paren {-1}^i \int_0^{\pi / 2} \sin^{2 i} \phi \rd \phi\)





Definition of Binomial Coefficient














\(\ds \)

\(=\)







\(\ds \sum_{i \mathop \ge 0} k^{2 i} \paren {\prod_{j \mathop = 1}^i \frac {3 - 2 j} {2 j} } \paren {\prod_{j \mathop = 1}^i \paren {-1} }\paren {\frac \pi 2 \prod_{j \mathop = 1}^i \frac {2 j - 1} {2 j} }\)





From above














\(\ds \)

\(=\)







\(\ds \frac \pi 2 \sum_{i \mathop \ge 0} \paren {\prod_{j \mathop = 1}^i \frac {2 j - 3} {2 j} } \paren {\prod_{j \mathop = 1}^i \frac {2 j - 1} { 2 j} } k^{2 i}\)




















\(\ds \)

\(=\)







\(\ds \frac \pi 2 + \frac \pi 2 \sum_{i \mathop \ge 1} \paren {\prod_{j \mathop = 1}^i \frac {2 j - 3} {2 j} } \paren {\prod_{j \mathop = 1}^i \frac {2 j - 1} { 2 j} } k^{2 i}\)




















\(\ds \)

\(=\)







\(\ds \frac \pi 2 + \frac \pi 2 \sum_{i \mathop \ge 1} \paren {\frac {2 - 3} {2 i - 1} } \paren {\prod_{j \mathop = 1}^i \frac {2 j - 1} { 2 j} }^2 k^{2 i}\)




















\(\ds \)

\(=\)







\(\ds \frac \pi 2 + \frac \pi 2 \sum_{i \mathop \ge 1} \paren {\prod_{j \mathop = 1}^i \frac {2 j - 1} { 2 j} }^2 \frac {k^{2 i} } {1 - 2 i}\)




















\(\ds \)

\(=\)







\(\ds \frac \pi 2 \sum_{i \mathop \ge 0} \paren {\prod_{j \mathop = 1}^i \frac {2 j - 1} { 2 j} }^2 \frac {k^{2 i} } {1 - 2 i}\)





Product equals $1$ when $i = 0$



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $34.4$: Complete Elliptic Integral of the Second Kind




