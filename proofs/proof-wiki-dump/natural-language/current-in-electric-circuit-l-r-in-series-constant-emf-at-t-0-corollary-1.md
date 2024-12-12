# 

Source: https://proofwiki.org/wiki/Current_in_Electric_Circuit/L,_R_in_Series/Constant_EMF_at_t_%3D_0/Corollary_1

Theorem
Consider the electric circuit $K$ consisting of:

a resistance $R$
an inductance $L$
in series with a source of electromotive force $E$ which is a function of time $t$.



Let the electric current flowing in $K$ at time $t = 0$ be $I_0$.
Let a constant EMF $E_0$ be imposed upon $K$ at time $t = 0$.
After a sufficiently long time, the electric current $I$ in $K$ is given by the equation:

$E_0  = R I$


Proof
From Electric Current in Electric Circuit: L, R in Series: Constant EMF at $t = 0$:

$I = \dfrac {E_0} R + \paren {I_0 - \dfrac {E_0} R} e^{-R t / L}$
We have that:

$\ds \lim_{t \mathop \to \infty} e^{-R t / L} \to 0$
and so:

$\ds \lim_{t \mathop \to \infty} I \to \dfrac {E_0} R$
Hence the result.
$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $\S 2.13$: Simple Electric Circuits: Example $1$




