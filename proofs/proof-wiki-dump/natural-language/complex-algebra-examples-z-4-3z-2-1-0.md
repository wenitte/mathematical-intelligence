# 

Source: https://proofwiki.org/wiki/Complex_Algebra/Examples/z%5E4_-_3z%5E2_%2B_1_%3D_0

Example of Complex Algebra
The roots of the equation:

$z^4 - 3z^2 + 1 = 0$
are:

$2 \cos 36 \degrees, 2 \cos 72 \degrees, 2 \cos 216 \degrees, 2 \cos 252 \degrees$


Proof













\(\ds z^4 - 3z^2 + 1\)

\(=\)







\(\ds z^4 - 2z^2 + 1 - z^2\)





Separating the $z^2$ term














\(\ds \)

\(=\)







\(\ds (z^2 - 1)^2 - z^2\)





Completing the Square














\(\ds \)

\(=\)







\(\ds (z^2 - 1 - z)(z^2 - 1 + z)\)





Difference of Two Squares



From the Quadratic Formula applied to each of the above quadratic factors we can easily see that the four roots are:

$\dfrac {\pm 1 \pm \sqrt 5} 2$
$360 \degrees = 2 \pi \radians$, so $72 \degrees = 2 \pi / 5 \radians$
From De Moivre's Formula, the roots of $x^5 - 1 = 0$ are:

$(\cos(2 n \pi) + i \sin(2 n \pi))^{1/5}= \cos \dfrac {2 n \pi} 5 + i \sin \dfrac {2 n \pi} 5$
However, the coefficient of $x^4$ is $0$ and therefore, by Viète's Formulas, the sum of the roots of $x^5 - 1 = 0$ are also $0$ which means that the sum of the real parts of the roots are also $0$:














\(\ds 0\)

\(=\)







\(\ds \cos 0 + \cos \dfrac {2 \pi} 5 + \cos \dfrac {4 \pi} 5 + \cos \dfrac {6 \pi} 5 + \cos \dfrac {8 \pi} 5\)




















\(\ds \)

\(=\)







\(\ds 1 + \cos \dfrac {2 \pi} 5 + \cos \dfrac {4 \pi} 5 + \cos \dfrac {6 \pi} 5 + \cos \dfrac {8 \pi} 5\)









Now:














\(\ds \cos(\pi + x)\)

\(=\)







\(\ds -\cos(x)\)





Cosine of Angle plus Straight Angle














\(\ds \)

\(=\)







\(\ds \cos(-x)\)





Cosine Function is Even














\(\ds \)

\(=\)







\(\ds -\cos(\pi - x)\)





Cosine of Angle plus Straight Angle














\(\ds \)

\(=\)







\(\ds \cos(\pi - x)\)





Cosine Function is Even



Hence:














\(\ds \cos \dfrac {6 \pi} 5\)

\(=\)







\(\ds \map {\cos} {\pi + \dfrac \pi 5}\)




















\(\ds \)

\(=\)







\(\ds \map {\cos} {\pi - \dfrac \pi 5}\)




















\(\ds \)

\(=\)







\(\ds \cos \dfrac {4 \pi} 5\)









and














\(\ds \cos \dfrac {8 \pi} 5\)

\(=\)







\(\ds \map {\cos} {\pi + \dfrac {3 \pi} 5}\)




















\(\ds \)

\(=\)







\(\ds \map {\cos} {\pi - \dfrac {3 \pi} 5}\)




















\(\ds \)

\(=\)







\(\ds \cos \dfrac {2 \pi} 5\)









We can now simplify the sum of the real parts of the roots of $x^5 - 1 = 0$:














\(\ds 0\)

\(=\)







\(\ds 1 + \cos \dfrac {2 \pi} 5 + \cos \dfrac {4 \pi} 5 + \cos \dfrac {6 \pi} 5 + \cos \dfrac {8 \pi} 5\)




















\(\ds \)

\(=\)







\(\ds 1 + 2 \cos \dfrac {2 \pi} 5 + 2 \cos \dfrac {4 \pi} 5\)





$\cos(\pi + x) = \cos(\pi - x)$














\(\ds \)

\(=\)







\(\ds 1 + 2 \cos \dfrac {2 \pi} 5 + 4 \cos^2 \dfrac {2 \pi} 5 - 2\)





Double Angle Formula for Cosine, $\cos 2 \theta = 2 \cos^2 \theta - 1$














\(\ds \)

\(=\)







\(\ds 4 \cos^2 \dfrac {2 \pi} 5 + 2 \cos \dfrac {2 \pi} 5 - 1\)





simplifying



From the Quadratic Formula we then have two potential values:

$\cos \dfrac {2 \pi} 5 = \dfrac {-1 \pm \sqrt 5} 4$
$0 < 2 \pi / 5 < \pi / 2$, so we know that $\cos \dfrac {2 \pi} 5 > 0$, hence:

$2 \cos 72 \degrees = 2 \cos \dfrac {2 \pi} 5 = \dfrac {-1 + \sqrt 5} 2$
From Cosine of Angle plus Straight Angle, $\map \cos {x + 180 \degrees} = -\cos x$, hence:

$2 \cos 252 \degrees = \dfrac {1 - \sqrt 5} 2$
Now:














\(\ds 2 \cos 36 \degrees\)

\(=\)







\(\ds 2 \cos \dfrac \pi 5\)




















\(\ds \)

\(=\)







\(\ds 2 \map {\cos} {\dfrac {- \pi} 5}\)





Cosine Function is Even














\(\ds \)

\(=\)







\(\ds - 2 \map {\cos} {\pi - \dfrac \pi 5}\)





Cosine of Angle plus Straight Angle














\(\ds \)

\(=\)







\(\ds - 2 \map {\cos} {\dfrac {4 \pi} 5}\)





simplifying














\(\ds \)

\(=\)







\(\ds 1 + 2 \cos \dfrac {2 \pi} 5\)





Sum of the real parts, $1 + 2 \cos \dfrac {2 \pi} 5 + 2 \cos \dfrac {4 \pi} 5 = 0$














\(\ds \)

\(=\)







\(\ds 1 + \dfrac {-1 + \sqrt 5} 2\)




















\(\ds \)

\(=\)







\(\ds \dfrac {1 + \sqrt 5} 2\)









From Cosine of Angle plus Straight Angle, $\map \cos {x + 180 \degrees} = -\cos x$, hence:

$2 \cos 216 \degrees = \dfrac {- 1 - \sqrt 5} 2$
We have therefore shown that the four roots of $z^4 - 3z^2 + 1 = 0$ are $\dfrac {\pm 1 \pm \sqrt 5} 2$ and that these four values are also equal to $2 \cos 36 \degrees, 2 \cos 72 \degrees, 2 \cos 216 \degrees, 2 \cos 252 \degrees$
$\blacksquare$


Sources
1981: Murray R. Spiegel: Theory and Problems of Complex Variables (SI ed.) ... (previous) ... (next): $1$: Complex Numbers: Supplementary Problems: De Moivre's Theorem: $91$




