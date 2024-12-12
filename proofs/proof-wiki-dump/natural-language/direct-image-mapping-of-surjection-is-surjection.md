# 

Source: https://proofwiki.org/wiki/Direct_Image_Mapping_of_Surjection_is_Surjection



Theorem
Let $f: S \to T$ be a surjection.

Then the direct image mapping of $f$:

$f^\to: \powerset S \to \powerset T$
is a surjection.


Proof 1
Let $f: S \to T$ be a surjection.
Then:

$\forall y \in T: \exists x \in S: f \paren x = y$
From the Quotient Theorem for Surjections, there is one and only one bijection $r: S / \RR_f \to T$ such that $r \circ q_{\RR_f} = f$.
Each element of $S / \RR_f$ is a subset of $S$ and therefore an element of $\powerset S$.
Thus as $r: S / \RR_f \to T$ is a bijection, and hence a fortiori also an injection:

$\forall X_1, X_2 \in \powerset S: \map r {X_1} = \map r {X_2} \implies X_1 = X_2$

Because $f$ is a surjection, every $y \in T$ is mapped to by exactly one element of the partition of $S$ defined by $\RR_f$.
Let $T = \set {y_1, y_2, \ldots}$.
Let the partition defined by $\RR_f$ be $\bigcup \paren {X_1, X_2, \ldots}$ where $\map r {X_n} = y_n$.

Let $Y_r \in \powerset T$, such that $Y_r = \set {y_{r_1}, y_{r_2}, \ldots}$.
Then:

$\map {f^\to} {X_r} = Y_r$
where $\ds X_r = \bigcup \paren {X_{r_1}, X_{r_2}, \ldots}$.
As $\set {X_1, X_2, \ldots}$ is a partition of $S$, $\forall Y_r \in \powerset T: X_r$ is unique.
Thus $f^\to: \powerset S \to \powerset T$ is a surjection.
$\blacksquare$


Proof 2
Let $f: S \to T$ be a surjection.

By definition, $f^\to$ is defined by sending subsets of $S$ to their image under $f$.
That is:

$\forall X \subseteq S: \map {f^\to} X = \set{\map f x: x \in X} \subseteq T$

To prove that $f^\to$ is a surjection, we need to show that every subset of $T$ is the image under $f^\to$ of some subset of $S$.

Let $Y \subseteq T$.
Since $f$ is a surjection, by definition we have that:

$\forall t \in T: \exists s \in S: \map f s = t$
Hence (possibly requiring the Axiom of Choice), we can select for each $y \in Y$ some $s_y \in S$ such that $\map f {s_y} = y$.
Define $X_Y$ to be:

$X_Y := \set {s_y: y \in Y}$
Then:














\(\ds \map {f^\to} {X_Y}\)

\(=\)







\(\ds \set {\map f {s_y}: s_y \in X_Y}\)




















\(\ds \)

\(=\)







\(\ds \set {\map f {s_y}: y \in Y}\)




















\(\ds \)

\(=\)







\(\ds \set {y : y \in Y}\)




















\(\ds \)

\(=\)







\(\ds Y\)










Thus $f^\to: \powerset S \to \powerset T$ is a surjection.
$\blacksquare$


Axiom of Choice
This proof depends on the Axiom of Choice.
Because of some of its bewilderingly paradoxical implications, the Axiom of Choice is considered in some mathematical circles to be controversial.
Most mathematicians are convinced of its truth and insist that it should nowadays be generally accepted.
However, others consider its implications so counter-intuitive and nonsensical that they adopt the philosophical position that it cannot be true.


Proof 3
Let $f^\gets$ be the inverse image mapping of $f$.
Let $Y \in \powerset T$.
Let $X = \map {f^\gets} Y$.
By Subset equals Image of Preimage iff Mapping is Surjection:

$\map {f^\to} X = Y$
As such an $X$ exists for each $Y \in \powerset S$, $f^\to$ is surjective.
$\blacksquare$


Also see
Mapping is Surjection iff Direct Image Mapping is Surjection




