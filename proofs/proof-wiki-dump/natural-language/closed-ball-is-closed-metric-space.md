# 

Source: https://proofwiki.org/wiki/Closed_Ball_is_Closed/Metric_Space

Theorem
Let $M = \struct {A, d}$ be a metric space.
Let $x \in A$.
Let $\epsilon \in \R_{>0}$.
Let $\map {B_\epsilon^-} x$ be the closed $\epsilon$-ball of $x$ in $M$.

Then $\map {B_\epsilon^-} x$ is a closed set of $M$.


Proof
We show that the complement $A \setminus B_\epsilon^- \left({x}\right)$ is open in $M$.
Let $a \in A \setminus \map {B_\epsilon^-} x$.
Then by definition of closed ball:

$\map d {x, a} > \epsilon$
Put:

$\delta := \map d {x, a} - \epsilon > 0$
Then:

$\map d {x, a} - \delta = \epsilon$

Let $b \in \map {B_\delta} a$.
Then:














\(\ds \map d {x, b}\)

\(\ge\)







\(\ds \map d {x, a} - \map d {a, b}\)





Reverse Triangle Inequality














\(\ds \)

\(>\)







\(\ds \map d {x, a} - \delta\)




















\(\ds \)

\(=\)







\(\ds \epsilon\)









and so:

$b \notin \map {B_\epsilon^-} x$

Then:

$\map {B_\delta} a \subseteq A \setminus \map {B_\epsilon^-} x$
so $A \setminus \map {B_\epsilon^-} x$ is open in $M$.

Hence, by definition of closed set:

$\map {B_\epsilon^-} x$ is closed in $M$.
$\blacksquare$





