# 

Source: https://proofwiki.org/wiki/User:GFauxPas/Sandbox/Zeta2/lnxln1-x/evaluation

Evaluation of Integral
Let $n \in \N_{\ge 1}$














\(\ds \int x^n \ln x \, \mathrm dx\)

\(=\)







\(\ds \frac {x^{n+1} } {n+1} \ln x - \int \frac {x^{n+1} } {x(n+1)} \, \mathrm dx\)





integration by parts














\(\ds \)

\(=\)







\(\ds \frac {x^{n+1} } {n+1} \ln x - \int \frac {x^n} {n+1} \, \mathrm dx\)




















\(\ds \)

\(=\)







\(\ds \frac {x^{n+1} } {n+1} \ln x - \frac {x^{n+1} }{(n+1)^2}\)









So,














\(\ds \int \frac {x^n} n \ln x \, \mathrm dx\)

\(=\)







\(\ds \frac 1 n \left({\frac {x^{n+1} } {n+1} \ln x - \frac {x^{n+1} }{(n+1)^2} }\right)\)





as $n$ is constant



Since $n$ was arbitrary, this holds for all cases $n \ge 1$, for $x \in (0\,.\,.\,1)$.
Since we assumed uniform continuity:














\(\ds \int_{x \to 0}^{x \to 1} \sum_{n \ge 1} \left({-\ln x \frac {x^n} n }\right) \, \mathrm dx\)

\(=\)







\(\ds -\left. \sum_{n \ge 1} \frac 1 n \left({\frac {x^{n+1} } {n+1} \ln x - \frac {x^{n+1} }{(n+1)^2} }\right) \right \vert_{x \to 0}^{x \to 1}\)









For $x \to 0^+$:














\(\ds \sum_{n \ge 1} \frac 1 n \left({\frac {x^{n+1} } {n+1} \ln x - \frac {x^{n+1} }{(n+1)^2} }\right)\)

\(\to\)







\(\ds \sum_{n \ge 1} \frac 1 n \frac{ x^{n+1} }{n+1} \ln x\)





as $x \to 0^+$














\(\ds \)

\(=\)







\(\ds \sum_{n \ge 1} \frac 1 { n\left({n+1}\right) } \frac {\ln x}{ x^{-\left({n+1}\right)} }\)














\(\ds \leadsto \ \ \)





\(\ds \sum_{n \ge 1} \frac 1 { n\left({n+1}\right) } \frac { x^{-1} } { -\left({n+1}\right)x^{-\left({n+1}\right)-1} }\)

\(=\)







\(\ds -\sum_{n \ge 1} \frac 1 {n \left({n+1}\right)} \frac 1 {n+1} x^{n+1}\)





L'Hôpital's














\(\ds \)

\(\)







\(\ds \)




















\(\ds \)

\(\to\)







\(\ds 0\)





as $x \to 0^+$




This means that the value of the integral in question depends only on the limit as $x \to 1^{-}$:















\(\ds \int_{x \to 0}^{x \to 1} \ln x \ln \left({1-x}\right) \, \mathrm dx\)

\(=\)







\(\ds \lim_{x \to 1^{-} } - \sum_{n \ge 0}\frac 1 n \left({\frac { x^{n+1} }{n+1} \ln x - \frac {x^{n+1} } {\left({n+1}\right)^2} }\right)\)




















\(\ds \)

\(=\)







\(\ds \sum_{n \ge 1} \frac 1 {n\left({n+1}\right)^2}\)









Using partial fraction decomposition: 














\(\ds \frac 1 {n\left({n+1}\right)^2}\)

\(=\)







\(\ds \frac A n + \frac B {n+1} + \frac C {\left({n+1}\right)^2}\)














\(\ds \implies \ \ \)





\(\ds 1\)

\(=\)







\(\ds A \left({n+1}\right)^2 + B n \left({n+1}\right) + Cn\)









Clearly $A = 1, C = -1, B = -1$.














\(\ds \sum_{n \ge 1} \frac 1 {n\left({n+1}\right)^2}\)

\(=\)







\(\ds \sum_{n \ge 1} \left({ \underbrace{\frac 1 n - \frac 1 {n+1} }_{\text{telescoping series} } - \frac 1 {\left({n+1}\right)^2} }\right)\)




















\(\ds \)

\(=\)







\(\ds 1 - \sum_{n \ge 1} \frac 1 {\left({n+1}\right)^2}\)




















\(\ds \)

\(=\)







\(\ds 1 - \left({\sum_{n \ge 2} \frac 1 {n^2} + 1 - 1}\right)\)





shifting the index; adding $1 - 1 = 0$














\(\ds \)

\(=\)







\(\ds 1 - \left({\sum_{n \ge 1} \frac 1 {n^2} - 1}\right)\)




















\(\ds \)

\(=\)







\(\ds 2 - \zeta \left({2}\right)\)





where $\zeta$ is the Riemann Zeta function



The Riemann Zeta function at $2$ is famously equal to $\dfrac {\pi^2}6$.
That is,














\(\ds \int_{x \to 0}^{x \to 1} \ln x \ln \left({1-x}\right) \, \mathrm dx\)

\(=\)







\(\ds 2 - \zeta\left({2}\right)\)




















\(\ds \)

\(=\)







\(\ds 2 - \frac {\pi^2} 6\)









$\blacksquare$





