# 

Source: https://proofwiki.org/wiki/Excluded_Point_Space_is_Locally_Path-Connected

Theorem
Let $T = \struct {S, \tau_{\bar p} }$ be an excluded point space.

Then $T$ is locally path-connected.


Proof
Consider the set $\BB$ defined as:

$\BB = \set {\set x: x \in S \setminus \set p} \cup \set S$
Then $\BB$ is a basis for $T$.
Let $H \in \BB$.
Then $\exists x \in S: H = \set x$.
From Point is Path-Connected to Itself we have that $H$ is path-connected.

Now consider the open set $S \in \BB$.
Let $a, b \in S$.
Let $\mathbb I$ be the closed unit interval in $\R$.
Let $f: \mathbb I \to S$ be the mapping defined as:

$\forall x \in \mathbb I: \map f x = \begin{cases}
a & : x \in \hointr 0 1 \\
b & : x = 1
\end{cases}$

Then $f^{-1} \sqbrk S = \closedint 0 1$ which is open in $\mathbb I$ because $\closedint 0 1 = \mathbb I$.

As $a$ and $b$ are any two points of $S$ it follows that $S$ is path-connected.

So we have shown that all elements of a basis of $T$ are path-connected.
Hence by definition $T$ is locally path-connected.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $13 \text { - } 15$. Excluded Point Topology: $3$




