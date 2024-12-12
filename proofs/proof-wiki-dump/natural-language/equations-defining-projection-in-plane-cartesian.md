# 

Source: https://proofwiki.org/wiki/Equations_defining_Projection_in_Plane/Cartesian

Theorem
Let $M$ and $N$ be distinct lines in the plane, both of which pass through the origin.
Let the angle between $M$ and the $x$-axis be $\theta$.
Let the angle between $N$ and the $x$-axis be $\phi$.

Let $\pr_{M, N}$ be the projection on $M$ along $N$:

$\forall P \in \R^2: \map {\pr_{M, N} } P =$ the intersection of $M$ with the line through $P$ parallel to $N$.

Let $P = \tuple {x, y}$ be an arbitrary point in the plane.
Then:

$\map {\pr_{M, N} } P = \begin {cases}
\tuple {0, y - x \tan \phi} & : \theta = \dfrac \pi 2 \\
\tuple {x, x \tan \theta} & : \phi = \dfrac \pi 2 \\
\tuple {\dfrac {x \tan \phi} {\tan \phi - \tan \theta} - \dfrac y {\tan \phi - \tan \theta}, \dfrac {y \tan \theta} {\tan \theta - \tan \phi} - \dfrac {x \tan \theta \tan \phi} {\tan \theta - \tan \phi} } & : \text {otherwise} 
\end {cases}$


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Proof
Let $P = \tuple {x_1, y_1} \in \R^2$ be arbitrary.




From Equation of Straight Line in Plane: Slope-Intercept Form, we can express $M$ and $N$ as follows:










\(\ds M: \, \)



\(\ds y\)

\(=\)







\(\ds m x\)
















\(\ds N: \, \)



\(\ds y\)

\(=\)







\(\ds n x\)









where:














\(\ds m\)

\(=\)







\(\ds \tan \theta\)




















\(\ds n\)

\(=\)







\(\ds \tan \phi\)










Let $\pr_{M, N}$ map $P = \tuple {x_1, y_1}$ onto $P' = \tuple {x_2, y_2}$.

From Equation of Straight Line in Plane: Point-Slope Form, $PP'$ can be expressed as:

$y - y_1 = n \paren {x - x_1}$

This holds also for $\tuple {x_2, y_2}$, and so:














\(\ds y_2 - y_1\)

\(=\)







\(\ds n \paren {x_2 - x_1}\)














\(\ds \leadsto \ \ \)





\(\ds n x_2\)

\(=\)







\(\ds y_2 - y_1 + n x_1\)




















\(\ds \)

\(=\)







\(\ds m x_2 - y_1 + n x_1\)





as $\tuple {x_2, y_2} \in M$








\(\ds \leadsto \ \ \)





\(\ds \paren {n - m} x_2\)

\(=\)







\(\ds n x_1 - y_1\)














\(\ds \leadsto \ \ \)





\(\ds x_2\)

\(=\)







\(\ds \dfrac {n x_1} {n - m} - \dfrac {y_1} {n - m}\)










Similarly:














\(\ds y_2 - y_1\)

\(=\)







\(\ds n \paren {x_2 - x_1}\)














\(\ds \leadsto \ \ \)





\(\ds \dfrac {y_2} n\)

\(=\)







\(\ds x_2 - x_1 + \dfrac {y_1} n\)




















\(\ds \)

\(=\)







\(\ds \dfrac {y_2} m - x_1 + \dfrac {y_1} n\)





as $\tuple {x_2, y_2} \in M$








\(\ds \leadsto \ \ \)





\(\ds \paren {\dfrac 1 n - \dfrac 1 m} y_2\)

\(=\)







\(\ds \dfrac {y_1} n - x_1\)














\(\ds \leadsto \ \ \)





\(\ds y_2\)

\(=\)







\(\ds \dfrac {m y_1} {m - n} - \dfrac {m n x_1} {m - n}\)









The result follows by substituting for $m$ and $n$.
$\Box$


Special Cases
When either $M$ or $N$ are coincident with the $y$-axis, then either $\tan \theta$ or $\tan \phi$ is undefined.
Hence these cases are analysed as special cases.

Let $M$ be coincident with the $y$-axis.




By definition of the projection on $M$ along $N$:

$x_2 = 0$
while from the definition of tangent:

$\tan \phi = \dfrac {y_1 - y_2} {x_1}$
from which it follows that:

$y_2 = y_1 - x_1 \tan \phi$
Hence if $P = \tuple {x, y}$ is an arbitrary point in the plane, then:

$\map {\pr_{M, N} } P = \tuple {0, y - x \tan \phi}$

Let $N$ be coincident with the $y$-axis.




By definition of the projection on $M$ along $N$:

$x_2 = x_1$
while from the definition of tangent:

$\tan \theta = \dfrac {y_2} {x_2}$
from which it follows that:

$y_2 = x_1 \tan \theta$
Hence if $P = \tuple {x, y}$ is an arbitrary point in the plane, then:

$\map {\pr_{M, N} } P = \tuple {x, x \tan \theta}$
$\blacksquare$





