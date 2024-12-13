# 

Source: https://proofwiki.org/wiki/Real_Interval_is_Bounded_in_Real_Numbers

Theorem
Let $\R$ be the real number line considered as an Euclidean space.
Let $a, b \in \R$.
Let $\II$ be one of the following real intervals:














\(\ds \openint a b\)

\(:=\)







\(\ds \set {x \in \R: a < x < b}\)





Open Real Interval














\(\ds \hointr a b\)

\(:=\)







\(\ds \set {x \in \R: a \le x < b}\)





Half-Open (to the right) Real Interval














\(\ds \hointl a b\)

\(:=\)







\(\ds \set {x \in \R: a < x \le b}\)





Half-Open (to the left) Real Interval














\(\ds \closedint a b\)

\(:=\)







\(\ds \set {x \in \R: a \le x \le b}\)





Closed Real Interval



where $b \ge a$.

Then $\II$ is bounded in $\R$.


Proof
Consider the open $\epsilon$-ball $\map {B_\epsilon} a$ where $\epsilon = b + 1 - a$.
As $b \ge a$ we have that $b + 1 > a$ and so $\epsilon > 0$.

Let $x \in \II$.
Then, whatever type of real interval $\II$ actually is, $z \ge a$ and $x \le b$.
As $\epsilon > 0$ it follows that $x > a - \epsilon$.
Also:














\(\ds x\)

\(\le\)







\(\ds b\)




















\(\ds \)

\(=\)







\(\ds a + b - a\)




















\(\ds \)

\(<\)







\(\ds a + \paren {b  + 1 - a}\)




















\(\ds \)

\(=\)







\(\ds a + \epsilon\)










That is:

$a - \epsilon < x < a + \epsilon$
and so:

$x \in \map {B_\epsilon} a$
The result follows by definition of bounded space.
$\blacksquare$


Sources
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): Chapter $\text{III}$: Metric Spaces: Compactness




