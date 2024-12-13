# 

Source: https://proofwiki.org/wiki/Length_of_Arc_of_Cycloid/Proof_1

Theorem
Let $C$ be a cycloid generated by the equations:

$x = a \paren {\theta - \sin \theta}$
$y = a \paren {1 - \cos \theta}$
Then the length of one arc of the cycloid is $8 a$.


Proof
Let $L$ be the length of one arc of the cycloid.
From Arc Length for Parametric Equations:

$\ds L = \int_0^{2 \pi} \sqrt {\paren {\frac {\d x} {\d \theta} }^2 + \paren {\frac {\d y} {\d \theta} }^2} \rd \theta$
where, from Equation of Cycloid:

$x = a \paren {\theta - \sin \theta}$
$y = a \paren {1 - \cos \theta}$
we have:














\(\ds \frac {\d x} {\d \theta}\)

\(=\)







\(\ds a \paren {1 - \cos \theta}\)




















\(\ds \frac {\d y} {\d \theta}\)

\(=\)







\(\ds a \sin \theta\)









Thus:














\(\ds \paren {\frac {\d x} {\d \theta} }^2 + \paren {\frac {\d y} {\d \theta} }^2\)

\(=\)







\(\ds a^2 \paren {\paren {1 - \cos \theta}^2 + \sin^2 \theta}\)




















\(\ds \)

\(=\)







\(\ds a^2 \paren {1 - 2 \cos \theta + \cos^2 \theta + \sin^2 \theta}\)




















\(\ds \)

\(=\)







\(\ds 2 a^2 \paren {1 - \cos \theta}\)




















\(\ds \)

\(=\)







\(\ds 4 a^2 \map {\sin^2} {\theta / 2}\)





Half Angle Formula for Sine




Thus:














\(\ds L\)

\(=\)







\(\ds \int_0^{2 \pi} 2 a \map \sin {\theta / 2} \rd \theta\)




















\(\ds \)

\(=\)







\(\ds \bigintlimits {-4 a \map \cos {\theta / 2} } 0 {2 \pi}\)




















\(\ds \)

\(=\)







\(\ds 8 a\)










So $L = 8 a$ where $a$ is the radius of the generating circle.
$\blacksquare$


Sources
1992: George F. Simmons: Calculus Gems ... (previous) ... (next): Chapter $\text {B}.21$: The Cycloid: Example $2$



