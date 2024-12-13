# 

Source: https://proofwiki.org/wiki/Image_of_Interval_by_Continuous_Function_is_Interval

Theorem
Let $I$ be a real interval.
Let $f: I \to \R$ be a continuous real function.

Then the image of $f$ is a real interval.


Proof 1
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


Proof 2
Let $J$ be the image of $f$.
By Subset of Real Numbers is Interval iff Connected we need to show that $J$ is connected (and hence an interval).
Aiming for a contradiction, suppose not.
Then there exists a separation $S \mid T$ of $J$.
Define $A = f^{-1} \sqbrk S$ and $B = f^{-1} \sqbrk T$. $A$ and $B$ are both non-empty.
Because $f$ is continuous, by Continuous iff inverse image of any open set is open we must have $A$ and $B$ open.
Because $S \mid T$ is a separation:

$A \cap B = f^{-1} \sqbrk S \cap f^{-1} \sqbrk T = f^{-1} \sqbrk {S \cap T} = \O$, because $S \mid T$ is a separation.
Also, $A \cup B = f^{-1} \sqbrk S \cup f^{-1} \sqbrk T = f^{-1} \sqbrk {S \cup T} = f^{-1}(J) = I$ ($S \mid T$ is a separation of $J$).
Hence $A \mid B$ is a separation of $I$.
$I$ can certainly not be an interval (because it is not connected).
This is a contradiction.
Thus $J$ must be an interval.
$\blacksquare$





