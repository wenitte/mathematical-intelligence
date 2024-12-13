# 

Source: https://proofwiki.org/wiki/Reciprocal_times_Derivative_of_Gamma_Function/Corollary_1

Corollary to Reciprocal times Derivative of Gamma Function
Let $z \in \C \setminus \Z_{\le 0}$.
Then:

$\ds \dfrac {\map {\Gamma'} z} {\map \Gamma z} = -\gamma + \int_{\mathop \to 0}^{\mathop \to 1} \paren {\dfrac {1 - t^{z - 1} } {1 - t} } \rd t$
where:

$\map \Gamma z$ denotes the Gamma function
$\map {\Gamma'} z$ denotes the derivative of the Gamma function
$\gamma$ denotes the Euler-Mascheroni constant.


Proof













\(\ds \dfrac {\map {\Gamma'} z} {\map \Gamma z}\)

\(=\)







\(\ds -\gamma + \sum_{n \mathop = 1}^\infty \paren {\frac 1 n - \frac 1 {z + n - 1} }\)





Reciprocal times Derivative of Gamma Function














\(\ds \)

\(=\)







\(\ds -\gamma + \sum_{n \mathop = 0}^\infty \paren {\frac 1 {n + 1} - \frac 1 {z + n} }\)





reindexing sum














\(\ds \)

\(=\)







\(\ds -\gamma + \sum_{n \mathop = 0}^\infty \intlimits {\frac {t^{n + 1} } {n + 1} - \frac {t^{z + n} } {z + n} } 0 1\)




















\(\ds \)

\(=\)







\(\ds -\gamma + \sum_{n \mathop = 0}^\infty \int_{\mathop \to 0}^{\mathop \to 1} \paren {t^n - t^{z + n - 1} } \rd t\)




















\(\ds \)

\(=\)







\(\ds -\gamma + \int_{\mathop \to 0}^{\mathop \to 1} \sum_{n \mathop = 0}^\infty \paren {t^n - t^{z + n - 1} } \rd t\)





Fubini's Theorem














\(\ds \)

\(=\)







\(\ds -\gamma + \int_{\mathop \to 0}^{\mathop \to 1} \paren {1 - t^{z - 1} } \sum_{n \mathop = 0}^\infty t^n \rd t\)




















\(\ds \)

\(=\)







\(\ds -\gamma + \int_{\mathop \to 0}^{\mathop \to 1} \paren {\dfrac {1 - t^{z - 1} } {1 - t} } \rd t\)





Sum of Infinite Geometric Sequence



$\blacksquare$





