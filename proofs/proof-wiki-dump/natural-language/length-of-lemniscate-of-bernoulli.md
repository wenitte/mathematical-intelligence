# 

Source: https://proofwiki.org/wiki/Length_of_Lemniscate_of_Bernoulli

Theorem
The total length of the lemniscate of Bernoulli given in polar coordinates as:

$r^2 = a^2 \cos 2 \theta$
is given by:














\(\ds L\)

\(=\)







\(\ds 4 a \map F {\sqrt 2, \dfrac \pi 4}\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 {\sqrt {2 \pi} } \paren {\map \Gamma {\dfrac 1 4} }^2\)









where $F$ denotes the incomplete elliptic integral of the first kind.


Proof
The arc length of a small length increment $\d s$ is given in polar co-ordinates by:

$\paren {\d s}^2 = \paren {r \rd \theta}^2 + \paren {\d r}^2$
from which:

$\dfrac {\d s} {\d \theta} = \sqrt {r^2 + \paren {\dfrac {\d r} {\d \theta} }^2}$

Half of one lobe of the lemniscate is achieved when $\theta$ goes from $0$ to $\pi / 4$.
Therefore the total length of the lemniscate of Bernoulli is given by:

$\ds L = 4 \int_0^{\pi/4} \sqrt {r^2 + \paren {\dfrac {\d r} {\d \theta} }^2} \rd \theta$
First we show:














\(\ds r^2\)

\(=\)







\(\ds a^2 \cos 2 \theta\)














\(\ds \leadsto \ \ \)





\(\ds 2 r \frac {\d r} {\d \theta}\)

\(=\)







\(\ds -2 a^2 \sin 2 \theta\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d r} {\d \theta}\)

\(=\)







\(\ds -\frac {a^2 \sin 2 \theta} {a \sqrt {\cos 2 \theta} }\)














\(\ds \leadsto \ \ \)





\(\ds \paren {\dfrac {\d r} {\d \theta} }^2\)

\(=\)







\(\ds \frac {a^2 \sin^2 2 \theta} {\cos 2 \theta}\)










So:














\(\ds r^2 + \paren {\dfrac {\d r} {\d \theta} }^2\)

\(=\)







\(\ds a^2 \cos 2 \theta + \frac {a^2 \sin^2 2 \theta} {\cos 2 \theta}\)




















\(\ds \)

\(=\)







\(\ds a^2 \frac {\cos^2 2 \theta + \sin^2 2 \theta} {\cos 2 \theta}\)




















\(\ds \)

\(=\)







\(\ds \frac {a^2} {\cos 2 \theta}\)





Sum of Squares of Sine and Cosine




Thus:














\(\ds L\)

\(=\)







\(\ds 4 a \int_0^{\pi / 4} \frac {\d \theta} {\sqrt {\cos 2 \theta} }\)




















\(\ds \)

\(=\)







\(\ds 4 a \int_0^{\pi / 4} \frac {\d \theta} {\sqrt {1 - 2 \sin^2 \theta} }\)




















\(\ds \)

\(=\)







\(\ds 4 a \map F {\sqrt 2, \dfrac \pi 4}\)





Definition of Incomplete Elliptic Integral of the First Kind



$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $1$: The Nature of Differential Equations: $\S 5$: Falling Bodies and Other Rate Problems: Problem $7$
1983: François Le Lionnais and Jean Brette: Les Nombres Remarquables ... (previous) ... (next): $1,31102 87771 46059 90523 \ldots$




