# 

Source: https://proofwiki.org/wiki/Electric_Charge_in_Electric_Circuit/L,_R,_C_in_Series

Theorem
Consider the electric circuit $K$ consisting of:

a resistance $R$
an inductance $L$
a capacitance $C$
in series with a source of electromotive force $E$ which is a function of time $t$.



The electric charge $Q$ in $K$ is given by the linear second order ODE:

$L \dfrac {\d^2 Q} {\d t^2} + R \dfrac {\d Q} {\d t} + \dfrac 1 C Q = E$


Proof
Let:

$E_L$ be the drop in electromotive force across $L$
$E_R$ be the drop in electromotive force across $R$
$E_C$ be the drop in electromotive force across $C$.
From Kirchhoff's Voltage Law:

$E - E_L - E_R - E_C = 0$
From Ohm's Law:

$E_R = R I$
From Drop in EMF caused by Inductance is proportional to Rate of Change of Current:

$E_L = L \dfrac {\d I} {\d t}$
From Drop in EMF caused by Capacitance is proportional to Accumulated Charge:

$E_C = \dfrac 1 C Q$
where $Q$ is the electric charge $Q$ that has accumulated on $C$.
Thus:

$E - L \dfrac {\d I} {\d t} - R I - \dfrac 1 C Q = 0$
which can be rewritten:

$L \dfrac {\d I} {\d t} + R I + \dfrac 1 C Q = E$
By definition of electric current:

$I = \dfrac {\d Q} {\d t}$
and so:

$L \dfrac {\d^2 Q} {\d t^2} + R \dfrac {\d Q} {\d t} + \dfrac 1 C Q = E$
$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $\S 2.13$: Simple Electric Circuits




