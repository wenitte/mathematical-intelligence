# 

Source: https://proofwiki.org/wiki/Closure_of_Convex_Subset_in_Normed_Vector_Space_is_Convex

Theorem
Let $\struct {X, \norm {\, \cdot \,} }$ be a normed vector space.
Let $C \subseteq X$ be a convex subset of $X$.
Let $C^-$ be the closure of $C$.

Then $C^- \subseteq X$ is also a convex subset of $X$.


Proof
Let $x, y \in C^-$.
Suppose $x, y$ are limit points.
Then there are sequences $\sequence {x_n}_{n \mathop \in \N}, \sequence {x_n}_{n \mathop \in \N}$ in $C$, such that:

$\ds \lim_{n \mathop \to \infty} x_n = x$
$\ds \lim_{n \mathop \to \infty} x_y = y$
Let $\alpha \in \closedint 0 1$.
Then:














\(\ds \paren {1 - \alpha} x + \alpha y\)

\(=\)







\(\ds \paren {1 - \alpha} \lim_{n \mathop \to \infty} x_n + \alpha \lim_{n \mathop \to \infty} y_n\)




















\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \paren {\paren {1 - \alpha} x_n + \alpha y_n}\)









Since $C$ is convex:

$\ds \forall n \in \N : \paren {1 - \alpha} x_n + \alpha y_n \in C \subseteq C^-$
$C^-$ is closed and contains its limit points.
Hence:

$\paren {1 - \alpha} x + \alpha y \in C^-$
$\blacksquare$


Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): $\S 1.4$: Normed and Banach spaces. Sequences in a normed space; Banach spaces




