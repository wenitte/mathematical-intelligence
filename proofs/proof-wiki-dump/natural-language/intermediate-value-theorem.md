# 

Source: https://proofwiki.org/wiki/Intermediate_Value_Theorem



Theorem
Let $I \subseteq \R$ be a real interval.
Let $f: I \to \R$ be continuous on $I$.

Then $f$ is a Darboux function.

That is:
Let $a, b \in I$.

Let $k \in \R$ lie between $\map f a$ and $\map f b$.
That is, either:

$\map f a < k < \map f b$
or:

$\map f b < k < \map f a$

Then $\exists c \in \openint a b$ such that $\map f c = k$.


Corollary
Let $0 \in \R$ lie between $\map f a$ and $\map f b$.
That is, either:

$\map f a < 0 < \map f b$
or:

$\map f b < 0 < \map f a$

Then $f$ has a root in $\openint a b$.


Proof
This theorem is a restatement of Image of Interval by Continuous Function is Interval.

From Image of Interval by Continuous Function is Interval, the image of $\openint a b$ under $f$ is also a real interval (but not necessarily open).
Thus if $k$ lies between $\map f a$ and $\map f b$, it must be the case that:

$k \in \Img {\openint a b}$
The result follows.
$\blacksquare$


Also known as
This result is also known as Bolzano's theorem, for Bernhard Bolzano.
Some sources attribute it to Karl Weierstrass, and call it the Weierstrass Intermediate Value Theorem.


Also see
Intermediate Value Theorem (Topology), of which this is a corollary


Historical Note
This result rigorously proves the intuitive truth that:

if a continuous real function defined on an interval is sometimes positive and sometimes negative, then it must have the value $0$ at some point.

Bernhard Bolzano was the first to provide this proof in $1817$, but because of incomplete understanding of the nature of the real numbers it was not completely satisfactory.
Hence many sources refer to this as Bolzano's Theorem.
The first completely successful proof was provided by Karl Weierstrass, hence its soubriquet the Weierstrass Intermediate Value Theorem.


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $1$: Review of some real analysis: $\S 1.4$: Continuity: Theorem $1.4.5$
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 9.10$
1992: George F. Simmons: Calculus Gems ... (previous) ... (next): Chapter $\text {A}.33$: Weierstrass ($\text {1815}$ – $\text {1897}$)
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): Bolzano's Theorem
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): continuous function (vi)
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): intermediate value theorem




