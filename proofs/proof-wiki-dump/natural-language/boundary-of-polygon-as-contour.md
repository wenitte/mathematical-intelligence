# 

Source: https://proofwiki.org/wiki/Boundary_of_Polygon_as_Contour

Theorem
Let $P$ be a polygon embedded in the complex plane $\C$.
Denote the boundary of $P$ as $\partial P$.

Then there exists a simple closed contour $C$ such that:

$\Img C = \partial P$
where $\Img C$ denotes the image of $C$.


Proof
Let $n \in \N$ be the number of sides of $P$.
Denote the vertices of $P$ as $A_1, \ldots, A_n$.
From Complex Plane is Metric Space, it follows that $\C$ is homeomorphic to $\R^2$.
Then, we can consider $\partial P$ as a subset of $\R^2$.
From Boundary of Polygon is Jordan Curve, it follows that there exists a Jordan curve $\gamma: \closedint 0 1 \to \R^2$ such that $\Img \gamma = \partial P$.
The same theorem shows that $\gamma$ is a concatenation of $n$ line segments, parameterized as:

$\map {\gamma_k} t = \paren {1 - t} A_k + t A_{k + 1}$
where $k \in \set {1, 2, \ldots, n}$.
We identify $A_{n + 1}$ with $A_1$.

Then, $\gamma_k: \closedint {a_{k - 1} } {a_k} \to \R^2$, where $a_{k - 1}, a_k \in \closedint 0 1$.
As $\gamma$ is a concatenation of $\gamma_1, \ldots, \gamma_n$, it follows that $\set {a_0, a_1, \ldots, a_n}$ is a subdivision of $\closedint 0 1$.
We have:

$\dfrac \d {\d t} \map {\gamma_k} t = A_{k + 1} - A_k \ne \mathbf 0$
as $A_k$ and $A_{k + 1}$ are two different vertices.
As $\C$ is homeomorphic to $\R^2$, we can consider $\gamma$ as a continuous complex function $\gamma: \closedint 0 1 \to \C$.
Then $\gamma_k$ is complex-differentiable for all values of $t \in \openint {a_{k - 1} } {a_k}$ with its derivative $\gamma_k'$ defined by:

$\map {\gamma_k'} t = \map x {\dfrac \d {\d t} \map {\gamma_k} t} + i \map y {\dfrac \d {\d t} \map {\gamma_k} t}$
where:

$\map x {\dfrac \d {\d t} \map {\gamma_k} t}$ is the real part of $\dfrac \d {\d t} \map {\gamma_k} t$
$\map y {\dfrac \d {\d t} \map {\gamma_k} t}$ is the imaginary part of $\dfrac \d {\d t} \map {\gamma_k} t$

As shown above:

$\map {\gamma_k'} t \ne 0$
By definition, it follows that $\gamma_k = \gamma {\restriction_{\closedint {a_{k - 1} } {a_k} } }$ is a smooth path.
From Path as Parameterization of Contour, it follows that there exists a simple closed contour $C$ with $\Img C = \partial P$.
$\blacksquare$





