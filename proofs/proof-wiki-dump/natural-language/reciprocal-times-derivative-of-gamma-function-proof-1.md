# 

Source: https://proofwiki.org/wiki/Reciprocal_times_Derivative_of_Gamma_Function/Proof_1

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





\(\ds \map {\Gamma'} z\)

\(=\)







\(\ds \map {\dfrac \d {\d z} } {\frac {e^{-\gamma z} } z \prod_{n \mathop = 1}^\infty \frac {e^{z/n} } {1 + \frac z n} }\)





differentiating with respect to $z$








\(\ds \leadsto \ \ \)





\(\ds \map {\Gamma'} z\)

\(=\)







\(\ds -\frac {e^{-\gamma z} \paren {1 + \gamma z} } {z^2} \prod_{n \mathop = 1}^\infty \paren {\frac {e^{z / n} } {\paren {1 + \frac z n} } } + \frac {e^{-\gamma z} } z \sum_{n \mathop = 1}^\infty \paren {\frac z {n \paren {z + n} } \prod_{i \mathop = 1}^\infty \frac {e^{z / i} } {1 + \frac z i} }\)





Product Rule for Derivatives














\(\ds \)

\(=\)







\(\ds -\frac {e^{-\gamma z} \paren {1 + \gamma z} } {z^2} \frac z {e^{-\gamma z} } \map \Gamma z + \frac {e^{-\gamma z} } z \sum_{n \mathop = 1}^\infty \paren {\frac z {n \paren {z + n} } \frac z {e^{-\gamma z} } \map \Gamma z}\)





simplifying the continued product














\(\ds \)

\(=\)







\(\ds -\frac {1 + \gamma z} z \map \Gamma z + \sum_{n \mathop = 1}^\infty \paren {\frac {z \map \Gamma z} {n \paren {z + n} } }\)





simplifying








\(\ds \leadsto \ \ \)





\(\ds \frac {\map {\Gamma'} z} {\map \Gamma z}\)

\(=\)







\(\ds -\frac {1 + \gamma z} z + \sum_{n \mathop = 1}^\infty \paren {\frac z {n \paren {z + n} } }\)





dividing both sides by $\map \Gamma z$














\(\ds \)

\(=\)







\(\ds -\gamma - \frac 1 z + \sum_{n \mathop = 1}^\infty \paren {\frac 1 n - \frac 1 {z + n} }\)




















\(\ds \)

\(=\)







\(\ds -\gamma + \sum_{n \mathop = 1}^\infty \paren {\frac 1 n - \frac 1 {z + n - 1} }\)





rearranging the series



$\blacksquare$





