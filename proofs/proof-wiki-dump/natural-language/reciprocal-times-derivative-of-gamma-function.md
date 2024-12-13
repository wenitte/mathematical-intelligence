# 

Source: https://proofwiki.org/wiki/Reciprocal_times_Derivative_of_Gamma_Function



Theorem
Let $z \in \C \setminus \Z_{\le 0}$.
Then:

$\ds \dfrac {\map {\Gamma'} z} {\map \Gamma z} = -\gamma + \sum_{n \mathop = 1}^\infty \paren {\frac 1 n - \frac 1 {z + n - 1} }$
where:

$\map \Gamma z$ denotes the Gamma function
$\map {\Gamma'} z$ denotes the derivative of the Gamma function
$\gamma$ denotes the Euler-Mascheroni constant.


Corollary 1
Let $z \in \C \setminus \Z_{\le 0}$.
Then:

$\ds \dfrac {\map {\Gamma'} z} {\map \Gamma z} = -\gamma + \int_{\mathop \to 0}^{\mathop \to 1} \paren {\dfrac {1 - t^{z - 1} } {1 - t} } \rd t$
where:

$\map \Gamma z$ denotes the Gamma function
$\map {\Gamma'} z$ denotes the derivative of the Gamma function
$\gamma$ denotes the Euler-Mascheroni constant.


Corollary 2
Let $a$ and $b \in \C$ such that $\paren {\dfrac a {2 b} + 1} \in \C \setminus \Z_{\le 0}$ and $\paren {\dfrac a {2 b} + \dfrac 1 2 } \in \C \setminus \Z_{\le 0}$
Then:

$\ds \map \psi {\dfrac a {2 b} + 1} - \map \psi {\dfrac a {2 b} + \dfrac 1 2} = 2 b \sum_{k \mathop = 1}^\infty \dfrac {\paren {-1}^{k + 1} } {a + b k} $
where:

$\psi$ is the digamma function


Corollary 3
$\ds \map \psi {z + 1} = -\gamma + \harm 1 z$


Proof 1













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


Proof 2













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


Examples
Example: $\ds \sum_{k \mathop = 1}^\infty \dfrac {\paren {-1}^{k + 1} } {1 + k}$
$\ds \sum_{k \mathop = 1}^\infty \dfrac {\paren {-1}^{k + 1} } {1 + k} = 1 - \ln 2$


Example: $\ds \sum_{k \mathop = 1}^\infty \dfrac {\paren {-1}^{k + 1} } {1 + 2 k}$
$\ds \sum_{k \mathop = 1}^\infty \dfrac {\paren {-1}^{k + 1} } {1 + 2 k} = 1 - \dfrac \pi 4$


Example: $\ds \sum_{k \mathop = 1}^\infty \dfrac {\paren {-1}^{k + 1} } {1 + 3 k}$
$\ds \sum_{k \mathop = 1}^\infty \dfrac {\paren {-1}^{k + 1} } {1 + 3 k} = 1 - \dfrac 1 3 \ln 2 - \dfrac {\pi \sqrt 3} 9$


Example: $\map {H^{\paren 1} } {\dfrac 1 2}$
$\harm 1 {\dfrac 1 2} = 2 - 2 \ln 2$


Example: $\map {H^{\paren 1} } {-\dfrac 1 2}$
$\harm 1 {-\dfrac 1 2} = -2 \ln 2$


Also see
Extension of Harmonic Number to Non-Integer Argument


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $16.14$: Derivatives of the Gamma Function




