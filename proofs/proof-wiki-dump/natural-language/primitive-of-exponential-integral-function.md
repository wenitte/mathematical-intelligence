# 

Source: https://proofwiki.org/wiki/Primitive_of_Exponential_Integral_Function

Theorem
Let $\Ei: \R_{>0} \to \R$ denote the exponential integral function:

$\map \Ei x = \ds \int_{t \mathop = x}^{t \mathop \to +\infty} \frac {e^{-t} } t \rd t$
Then:

$\ds \int \map \Ei x \rd x = x \map \Ei x - e^{-x} + C$


Proof
By Derivative of Exponential Integral Function, we have: 

$\ds \frac \d {\d x} \paren {\map \Ei x} = -\frac {e^{-x} } x$
So: 














\(\ds \int \map \Ei x \rd x\)

\(=\)







\(\ds \int 1 \times \map \Ei x \rd x\)




















\(\ds \)

\(=\)







\(\ds x \map \Ei x - \int \paren {-x \frac {e^{-x} } x} \rd x\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds x \map \Ei x + \int e^{-x} \rd x\)




















\(\ds \)

\(=\)







\(\ds x \map \Ei x - e^{-x} + C\)





Primitive of $e^{a x}$



$\blacksquare$





