# 

Source: https://proofwiki.org/wiki/Motion_of_Rocket_in_Outer_Space/Proof_2

Theorem
Let $B$ be a rocket travelling in outer space.
Let the velocity of $B$ at time $t$ be $\mathbf v$.
Let the mass of $B$ at time $t$ be $m$.
Let the exhaust velocity of $B$ be constant at $\mathbf b$.

Then the equation of motion of $B$ is given by:

$m \dfrac {\d \mathbf v} {\d t} = - \mathbf b \dfrac {\d m} {\d t}$


Proof
From Newton's Second Law of Motion:

$\mathbf F = \dfrac \d {\d t} \paren {m \mathbf v}$
At time $t + \Delta t$, let:

the mass of $B$ be $m + \Delta m$
the velocity of $B$ be $\mathbf v + \Delta \mathbf v$.
The fuel is being consumed, so the increase in mass of the fuel during time $\Delta t$ is $-\Delta m$.
Thus the exhaust products, therefore of mass $-\Delta m$, are expelled at a velocity $-\mathbf b$ relative to $B$.
Thus this material is actually moving at a velocity $\mathbf v - \mathbf b$.

By Conservation of Momentum, the total linear momentum is constant.
Thus:














\(\ds m \mathbf v\)

\(=\)







\(\ds \paren {m + \Delta m} \paren {\mathbf v + \Delta \mathbf v} + \paren {-\Delta m} \paren {\mathbf v - \mathbf b}\)




















\(\ds \)

\(=\)







\(\ds m \mathbf v + m \Delta \mathbf v + \paren {\Delta m} \mathbf v + \Delta m \Delta \mathbf v - \paren {-\Delta m} \mathbf v + \Delta m \mathbf b\)














\(\ds \leadsto \ \ \)





\(\ds m \Delta \mathbf v\)

\(=\)







\(\ds - \Delta m \paren {\mathbf b + \Delta \mathbf v}\)














\(\ds \leadsto \ \ \)





\(\ds m \frac {\Delta \mathbf v} {\Delta t}\)

\(=\)







\(\ds - \frac {\Delta m} {\Delta t} \paren {\mathbf b + \Delta \mathbf v}\)














\(\ds \leadsto \ \ \)





\(\ds m \frac {\d \mathbf v} {\d t}\)

\(=\)







\(\ds - \mathbf b \frac {\d m} {\d t}\)





letting $\Delta t \to 0$



$\blacksquare$


Sources
1992: George F. Simmons: Calculus Gems ... (previous) ... (next): Chapter $\text {B}.8$: Rocket Propulsion in Outer Space




