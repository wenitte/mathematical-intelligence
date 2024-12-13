# 

Source: https://proofwiki.org/wiki/Length_of_Arch_of_Sine_Function

Theorem
The length of one arch of the sine function:

$y = \sin x$
is given by:

$L = 2 \sqrt 2 \map E {\dfrac {\sqrt 2} 2}$
where $E$ denotes the incomplete elliptic integral of the second kind.


Proof
Let $L$ be the length of one arch of $y = \sin x$.
Then:














\(\ds L\)

\(=\)







\(\ds 2 \int_0^{\pi/2} \sqrt {1 + \paren {\map {\frac \d {\d x} } {\sin x} }^2} \rd x\)





Definition of Length of Curve














\(\ds \)

\(=\)







\(\ds 2 \int_0^{\pi/2} \sqrt {1 + \cos^2 x} \rd x\)





Derivative of Sine Function














\(\ds \)

\(=\)







\(\ds 2 \int_0^{\pi/2} \sqrt {2 - \sin^2 x} \rd x\)





Sum of Squares of Sine and Cosine














\(\ds \)

\(=\)







\(\ds 2 \sqrt 2 \int_0^{\pi/2} \sqrt {1 - \paren {\frac {\sqrt 2} 2} \sin^2 x} \rd x\)





extracting $\sqrt 2$














\(\ds \)

\(=\)







\(\ds 2 \sqrt 2 \map E {\dfrac {\sqrt 2} 2}\)





Definition of Complete Elliptic Integral of the Second Kind



$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $1$: The Nature of Differential Equations: $\S 5$: Falling Bodies and Other Rate Problems: Problem $6$




