# 

Source: https://proofwiki.org/wiki/Current_in_Electric_Circuit/L,_R_in_Series/Constant_EMF_at_t_%3D_0



Theorem
Consider the electric circuit $K$ consisting of:

a resistance $R$
an inductance $L$
in series with a source of electromotive force $E$ which is a function of time $t$.



Let the electric current flowing in $K$ at time $t = 0$ be $I_0$.
Let a constant EMF $E_0$ be imposed upon $K$ at time $t = 0$.
The electric current $I$ in $K$ is given by the equation:

$I = \dfrac {E_0} R + \paren {I_0 - \dfrac {E_0} R} e^{-R t / L}$


Corollary 1
Let the electric current flowing in $K$ at time $t = 0$ be $I_0$.
Let a constant EMF $E_0$ be imposed upon $K$ at time $t = 0$.
After a sufficiently long time, the electric current $I$ in $K$ is given by the equation:

$E_0  = R I$


Corollary 2
Let the electric current flowing in $K$ at time $t = 0$ be $0$.
Let a constant EMF $E_0$ be imposed upon $K$ at time $t = 0$.
The electric current $I$ in $K$ is given by the equation:

$I = \dfrac {E_0} R \paren {1 - e^{-R t / L} }$


Corollary 3
Let the electric current flowing in $K$ at time $t = 0$ be $I_0$.
Let  EMF imposed upon $K$ be zero.
The electric current $I$ in $K$ is given by the equation:

$I = I_0 e^{-R t / L}$


Proof
From Electric Current in Electric Circuit: L, R in Series:

$L \dfrac {\d I} {\d t} + R I = E_0$
defines the behaviour of $I$.
This can be written as:

$(1): \quad \dfrac {\d I} {\d t} = \dfrac R L \paren {\dfrac {E_0} R - I}$
$(1)$ is in the form:

$\dfrac {\d y} {\d x} = k \paren {y_a - y}$
where:

$k \in \R: k > 0$
$y = y_0$ at $x = 0$

This is an example of the Decay Equation, where:

$k = \dfrac R L$
$y_a = \dfrac {E_0} R$
$y_0 = I_0$.
whose particular solution is:

$y = y_a + \paren {y_0 - y_a} e^{-k x}$

Hence the particular solution to $(1)$ is:

$I = \dfrac {E_0} R + \paren {I_0 - \dfrac {E_0} R} e^{-R t / L}$
$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $\S 2.13$: Simple Electric Circuits: Example $1$




