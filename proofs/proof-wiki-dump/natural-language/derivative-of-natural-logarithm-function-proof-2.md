# 

Source: https://proofwiki.org/wiki/Derivative_of_Natural_Logarithm_Function/Proof_2

Theorem
Let $\ln x$ be the natural logarithm function.
Then:

$\map {\dfrac \d {\d x} } {\ln x} = \dfrac 1 x$


Proof
This proof assumes the definition of the natural logarithm as the inverse of the exponential function, where the exponential function is defined as the limit of a sequence:

$e^x := \ds \lim_{n \mathop \to +\infty} \paren {1 + \frac x n}^n$
It also assumes the Laws of Logarithms.














\(\ds \map {\frac \d {\d x} } {\ln x}\)

\(=\)







\(\ds \lim_{\Delta x \mathop \to 0} \frac {\map \ln {x + \Delta x} - \ln x} {\Delta x}\)





Definition of Derivative














\(\ds \)

\(=\)







\(\ds \lim_{\Delta x \mathop \to 0} \frac {\map \ln {\frac {x + \Delta x} x} } {\Delta x}\)





Difference of Logarithms














\(\ds \)

\(=\)







\(\ds \lim_{\Delta x \mathop \to 0} \paren {\frac 1 {\Delta x} \centerdot \map \ln {1 + \frac {\Delta x} x} }\)










\(\text {(1)}: \quad\)









\(\ds \)

\(=\)







\(\ds \lim_{\Delta x \mathop \to 0} \paren {\map \ln {\paren {1 + \frac {\Delta x} x}^{1 / \Delta x} } }\)





Natural Logarithm of Power




Define $u$ as:














\(\ds u\)

\(=\)







\(\ds \dfrac {\Delta x} x\)














\(\ds \leadsto \ \ \)





\(\ds \Delta x\)

\(=\)







\(\ds u x\)














\(\ds \leadsto \ \ \)





\(\ds \frac 1 {\Delta x}\)

\(=\)







\(\ds \frac 1 x \cdot \frac 1 u\)









Hence:














\(\ds \)

\(=\)







\(\ds \lim_{u \mathop \to 0} \paren {\map \ln {\paren {1 + u}^{\frac 1 u \cdot \frac 1 x} } }\)





substituting $u x$ for $\Delta x$ in $(1)$














\(\ds \)

\(=\)







\(\ds \lim_{u \mathop \to 0} \paren {\frac 1 x \cdot \map \ln {1 + u}^{\frac 1 u} }\)





Natural Logarithm of Power














\(\ds \)

\(=\)







\(\ds \frac 1 x \cdot \lim_{u \mathop \to 0} \paren {\map \ln {1 + u}^{\frac 1 u} }\)





factoring out constants














\(\ds \)

\(=\)







\(\ds \frac 1 x \cdot \lim_{v \mathop \to +\infty} \paren {\map \ln {1 + \frac 1 v}^v}\)





substituting $\dfrac 1 v$ for $u$














\(\ds \)

\(=\)







\(\ds \frac 1 x \cdot \ln e^1\)





Limit of Composite Function, Limit definition of $e^x$, Real Natural Logarithm Function is Continuous














\(\ds \)

\(=\)







\(\ds \frac 1 x\)





Exponential of Natural Logarithm



$\blacksquare$


Sources
1953: L. Harwood Clarke: A Note Book in Pure Mathematics ... (previous) ... (next): $\text {II}$. Calculus: Differentiation: Standard Differential Coefficients
For a video presentation of the contents of this page, visit the Khan Academy.




