# 

Source: https://proofwiki.org/wiki/Closure_of_Subspace_of_Normed_Vector_Space_is_Subspace



Theorem
Let $\struct {X, \norm {\, \cdot \,} }$ be a normed vector space.
Let $Y \subseteq X$ be a subspace of $X$.
Let $Y^-$ be the closure of $Y$.

Then $Y^- \subseteq X$ is also a subspace of $X$.


Proof
Suppose $y \in Y^-$.
Then there is a sequence $\ds \sequence {y_n}_{n \mathop \in \N} \in Y$ which converges to $y$.
Suppose $y \in Y$ and $y$ is a limit point.
Then one can define a constant sequence:

$\sequence {y_n}_{n \mathop \in \N} = y$


Closed under restriction of vector addition
Let $x, y \in Y^-$.
Let $\sequence {x_n}_{n \mathop \in \N}, \sequence {y_n}_{n \mathop \in \N}$ be sequences in $Y$.
Suppose:

$\ds \lim_{n \mathop \to \infty} x_n = x$
$\ds \lim_{n \mathop \to \infty} y_n = y$
Since $Y$ is a subspace:

$\forall n \in \N : x_n + y_n \in Y \subseteq Y^-$
Furthermore:

$\ds \lim_{n \mathop \to \infty} \paren {x_n + y_n} = x + y$
$Y^-$ is closed and contains its limit points.
Hence:

$x + y \in Y^-$
$\Box$


Closed under restriction of scalar multiplication
Let $\alpha \in \Bbb K$, where $\Bbb K$ is a field.
Let $y \in Y^-$.
Let $\sequence {y_n}_{n \mathop \in \N}$ be a sequence in $Y$.
Suppose:

$\ds \lim_{n \mathop \to \infty} y_n = y$
Since $Y$ is a subspace:

$\forall n \in \N : \alpha \cdot y_n \in Y \subseteq Y^-$
Furthermore:

$\ds \lim_{n \mathop \to \infty} \alpha \cdot y_n = \alpha \cdot y$
$Y^-$ is closed and contains its limit points.
Hence:

$\alpha \cdot y \in Y^-$
$\Box$


Nonemptiness
$Y$ is a subspace.
Hence:

$0 \in Y \subseteq Y^-$
Thus $Y^-$ contains at least one element and is non-empty.
$\Box$

Hence $Y^-$ is a closed subspace
$\blacksquare$


Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): $\S 1.4$: Normed and Banach spaces. Sequences in a normed space; Banach spaces




