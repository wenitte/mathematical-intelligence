# 

Source: https://proofwiki.org/wiki/Current_in_Electric_Circuit/L,_R_in_Series/Exponentially_Decaying_EMF_at_t_%3D_0

Theorem
Consider the electric circuit $K$ consisting of:

a resistance $R$
an inductance $L$
in series with a source of electromotive force $E$ which is a function of time $t$.



Let the electric current flowing in $K$ at time $t = 0$ be $I_0$.
Let an EMF $E$ be imposed upon $K$ at time $t = 0$ defined by the equation:

$E = E_0 e^{-k t}$
The electric current $I$ in $K$ is given by the equation:

$I = \dfrac {E_0} {R - k L} e^{-k t} + \paren {I_0 - \dfrac {E_0} {R - k L} } e^{-R t / L}$


Proof
From Electric Current in Electric Circuit: L, R in Series:

$L \dfrac {\d I} {\d t} + R I = E_0 e^{-k t}$
defines the behaviour of $I$.
This can be written as:

$(1): \quad \dfrac {\d I} {\d t} + \dfrac R L I = \dfrac {E_0} L  e^{-k t}$
$(1)$ is a linear first order ODE in the form:

$\dfrac {\d I} {\d t} + \map P t I = \map Q t$
where:

$\map P t = \dfrac R L$
$\map Q t = \dfrac {E_0} L  e^{-k t}$

Thus:














\(\ds \int \map P t \rd t\)

\(=\)







\(\ds \int \dfrac R L \rd t\)




















\(\ds \)

\(=\)







\(\ds \dfrac {R t} L\)














\(\ds \leadsto \ \ \)





\(\ds e^{\int P \rd t}\)

\(=\)







\(\ds e^{R t / L}\)









Thus from Solution by Integrating Factor, $(1)$ can be rewritten as:

$\map {\dfrac \d {\d t} } {e^{R t / L} I} = e^{R t / L} \dfrac {E_0} L e^{-k t}$
and the general solution becomes:

$\ds e^{R t / L} I = \int e^{R t / L} \dfrac {E_0} L e^{-k t} \rd t$

and so:














\(\ds e^{R t / L} I\)

\(=\)







\(\ds \frac {E_0} L  \int e^{R t / L} e^{-k t} \rd t\)




















\(\ds \)

\(=\)







\(\ds \frac {E_0} L  \int e^{\paren {R / L - k} t} \rd t\)




















\(\ds \)

\(=\)







\(\ds \frac {E_0} {L \paren {\frac R L - k} } e^{\paren {R / L - k} t} + C\)




















\(\ds \)

\(=\)







\(\ds \frac {E_0} {R - k L} e^{\paren {R / L - k} t} + C\)










When $t = 0$, we have $I = I_0$.
So:














\(\ds I_0\)

\(=\)







\(\ds \frac {E_0} {R - k L} + C\)














\(\ds \leadsto \ \ \)





\(\ds C\)

\(=\)







\(\ds I_0 - \frac {E_0} {R - k L}\)










So:

$I e^{R t/ L} = \dfrac {E_0} {R - k L} e^{\paren {R / L - k} t} + I_0 - \dfrac {E_0} {R - k L}$
Multiplying by $e^{\frac {R t} L}$ and tidying up, we get:














\(\ds I\)

\(=\)







\(\ds \frac {E_0} {R - k L} e^{- R t / L + R t / L - k t} + I_0 e^{-R t / L} - \dfrac {E_0} {R - k L} e^{-R t / L}\)




















\(\ds \)

\(=\)







\(\ds \frac {E_0} {R - k L} e^{- k t} + I_0 e^{-R t / L} - \frac {E_0} {R - k L} e^{-R t / L}\)




















\(\ds \)

\(=\)







\(\ds \frac {E_0} {R - k L} e^{- k t} + \paren {I_0 - \frac {E_0} {R - k L} } e^{-R t / L}\)









$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $\S 2.13$: Simple Electric Circuits: Problem $1 \ \text{(a)}$




