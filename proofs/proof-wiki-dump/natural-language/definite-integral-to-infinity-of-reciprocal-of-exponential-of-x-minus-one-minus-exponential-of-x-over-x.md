# 

Source: https://proofwiki.org/wiki/Definite_Integral_to_Infinity_of_Reciprocal_of_Exponential_of_x_minus_One_minus_Exponential_of_-x_over_x



Theorem
$\ds \int_0^\infty \paren {\frac 1 {e^x - 1} - \frac {e^{-x} } x} \rd x = \gamma$
where $\gamma$ denotes the Euler-Mascheroni constant.


Proof













\(\ds \gamma\)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \paren {\sum_{k \mathop = 1}^n \frac 1 k - \ln n}\)





Definition of Euler-Mascheroni Constant














\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \paren {\sum_{k \mathop = 1}^n \paren {\int_0^1 x^{k - 1} \rd x } + \int_0^1 \frac {1 - x^{n - 1} } {\ln x} \rd x}\)





Primitive of Power, Definite Integral from $0$ to $1$ of $\dfrac {x^m - x^n} {\ln x}$














\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \paren {\int_0^1 \paren {\sum_{k = 1}^n x^{k - 1} } \rd x + \int_0^1 \frac {1 - x^{n - 1} } {\ln x} \rd x}\)





Linear Combination of Definite Integrals














\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \paren {\int_0^1 \paren {\frac {1 - x^n} {1 - x} + \frac {1 - x^{n - 1} } {\ln x} } \rd x}\)





Sum of Infinite Geometric Sequence














\(\ds \)

\(=\)







\(\ds \int_0^1 \lim_{n \mathop \to \infty} \paren {\frac {1 - x^n} {1 - x} + \frac {1 - x^{n - 1} } {\ln x} } \rd x\)





Lebesgue's Dominated Convergence Theorem














\(\ds \)

\(=\)







\(\ds \int_0^1 \paren {\frac 1 {1 - x} + \frac 1 {\ln x} } \rd x\)





Sequence of Powers of Number less than One



Let: 

$x = e^{-t}$
By Derivative of $e^{a x}$:

$\dfrac {\d x} {\d t} = -e^{-t}$
By Exponential of Zero, we have: 

as $x \to 1$, $t \to 0$.
By Exponential Tends to Zero and Infinity, we have: 

as $x \to 0$, $t \to \infty$.
We therefore have: 














\(\ds \int_0^1 \paren {\frac 1 {1 - x} + \frac 1 {\ln x} } \rd x\)

\(=\)







\(\ds -\int_\infty^0 e^{-t} \paren {\frac 1 {1 - e^{-t} } + \frac 1 {\map \ln {e^{-t} } } } \rd t\)





substituting $x = e^{-t}$














\(\ds \)

\(=\)







\(\ds \int_0^\infty e^{-t} \paren {\frac {e^t} {e^t - 1} - \frac 1 t} \rd t\)





Reversal of Limits of Definite Integral, Definition of Natural Logarithm














\(\ds \)

\(=\)







\(\ds \int_0^\infty \paren {\frac 1 {e^t - 1} - \frac {e^{-t} } t} \rd t\)









$\blacksquare$


Also see
Gauss's Integral Form of Digamma Function


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 15$: Definite Integrals involving Exponential Functions: $15.86$




