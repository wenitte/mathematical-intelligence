# 

Source: https://proofwiki.org/wiki/Current_in_Electric_Circuit/L,_R_in_Series



Theorem
Consider the electric circuit $K$ consisting of:

a resistance $R$
an inductance $L$
in series with a source of electromotive force $E$ which is a function of time $t$.



The electric current $I$ in $K$ is given by the linear first order ODE:

$L \dfrac {\d I} {\d t} + R I = E$


Constant EMF at $t = 0$
Let the electric current flowing in $K$ at time $t = 0$ be $I_0$.
Let a constant EMF $E_0$ be imposed upon $K$ at time $t = 0$.
The electric current $I$ in $K$ is given by the equation:

$I = \dfrac {E_0} R + \paren {I_0 - \dfrac {E_0} R} e^{-R t / L}$


Exponentially Decaying EMF at $t = 0$
Let the electric current flowing in $K$ at time $t = 0$ be $I_0$.
Let an EMF $E$ be imposed upon $K$ at time $t = 0$ defined by the equation:

$E = E_0 e^{-k t}$
The electric current $I$ in $K$ is given by the equation:

$I = \dfrac {E_0} {R - k L} e^{-k t} + \paren {I_0 - \dfrac {E_0} {R - k L} } e^{-R t / L}$


Sinusoidal EMF
Let the electric current flowing in $K$ at time $t = 0$ be $I_0$.
Let an EMF $E$ be imposed upon $K$ at time $t = 0$ defined by the equation:

$E = E_0 \sin \omega t$
The electric current $I$ in $K$ is given by the equation:

$I = \dfrac {E_0} {\sqrt {R^2 - L^2 \omega^2} } \map \sin {\omega t - \alpha} + \paren {I_0 - \dfrac {E_0 L \omega} {R^2 + L^2 \omega^2} } e^{-R t / L}$
where $\tan \alpha = \dfrac {L \omega} R$.


Condition for Ohm's Law
Ohm's Law is satisfied by $K$ whenever the current $I$ is at a maximum or a minimum.


Minimum Current implies Increasing EMF
Let the current $I$ be at a minimum.
Then the EMF $E$ is increasing.


Maximum Current implies Decreasing EMF
Let the current $I$ be at a maximum.
Then the EMF $E$ is decreasing.


Proof
Let:

$E_L$ be the drop in electromotive force across $L$
$E_R$ be the drop in electromotive force across $R$
From Kirchhoff's Voltage Law:

$E - E_L - E_R = 0$
From Ohm's Law:

$E_R = R I$
From Drop in EMF caused by Inductance is proportional to Rate of Change of Current:

$E_L = L \dfrac {\d I} {\d t}$
Thus:

$E - L \dfrac {\d I} {\d t} - R I = 0$
which can be rewritten:

$L \dfrac {\d I} {\d t} + R I = E$
$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $\S 2.13$: Simple Electric Circuits




