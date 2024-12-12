# 

Source: https://proofwiki.org/wiki/Continuity_of_Heaviside_Step_Function



Theorem
Let $\mu_c: \R \to \R$ be the Heaviside step function:

$\map {\mu_c} x = \begin {cases} 0 & : x < c \\ 1 & : x > c \\ \text {arbitrary} & : x = c \end {cases}$
Then $\mu_c$ is continuous at every point of $\R$ except at $c$.


Proof
Let $x \in \R: x \ne c$.
Let $\epsilon \in \R_{>0}$.
Let $\delta < \size {x - c}$.
Then by definition of the Heaviside step function:

$\forall y \in \closedint {x - \delta} {x + \delta}: \map {\mu_c} x = \begin {cases} 0 & : x < c \\ 1 & : x > c \end {cases}$
Thus:

$\forall y \in \closedint {x - \delta} {x + \delta}: \map {\mu_c} y = \map {\mu_c} x$
Thus:

$\size {y - x} \implies: \map {\mu_c} y - \map {\mu_c} x < \epsilon$
and so $\mu_c$ is continuous at $\R$ except at $x$.
$\Box$

Now suppose $x = c$.
Let $\epsilon = \dfrac 1 3$.
Let $\delta \in \R_{>0}$.
Let $\alpha \in \R_{>0}: \alpha < \delta$.
Let $y = x + \alpha$.

Let $y \in \R: \size {y - x} < \delta$ and $y \ne x$.

Suppose $\map {\mu_c} y - \map {\mu_c} x < \epsilon$.

Then:














\(\ds y\)

\(=\)







\(\ds x + \alpha\)














\(\ds \leadsto \ \ \)





\(\ds \map {\mu_c} y\)

\(=\)







\(\ds 1\)










while:














\(\ds y\)

\(=\)







\(\ds x - \alpha\)














\(\ds \leadsto \ \ \)





\(\ds \map {\mu_c} y\)

\(=\)







\(\ds 0\)










So whatever the value of $\map f x$, either:

$\map f {x + \alpha} - \map f x > \epsilon$
or:

$\map f {x - \alpha} - \map f x > \epsilon$
It follows that $\mu_c$ is not continuous at $c$.
$\blacksquare$


Also see
Heaviside Step Function is Piecewise Continuous


Sources
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $2$: Metric Spaces: $\S 4$: Open Balls and Neighborhoods: Exercise $2$




