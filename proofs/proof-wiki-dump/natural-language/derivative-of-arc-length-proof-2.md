# 

Source: https://proofwiki.org/wiki/Derivative_of_Arc_Length/Proof_2

Theorem
Let $C$ be a curve in the cartesian plane described by the equation $y = \map f x$.
Let $s$ be the length along the arc of the curve from some reference point $P$.
Then the derivative of $s$ with respect to $x$ is given by:

$\dfrac {\d s} {\d x} = \sqrt {1 + \paren {\dfrac {\d y} {\d x} }^2}$


Proof
From Continuously Differentiable Curve has Finite Arc Length, $s$ exists and is given by:














\(\ds s\)

\(=\)







\(\ds \int_P^x \sqrt {1 + \paren {\frac {\d y} {\d u} }^2} \rd u\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d s} {\d x}\)

\(=\)







\(\ds \frac {\d} {\d x} \int_P^x \sqrt {1 + \paren {\frac {\d y} {\d u} } ^2} \rd u\)





differentiating both sides with respect to $x$














\(\ds \)

\(=\)







\(\ds \sqrt {1 + \paren {\frac {\d y} {\d x} }^2}\)





Fundamental Theorem of Calculus: First Part



$\blacksquare$





