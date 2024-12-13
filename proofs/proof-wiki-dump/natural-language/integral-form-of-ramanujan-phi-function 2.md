# 

Source: https://proofwiki.org/wiki/Integral_Form_of_Ramanujan_Phi_Function

Theorem
$\ds \map \phi x = \int_{\to 0}^{\to 1} \paren {\dfrac {u^{x - 2} \paren {1 - u}^2} {1 - u^x} } \rd u + 1$
where:

$\map \phi x$ denotes the Ramanujan phi function
$x \in \C$
$\map \Re x > 1$


Proof













\(\ds \int_{\to 0}^{\to 1} \paren {\frac {u^{x - 2} \paren {1 - u}^2} {1 - u^x} } \rd u + 1\)

\(=\)







\(\ds 1 + \int_{\to 0}^{\to 1} \paren {\frac {u^x} {1 - u^x} } \times \paren {u^{-2} \paren {1 - 2 u + u^2} } \rd u\)





Square of Sum














\(\ds \)

\(=\)







\(\ds 1 + \int_{\to 0}^{\to 1} \paren {\frac {u^x} {1 - u^x} } \times \paren {\paren {u^{-2} - 2 u^{-1} + 1} } \rd u\)





distributing the $u^{-2}$














\(\ds \)

\(=\)







\(\ds 1 + \int_{\to 0}^{\to 1} \paren {\sum_{k \mathop = 1}^{\infty} u^{k x} } \times \paren {\paren {u^{-2} - 2 u^{-1} + 1} } \rd u\)





Sum of Infinite Geometric Sequence














\(\ds \)

\(=\)







\(\ds 1 + \int_{\to 0}^{\to 1} \sum_{k \mathop = 1}^{\infty} \paren {u^{k x - 2} - 2 u^{k x - 1} + u^{k x} } \rd u\)





Linear Combination of Integrals














\(\ds \)

\(=\)







\(\ds 1 + \sum_{k \mathop = 1}^{\infty} \int_{\to 0}^{\to 1} \paren {u^{k x - 2} - 2 u^{k x - 1} + u^{k x} } \rd u\)





Tonelli's Theorem














\(\ds \)

\(=\)







\(\ds 1 + \paren {\sum_{k \mathop = 1}^{\infty} \intlimits {\frac {u^{k x - 1} } {k x - 1} - 2 \frac {u^{k x} } {k x} + \frac {u^{k x + 1} } {k x + 1} } {u \mathop = 0} {u \mathop = 1} }\)





Integral of Power














\(\ds \)

\(=\)







\(\ds 1 + \paren {\sum_{k \mathop = 1}^{\infty} \paren {\frac {1^{k x - 1} } {k x - 1} - 2 \frac {1^{k x} } {k x} + \frac {1^{k x + 1} } {k x + 1} } - \paren {\frac {0^{k x - 1} } {k x - 1} - 2 \frac {0^{k x} } {k x} + \frac {0^{k x + 1} } {k x + 1} } }\)




















\(\ds \)

\(=\)







\(\ds 1 + \paren {\sum_{k \mathop = 1}^{\infty} \dfrac 1 {k x - 1} - \dfrac 2 {k x} + \dfrac 1 {k x + 1} }\)





simplifying














\(\ds \)

\(=\)







\(\ds 1 + \paren {\sum_{k \mathop = 1}^{\infty} \dfrac {k x \paren {k x + 1} - 2 \paren {k x + 1} \paren {k x - 1} + k x \paren {k x - 1} } {k x \paren {k x + 1} \paren {k x - 1} } }\)





putting everything over a common denomninator














\(\ds \)

\(=\)







\(\ds 1 + \paren {\sum_{k \mathop = 1}^\infty \frac {\paren {k^2 x^2 + k x} - 2 \paren {k^2 x^2 - 1} + \paren {k^2 x^2 - k x} } {\paren {k x}^3 - k x} }\)





Difference of Two Squares and multiplying out














\(\ds \)

\(=\)







\(\ds 1 + 2 \sum_{k \mathop = 1}^\infty \frac 1 {\paren {\paren {k x}^3 - k x} }\)





simplifying














\(\ds \)

\(=\)







\(\ds \map \phi x\)





Definition of Ramanujan Phi Function of One Argument



$\blacksquare$


Sources
1985: Bruce C. Berndt: Ramanujan's Notebooks: Part I: Chapter $8$. Analogues of the Gamma Function




