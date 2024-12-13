# 

Source: https://proofwiki.org/wiki/Image_of_Weakly_Convergent_Sequence_under_Compact_Linear_Transformation_is_Convergent

Theorem
Let $\struct {X, \norm \cdot_X}$ and $\struct {Y, \norm \cdot_Y}$ be normed vector spaces.
Let $T : X \to Y$ be a compact linear transformation.
Let $\sequence {x_n}_{n \mathop \in \N}$ be a weakly convergent sequence with:

$x_n \weakconv x$

Then: 

$T x_n \to T x$
in the strong sense.


Proof
Let $X^\ast$ and $Y^\ast$ be the normed dual spaces of $X$ and $Y$ respectively.
Let $f \in Y^\ast$.
Then $f \circ T \in X^\ast$.
Since $x_n \weakconv x$, we have: 

$\map f {T x_n} \to \map f {T x}$ as $n \to \infty$.
So we have: 

$T x_n \weakconv T x$ as $n \to \infty$.
Aiming for a contradiction, suppose that $\sequence {T x_n}_{n \in \N}$ does not converge to $T x$. 
Then there exists $\epsilon > 0$ such that: 

$\norm {T x_{n_k} - T x}_Y \ge \epsilon$
for all $k \in \N$, for a subsequence $\sequence {x_{n_k} }_{k \in \N}$.
From Weakly Convergent Sequence in Normed Vector Space is Bounded, $\sequence {x_n}_{n \in \N}$ and hence $\sequence {x_{n_k} }_{k \in \N}$ is bounded.
Since $T$ is compact, there exists a subsequence $\sequence {T x_{n_{k_j} } }_{j \in \N}$ such that: 

$T x_{n_{k_j} } \to z \in Y$
From Convergent Sequence in Normed Vector Space is Weakly Convergent, we have: 

$T x_{n_{k_j} } \weakconv z$
Since: 

$T x_n \weakconv T x$
we have that $z = T x$ from Weak Limit in Normed Vector Space is Unique.
But then there exists $N \in \N$ such that: 

$\norm {T x_{n_{k_j} } - T x}_Y < \epsilon$
for $j \ge N$. 
This contradicts that: 

$\norm {T x_{n_k} - T x}_Y \ge \epsilon$
for each $k \in \N$. 
So, we have $T x_n \to T x$. 
$\blacksquare$





