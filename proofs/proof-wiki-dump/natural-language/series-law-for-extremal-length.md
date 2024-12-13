# 

Source: https://proofwiki.org/wiki/Series_Law_for_Extremal_Length


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.


Theorem
Let $X$ be a Riemann surface.
Let $\Gamma_1$, $\Gamma_2$ and $\Gamma$ be families of rectifiable curves (or, more generally, families of unions of rectifiable curves) on $X$.
Let every $\gamma \in \Gamma$ contain a $\gamma_1 \in \Gamma_1$ and a $\gamma_2 \in \Gamma_2$ such that $\gamma_1 \cap \gamma_2 = \O$.

Then the extremal lengths of $\Gamma_1$, $\Gamma_2$ and $\Gamma$ satisfy:

$\map \lambda \Gamma \ge \map \lambda {\Gamma_1} + \map \lambda {\Gamma_2}$


Proof
Let $\rho_1 = \map {\rho_1} z \size {\d z}$ and $\rho_2 = \map {\rho_2} z \size {\d z}$ be conformal metrics as in the definition of extremal length.
It can be assumed that these are normalized:

$\map A {\rho_j} = \map L {\Gamma_j, \rho_j}$ for $j \in \set {1, 2}$.
We define another metric $\rho = \map \rho z \size {\d z}$ by:

$\map \rho z := \map \max {\map {\rho_1} z, \map {\rho_2} z}$
Note that this is a well-defined metric.
By definition, the area form $\map {\rho^2} z \size {\d z}$ satisfies:

$\map {\rho^2} z \size {\d z}^2 = \map \max {\map {\rho_1} z^2, \map {\rho_2} z^2} \size {\d z}^2 \le \paren {\map {\rho_1} z^2 + \map {\rho_2} z^2} \size {\d z}^2$
Hence:

$\map A \rho \le \map A {\rho_1} + \map A {\rho_2} = \map L {\Gamma_1, \rho_1} + \map L {\Gamma_2, \rho_2}$
On the other hand, let $\gamma \in \Gamma$.
Let $\gamma_1$, $\gamma_2$ be as in the assumption.
Then:














\(\ds \map L {\gamma, \rho}\)

\(\ge\)







\(\ds \map L {\gamma_1, \rho} + \map L {\gamma_2, \rho}\)





as $\gamma_1$ and $\gamma_2$ are disjoint














\(\ds \)

\(\ge\)







\(\ds \map L {\gamma_1, \rho_1} + \map L {\gamma_2, \rho_2}\)





Definition of $\rho$














\(\ds \)

\(\ge\)







\(\ds \map L {\Gamma_1, \rho_1} + \map L {\Gamma_2, \rho_2}\)





Definition of $\map L {\Gamma_j, \rho_j}$



Thus 

$\map L {\Gamma, \rho} \ge \map L {\Gamma_1, \rho_1} + \map L {\Gamma_2, \rho_2}$
Combining this with the inequality for the area:

$\dfrac {\map L {\Gamma, \rho}^2} {\map A \rho} \ge \dfrac {\paren {\map L {\Gamma_1, \rho_1} + \map L {\Gamma_2, \rho_2} }^2} {\map L {\Gamma_1, \rho_1} + \map L {\Gamma_2, \rho_2} } = \map L {\Gamma_1, \rho_1} + \map L {\Gamma_2, \rho_2}$
Taking the supremum over all metrics $\rho_1$ and $\rho_2$ as above:

$\map L \Gamma \ge \map L {\Gamma_1} + \map L {\Gamma_2}$
as claimed.
$\blacksquare$


Also known as
The series law and the parallel law are also referred to collectively as the composition laws of extremal length.


Sources
1973: L.V. Ahlfors: Conformal Invariants: Topics in Geometric Function Theory




