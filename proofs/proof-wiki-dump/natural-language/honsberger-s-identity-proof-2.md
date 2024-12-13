# 

Source: https://proofwiki.org/wiki/Honsberger%27s_Identity/Proof_2

Theorem
$\forall m, n \in \Z_{>0}: F_{m + n} = F_{m - 1} F_n + F_m F_{n + 1}$


Proof













\(\ds \)

\(\)







\(\ds F_{m - 1} F_n + F_m F_{n + 1}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\phi^{m - 1} - \hat \phi^{m - 1} } {\sqrt 5} \dfrac {\phi^n - \hat \phi^n} {\sqrt 5} + \dfrac {\phi^m - \hat \phi^m} {\sqrt 5} \dfrac {\phi^{n + 1} - \hat \phi^{n + 1} } {\sqrt 5}\)





Euler-Binet Formula














\(\ds \)

\(=\)







\(\ds \dfrac {\phi^{m + n - 1} - \phi^{m - 1} \hat \phi^n - \phi^n \hat \phi^{m - 1} + \hat \phi^{m + n - 1} + \phi^{m + n + 1} - \phi^m \hat \phi^{n + 1} - \phi^{n + 1} \hat \phi^m + \hat \phi^{m + n + 1} } 5\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\phi^{m + n - 1} \paren {1 + \phi^2} + \hat \phi^{m + n - 1} \paren {1 + \hat \phi^2} - \phi^{m - 1} \hat \phi^n \paren {1 + \phi \hat \phi} -\phi^n \hat \phi^{m - 1} \paren {1 + \phi \hat \phi} } 5\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\phi^{m + n - 1} \paren {1 + \phi^2} + \hat \phi^{m + n - 1} \paren {1 + \hat \phi^2} } 5\)





as $\phi \hat \phi = -1$














\(\ds \)

\(=\)







\(\ds \dfrac {\phi^{m + n - 1} \paren {2 + \phi} + \hat \phi^{m + n - 1} \paren {2 + \hat \phi} } 5\)





as both $\phi$ and $\hat \phi$ satisfy $x^2 = x + 1$














\(\ds \)

\(=\)







\(\ds \dfrac {\phi^{m + n - 1} \paren {2 + \dfrac {1 + \sqrt 5} 2} + \hat \phi^{m + n - 1} \paren {2 + \dfrac {1 - \sqrt 5} 2} } 5\)





Definition of $\phi$ and $\hat \phi$














\(\ds \)

\(=\)







\(\ds \dfrac {\phi^{m + n - 1} \paren {\dfrac {5 + \sqrt 5} 2} + \hat \phi^{m + n - 1} \paren {\dfrac{ 5 - \sqrt 5} 2} } 5\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\phi^{m + n - 1} \paren {\dfrac {1 + \sqrt 5} 2} - \hat \phi^{m + n - 1} \paren {\dfrac {1 - \sqrt 5} 2} } {\sqrt 5}\)





dividing numerator and denominator by $\sqrt 5$














\(\ds \)

\(=\)







\(\ds \dfrac {\phi^{m + n} - \hat \phi^{m + n} } {\sqrt 5}\)





Definition of $\phi$ and $\hat \phi$














\(\ds \)

\(=\)







\(\ds F_{m + n}\)





Euler-Binet Formula



$\blacksquare$





