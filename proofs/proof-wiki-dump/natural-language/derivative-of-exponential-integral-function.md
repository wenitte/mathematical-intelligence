# 

Source: https://proofwiki.org/wiki/Derivative_of_Exponential_Integral_Function

Theorem
Let $\Ei: \R_{>0} \to \R$ denote the exponential integral function:

$\map \Ei x = \ds \int_{t \mathop = x}^{t \mathop \to +\infty} \frac {e^{-t} } t \rd t$
Then:

$\dfrac \d {\d x} \paren {\map \Ei x} = -\dfrac {e^{-x} } x$


Proof













\(\ds \map {\frac \d {\d x} } {\map \Ei x}\)

\(=\)







\(\ds \map {\frac \d {\d x} } {-\gamma - \ln x + \int_0^x \frac {1 - e^{-t} } t \rd t}\)





Characterization of Exponential Integral Function














\(\ds \)

\(=\)







\(\ds -\frac 1 x + \frac 1 x - \frac {e^{-x} } x\)





Derivative of Constant, Derivative of Natural Logarithm, Fundamental Theorem of Calculus: First Part (Corollary)














\(\ds \)

\(=\)







\(\ds -\frac {e^{-x} } x\)









$\blacksquare$





