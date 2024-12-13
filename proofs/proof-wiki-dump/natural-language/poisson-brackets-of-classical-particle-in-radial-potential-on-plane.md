# 

Source: https://proofwiki.org/wiki/Poisson_Brackets_of_Classical_Particle_in_Radial_Potential_on_Plane


This article needs to be tidied.In particular: Use eqn templatePlease fix formatting and $\LaTeX$ errors and inconsistencies. It may also need to be brought up to our standard house style.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Tidy}} from the code.
Theorem
Let $P$ be a classical particle embedded in a 2-dimensional Euclidean manifold.
Let the real-valued functions $\map r t$, $\map \theta t$ denote the position of $P$ in polar coordinates, where $t$ is time.
Suppose, the potential energy of $P$ depends only on $r$.

Then $P$ has the following Poisson brackets:














\(\ds \sqbrk {r, p_r}\)

\(=\)







\(\ds 1\)




















\(\ds \sqbrk {\theta, p_\theta}\)

\(=\)







\(\ds 1\)




















\(\ds \sqbrk {r, H}\)

\(=\)







\(\ds \dfrac {p_r} m\)




















\(\ds \sqbrk {\theta, H}\)

\(=\)







\(\ds \dfrac {p_\theta} {m r^2}\)




















\(\ds \sqbrk {p_r, H}\)

\(=\)







\(\ds -\dfrac {\partial U} {\partial r}\)




















\(\ds \sqbrk {p_\theta, H}\)

\(=\)







\(\ds 0\)











Proof
The standard Lagrangian of $P$ in polar coordinates is:

$L = \dfrac 1 2 m \paren { {\dot r}^2 + r^2 {\dot \theta}^2 } - \map U r$
The canonical momenta are:

$p_r = \dfrac {\partial L} {\partial \dot r} = m \dot r$
$p_\theta = \dfrac {\partial L} {\partial \dot \theta} = m r^2 \dot \theta$
The Hamiltonian associated to $L$ in canonical coordinates reads:

$H = \dfrac {p_r^2} {2 m} + \dfrac 1 2 \dfrac {p_\theta^2} {m r^2} + \map U r$
Then:














\(\ds \sqbrk {r, p_r}\)

\(=\)







\(\ds \paren {\dfrac {\partial r} {\partial r} \dfrac {\partial p_r} {\partial p_r} - \dfrac {\partial p_r} {\partial r} \dfrac {\partial r} {\partial p_r} } + \paren {\dfrac {\partial r} {\partial \theta} \dfrac {\partial p_r} {\partial p_\theta} - \dfrac {\partial p_r} {\partial \theta} \dfrac {\partial r} {\partial p_\theta} }\)




















\(\ds \)

\(=\)







\(\ds 1\)




















\(\ds \sqbrk {\theta, p_\theta}\)

\(=\)







\(\ds \paren {\dfrac{\partial \theta} {\partial r} \dfrac {\partial p_\theta} {\partial p_r} - \dfrac {\partial p_\theta} {\partial r} \dfrac {\partial \theta} {\partial p_r} } + \paren {\dfrac {\partial \theta} {\partial \theta} \dfrac {\partial p_\theta} {\partial p_\theta} - \dfrac {\partial p_\theta} {\partial \theta} \dfrac {\partial \theta} {\partial p_\theta} }\)




















\(\ds \)

\(=\)







\(\ds 1\)




















\(\ds \sqbrk {r, H}\)

\(=\)







\(\ds \paren {\dfrac {\partial r} {\partial r} \dfrac {\partial \paren {\frac {p_r^2} {2 m} + \frac 1 2 \frac {p_\theta^2} { m r^2 } + \map U r} } {\partial p_r} - \dfrac {\partial \paren {\frac {p_r^2} {2 m} + \frac 1 2 \frac {p_\theta^2} {m r^2}  + \map U r} } {\partial r} \dfrac {\partial r} {\partial p_r} } + \paren {\dfrac {\partial r} {\partial \theta} \dfrac {\partial \paren {\frac {p_r^2} {2 m} + \frac 1 2 \frac {p_\theta^2} {m r^2} + \map U r} } {\partial p_\theta} - \dfrac {\partial \paren {\frac {p_r^2} {2 m} + \frac 1 2 \frac {p_\theta^2} {m r^2}  + \map U r} } {\partial \theta} \dfrac {\partial r} {\partial p_\theta} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac {p_r} m\)




















\(\ds \sqbrk {p_r, H}\)

\(=\)







\(\ds \paren {\dfrac {\partial p_r} {\partial r} \dfrac {\partial \paren {\frac {p_r^2} {2 m} + \frac 1 2 \frac {p_\theta^2} {m r^2} + \map U r} } {\partial p_r} - \dfrac {\partial \paren {\frac {p_r^2}{2 m} + \frac 1 2 \frac {p_\theta^2} {m r^2} + \map U r} } {\partial r} \dfrac {\partial p_r} {\partial p_r} } + \paren {\dfrac {\partial p_r} {\partial \theta} \dfrac {\partial \paren {\frac {p_r^2} {2 m} + \frac 1 2 \frac {p_\theta^2} {m r^2}  + \map U r} } {\partial p_\theta} - \dfrac {\partial \paren {\frac {p_r^2} {2 m} + \frac 1 2 \frac {p_\theta^2} {m r^2}  + \map U r} } {\partial \theta} \dfrac {\partial p_r} {\partial p_\theta} }\)




















\(\ds \)

\(=\)







\(\ds -\dfrac {\partial U} {\partial r}\)




















\(\ds \sqbrk {\theta, H}\)

\(=\)







\(\ds \paren {\dfrac {\partial \theta} {\partial r} \dfrac {\partial \paren {\frac {p_r^2} {2 m} + \frac 1 2 \frac {p_\theta^2} {m r^2} + \map U r} } {\partial p_r} - \dfrac {\partial \paren {\frac {p_r^2} {2 m} + \frac 1 2 \frac {p_\theta^2} {m r^2} + \map U r} } {\partial r} \dfrac {\partial \theta} {\partial p_r} } + \paren {\dfrac {\partial \theta} {\partial \theta} \dfrac {\partial \paren {\frac {p_r^2} {2 m} + \frac 1 2 \frac {p_\theta^2} {m r^2} + \map U r} } {\partial p_\theta} - \dfrac {\partial \paren {\frac {p_r^2} {2 m} + \frac 1 2 \frac {p_\theta^2} {m r^2} + \map U r} } {\partial \theta} \dfrac {\partial \theta} {\partial p_\theta} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac {p_\theta} {m r^2}\)




















\(\ds \sqbrk {p_\theta, H}\)

\(=\)







\(\ds \paren {\dfrac {\partial p_\theta} {\partial r} \dfrac {\partial \paren {\frac {p_r^2} {2 m} + \frac 1 2 \frac {p_\theta^2} {m r^2} + \map U r} } {\partial p_r} - \dfrac {\partial \paren {\frac {p_r^2} {2 m} + \frac 1 2 \frac {p_\theta^2} {m r^2} + \map U r} } {\partial r} \dfrac {\partial p_\theta} {\partial p_r} } + \paren {\dfrac {\partial p_\theta} {\partial \theta} \dfrac {\partial \paren {\frac {p_r^2} {2 m} + \frac 1 2 \frac {p_\theta^2} {m r^2} + \map U r} } {\partial p_\theta} - \dfrac {\partial \paren {\frac {p_r^2} {2 m} + \frac 1 2 \frac {p_\theta^2} {m r^2} + \map U r} } {\partial \theta} \dfrac {\partial p_\theta} {\partial p_\theta} }\)




















\(\ds \)

\(=\)







\(\ds 0\)









$\blacksquare$


Sources
1963: I.M. Gelfand and S.V. Fomin: Calculus of Variations ... (previous) ... (next): $\S 4.23$: The Hamilton-Jacobi Equation. Jacobi's Theorem




