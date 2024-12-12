# 

Source: https://proofwiki.org/wiki/Area_of_Circle/Proof_1

  This article was Featured Proof between 2 May 2009 and 9 May 2009.


Theorem
The area $A$ of a circle is given by:

$A = \pi r^2$
where $r$ is the radius of the circle.


Proof
From Equation of Circle:

$x^2 + y^2 = r^2$
Thus $y = \pm \sqrt {r^2 - x^2}$.

It follows that from the geometric interpretation of the definite integral:














\(\ds A\)

\(=\)







\(\ds \int_{-r}^r \paren {\sqrt {r^2 - x^2} - \paren {-\sqrt {r^2 - x^2} } } \rd x\)




















\(\ds \)

\(=\)







\(\ds \int_{-r}^r 2 \sqrt {r^2 - x^2} \rd x\)




















\(\ds \)

\(=\)







\(\ds \int_{-r}^r 2 r \sqrt {1 - \frac {x^2} {r^2} } \rd x\)









Let $x = r \sin \theta$ (note that we can do this because $-r \le x \le r$).
Thus $\theta = \map \arcsin {\dfrac x r}$ and $\rd x = r \cos \theta \rd \theta$.














\(\ds A\)

\(=\)







\(\ds \int_{\map \arcsin {\frac {-r} r} }^{\map \arcsin {\frac r r} } 2 r^2 \sqrt {1 - \frac {\paren {r \sin \theta}^2} {r^2} } \cos \theta \rd \theta\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds \int_{-\frac \pi 2}^{\frac \pi 2} 2 r^2 \sqrt {1 - \sin^2 \theta} \cos \theta \rd \theta\)




















\(\ds \)

\(=\)







\(\ds \int_{-\frac \pi 2}^{\frac \pi 2} 2 r^2 \sqrt {\cos^2 \theta} \cos \theta \rd \theta\)





Sum of Squares of Sine and Cosine














\(\ds \)

\(=\)







\(\ds r^2 \int_{-\frac \pi 2}^{\frac \pi 2} 2 \cos^2 \theta \rd \theta\)




















\(\ds \)

\(=\)







\(\ds r^2 \int_{-\frac \pi 2}^{\frac \pi 2} \paren {1 + \map \cos {2 \theta} } \rd \theta\)





Double Angle Formula for Cosine: Corollary $1$














\(\ds \)

\(=\)







\(\ds r^2 \intlimits {\theta + \frac 1 2 \map \sin {2 \theta} } {-\frac \pi 2} {\frac \pi 2}\)





from Definite Integral of Constant and Primitive of Cosine Function














\(\ds \)

\(=\)







\(\ds r^2 \paren {\frac \pi 2 + \frac 1 2 \map \sin {2 \cdot \frac {-\pi} 2} - \frac {-\pi} 2 - \frac 1 2 \map \sin {2 \cdot \frac \pi 2} }\)




















\(\ds \)

\(=\)







\(\ds r^2 \paren {2 \cdot \frac \pi 2 + 2 \cdot \frac 1 2 \cdot 0}\)




















\(\ds \)

\(=\)







\(\ds \pi r^2\)









$\blacksquare$


Sources
1944: R.P. Gillespie: Integration (2nd ed.) ... (previous) ... (next): Chapter $\text I$: $\S 1$. Area of a Circle




