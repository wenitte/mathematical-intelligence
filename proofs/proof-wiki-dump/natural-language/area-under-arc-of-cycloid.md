# 

Source: https://proofwiki.org/wiki/Area_under_Arc_of_Cycloid



Theorem
Let $C$ be a cycloid generated by the equations:

$x = a \paren {\theta - \sin \theta}$
$y = a \paren {1 - \cos \theta}$

Then the area under one arc of the cycloid is $3 \pi a^2$.

That is, the area under one arc of the cycloid is three times the area of the generating circle.


Proof
Let $A$ be the area under of one arc of the cycloid. 
From Area under Curve, $A$ is defined by:














\(\ds A\)

\(=\)







\(\ds \int_0^{2 \pi a} y \rd x\)




















\(\ds \)

\(=\)







\(\ds \int_0^{2 \pi} a \paren {1 - \cos \theta} \frac {\d x} {\d \theta} \rd \theta\)










But:

$\dfrac {\d x} {\d \theta} = a \paren {1 - \cos \theta}$
and so:














\(\ds A\)

\(=\)







\(\ds a^2 \int_0^{2 \pi} \paren {1 - \cos \theta}^2 \rd \theta\)




















\(\ds \)

\(=\)







\(\ds a^2 \int_0^{2 \pi} \paren {1 - 2 \cos \theta + \cos^2 \theta} \rd \theta\)




















\(\ds \)

\(=\)







\(\ds a^2 \int_0^{2 \pi} \paren {1 - 2 \cos \theta + \frac 1 2 + \frac {\cos 2 \theta} 2} \rd \theta\)




















\(\ds \)

\(=\)







\(\ds a^2 \intlimits {\theta + 2 \sin \theta + \frac {\theta} 2 + \frac {\sin 2 \theta} 4} 0 {2 \pi}\)




















\(\ds \)

\(=\)







\(\ds 3 \pi a^2\)









$\blacksquare$


Also see
Length of Arc of Cycloid


Historical Note
The proof of the Area under Arc of Cycloid was published in $1644$ by Evangelista Torricelli.
Galileo, by cutting out templates and measuring their masses, had previously estimated the area as being approximately $3$ times the area of the generating circle.
It is believed that Gilles Personne de Roberval found this result earlier than Torricelli, but lost priority when he failed to publish his proof.


Sources
1926: Henry Ernest Dudeney: Modern Puzzles ... (previous) ... (next): Solutions: $209$. -- A Wheel Fallacy
1968: Henry Ernest Dudeney: 536 Puzzles & Curious Problems ... (previous) ... (next): Answers: $293$. A Wheel Fallacy
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 11$: Special Plane Curves: Cycloid: $11.6$
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $1$: The Nature of Differential Equations: $\S 6$: The Brachistochrone. Fermat and the Bernoullis
1992: George F. Simmons: Calculus Gems ... (previous) ... (next): Chapter $\text {A}.15$: Torricelli ($\text {1608}$ – $\text {1647}$)
1992: George F. Simmons: Calculus Gems ... (previous) ... (next): Chapter $\text {B}.21$: The Cycloid: Example $1$




