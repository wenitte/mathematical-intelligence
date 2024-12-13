# 

Source: https://proofwiki.org/wiki/Reciprocal_times_Derivative_of_Gamma_Function/Proof_2

Theorem
Let $z \in \C \setminus \Z_{\le 0}$.
Then:

$\ds \dfrac {\map {\Gamma'} z} {\map \Gamma z} = -\gamma + \sum_{n \mathop = 1}^\infty \paren {\frac 1 n - \frac 1 {z + n - 1} }$
where:

$\map \Gamma z$ denotes the Gamma function
$\map {\Gamma'} z$ denotes the derivative of the Gamma function
$\gamma$ denotes the Euler-Mascheroni constant.


Proof













\(\ds \frac 1 {\map \Gamma z}\)

\(=\)







\(\ds z e^{\gamma z} \prod_{n \mathop = 1}^\infty \paren {\paren {1 + \frac z n} e^{-z / n} }\)





Weierstrass Form of Gamma Function








\(\ds \leadsto \ \ \)





\(\ds \map \Gamma z\)

\(=\)







\(\ds \frac {e^{-\gamma z} } z \prod_{n \mathop = 1}^\infty \frac {e^{z/n} } {1 + \frac z n}\)





reciprocal of both sides








\(\ds \leadsto \ \ \)





\(\ds \map \ln {\map {\Gamma} z}\)

\(=\)







\(\ds \map \ln {\frac {e^{-\gamma z} } z \prod_{n \mathop = 1}^\infty \frac {e^{z/n} } {1 + \frac z n} }\)





logarithm of both sides














\(\ds \)

\(=\)







\(\ds \map \ln {e^{-\gamma z} } - \ln z + \sum_{n \mathop = 1}^\infty \paren { \map \ln {e^{z/n} } -  \map \ln {1 + \frac z n} }\)





Sum of Logarithms and Difference of Logarithms














\(\ds \)

\(=\)







\(\ds -\gamma z \ln e - \ln z + \sum_{n \mathop = 1}^\infty \paren {\frac z n \ln e -  \map \ln {1 + \frac z n} }\)





Logarithm of Power














\(\ds \)

\(=\)







\(\ds -\gamma z - \ln z + \sum_{n \mathop = 1}^\infty \paren {\frac z n - \map \ln {1 + \frac z n} }\)





Natural Logarithm of e is 1








\(\ds \leadsto \ \ \)





\(\ds \map {\dfrac \d {\d z} } {\map \ln {\map {\Gamma} z} }\)

\(=\)







\(\ds \map {\dfrac \d {\d z} } {-\gamma z - \ln z + \sum_{n \mathop = 1}^\infty \paren {\frac z n - \map \ln {1 + \frac z n} } }\)





differentiating with respect to $z$








\(\ds \leadsto \ \ \)





\(\ds \frac {\map {\Gamma'} z} {\map \Gamma z}\)

\(=\)







\(\ds -\gamma - \frac 1 z + \sum_{n \mathop = 1}^\infty \paren {\frac 1 n - \frac {\frac 1 n} {1 + \frac z n} }\)





Derivative of Composite Function and Derivative of Natural Logarithm Function














\(\ds \)

\(=\)







\(\ds -\gamma - \frac 1 z + \sum_{n \mathop = 1}^\infty \paren {\frac 1 n - \frac 1 {z + n} }\)




















\(\ds \)

\(=\)







\(\ds -\gamma - \frac 1 z + \paren {\paren {\frac 1 1 - \frac 1 {z + 1} } + \paren {\frac 1 2 - \frac 1 {z + 2} } + \paren {\frac 1 3 - \frac 1 {z + 3} } + \cdots}\)




















\(\ds \)

\(=\)







\(\ds -\gamma + \paren {\paren {\frac 1 1 - \frac 1 z } + \paren {\frac 1 2 - \frac 1 {z + 1} } + \paren {\frac 1 3 - \frac 1 {z + 2} } + \cdots}\)





shifting the terms with $z$ one to the right














\(\ds \)

\(=\)







\(\ds -\gamma + \sum_{n \mathop = 1}^\infty \paren {\frac 1 n - \frac 1 {z + n - 1} }\)









$\blacksquare$





