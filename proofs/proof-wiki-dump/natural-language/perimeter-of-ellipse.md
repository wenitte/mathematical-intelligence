# 

Source: https://proofwiki.org/wiki/Perimeter_of_Ellipse

Theorem
Let $K$ be an ellipse whose major axis is of length $2 a$ and whose minor axis is of length $2 b$.

The perimeter $\PP$ of $K$ is given by:

$\PP = 4 a \map E e$
where:

$\ds \map E e = \int_0^{\pi / 2} \sqrt{1 - e^2 \sin^2 \theta} \rd \theta$ is the complete elliptic integral of the second kind
$e = \dfrac {\sqrt {a^2 - b^2} } a$ is the eccentricity of $K$.


Proof
Let $K$ be aligned in a cartesian plane such that:

the major axis of $K$ is aligned with the $x$-axis
the minor axis of $K$ is aligned with the $y$-axis.

Then from Equation of Ellipse in Reduced Form: parametric form:

$x = a \cos \theta, y = b \sin \theta$
Thus:














\(\ds \frac {\d x} {\d \theta}\)

\(=\)







\(\ds -a \sin \theta\)





Derivative of Cosine Function














\(\ds \frac {\d y} {\d \theta}\)

\(=\)







\(\ds b \cos \theta\)





Derivative of Sine Function




From Arc Length for Parametric Equations, the length of one quarter of the perimeter of $K$ is given by:














\(\ds \frac {\PP} 4\)

\(=\)







\(\ds \int_0^{\pi / 2} \sqrt {\paren {-a \sin \theta}^2 + \paren {b \cos \theta}^2} \rd \theta\)




















\(\ds \)

\(=\)







\(\ds \int_0^{\pi / 2} \sqrt {a^2 \paren {1 - \cos^2 \theta} + b^2 \cos^2 \theta} \rd \theta\)





Sum of Squares of Sine and Cosine














\(\ds \)

\(=\)







\(\ds \int_0^{\pi / 2} \sqrt {a^2 - \paren {a^2 - b^2} \cos^2 \theta} \rd \theta\)





simplifying














\(\ds \)

\(=\)







\(\ds a \int_0^{\pi / 2} \sqrt {1 - \paren {1 - \frac {b^2} {a^2} } \cos^2 \theta} \rd \theta\)





extracting $a$ as a factor




\(\text {(1)}: \quad\)









\(\ds \)

\(=\)







\(\ds a \int_0^{\pi / 2} \sqrt {1 - k^2 \cos^2 \theta} \rd \theta\)





setting $k^2 = 1 - \dfrac {b^2} {a^2} = \dfrac {a^2 - b^2} {a^2}$




Since $\cos \theta = \map \sin {\dfrac \pi 2 - \theta}$ we can write for any real function $\map f x$:

$\ds \int_0^{\pi / 2} \map f {\cos \theta} \rd \theta = \int_0^{\pi / 2} \map f {\map \sin {\frac \pi 2 - \theta} } \rd \theta$

So substituting $t = \dfrac \pi 2 - \theta$ this can be converted to:














\(\ds \int_0^{\pi / 2} \map f {\cos \theta} \rd \theta\)

\(=\)







\(\ds -\int_{\pi / 2}^0 \map f {\sin t} \rd t\)




















\(\ds \)

\(=\)







\(\ds \int_0^{\pi / 2} \map f {\sin t} \rd t\)










justifying the fact that $\cos$ can be replaced with $\sin$ in $(1)$ above, giving:

$\ds \PP = 4 a \int_0^{\pi / 2} \sqrt {1 - k^2 \sin^2 \theta} \rd \theta$
$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 4$: Geometric Formulas: $4.23$
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $1$: The Nature of Differential Equations: $\S 5$: Falling Bodies and Other Rate Problems: Problem $5$
1989: Ephraim J. Borowski and Jonathan M. Borwein: Dictionary of Mathematics ... (previous) ... (next): elliptic integral




