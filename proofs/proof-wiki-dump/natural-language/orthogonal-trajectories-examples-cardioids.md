# 

Source: https://proofwiki.org/wiki/Orthogonal_Trajectories/Examples/Cardioids

Theorem
Consider the one-parameter family of curves of cardioids given in polar form as:

$(1): \quad r = c \paren {1 + \cos \theta}$

Its family of orthogonal trajectories is given by the equation:

$r = c \paren {1 - \cos \theta}$





Proof
We use the technique of formation of ordinary differential equation by elimination.
Differentiating $(1)$ with respect to $r$ gives:




\(\text {(2)}: \quad\)









\(\ds \frac {\d r} {\d \theta}\)

\(=\)







\(\ds - c \sin \theta\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d r} {\d \theta}\)

\(=\)







\(\ds -\frac {r \sin \theta} {1 + \cos \theta}\)





eliminating $c$ between $(1)$ and $(2)$








\(\ds \leadsto \ \ \)





\(\ds r \frac {\d \theta} {\d r}\)

\(=\)







\(\ds -\frac {1 + \cos \theta} {\sin \theta}\)










Thus from Orthogonal Trajectories of One-Parameter Family of Curves, the family of orthogonal trajectories is given by:

$r \dfrac {\d \theta} {\d r} = \dfrac {\sin \theta} {1 + \cos \theta}$
So:














\(\ds r \dfrac {\d \theta} {\d r}\)

\(=\)







\(\ds \frac {\sin \theta} {1 + \cos \theta}\)














\(\ds \leadsto \ \ \)





\(\ds \int \frac {\d r} r\)

\(=\)







\(\ds \int \frac {1 + \cos \theta} {\sin \theta} \rd \theta\)





Solution to Separable Differential Equation














\(\ds \)

\(=\)







\(\ds \int \paren {\csc \theta + \cot \theta} \rd \theta\)














\(\ds \leadsto \ \ \)





\(\ds \ln r\)

\(=\)







\(\ds \ln \size {\csc \theta - \cot \theta} + \ln \size {\sin \theta} + c\)




















\(\ds \)

\(=\)







\(\ds \ln \size {\paren {\csc \theta - \cot \theta} \sin \theta} + c\)




















\(\ds \)

\(=\)







\(\ds \ln \size {1 - \cos \theta} + c\)














\(\ds \leadsto \ \ \)





\(\ds r\)

\(=\)







\(\ds c \paren {1 - \cos \theta}\)









Hence the result.
$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $1$: The Nature of Differential Equations: $\S 3$: Families of Curves. Orthogonal Trajectories: Problem $1 \ \text c$




