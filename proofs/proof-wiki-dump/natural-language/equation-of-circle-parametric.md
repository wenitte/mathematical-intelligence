# 

Source: https://proofwiki.org/wiki/Equation_of_Circle/Parametric

Theorem
The equation of a circle embedded in the Cartesian plane with radius $R$ and center $\tuple {a, b}$ can be expressed as a parametric equation:

$\begin {cases} x = a + R \cos t \\ y = b + R \sin t \end {cases}$


Proof
Let the point $\tuple {x, y}$ satisfy the equations:














\(\ds x\)

\(=\)







\(\ds a + R \cos t\)




















\(\ds y\)

\(=\)







\(\ds b + R \sin t\)









By the Distance Formula, the distance between $\tuple {x, y}$ and $\tuple {a, b}$ is:

$\sqrt {\paren {\paren {a + R \cos t} - a}^2 + \paren {\paren {b + R \sin t} - b}^2}$
This simplifies to:

$\sqrt {R^2 \cos^2 t + R^2 \sin^2 t} = R \sqrt {\cos^2 t + \sin^2 t}$
Then by Sum of Squares of Sine and Cosine, this distance equals $R$.
Therefore the distance between points satisfying the equation and the center is constant and equal to the radius.

Let the point $\tuple {x, y}$ lie on the embedded circle with radius $R$ and center $\tuple {a, b}$.
As the distance between $\tuple {x, y}$ and $\tuple {a, b}$ is equal to $R$, it follows that:














\(\ds \paren {x - a}^2 + \paren {y - b}^2\)

\(=\)







\(\ds R^2\)





Distance Formula








\(\ds \leadsto \ \ \)





\(\ds \paren {\dfrac {x - a} R}^2 + \paren {\dfrac {y - b} R}^2\)

\(=\)







\(\ds 1\)





by algebraic manipulations








\(\ds \leadsto \ \ \)





\(\ds {x_0}^2 + {y_0}^2\)

\(=\)







\(\ds 1\)





substituting $x_0 = \dfrac {x - a} R$ and $y_0 = \dfrac {y - b} R$



where $\size {x_0}, \size {y_0} \in \closedint 0 1$, otherwise we would have ${x_0}^2 + {y_0}^2 > 1$.
From Cosine of Integer Multiple of Pi:

$\cos 0 = 1$
From Zeroes of Cosine:

$\map \cos {\dfrac \pi 2} = 0$
By Cosine Function is Continuous and the Intermediate Value Theorem:

$\exists \theta \in \closedint 0 {\dfrac \pi 2}: \cos \theta = \size {x_0}$
From Sum of Squares of Sine and Cosine:

$\cos^2 \theta + \sin^2 \theta = 1$
Hence:

$\sin \theta = \size {y_0}$

If $x - a$ and $y - b$ are both positive:














\(\ds \cos \theta\)

\(=\)







\(\ds \dfrac {x - a} R\)




















\(\ds \sin \theta\)

\(=\)







\(\ds \dfrac {y - b} R\)










If $x - a$ is positive and $y - b$ is negative, it follows from Cosine Function is Even and Sine Function is Odd that:














\(\ds \map \cos {-\theta}\)

\(=\)







\(\ds \dfrac {x - a} R\)




















\(\ds \map \sin {-\theta}\)

\(=\)







\(\ds \dfrac {y - b} R\)










If $x - a$ is negative and $y - b$ is positive, it follows by Cosine of Supplementary Angle and Sine of Supplementary Angle that:














\(\ds \map \cos {\pi - \theta}\)

\(=\)







\(\ds \dfrac {x - a} R\)




















\(\ds \map \sin {\pi - \theta}\)

\(=\)







\(\ds \dfrac {y - b} R\)










Finally, if $x - a$ and $y - b$ are both negative:














\(\ds \map \cos {-\pi + \theta}\)

\(=\)







\(\ds \dfrac {x - a} R\)




















\(\ds \map \sin {-\pi + \theta}\)

\(=\)







\(\ds \dfrac {y - b} R\)










Combining these four cases, we have found $t \in \R$ such that:














\(\ds \cos t\)

\(=\)







\(\ds \dfrac {x - a} R\)




















\(\ds \sin t\)

\(=\)







\(\ds \dfrac {y - b} R\)










We rearrange these equations to get:

$\begin {cases} x = a + R \cos t \\ y = b + R \sin t \end {cases}$
$\blacksquare$


Sources
1959: T.J. Willmore: An Introduction to Differential Geometry ... (previous) ... (next): Chapter $\text{I}$: The Theory of Space Curves: $1$. Introductory remarks about space curves
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): circle
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): circle




