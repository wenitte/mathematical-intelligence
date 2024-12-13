# 

Source: https://proofwiki.org/wiki/Reciprocal_times_Derivative_of_Gamma_Function/Corollary_2

Corollary to Reciprocal times Derivative of Gamma Function
Let $a$ and $b \in \C$ such that $\paren {\dfrac a {2 b} + 1} \in \C \setminus \Z_{\le 0}$ and $\paren {\dfrac a {2 b} + \dfrac 1 2 } \in \C \setminus \Z_{\le 0}$
Then:

$\ds \map \psi {\dfrac a {2 b} + 1} - \map \psi {\dfrac a {2 b} + \dfrac 1 2} = 2 b \sum_{k \mathop = 1}^\infty \dfrac {\paren {-1}^{k + 1} } {a + b k} $
where:

$\psi$ is the digamma function


Proof













\(\ds \map \psi {\frac a {2 b} + 1}\)

\(=\)







\(\ds \dfrac {\map {\Gamma'} {\frac a {2 b} + 1} } {\map \Gamma {\frac a {2 b} + 1} }\)





Definition of Digamma Function: $\Gamma$ denotes the gamma function














\(\ds \)

\(=\)







\(\ds -\gamma + \sum_{n \mathop = 1}^\infty \paren {\frac 1 n - \frac 1 {n + \dfrac a {2 b} } }\)





Reciprocal times Derivative of Gamma Function














\(\ds \)

\(=\)







\(\ds -\gamma + \frac {2 b} {2 b} \sum_{n \mathop = 1}^\infty \paren {\frac 1 n - \frac 1 {n + \dfrac a {2 b} } }\)





multiplying top and bottom by $2 b$




\(\text {(1)}: \quad\)









\(\ds \)

\(=\)







\(\ds -\gamma + 2 b \sum_{n \mathop = 1}^\infty \paren {\frac 1 {2 b n} - \frac 1 {2 b n + a} }\)




















\(\ds \map \psi {\paren {\frac a {2 b} - \frac 1 2} + 1}\)

\(=\)







\(\ds \dfrac {\map {\Gamma'} {\paren {\frac a {2 b} - \frac 1 2} + 1} } {\map \Gamma {\paren {\frac a {2 b} - \frac 1 2} + 1} }\)





Definition of Digamma Function: $\Gamma$ denotes the gamma function














\(\ds \)

\(=\)







\(\ds -\gamma + \sum_{n \mathop = 1}^\infty \paren {\frac 1 n - \frac 1 {n + \paren {\dfrac a {2 b} - \dfrac 1 2} } }\)





Reciprocal times Derivative of Gamma Function














\(\ds \)

\(=\)







\(\ds -\gamma + \frac {2 b} {2 b} \sum_{n \mathop = 1}^\infty \paren {\frac 1 n - \frac 1 {n + \paren {\dfrac a {2 b} - \dfrac 1 2} } }\)





multiplying top and bottom by $2 b$




\(\text {(2)}: \quad\)









\(\ds \)

\(=\)







\(\ds -\gamma + 2 b \sum_{n \mathop = 1}^\infty \paren {\frac 1 {2 b n} - \frac 1 {2 b n + a - b} }\)














\(\ds \leadsto \ \ \)





\(\ds \map \psi {\frac a {2 b} + 1} - \map \psi {\frac a {2 b} + \frac 1 2 }\)

\(=\)







\(\ds \paren {-\gamma + 2 b \sum_{n \mathop = 1}^\infty \paren {\frac 1 {2 b n} - \frac 1 {2 b n + a} } } - \paren {-\gamma + 2 b \sum_{n \mathop = 1}^\infty \paren {\frac 1 {2 b n} - \frac 1 {2 b n + a - b} } }\)





subtracting $2$ from $1$














\(\ds \)

\(=\)







\(\ds 2 b \sum_{n \mathop = 1}^\infty \paren {\frac 1 {2 b n} - \frac 1 {2 b n} } + \paren {\frac 1 {2 b n + a - b} - \frac 1 {2 b n + a} }\)





Linear Combination of Convergent Series














\(\ds \)

\(=\)







\(\ds 2 b \sum_{n \mathop = 1}^\infty \paren {\frac 1 {b \paren {2 n - 1} + a} - \frac 1 {2 b n + a} }\)




















\(\ds \)

\(=\)







\(\ds 2 b \paren {\paren {\frac 1 {a + b} - \frac 1 {a + 2 b} } + \paren {\frac 1 {a + 3 b} - \frac 1 {a + 4 b} } + \paren {\frac 1 {a + 5 b} - \frac 1 {a + 6 b} } + \cdots}\)




















\(\ds \)

\(=\)







\(\ds 2 b \sum_{k \mathop = 1}^\infty \dfrac {\paren {-1}^{k + 1} } {a + b k}\)









$\blacksquare$


Sources
1985: Bruce C. Berndt: Ramanujan's Notebooks: Part I: Chapter $8$. Analogues of the Gamma Function




