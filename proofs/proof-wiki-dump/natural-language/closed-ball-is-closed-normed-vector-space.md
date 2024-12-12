# 

Source: https://proofwiki.org/wiki/Closed_Ball_is_Closed/Normed_Vector_Space

Theorem
Let $M = \struct {X, \norm {\, \cdot \,}}$ be a normed vector space.
Let $x \in X$.
Let $\epsilon \in \R_{> 0}$.
Let $\map {B_\epsilon^-} x$ be the closed $\epsilon$-ball of $x$ in $M$.

Then $\map {B_\epsilon^-} x$ is a closed set of $M$.


Proof
We show that the complement $X \setminus \map {B_\epsilon^-} x$ is open in $M$.
Let $y \in X \setminus \map {B_\epsilon^-} x$.
Then by definition of closed ball:

$\norm {x - y} > \epsilon$
Put:

$\delta := \norm {x - y} - \epsilon > 0$
Then:

$\norm {x - y} - \delta = \epsilon$

Let $z \in \map {B_\delta} y$.
Then:














\(\ds \norm {x - z}\)

\(\ge\)







\(\ds \norm {x - y} - \norm {y - z}\)





Reverse Triangle Inequality














\(\ds \)

\(>\)







\(\ds \norm {x - y} - \delta\)




















\(\ds \)

\(=\)







\(\ds \epsilon\)









and so:

$z \notin \map {B_\epsilon^-} x$

Then:

$\map {B_\delta} y \subseteq X \setminus \map {B_\epsilon^-} x$
so $X \setminus \map {B_\epsilon^-} x$ is open in $M$.

Hence, by definition of closed set:

$\map {B_\epsilon^-} x$ is closed in $M$.
$\blacksquare$


Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): $\S 1.3$: Normed and Banach spaces. Topology of normed spaces




