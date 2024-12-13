# 

Source: https://proofwiki.org/wiki/Invariance_of_Extremal_Length_under_Conformal_Mappings


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Theorem
Let $X, Y$ be Riemann surfaces (usually, subsets of the complex plane).
Let $\phi: X \to Y$ be a conformal isomorphism between $X$ and $Y$.
Let $\Gamma$ be a family of rectifiable curves (or, more generally, of unions of rectifiable curves) in $X$.
Let $\Gamma'$ be the family of their images under $\phi$.
Then $\Gamma$ and $\Gamma'$ have the same extremal length:

$\map \lambda \Gamma = \map \lambda {\Gamma'}$


Proof
Let $\rho'$ be a conformal metric on $Y$ in the sense of the definition of extremal length, given in local coordinates as:

$\map {\rho'} z \size {\d z}$
Let $\rho$ be the metric on $X$ obtained as the pull-back of this metric under $\phi$.
That is, $\rho$ is given in local coordinates as:

$\map {\rho'} {\map \phi w} \cdot \size {\map {\dfrac {\d \phi} {\d w} } w} \cdot \size {\d w}$
Then the area of $X$ with respect to $\rho$ and the area of $Y$ with respect to $\rho'$ are equal by definition:

$\map A {\rho'} = \map A \rho$
Furthermore, if $\gamma \in \Gamma$ and $\gamma' := \map \phi \gamma$, then also:

$\map L {\gamma, \rho} = \map L {\gamma', \rho'}$
and hence:

$\map L {\Gamma, \rho} = \map L {\Gamma', \rho'}$
In summary, for any metric $\rho'$ on $Y$, there is a metric $\rho$ on $X$ such that:

$\dfrac {\map L {\Gamma, \rho} } {\map A \rho} = \dfrac {\map L {\Gamma', \rho'} } {\map A {\rho'} }$
It thus follows from the definition of extremal length that:

$\map \lambda \Gamma \ge \map \lambda {\Gamma'}$
The opposite inequality follows by exchanging the roles of $X$ and $Y$.
$\blacksquare$


Sources
1973: L.V. Ahlfors: Conformal Invariants: Topics in Geometric Function Theory




