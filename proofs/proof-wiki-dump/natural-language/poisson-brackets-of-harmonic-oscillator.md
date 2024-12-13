# 

Source: https://proofwiki.org/wiki/Poisson_Brackets_of_Harmonic_Oscillator

Theorem
Let $P$ be a classical harmonic oscillator.
Let the real-valued function $\map x t$ be the position of $P$, where $t$ is time.

Then $P$ has the following Poisson brackets:














\(\ds \sqbrk {x, p}\)

\(=\)







\(\ds 1\)




















\(\ds \sqbrk {x, H}\)

\(=\)







\(\ds \dfrac p m\)




















\(\ds \sqbrk {p, H}\)

\(=\)







\(\ds -k x\)











Proof
The standard Lagrangian of $P$ is:

$L = \dfrac 1 2 \paren {m {\dot x}^2 - k x^2}$
The canonical momentum is:

$p = \dfrac {\partial L} {\partial \dot x} = m \dot x$
The Hamiltonian associated to $L$ in canonical coordinates reads:

$H = \dfrac {p^2} {2 m} + \dfrac k 2 x^2$

Then:














\(\ds \sqbrk {x, p}\)

\(=\)







\(\ds \dfrac {\partial x} {\partial x} \dfrac {\partial p} {\partial p} - \dfrac {\partial p} {\partial x} \dfrac {\partial x} {\partial p}\)

\(\ds = 1\)


















\(\ds \sqbrk {x, H}\)

\(=\)







\(\ds \dfrac {\partial x} {\partial x} \dfrac {\map \partial {\frac {p^2} {2 m} + \frac {k x^2} 2} } {\partial p} - \dfrac {\map \partial {\frac {p^2} {2 m} + \frac {k x^2} 2} } {\partial x} \dfrac {\partial x} {\partial p}\)

\(\ds = \dfrac p m\)


















\(\ds \sqbrk {p, H}\)

\(=\)







\(\ds \dfrac {\partial p} {\partial x} \dfrac {\map \partial {\frac {p^2} {2 m} + \frac {k x^2} 2} } {\partial p} - \dfrac {\map \partial {\frac {p^2} {2 m} + \frac {k x^2} 2} } {\partial x} \dfrac {\partial p} {\partial p}\)

\(\ds = -k x\)







$\blacksquare$


Sources
1963: I.M. Gelfand and S.V. Fomin: Calculus of Variations ... (previous) ... (next): $\S 4.23$: The Hamilton-Jacobi Equation. Jacobi's Theorem




