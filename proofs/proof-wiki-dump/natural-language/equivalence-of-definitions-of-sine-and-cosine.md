# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Sine_and_Cosine



Theorem
In the following, $\theta$ understood to take values in $\hointr 0 {2 \pi}$.

The following definitions of the concept of Sine Function are equivalent:
Definition from Circle
Consider a unit circle $C$ whose center is at the origin of a cartesian plane.




Let $P = \tuple {x, y}$ be the point on $C$ in the first quadrant such that $\theta$ is the angle made by $OP$ with the $x$-axis.
Let $AP$ be the perpendicular from $P$ to the $x$-axis.

Then the sine of $\theta$ is defined as the length of $AP$.
Hence in the first quadrant, the sine is positive.


Analytic Definition
The real sine function $\sin: \R \to \R$ is defined as:










\(\ds \forall x \in \R: \, \)



\(\ds \sin x\)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \paren {-1}^n \frac {x^{2 n + 1} } {\paren {2 n + 1}!}\)




















\(\ds \)

\(=\)







\(\ds x - \frac {x^3} {3!} + \frac {x^5} {5!} - \cdots\)











The following definitions of the concept of Cosine Function are equivalent:
Definition from Circle
Consider a unit circle $C$ whose center is at the origin of a cartesian plane.




Let $P = \tuple {x, y}$ be the point on $C$ in the first quadrant such that $\theta$ is the angle made by $OP$ with the $x$-axis.
Let $AP$ be the perpendicular from $P$ to the $y$-axis.

Then the cosine of $\theta$ is defined as the length of $AP$.
Hence in the first quadrant, the cosine is positive.


Analytic Definition
The real cosine function $\cos: \R \to \R$ is defined as:














\(\ds \cos x\)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \paren {-1}^n \frac {x^{2 n} } {\paren {2 n!} }\)




















\(\ds \)

\(=\)







\(\ds 1 - \frac {x^2} {2!} + \frac {x^4} {4!} - \frac {x^6} {6!} + \cdots + \paren {-1}^n \frac {x^{2 n} } {\paren {2 n}!} + \cdots\)











Proof
Consider the following vector-valued function $\mathbf f : \R \to {\closedint {-1} 1}^2$:

$\map {\mathbf f} t = \tuple {\cos t, \sin t}$
where $\cos t$ and $\sin t$ are defined analytically.

Then, for any $t$ the distance to the origin is:














\(\ds \norm {\map {\mathbf f} t - \bszero}\)

\(=\)







\(\ds \norm {\map {\mathbf f} t}\)




















\(\ds \)

\(=\)







\(\ds \sqrt {\cos^2 t + \sin^2 t}\)





Definition of Euclidean Norm














\(\ds \)

\(=\)







\(\ds 1\)





Sum of Squares of Sine and Cosine



Therefore, $\map {\mathbf f} t$ always lies on the unit circle.

For arbitrary $\theta \in \hointr 0 {2 \pi}$, the arc length on $\closedint 0 \theta$ is:














\(\ds s\)

\(=\)







\(\ds \int_0^\theta \sqrt {\paren {\frac \d {\d t} \cos t}^2 + \paren {\frac \d {\d t} \sin t}^2} \rd t\)





Arc Length for Parametric Equations














\(\ds \)

\(=\)







\(\ds \int_0^\theta \sqrt {\paren {-\sin t}^2 + \paren {\cos t}^2} \rd t\)





Derivative of Cosine Function and Derivative of Sine Function














\(\ds \)

\(=\)







\(\ds \int_0^\theta \rd t\)





Sum of Squares of Sine and Cosine














\(\ds \)

\(=\)







\(\ds \theta\)





Definite Integral of Constant



Thus, by the definition of radians, the angle made by $\map {\mathbf f} \theta$ with the $x$-axis is $\theta$.

A straight line segment from $\tuple {0, \sin \theta}$ to $\tuple {\cos \theta, \sin \theta}$ is perpendicular to the $y$-axis.
Its length is $\size {\cos \theta}$, and it is on the side of the $y$-axis corresponding to the sign of $\cos \theta$.
But that is the unit circle definition for cosine.
$\Box$

Similarly, a straight line segment from $\tuple {\cos \theta, 0}$ to $\tuple {\cos \theta, \sin \theta}$ is perpendicular to the $x$-axis, with length $\size {\sin \theta}$ and appropriate direction.
Again, that is the unit circle definition for sine.
$\blacksquare$





