# 

Source: https://proofwiki.org/wiki/Image_of_Interval_by_Continuous_Function_is_Interval/Proof_1

Theorem
Let $I$ be a real interval.
Let $f: I \to \R$ be a continuous real function.

Then the image of $f$ is a real interval.


Proof
Let $J$ be the image of $f$.
By definition of real interval, it suffices to show that:

$\forall y_1, y_2 \in J: \forall \lambda \in \R: y_1 \le \lambda \le y_2 \implies \lambda \in J$

So suppose $y_1, y_2 \in J$, and suppose $\lambda \in \R$ is such that $y_1 \le \lambda \le y_2$.
Consider these subsets of $I$:

$S = \set {x \in I: \map f x \le \lambda}$
$T = \set {x \in I: \map f x \ge \lambda}$
As $y_1 \in S$ and $y_2 \in T$, it follows that $S$ and $T$ are both non-empty.
Also, $I = S \cup T$.
So from Interval Divided into Subsets, a point in one subset is at zero distance from the other.

So, suppose that $s \in S$ is at zero distance from $T$.
From Limit of Sequence to Zero Distance Point, we can find a sequence $\sequence {t_n}$ in $T$ such that $\ds  \lim_{n \mathop \to \infty} t_n = s$.
Since $f$ is continuous on $I$, it follows from Limit of Image of Sequence that:

$\ds  \lim_{n \mathop \to \infty} \map f {t_n} = \map f s$

But:

$\forall n \in \N_{> 0}: \map f {t_n} \ge \lambda$
Therefore by Lower and Upper Bounds for Sequences:

$\map f s \ge \lambda$
We already have that:

$\map f s \le \lambda$
Therefore:

$\map f s = \lambda$
and so:

$\lambda \in J$

A similar argument applies if a point of $T$ is at zero distance from $S$.
$\blacksquare$


Sources
1953: Walter Rudin: Principles of Mathematical Analysis ... (previous): $4.23$
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 9.9$




