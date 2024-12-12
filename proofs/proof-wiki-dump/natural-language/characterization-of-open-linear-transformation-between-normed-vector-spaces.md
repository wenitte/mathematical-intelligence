# 

Source: https://proofwiki.org/wiki/Characterization_of_Open_Linear_Transformation_between_Normed_Vector_Spaces



Theorem
Let $\GF \in \set {\R, \C}$. 
Let $\struct {X, \norm {\, \cdot \,}_X}$ and $\struct {Y, \norm {\, \cdot \,}_Y}$ be normed vector spaces over $\GF$. 
Let $T : X \to Y$ be a linear transformation.
Let $B_X^-$ and $B_Y^-$ be the closed unit balls of $X$ and $Y$ respectively. 

The following statements are equivalent:

$(1) \quad$ $T$ is an open map
$(2) \quad$ there exists $\delta > 0$ such that $\delta B_Y^- \subseteq T \sqbrk {B_X^-}$
$(3) \quad$ there exists $M > 0$ such that for all $y \in Y$ there exists $x \in T^{-1} \sqbrk {\set y}$ such that $\norm x_X \le M \norm y_Y$


Proof
Let $B_X^O$ and $B_Y^O$ be the open unit balls of $X$ and $Y$ respectively.

$(1)$ implies $(2)$
Suppose that $T$ is an open map.
Then $T \sqbrk {B_X^O}$ is open in $\struct {Y, \norm {\, \cdot \,}_Y}$.
Hence there exists $\delta > 0$ such that: 

$\delta B_Y^O \subseteq T \sqbrk {B_X^O}$
We have that: 

$\ds \frac \delta 2 B_Y^- \subseteq \delta B_Y^O$
We also have that: 

$T \sqbrk {B_X^O} \subseteq T \sqbrk {B_X^-}$
from Image of Subset under Mapping is Subset of Image.
Hence we obtain: 

$\ds \frac \delta 2 B_Y^- \subseteq T \sqbrk {B_X^-}$
which is the demand of $(2)$.
$\Box$

$(2)$ implies $(1)$
Suppose that there exists $\delta > 0$ such that $\delta B_Y^- \subseteq T \sqbrk {B_X^-}$.
We have: 














\(\ds T \sqbrk {B_X^O}\)

\(\supseteq\)







\(\ds T \sqbrk {\frac 1 2 B_X^-}\)





Definition of Closed Unit Ball














\(\ds \)

\(=\)







\(\ds \frac 1 2 T \sqbrk {B_X^-}\)





Image of Dilation of Set under Linear Transformation is Dilation of Image














\(\ds \)

\(\supseteq\)







\(\ds \frac \delta 2 B_Y^-\)





by hypothesis we have $\delta B_Y^- \subseteq T \sqbrk {B_X^-}$














\(\ds \)

\(\supseteq\)







\(\ds \frac \delta 2 B_Y^O\)









From Linear Transformation between Normed Vector Spaces is Open iff Image of Open Unit Ball is Open, we have that $T$ is an open map.
Hence we have $(1)$. 
$\Box$

$(2)$ implies $(3)$
Suppose that there exists $\delta > 0$ such that $\delta B_Y^- \subseteq T \sqbrk {B_X^-}$.
If $y = {\mathbf 0}_Y$, then $x = {\mathbf 0}_X$ has: 

$\norm x_X \le M \norm y_Y$
for any $M > 0$.
It therefore suffices to pick an $M > 0$ that works for $y \in Y \setminus \set { {\mathbf 0}_Y}$.
Let $y \in Y \setminus \set { {\mathbf 0}_Y}$. 
Then: 

$\ds \frac {\delta y} {\norm y_Y} \in \delta B_Y^-$
so:

$\ds \frac {\delta y} {\norm y_Y} \in T \sqbrk {B_X^-}$
Then there exists $x \in B_X^-$ such that: 

$\ds \frac {\delta y} {\norm y_Y} = T x$
so that: 

$\ds \map T {\frac {\norm y_Y} \delta x} = y$
Setting:

$\ds x' = \frac {\norm y_Y} \delta x$
we have that $x' \in T^{-1} \sqbrk {\set y}$ with:

$\ds \norm {x'}_X = \frac {\norm y_Y} \delta \norm x_X \le \frac {\norm y_Y} \delta$
Hence setting: 

$\ds M = \frac 1 \delta$
we have $(3)$. 
$\Box$

$(3)$ implies $(2)$
Suppose that there exists $M > 0$ such that for all $y \in Y$ there exists $x \in T^{-1} \sqbrk {\set y}$ such that $\norm x_X \le M \norm y_Y$.
Let $y \in B_Y^-$.
Then there exists $x \in T^{-1} \sqbrk {\set y}$ such that: 

$\norm x_X \le M \norm y_Y \le M$
Hence, we have: 

$B_Y^- \subseteq T \sqbrk {M B_X^-}$
Hence, from Image of Dilation of Set under Linear Transformation is Dilation of Image:

$\ds \frac 1 M B_Y^- \subseteq T \sqbrk {B_X^-}$
$\blacksquare$


Sources
2001: Marián Fabian, Petr Habala, Petr Hájek, Vicente Montesinos Santalucía, Jan Pelant and Václav Zizler: Functional Analysis and Infinite-Dimensional Geometry ... (previous) ... (next): Exercise $2.29$




