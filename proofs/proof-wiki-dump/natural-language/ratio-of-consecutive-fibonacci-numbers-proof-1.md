# 

Source: https://proofwiki.org/wiki/Ratio_of_Consecutive_Fibonacci_Numbers/Proof_1

Theorem
For $n \in \N$, let $f_n$ be the $n$th Fibonacci number.

Then:

$\ds \lim_{n \mathop \to \infty} \frac {f_{n + 1} } {f_n} = \phi$
where $\phi = \dfrac {1 + \sqrt 5} 2$ is the golden mean.


Proof
Let:














\(\ds \phi\)

\(:=\)







\(\ds \dfrac {1 + \sqrt 5} 2\)




















\(\ds \hat \phi\)

\(:=\)







\(\ds \paren {1 - \phi}\)

\(\ds = \dfrac {1 - \sqrt 5} 2\)


















\(\ds \alpha\)

\(:=\)







\(\ds \dfrac {\phi} {\hat \phi}\)









Then:














\(\ds \alpha\)

\(=\)







\(\ds \dfrac {\phi} {\hat \phi}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {1 + \sqrt 5} {1 - \sqrt 5}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {1 + \sqrt 5} {1 - \sqrt 5} \paren {\dfrac {1 + \sqrt 5} {1 + \sqrt 5} }\)





multiplying top and bottom by $1 + \sqrt 5$














\(\ds \)

\(=\)







\(\ds \dfrac {6 + 2 \sqrt 5} {-4}\)




















\(\ds \)

\(=\)







\(\ds -\dfrac {3 + \sqrt 5} 2\)










Recall the Euler-Binet Formula:

$f_n = \dfrac {\phi^n - \hat \phi^n} {\sqrt 5}$
Let $n \ge 1$.
It immediately follows that:














\(\ds \frac {f_{n + 1} } {f_n}\)

\(=\)







\(\ds \dfrac {\phi^{n + 1} - \hat \phi^{n + 1} } {\phi^n - \hat \phi^n}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\paren {\phi^{n + 1} - \phi \hat \phi^n} + \paren {\phi \hat \phi^n - \hat \phi^{n + 1} } } {\phi^n - \hat \phi^n}\)





adding and subtracting $\phi \hat \phi^n$ to the numerator














\(\ds \)

\(=\)







\(\ds \dfrac {\phi \paren {\phi^n - \hat \phi^n} + \hat \phi^n \paren {\phi - \hat \phi } } {\phi^n - \hat \phi^n}\)





factoring out $\phi$ and $\hat \phi^n$ in the numerator














\(\ds \)

\(=\)







\(\ds \phi + \dfrac {\hat \phi^n \paren {\phi - \hat \phi} } {\phi^n - \hat \phi^n}\)




















\(\ds \)

\(=\)







\(\ds \phi + \dfrac {\hat \phi^n \paren {\phi - \hat \phi} } {\phi^n - \hat \phi^n} \dfrac {\dfrac 1 {\hat \phi^n } } {\dfrac 1 {\hat \phi^n } }\)





multiplying top and bottom by $\dfrac 1 {\hat \phi^n }$














\(\ds \)

\(=\)







\(\ds \phi + \dfrac {\paren {\phi - \hat \phi} } {\dfrac {\phi^n} {\hat \phi^n} - 1}\)




















\(\ds \)

\(=\)







\(\ds \phi + \dfrac {\sqrt 5} {\alpha^n - 1}\)









From the definition of $\alpha$:

$\size \alpha > 1$
Therefore:














\(\ds \lim_{n \mathop \to \infty} \frac {f_{n + 1} } {f_n}\)

\(=\)







\(\ds \lim_{n \mathop \to \infty}\ \phi + \dfrac {\sqrt 5} {\alpha^n - 1}\)




















\(\ds \)

\(=\)







\(\ds \phi + 0\)




















\(\ds \)

\(=\)







\(\ds \phi\)









$\blacksquare$





