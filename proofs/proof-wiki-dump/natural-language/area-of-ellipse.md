# 

Source: https://proofwiki.org/wiki/Area_of_Ellipse



Theorem
Let $K$ be an ellipse whose major axis is of length $2 a$ and whose minor axis is of length $2 b$.

The area $\AA$ of $K$ is given by:

$\AA = \pi a b$


Proof 1
Let $K$ be an ellipse aligned in a cartesian plane in reduced form.

Then from Equation of Ellipse in Reduced Form:

$\dfrac {x^2} {a^2} + \dfrac {y^2} {b^2} = 1$
Thus:

$y = \pm b \sqrt {1 - \dfrac {x^2} {a^2} }$
From the geometric interpretation of the definite integral:














\(\ds \AA\)

\(=\)







\(\ds b \int_{-a}^a \paren {\sqrt {1 - \dfrac {x^2} {a^2} } - \paren {-\sqrt {1 - \dfrac {x^2} {a^2} } } } \rd x\)




















\(\ds \)

\(=\)







\(\ds b \int_{-a}^a 2 \sqrt {1 - \dfrac {x^2} {a^2} } \rd x\)









Let $x = a \sin \theta$ (note that we can do this because $-a \le x \le a$).
Thus:

$\theta = \map \arcsin {\dfrac x a}$
and:

$\d x = a \cos \theta \rd \theta$
Then:














\(\ds \AA\)

\(=\)







\(\ds b \int_{\map \arcsin {\frac {-a} a} }^{\map \arcsin {\frac a a} } 2 a \sqrt {1 - \frac {\paren {a \sin \theta}^2} {a^2} } \cos \theta \rd \theta\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds b \int_{-\frac \pi 2}^{\frac \pi 2} 2 a \sqrt {1 - \sin^2 \theta} \cos \theta \rd \theta\)




















\(\ds \)

\(=\)







\(\ds b \int_{-\frac \pi 2}^{\frac \pi 2} 2 a \sqrt {\cos^2 \theta} \cos \theta \rd \theta\)





Sum of Squares of Sine and Cosine














\(\ds \)

\(=\)







\(\ds a b \int_{-\frac \pi 2}^{\frac \pi 2} 2 \cos^2 \theta \rd \theta\)




















\(\ds \)

\(=\)







\(\ds a b \int_{-\frac \pi 2}^{\frac \pi 2} \paren {1 + \map \cos {2 \theta} } \rd \theta\)





Double Angle Formula for Cosine: Corollary $1$














\(\ds \)

\(=\)







\(\ds a b \intlimits {\theta + \frac 1 2 \map \sin {2 \theta} } {-\frac \pi 2} {\frac \pi 2}\)





Definite Integral of Constant and Primitive of Cosine Function














\(\ds \)

\(=\)







\(\ds a b \paren {\frac {\pi} 2 + \frac 1 2 \map \sin {2 \cdot \frac {-\pi} 2} - \frac {-\pi} 2 - \frac 1 2 \map \sin {2 \cdot \frac \pi 2} }\)




















\(\ds \)

\(=\)







\(\ds a b \paren {2 \cdot \frac \pi 2 + 2 \cdot \frac 1 2 \cdot 0}\)




















\(\ds \)

\(=\)







\(\ds \pi a b\)









$\blacksquare$


Proof 2
Let $K$ be an ellipse aligned in a cartesian plane in reduced form.

Then from Equation of Ellipse in Reduced Form:

$\dfrac {x^2} {a^2} + \dfrac {y^2} {b^2} = 1$
Thus:

$y = \pm \dfrac b a \sqrt {a^2 - x^2}$
Consider a circle of radius $a$ whose center is at the origin.
From Equation of Circle center Origin, its equation is given by:

$x^2 + y^2 = a^2$
and so:

$y = \pm \sqrt {a^2 - x^2}$
The formulas show that each ordinate of the ellipse is $\dfrac b a$ the ordinate of the circle.
Since the same thing is true of the vertical chords:














\(\ds \AA_E\)

\(=\)







\(\ds \dfrac b a \AA_C\)





where $\AA_E$ and $\AA_C$ are the areas of the ellipse and the circle respectively














\(\ds \)

\(=\)







\(\ds \dfrac b a \paren {\pi a^2}\)





Area of Circle














\(\ds \)

\(=\)







\(\ds \pi a b\)









$\blacksquare$


Historical Note
The area of an ellipse was proved by Archimedes in his On Conoids and Spheroids.


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 4$: Geometric Formulas: $4.22$
1992: George F. Simmons: Calculus Gems ... (previous) ... (next): Chapter $\text {A}.5$: Archimedes (ca. $\text {287}$ – $\text {212}$ B.C.)
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): ellipse
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): ellipse




