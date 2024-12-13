# 

Source: https://proofwiki.org/wiki/Particular_Point_Space_is_Locally_Path-Connected

Theorem
Let $T = \struct {S, \tau_p}$ be a particular point space.

Then $T$ is locally path-connected.


Proof
Consider the set $\BB$ defined as:

$\BB = \set {\set {x, p}: x \in S}$

Then $\BB$ is a basis for $T$.

Now consider the open set $\set {p, q} \in \BB$.
Let $\mathbb I$ be the closed unit interval in $\R$.
Let $f: \mathbb I \to S$ be the mapping defined as:

$\forall x \in \mathbb I: \map f x = \begin{cases}
p & : x \in \hointr 0 1 \\
q & : x = 1
\end{cases}$

Let $U \in \tau_p$.
Then either $q \in U$ or $q \notin U$.
If $q \in U$ then $f^{-1} \sqbrk U = \closedint 0 1$ which is open in $\mathbb I$ because $\closedint 0 1 = \mathbb I$.
If $q \notin U$ then $f^{-1} \sqbrk U = \hointr 0 1$ which is half open in $\R$ but open in $\mathbb I$.
So $f: \mathbb I \to S$ is a continuous mapping and so a path from $p$ to $q$.
As $\set {p, q}$ is any element of $\BB$ it follows that $T$ is locally path-connected.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $8 \text { - } 10$. Particular Point Topology: $13$




