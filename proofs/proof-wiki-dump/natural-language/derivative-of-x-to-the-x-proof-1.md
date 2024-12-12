# 

Source: https://proofwiki.org/wiki/Derivative_of_x_to_the_x/Proof_1

Theorem
$\dfrac \d {\d x} x^x = x^x \paren {\ln x + 1}$


Proof
Note that the Power Rule cannot be used because the index is not a constant.
Let $y := x^x$.
As $x$ was stipulated to be positive, we can take the natural logarithm of both sides:














\(\ds \ln y\)

\(=\)







\(\ds \ln x^x\)




















\(\ds \)

\(=\)







\(\ds x \ln x\)





Laws of Logarithms














\(\ds \map {\frac \d {\d x} } {\ln y}\)

\(=\)







\(\ds \map {\frac \d {\d x} } {x \ln x}\)





differentiating both sides with respect to $x$














\(\ds \frac 1 y \frac {\d y} {\d x}\)

\(=\)







\(\ds \map {\frac \d {\d x} } {x \ln x}\)





Chain Rule for Derivatives and Derivative of Natural Logarithm Function














\(\ds \)

\(=\)







\(\ds \map {\frac \d {\d x} } x \cdot \ln x + x \frac {\d} {\d x} \ln x\)





Product Rule for Derivatives














\(\ds \)

\(=\)







\(\ds 1 \cdot \ln x + x \cdot \frac 1 x\)





Derivative of Identity Function and Derivative of Natural Logarithm Function














\(\ds \)

\(=\)







\(\ds \ln x + 1\)





simplification














\(\ds \frac {\d y} {\d x}\)

\(=\)







\(\ds x^x \paren {\ln x + 1}\)





multiplying both sides by $y = x^x$



$\blacksquare$


Sources
1953: L. Harwood Clarke: A Note Book in Pure Mathematics ... (previous) ... (next): $\text {II}$. Calculus: Differentiation: Variable Index: Example $1$.
For a video presentation of the contents of this page, visit the Khan Academy.




