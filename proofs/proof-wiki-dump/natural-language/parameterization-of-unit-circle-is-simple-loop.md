# 

Source: https://proofwiki.org/wiki/Parameterization_of_Unit_Circle_is_Simple_Loop

Theorem
Let $\mathbb S^1$ denote the unit circle whose center is at the origin of the Euclidean space $\R^2$.
Let $p: \closedint 0 1 \to \R^2$ be defined by:

$\forall t \in \closedint 0 1 : \map p t = \tuple {\map \cos {2 \pi t}, \map \sin {2 \pi t} }$

Then $p$ is a simple loop with image equal to $\mathbb S^1$.


Proof
Parametric Equation of Circle shows that for all $r \in \R$, the point $\tuple {\map \cos r, \map \sin r}$ lies on the unit circle $\mathbb S^1$.
Parametric Equation of Circle also shows that for all points $\tuple {x, y}$ on the unit circle $\mathbb S^1$, the point can be expressed as $\tuple {x, y} = \tuple {\map \cos r, \map \sin r}$ for some $r \in \R$.
Sine and Cosine are Periodic on Reals shows that sine and cosine functions are periodic functions with period equal to $2 \pi$.
It follows that the image of $p$ is equal to $\mathbb S^1$.
Let $t_1, t_2 \in \closedint 0 1$ such that $\tuple {\map \cos {2 \pi t_1}, \map \sin {2 \pi t_1} } = \tuple {\map \cos {2 \pi t_2}, \map \sin {2 \pi t_2} }$ with $t_1 \ne t_2$.
Shape of Cosine Function shows that the cosine function is strictly decreasing on the interval $\closedint 0 \pi$, and strictly increasing on the interval $\closedint \pi {2 \pi}$.
Strictly Monotone Real Function is Bijective shows that with $t_1 \ne t_2$, we cannot have:

both $t_1, t_2 \in \closedint 0 {\dfrac 1 2}$, as this would imply $\map \cos {2 \pi t_1} \ne \map \cos {2 \pi t_2}$
or both $t_1, t_2 \in \closedint {\dfrac 1 2} 1$, as this would imply $\map \cos {2 \pi t_1} \ne \map \cos {2 \pi t_2}$
Without loss of generality, we have $t_1 \in \closedint 0 {\dfrac 1 2}$, and $t_2 \in \closedint {\dfrac 1 2} 1$.
Sine and Cosine are Periodic on Reals/Corollary shows that the sine function is strictly positive on the interval $\openint 0 \pi$, and strictly negative on the interval $\openint \pi {2 \pi}$.
It follows that we have $\map \sin {2 \pi t_1} \ne \map \sin {2 \pi t_2}$, unless we have $t_1 = 0, t_2 = 1$, in which case:

$\tuple {\map \cos 0, \map \sin 0} = \tuple {\map \cos {2 \pi}, \map \sin {2 \pi} } = \tuple {1, 0}$
by Cosine of Zero is One and Sine of Zero is Zero.
We have that Real Sine Function is Continuous and Cosine Function is Continuous.
Multiple Rule for Continuous Real Functions and Composite of Continuous Mappings between Metric Spaces is Continuous shows that the two coordinate projections:

$\map \cos {2 \pi t}, \map \sin {2 \pi t}$
are continuous.
Hence from Continuity of Composite with Inclusion: Inclusion on Mapping and Continuous Mapping to Product Space, it follows that $p$ is continuous.
By definition of simple loop, it follows that $p$ is a simple loop.
$\blacksquare$





