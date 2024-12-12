# 

Source: https://proofwiki.org/wiki/Burnout_Height_of_Upward_Rocket_under_Constant_Gravity

Theorem
Let $R$ be a rocket whose structural mass is $m_1$.
Let $R$ contain fuel of initial mass $m_2$.
Let $R$ be fired straight up from the surface of a planet whose gravitational field exerts an Acceleration Due to Gravity of $g$, assumed constant.
Let $R$ burn fuel at a constant rate $a$, with a constant exhaust velocity $b$ relative to $R$.
Let all forces on $R$ except that due to  the gravitational field be neglected.

Then the burnout height of $R$ is given by:

$h_b = -\dfrac {g m_2^2} {2 a^2} + \dfrac {b m_2} a + \dfrac {b m_1} a \ln \dfrac {m_1} {m_1 + m_2}$


Proof

This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.

This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
The total mass of the rocket at time $t$ is given by

$m = m_1 + m_2 - at$
The time $t_b$ at which the rocket runs out of fuel is given by:

$t_b = \dfrac {m_2} a$
Now we can calculate the total force on the rocket to be:

$F = b a - mg$
where:

$b a$ is the rocket's thrust as calculated from Newton's Second Law of Motion
$-mg$ is the force of gravity on the rocket

This article, or a section of it, needs explaining.In particular: Not obvious why thrust is $b a$You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
We can now calculate the acceleration of the rocket as a function of time using our calculated total force in Newton's First Law of Motion to obtain














\(\ds \ddot h\)

\(=\)







\(\ds \dfrac 1 m \paren {b a - m g}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {b a} {m_1 + m_2 - a t} - g\)









where $\ddot h = \dfrac {\d^2 h} {\d t^2}$ is the second time derivative of the height of the rocket.

Integrating the acceleration function twice with respect to time will yield the height of the rocket as a function of time.
Performing the first integration:














\(\ds \dot h\)

\(=\)







\(\ds \int_0^t \paren {\dfrac {b a} {m_1 + m_2 - at'} - g} \rd t'\)




















\(\ds \)

\(=\)







\(\ds -b \ln \paren {m_1 + m_2 - a t} + b \map \ln {m_1 + m_2} - g t\)










The second integration:














\(\ds \map h t\)

\(=\)







\(\ds \int_0^t \paren {b \map \ln {m_1 + m_2} - b \map \ln {m_1 + m_2 - a t'} - g t'} \rd t'\)




















\(\ds \)

\(=\)







\(\ds -\dfrac 1 2 g t^2 + b t \map \ln {m_1 + m_2} - b \ds \int_0^t \paren {\map \ln {m_1 + m_2 - at'} } \rd t\)




















\(\ds \)

\(=\)







\(\ds -\dfrac 1 2 g t^2 + b t \map \ln {m_1 + m_2} + \dfrac b a \paren {\paren {m_1 + m_2 - a t} \map \ln {m_1 + m_2 - a t} + a t - \paren {m_1 + m_2} \map \ln {m_1 + m_2} }\)














\(\ds \leadsto \ \ \)





\(\ds \map h {t_b}\)

\(=\)







\(\ds -\dfrac {g m_2^2} {2 a^2} + \dfrac {b m_2} a \map \ln {m_1 + m_2} + \dfrac b a \paren {m_1 \ln m_1 + m_2 - \paren {m_1 + m_2} \map \ln {m_1 + m_2} }\)





substituting $t_b = \dfrac {m_2} a$ for $t$














\(\ds \)

\(=\)







\(\ds -\dfrac {g m_2^2} {2 a^2} + \dfrac {b m_2} a + {b m_1} a \map \ln {\dfrac {m_1} {m_1 + m_2} }\)





simplifying



Hence the result.
$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): Miscellaneous Problems for Chapter $2$: Problem $29$




