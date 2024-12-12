# 

Source: https://proofwiki.org/wiki/Formation_of_Ordinary_Differential_Equation_by_Elimination/Examples/Simple_Harmonic_Motion

Examples of Formation of Ordinary Differential Equation by Elimination
Consider the equation governing simple harmonic motion:

$(1): \quad y = A \map \cos {\omega x + \phi}$
This can be expressed as the ordinary differential equation of order $3$:

$y \cdot \dfrac {\d^3 y} {\d x^3} = \dfrac {\d y} {\d x} \cdot \dfrac {\d^2 y} {\d x^2}$


Proof
This equation has a dependent variable of $y$ and an independent variable of $x$.
It is required to eliminate the arbitrary constants $A$, $\phi$ and $\omega$.
Differentiating $2$ times with respect to $x$:




\(\text {(2)}: \quad\)









\(\ds \dfrac {\d y} {\d x}\)

\(=\)







\(\ds -\omega A \map \sin {\omega x + \phi}\)





Derivative of Cosine Function




\(\text {(3)}: \quad\)









\(\ds \dfrac {\d^2 y} {\d x^2}\)

\(=\)







\(\ds -\omega^2 A \map \cos {\omega x + \phi}\)





Derivative of Sine Function














\(\ds \)

\(=\)







\(\ds -\omega^2 y\)









We have arrived at a ordinary differential equation of order $2$:

$\dfrac {\d^2 y} {\d x^2} = -\omega^2 y$
Now we differentiate one further time with respect to $x$:














\(\ds \map {\dfrac \d {\d x} } {\dfrac {\d^2 y} {\d x^2} }\)

\(=\)







\(\ds \map {\dfrac \d {\d x} } {-\omega^2 y}\)










\(\text {(4)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \dfrac {\d^3 y} {\d x^3}\)

\(=\)







\(\ds -\omega^2 \dfrac {\d y} {\d x}\)














\(\ds \leadsto \ \ \)





\(\ds \dfrac {\d^3 y} {\d x^3} / \dfrac {\d y} {\d x}\)

\(=\)







\(\ds -\omega^2\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\d^2 y} {\d x^2} / y\)





from $(3)$








\(\ds \leadsto \ \ \)





\(\ds y \cdot \dfrac {\d^3 y} {\d x^3}\)

\(=\)







\(\ds \dfrac {\d y} {\d x} \cdot \dfrac {\d^2 y} {\d x^2}\)





multiplying up



$\blacksquare$


Sources
1952: H.T.H. Piaggio: An Elementary Treatise on Differential Equations and their Applications (revised ed.) ... (previous) ... (next): Chapter $\text I$: Introduction and Definitions. Elimination. Graphical Representation: $5$. Examples




