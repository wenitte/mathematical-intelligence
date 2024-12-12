# 

Source: https://proofwiki.org/wiki/Current_in_Electric_Circuit/L,_R_in_Series/Maximum_Current_implies_Decreasing_EMF

Theorem
Consider the electric circuit $K$ consisting of:

a resistance $R$
an inductance $L$
in series with a source of electromotive force $E$ which is a function of time $t$.



Let the current $I$ be at a maximum.
Then the EMF $E$ is decreasing.


Proof
From Electric Current in Electric Circuit: L, R in Series:

$L \dfrac {\d I} {\d t} + R I = E$
defines the behaviour of $I$.
Taking the derivative:

$L \dfrac {\d^2 I} {\d t^2} + R \dfrac {\d I} {\d t} = \dfrac {\d E} {\d t}$
From Second Derivative of Real Function at Minimum:

$L \dfrac {\d^2 I} {\d t^2} \le 0$
while from Derivative at Maximum or Minimum:

$R \dfrac {\d I} {\d t} = 0$
and so:

$\dfrac {\d E} {\d t} \le 0$
The result follows from Decreasing Function has Negative Derivative.
$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $\S 2.13$: Simple Electric Circuits: Problem $2 \ \text{(b)}$




