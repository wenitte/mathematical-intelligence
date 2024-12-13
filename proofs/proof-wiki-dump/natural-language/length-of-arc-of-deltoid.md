# 

Source: https://proofwiki.org/wiki/Length_of_Arc_of_Deltoid

Theorem
The total length of the arcs of a deltoid constructed within a deferent of radius $a$ is given by:

$\LL = \dfrac {16 a} 3$


Proof
Let $H$ be embedded in a cartesian plane with its center at the origin and one of its cusps positioned at $\tuple {a, 0}$.




We have that $\LL$ is $3$ times the length of one arc of the deltoid.
From Arc Length for Parametric Equations:

$\ds \LL = 3 \int_{\theta \mathop = 0}^{\theta \mathop = 2 \pi/3} \sqrt {\paren {\frac {\d x} {\d \theta} }^2 + \paren {\frac {\d y} {\d \theta} }^2} \rd \theta$
where, from Equation of Deltoid:

$\begin{cases}
x & = 2 b \cos \theta + b \cos 2 \theta \\
y & = 2 b \sin \theta - b \sin 2 \theta
\end{cases}$

We have:














\(\ds \frac {\d x} {\d \theta}\)

\(=\)







\(\ds -2 b \sin \theta - 2 b \sin 2 \theta\)




















\(\ds \frac {\d y} {\d \theta}\)

\(=\)







\(\ds 2 b \cos \theta - 2 b \cos 2 \theta\)










Thus:














\(\ds \)

\(\)







\(\ds \paren {\frac {\d x} {\d \theta} }^2 + \paren {\frac {\d y} {\d \theta} }^2\)




















\(\ds \)

\(=\)







\(\ds \paren {-2 b \sin \theta - 2 b \sin 2 \theta}^2 + \paren {2 b \cos \theta - 2 b \cos 2 \theta}^2\)




















\(\ds \)

\(=\)







\(\ds 4 b^2 \paren {\paren {-\sin \theta - \sin 2 \theta}^2 + \paren {\cos \theta - \cos 2 \theta}^2}\)




















\(\ds \)

\(=\)







\(\ds 4 b^2 \paren {\sin^2 \theta + 2 \sin \theta \sin 2 \theta + \sin^2 2 \theta + \cos^2 \theta - 2 \cos \theta \cos 2 \theta + \cos^2 2 \theta}\)




















\(\ds \)

\(=\)







\(\ds 4 b^2 \paren {2 + 2 \sin \theta \sin 2 \theta - 2 \cos \theta \cos 2 \theta}\)





Sum of Squares of Sine and Cosine














\(\ds \)

\(=\)







\(\ds 8 b^2 \paren {1 + \sin \theta \sin 2 \theta - \cos \theta \cos 2 \theta}\)




















\(\ds \)

\(=\)







\(\ds 8 b^2 \paren {1 + 2 \sin^2 \theta \cos \theta - \cos \theta \cos 2 \theta}\)





Double Angle Formula for Sine














\(\ds \)

\(=\)







\(\ds 8 b^2 \paren {1 + 2 \sin^2 \theta \cos \theta - \cos \theta \paren {1 - 2 \sin^2 \theta} }\)





Double Angle Formula for Cosine: Corollary $2$














\(\ds \)

\(=\)







\(\ds 8 b^2 \paren {1 - \cos \theta + 4 \sin^2 \theta \cos \theta}\)





simplifying














\(\ds \)

\(=\)







\(\ds 8 b^2 \paren {1 - \cos \theta + 4 \cos \theta \paren {1 - \cos^2 \theta} }\)





Sum of Squares of Sine and Cosine














\(\ds \)

\(=\)







\(\ds 8 b^2 \paren {1 - \cos \theta + 4 \cos \theta \paren {1 + \cos \theta} \paren {1 - \cos \theta} }\)





Difference of Two Squares














\(\ds \)

\(=\)







\(\ds 8 b^2 \paren {1 - \cos \theta} \paren {1 + 4 \cos \theta \paren {1 + \cos \theta} }\)




















\(\ds \)

\(=\)







\(\ds 8 b^2 \paren {1 - \cos \theta} \paren {1 + 4 \cos \theta + 4 \cos^2 \theta}\)




















\(\ds \)

\(=\)







\(\ds 8 b^2 \paren {1 - \cos \theta} \paren {1 + 2 \cos \theta}^2\)




















\(\ds \)

\(=\)







\(\ds 8 b^2 \paren {2 \sin^2 \frac \theta 2} \paren {1 + 2 \cos \theta}^2\)





Half Angle Formula for Sine














\(\ds \)

\(=\)







\(\ds 16 b^2 \sin^2 \frac \theta 2 \paren {1 + 2 \cos \theta}^2\)









Thus:

$\sqrt {\paren {\dfrac {\d x} {\d \theta} }^2 + \paren {\dfrac {\d y} {\d \theta} }^2} = 4 b \sin \dfrac \theta 2 \size {1 + 2 \cos \theta}$
In the range $0$ to $2 \pi / 3$, $1 + 2 \cos \theta$ is not less than $0$, and so:

$\ds \LL = 3 \int_0^{2 \pi / 3} 4 b \sin \dfrac \theta 2 \paren {1 + 2 \cos \theta} \rd \theta$

Put:

$u = \cos \dfrac \theta 2$
so:

$2 \dfrac {\d u} {\d \theta} = -\sin \dfrac \theta 2$
As $\theta$ increases from $0$ to $\dfrac {2 \pi} 3$, $u$ decreases from $1$ to $\dfrac 1 2$.
Then:














\(\ds 1 + 2 \cos \theta\)

\(=\)







\(\ds 1 + 2 \paren {2 \paren {\cos \dfrac \theta 2}^2 - 1}\)





Half Angle Formula for Cosine














\(\ds \)

\(=\)







\(\ds 4 u^2 - 1\)










Substituting:

$2 \dfrac {\d u} {\d \theta} = -\sin \dfrac \theta 2$
and the limits of integration:

$u = 1$ for $\theta = 0$
$u = \dfrac 1 2$ for $\theta = \dfrac {2 \pi} 3$
we obtain, after simplifying the sign:














\(\ds \LL\)

\(=\)







\(\ds 12 b \int_1^{1/2} \paren {1 - 4 u^2} 2 \rd u\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds 24 b \intlimits {u - \frac 4 3 u^3} 1 {1/2}\)




















\(\ds \)

\(=\)







\(\ds 24 b \paren {\paren {\frac 1 2 - \frac 4 3 \frac 1 {2^3} } - \paren {1 - \frac 4 3} }\)




















\(\ds \)

\(=\)







\(\ds 24 b \paren {\frac 1 2 - \frac 1 6 - 1 + \frac 4 3}\)




















\(\ds \)

\(=\)







\(\ds 24 b \paren {\frac 1 3 + \frac 1 3}\)




















\(\ds \)

\(=\)







\(\ds 16 b\)




















\(\ds \)

\(=\)







\(\ds \frac {16 a} 3\)









$\blacksquare$


Sources
1992: George F. Simmons: Calculus Gems ... (previous) ... (next): Chapter $\text {B}.21$: The Cycloid: Problem $11$




