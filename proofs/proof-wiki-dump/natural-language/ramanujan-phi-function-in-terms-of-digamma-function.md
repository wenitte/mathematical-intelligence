# 

Source: https://proofwiki.org/wiki/Ramanujan_Phi_Function_in_terms_of_Digamma_Function

Theorem
$\map \psi {\dfrac 1 z} + \map \psi {1 - \dfrac 1 z} = -2 \gamma - z \map \phi z$
where:

$\map \psi z$ denotes the digamma function
$\map \phi z$ denotes the Ramanujan phi function
$z \in \C$, where $\dfrac 1 z \notin \Z_{\le 0}$ and $\paren {1 - \dfrac 1 z} \notin \Z_{\le 0}$


Proof













\(\ds \map \psi {\frac 1 z} + \map \psi {1 - \frac 1 z}\)

\(=\)







\(\ds -z + \map \psi {1 + \frac 1 z} + \map \psi {1 - \frac 1 z}\)





Recurrence Relation for Digamma Function: $\map \psi {z + 1} = \map \psi z + \dfrac 1 z$














\(\ds \)

\(=\)







\(\ds -z + \paren {-\gamma + \sum_{n \mathop = 1}^\infty \paren {\frac 1 n - \frac 1 {\paren {1 + \dfrac 1 z} + n - 1} } } + \paren {-\gamma + \sum_{n \mathop = 1}^\infty \paren {\frac 1 n - \frac 1 {\paren {1 - \dfrac 1 z} + n - 1} } }\)





Reciprocal times Derivative of Gamma Function: $\ds \dfrac {\map {\Gamma'} z} {\map \Gamma z} = -\gamma + \sum_{n \mathop = 1}^\infty \paren {\frac 1 n - \frac 1 {z + n - 1} }$














\(\ds \)

\(=\)







\(\ds -2 \gamma - z + \sum_{n \mathop = 1}^\infty \paren {\frac 2 n - \frac 1 {\paren {n + \dfrac 1 z} } - \frac 1 {\paren {n - \dfrac 1 z} } }\)





Linear Combination of Convergent Series














\(\ds \)

\(=\)







\(\ds -2 \gamma - z + \sum_{n \mathop = 1}^\infty \paren {\paren {\frac z z} \times \frac 2 n - \paren {\frac z z} \times \frac 1 {\paren {n + \dfrac 1 z} } - \paren {\frac z z} \times \frac 1 {\paren {n - \dfrac 1 z} } }\)





multiplying top and bottom by $z$














\(\ds \)

\(=\)







\(\ds -2 \gamma - z + \sum_{n \mathop = 1}^\infty \paren {\frac {2 z} {n z} - \frac z {\paren {n z + 1} } - \frac z {\paren {n z - 1} } }\)




















\(\ds \)

\(=\)







\(\ds -2 \gamma - z + z \sum_{n \mathop = 1}^\infty \paren {\frac {2 \paren {\paren {n z}^2 - 1} - \paren {n z} \paren {n z - 1} - \paren {n z} \paren {n z + 1} } {\paren {\paren {n z}^3 - n z} }  }\)





Difference of Two Squares














\(\ds \)

\(=\)







\(\ds -2 \gamma - z + z \sum_{n \mathop = 1}^\infty \paren {\frac {2 n^2 z^2 - 2 - n^2 z^2 + n z - n^2 z^2 - n z} {\paren {\paren {n z}^3 - n z} }  }\)




















\(\ds \)

\(=\)







\(\ds -2 \gamma - z - 2 z \sum_{n \mathop = 1}^\infty \frac 1 {\paren {\paren {n z}^3 - n z} }\)




















\(\ds \)

\(=\)







\(\ds -2 \gamma - z \paren {1 + 2 \sum_{n \mathop = 1}^\infty \frac 1 {\paren {\paren {n z}^3 - n z} } }\)




















\(\ds \)

\(=\)







\(\ds -2 \gamma - z \map \phi z\)





Definition of Ramanujan Phi Function of One Argument



$\blacksquare$


Sources
1985: Bruce C. Berndt: Ramanujan's Notebooks: Part I: Chapter $8$. Analogues of the Gamma Function




