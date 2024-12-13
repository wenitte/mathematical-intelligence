# 

Source: https://proofwiki.org/wiki/Length_of_Arc_of_Nephroid

  This article was Featured Proof between 13 October 2020 and 17th December 2020.


Theorem
The total length of the arcs of a nephroid constructed around a deferent of radius $a$ is given by:

$\LL = 12 a$


Proof
Let a nephroid $H$ be embedded in a cartesian plane with its center at the origin and its cusps positioned at $\tuple {\pm a, 0}$.




We have that $\LL$ is $2$ times the length of one arc of the nephroid.
From Arc Length for Parametric Equations:

$\ds \LL = 2 \int_{\theta \mathop = 0}^{\theta \mathop = \pi} \sqrt {\paren {\frac {\d x} {\d \theta} }^2 + \paren {\frac {\d y} {\d \theta} }^2} \rd \theta$
where, from Equation of Nephroid:

$\begin{cases}
x & = 3 b \cos \theta - b \cos 3 \theta \\
y & = 3 b \sin \theta - b \sin 3 \theta
\end{cases}$

We have:














\(\ds \frac {\d x} {\d \theta}\)

\(=\)







\(\ds -3 b \sin \theta + 3 b \sin 3 \theta\)




















\(\ds \frac {\d y} {\d \theta}\)

\(=\)







\(\ds 3 b \cos \theta - 3 b \cos 3 \theta\)










Thus:














\(\ds \)

\(\)







\(\ds \paren {\frac {\d x} {\d \theta} }^2 + \paren {\frac {\d y} {\d \theta} }^2\)




















\(\ds \)

\(=\)







\(\ds \paren {-3 b \sin \theta + 3 b \sin 3 \theta}^2 + \paren {3 b \cos \theta - 3 b \cos 3 \theta}^2\)




















\(\ds \)

\(=\)







\(\ds 9 b^2 \paren {\paren {-\sin \theta + \sin 3 \theta}^2 + \paren {\cos \theta - \cos 3 \theta}^2}\)




















\(\ds \)

\(=\)







\(\ds 9 b^2 \paren {\sin^2 \theta - 2 \sin \theta \sin 3 \theta + \sin^2 3 \theta + \cos^2 \theta - 2 \cos \theta \cos 3 \theta + \cos^2 3 \theta}\)





Square of Difference














\(\ds \)

\(=\)







\(\ds 9 b^2 \paren {2 - 2 \sin \theta \sin 3 \theta - 2 \cos \theta \cos 3 \theta}\)





Sum of Squares of Sine and Cosine














\(\ds \)

\(=\)







\(\ds 18 b^2 \paren {1 - \paren {\sin \theta \sin 3 \theta + \cos \theta \cos 3 \theta} }\)




















\(\ds \)

\(=\)







\(\ds 18 b^2 \paren {1 - \cos 2 \theta}\)





Cosine of Difference














\(\ds \)

\(=\)







\(\ds 18 b^2 \paren {2 \sin^2 \theta}\)





Square of Sine














\(\ds \)

\(=\)







\(\ds 36 b^2 \sin^2 \theta\)





simplifying



Thus:

$\sqrt {\paren {\dfrac {\d x} {\d \theta} }^2 + \paren {\dfrac {\d y} {\d \theta} }^2} = 6 b \sin \theta$

So:














\(\ds \LL\)

\(=\)







\(\ds 2 \int_0^\pi 6 b \sin \theta \rd \theta\)




















\(\ds \)

\(=\)







\(\ds 12 b \int_0^\pi \sin \theta \rd \theta\)




















\(\ds \)

\(=\)







\(\ds 12 b \bigintlimits {-\cos \theta} 0 \pi\)




















\(\ds \)

\(=\)







\(\ds 12 b \paren {-\cos \pi - \paren {-\cos 0} }\)




















\(\ds \)

\(=\)







\(\ds 12 b \paren {-\paren {-1} - \paren {-1} }\)




















\(\ds \)

\(=\)







\(\ds 24 b\)




















\(\ds \)

\(=\)







\(\ds 12 a\)









$\blacksquare$


Sources
1992: George F. Simmons: Calculus Gems ... (previous) ... (next): Chapter $\text {B}.21$: The Cycloid: Problem $14$




