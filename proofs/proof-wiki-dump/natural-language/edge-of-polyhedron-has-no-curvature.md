# 

Source: https://proofwiki.org/wiki/Edge_of_Polyhedron_has_no_Curvature


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Theorem
The edge of a polyhedron has zero curvature.


Proof

Let $X$ and $Y$ be two separate faces of a polyhedron separated by the edge $l$.
Let $P$ be a point on $X$ and let $Q$ be a point on $Y$.
The curvature inside an infinitesimal region $\delta a$ is given by the net angular displacement $\delta \theta$ a vector $v$ experiences as it is parallel transported along a closed path around $\delta a$.
The curvature is then given by:

$R = \dfrac {\delta \theta} {\delta a}$
We must then prove that the vector $v$ experiences no net angular displacement as it is parallel transported from $P$ to $Q$ and back to $P$.
The two open curves $r$ and $s$ make a closed curve.
As the vector is parallel transported along the open curve $r$, it crosses the edge between the two faces $X$ and $Y$.
In doing so, it gains a finite angular displacement $\delta \theta_1$.
Then, when the vector is transported back along the open curve $s$, it gains another angular displacement $\delta \theta_2$.
Notice that because it is not being transported the other way (from $Y$ to $X$), the new angular displacement will be:

$\delta \theta_2 = -\delta \theta_1$.
The curvature inside the region $\delta a$ is therefore given by:














\(\ds R\)

\(=\)







\(\ds \frac {\delta \theta_1 + \delta \theta_2} {\delta a}\)




















\(\ds \)

\(=\)







\(\ds \frac {\delta \theta_1 - \delta \theta_1} {\delta a}\)




















\(\ds \)

\(=\)







\(\ds \frac 0 {\delta a}\)




















\(\ds \)

\(=\)







\(\ds 0\)









The result follows.
$\blacksquare$





