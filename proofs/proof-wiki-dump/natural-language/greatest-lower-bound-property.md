# 

Source: https://proofwiki.org/wiki/Greatest_Lower_Bound_Property



Theorem
Let $S \subset \R$ be a non-empty subset of the set of real numbers such that $S$ is bounded below.
Then $S$ admits an infimum in $\R$.
This is known as the greatest lower bound property of the real numbers.


Proof 1
Let $T = \set {x \in \R: -x \in S}$.
By Set of Real Numbers is Bounded Below iff Set of Negatives is Bounded Above:

$T$ is bounded above.
Thus by the Least Upper Bound Property, $T$ admits a supremum in $\R$.
From Negative of Supremum is Infimum of Negatives:

$\ds -\sup_{x \mathop \in T} x = \map {\inf_{x \mathop \in T} } {-x}$
That is, by definition of $T$:

$\ds -\sup_{x \mathop \in T} x = \inf_{x \mathop \in S} x$
and so $S$ admits an infimum in $\R$.
$\blacksquare$


Proof 2
Let $T$ be the set of lower bounds of $S$:

$T = \set {x \in \R: x \le \forall y \in S}$

Since $S$ is bounded below, $T$ is non-empty.
Now, every $x \in T$ and $y \in S$ satisfy $x \leq y$.
That is, $T$ is bounded above by every element of $S$.
By the Least Upper Bound Property, $T$ admits a supremum in $\R$.
Let $B = \sup T$.

Since every element of $S$ is an upper bound of $T$ it follows from the definition of supremum that:

$\forall y \in S : y \ge B$
Thus $B$ is a lower bound of $S$.

Because $B$ is an upper bound of $T$:

$\forall x \in T : x \le B$
and so $B$ is the infimum of $S$.
$\blacksquare$


Also see
Least Upper Bound Property
Continuum Property


Sources
1970: Arne Broman: Introduction to Partial Differential Equations ... (previous) ... (next): Chapter $1$: Fourier Series: $1.1$ Basic Concepts: $1.1.2$ Definitions
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $1$: Review of some real analysis: $\S 1.1$: Real Numbers: Proposition $1.1.5$
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $1$: Review of some real analysis: Exercise $1.5: 6$
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 2$: Continuum Property: $\S 2.4$: The Continuum Property
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): order properties (of real numbers)
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): order properties (of real numbers)




