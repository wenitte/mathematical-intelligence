# 

Source: https://proofwiki.org/wiki/Conditions_for_Functional_to_be_Extremum_of_Two-variable_Functional_over_Canonical_Variable_p

Theorem
Let $y = \map y x$ and $\map F {x, y, y'}$ be real functions.
Let $\dfrac {\partial^2 F} {\partial {y'}^2} \ne 0$.
Let $\ds J \sqbrk y = \int_a^b \map F {x, y, y'} \rd x$
Let $\ds J \sqbrk {y, p} = \int_a^b \paren {-\map H {x, y, p} + p y'} \rd x$, where $H$ is the Hamiltonian of $J \sqbrk y$.

Then $\ds J \sqbrk y = \bigvalueat {J \sqbrk {y, p} } {\frac {\delta J \sqbrk{y, p} } {\delta p} \mathop = 0}$


Proof
Euler's equation for $J \sqbrk {y, p}$:














\(\ds \frac {\delta J \sqbrk{y, p} } {\delta p}\)

\(=\)







\(\ds \frac {\partial} {\partial p} \paren {-\map H {x, y, p} + p y'}\)





Depends only on $p$ and not its derivatives














\(\ds \)

\(=\)







\(\ds -\frac {\partial H} {\partial p} + y'\)




















\(\ds \)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds y'\)

\(=\)







\(\ds \frac {\partial H} {\partial p}\)










Substitute this result back into the functional $J \sqbrk {y, p}$:














\(\ds \bigvalueat {J \sqbrk {y, p} } {\frac {\delta J \sqbrk {y, p} } {\delta p} \mathop = 0}\)

\(=\)







\(\ds \int_a^b \paren {-H + p \frac{\partial H}{\partial p} } \rd x\)




















\(\ds \)

\(=\)







\(\ds \int_a^b \paren {\map F {x, y, y'} - p y' + p \frac {\partial \paren {-\map F {x, y, y'} + p y'} } {\partial p} } \rd x\)





Definition of Hamiltonian














\(\ds \)

\(=\)







\(\ds \int_a^b \paren {\map F {x, y, y'} - p y' + p y'} \rd x\)




















\(\ds \)

\(=\)







\(\ds \int_a^b \map F {x, y, y'} \rd x\)









$\blacksquare$


Sources
1963: I.M. Gelfand and S.V. Fomin: Calculus of Variations ... (previous) ... (next): $\S 4.18$: The Legendre Tranformation




