# 

Source: https://proofwiki.org/wiki/Kepler%27s_Laws_of_Planetary_Motion/Second_Law



Physical Law
Kepler's second law of planetary motion is one of the three physical laws of celestial mechanics deduced by Johannes Kepler:

The line joining the sun and a planet sweeps out equal areas in equal times.



Proof
Consider a planet $p$ of mass $m$ moving around the sun in the plane under the influence of the force $\mathbf F$ imparted by the gravitational field which the two bodies give rise to.
Let the position of $p$ at time $t$ be given in polar coordinates as $\polar {r, \theta}$.

By definition of the gravitational field, $\mathbf F$ is a central force.
From Derivative of Angular Component under Central Force:

$r^2 \dfrac {\d \theta} {\d t} = h$
for some constant $h$.

Without loss of generality, assume that $h > 0$, which means that $p$ is travelling in the direction of positive $\theta$.

Let $\map A t$ be the area swept out by $\mathbf r$ in time $t$ relative to some fixed point of reference.

For a small angle $\delta \theta$, the area $\delta A$ can be approximated to the area of a sector of a circle.
Thus:

$\delta A = \dfrac {r^2 \delta \theta} 2$
and so in the limit:














\(\ds \dfrac {\d A} {\d \theta}\)

\(=\)







\(\ds \dfrac {r^2} 2\)














\(\ds \leadsto \ \ \)





\(\ds \int \rd A\)

\(=\)







\(\ds \dfrac 1 2 \int r^2 \rd \theta\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 2 \int r^2 \dfrac {\d \theta} {\d t} \rd t\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 2 \int h \rd t\)














\(\ds \leadsto \ \ \)





\(\ds \int_{t_1}^{t_2} \rd A\)

\(=\)







\(\ds \dfrac 1 2 \int_{t_1}^{t_2} h \rd t\)





integrating between times $t_1$ and $t_2$








\(\ds \leadsto \ \ \)





\(\ds \map A {t_2} - \map A {t_1}\)

\(=\)







\(\ds \dfrac h 2 \paren {t_2 - t_1}\)










That is, given a time interval $t_2 - t_1$, the area $\map A {t_2} - \map A {t_1}$ is the same, whatever the physical position of $p$.
$\blacksquare$


Also see
Kepler's First Law of Planetary Motion
Kepler's Third Law of Planetary Motion


Source of Name
This entry was named for Johannes Kepler.


Historical Note
Kepler derived his three laws of planetary motion in the early $1600$s from a concentrated study over the course of $20$ years of the colossal wealth of observational data which had been made previously by Tycho Brahe of the behavior of the planets of the solar system, and in particular Mars.
The first two of these results he published in his gigantic $1609$ work Astronomia Nova.
The third appears some ten years later in his Harmonices Mundi of $1619$.
It was Isaac Newton who managed to interpret these three laws and so work out what is now known as Newton's Law of Universal Gravitation, from which Kepler's  laws can straightforwardly be derived.


Sources
1937: Eric Temple Bell: Men of Mathematics ... (previous) ... (next): Chapter $\text{VI}$: On the Seashore
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $\S 3.21$: Newton's Law of Gravitation: $(10)$
1992: George F. Simmons: Calculus Gems ... (previous) ... (next): Chapter $\text {A}.10$: Kepler ($\text {1571}$ – $\text {1630}$)
1992: George F. Simmons: Calculus Gems ... (previous) ... (next): Chapter $\text {B}.25$: Kepler's Laws and Newton's Law of Gravitation
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Kepler's laws
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Kepler's laws
2008: Ian Stewart: Taming the Infinite ... (previous) ... (next): Chapter $8$: The System of the World: Kepler
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): Kepler's laws of planetary motion (ii)




