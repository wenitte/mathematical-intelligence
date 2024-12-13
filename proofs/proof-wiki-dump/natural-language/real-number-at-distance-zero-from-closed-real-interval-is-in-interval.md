# 

Source: https://proofwiki.org/wiki/Real_Number_at_Distance_Zero_from_Closed_Real_Interval_is_In_Interval

Theorem
Let $S$ be a subset of the set of real numbers $\R$.
Let $x \in \R$ be a real number.
Let $\map d {x, S}$ be the distance between $x$ and $S$.

Let $I \subseteq \R$ be a closed real interval.
Then:

$\map d {x, I} = 0 \implies x \in I$


Proof
From the definition of distance:

$\forall x, y \in \R: \map d {x, y} = \size {x - y}$
Thus:

$\ds \map d {x, S} = \map {\inf_{y \mathop \in S} } {\size {x - y} }$

Because $I$ is an interval, if $x \notin I$ then $x$ is either an upper bound or a lower bound for $I$.
Suppose $x$ is an upper bound for $I$.
Let $B$ be the supremum of $I$.
Then because $I$ is closed, $B \in I$.

So:










\(\ds \forall y \in I: \, \)



\(\ds \size {x - y}\)

\(=\)







\(\ds x - y\)




















\(\ds \)

\(=\)







\(\ds x - B + B - y\)




















\(\ds \)

\(=\)







\(\ds x - B + \size {B - y}\)









Now from Infimum Plus Constant:

$\inf_{y \mathop \in S} \size {x - y} = x - B + \inf_{y \mathop \in S} \size {B - y}$
But we also have:

$x - B \ge 0$
$\map d {B, S} \ge 0$
$\map d {x, S} = 0$
So it follows that $x = B$ and so $x \in I$.

A similar argument applies if $x$ is a lower bound for $I$.
$\blacksquare$


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 2$: Continuum Property: Exercise $\S 2.13 \ (5) \ \text {(iii)}$




