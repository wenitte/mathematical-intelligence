# 

Source: https://proofwiki.org/wiki/Banach-Schauder_Theorem/Lemma_2

Lemma
Let $\struct {X, \norm \cdot_X}$ and $\struct {Y, \norm \cdot_Y}$ be Banach spaces.
Let $T : X \to Y$ be a surjective bounded linear transformation.
Let $r > 0$ be such that: 

$\map {B_Y} {0, r} \subseteq \paren {T \sqbrk {\map {B_X} {0, m} } }^-$
where:

$\map {B_Y} {0, r}$ denotes the open ball in $Y$ centered at $0 \in Y$ with radius $r$
$\map {B_X} {0, m}$ denotes the open ball in $X$ centered at $0 \in X$ with radius $m$
$\paren {T \sqbrk {\map {B_X} {0, m} } }^-$ denotes the topological closure of $T \sqbrk {\map {B_X} {0, m} }$.

Then: 

$\map {B_Y} {0, r} \subseteq T \sqbrk {\map {B_X} {0, 2 m} }$


Proof
We first show that: 

$\map {B_Y} {0, 2^{-n} r} \subseteq \paren {T \sqbrk {\map {B_X} {0, 2^{-n} m} } }^-$ for each $n \in \N$.
Let $y \in \map {B_Y} {0, 2^{-n} r}$.
Then: 

$\norm y_Y < 2^{-n} r$
so:

$\norm {2^n y}_Y < r$
So:

$2^n y \in \map {B_Y} {0, r}$
Then:

$2^n y \in \paren {T \sqbrk {\map {B_X} {0, m} } }^-$
From Point in Closure of Subset of Metric Space iff Limit of Sequence, we have: 

there exists a sequence $\sequence {y_k}_{k \mathop \in \N}$ in $T \sqbrk {\map {B_X} {0, m} }$ such that $y_k \to 2^n y$.
For each $k \in \N$, there exists $x_k \in \map {B_X} {0, m}$ such that $y_k = T x_k$.
Then we have, from linearity and Multiple Rule for Sequence in Normed Vector Space: 

$\map T {2^{-n} x_k} \to y$
with: 

$\norm {2^{-n} x_k}_X < 2^{-n} m$ for each $k \in \N$
So:

$2^{-n} x_k \in \map {B_X} {0, 2^{-n} m}$ for each $k \in \N$.
Then:

$\map T {2^{-n} x_k} \in T \sqbrk {\map {B_X} {0, 2^{-n} m} }$ for each $k \in \N$.
so:

$y \in \paren {T \sqbrk {\map {B_X} {0, 2^{-n} m} } }^-$
So:

$\map {B_Y} {0, 2^{-n} r} \subseteq \paren {T \sqbrk {\map {B_X} {0, 2^{-n} m} } }^-$ for each $n \in \N$.
from the definition of set inclusion.

Now we show that: 

$\map {B_Y} {0, r} \subseteq T \sqbrk {\map {B_X} {0, 2 m} }$
Let $z \in \map {B_Y} {0, r}$. Then we have: 

$z \in \paren {T \sqbrk {\map {B_X} {0, m} } }^-$
From Condition for Point being in Closure, there exists $y_1 \in T \sqbrk {\map {B_X} {0, m} }$ such that: 

$\norm {z - y_1}_Y < 2^{-1} r$
Since $y_1 \in T \sqbrk {\map {B_X} {0, m} }$ there exists $x_1 \in \map {B_X} {0, m}$ such that: 

$y_1 = T x_1$
so that: 

$\norm {z - T x_1}_Y < 2^{-1} r$
Since: 

$z - T x_1 \in \map {B_Y} {0, 2^{-1} r}$
so:

$z - T x_1 \in \paren {T \sqbrk {\map {B_X} {0, 2^{-1} m} } }^-$
Then from Condition for Point being in Closure, there exists $y_2 \in T \sqbrk {\map {B_X} {0, 2^{-1} m} }$ such that: 

$\norm {\paren {z - T x_1} - y_2}_Y < 2^{-2} r$
Since $y_2 \in T \sqbrk {\map {B_X} {0, 2^{-1} m} }$, there exists $x_2 \in \map {B_X} {0, 2^{-1} m}$ such that: 

$y_2 = T x_2$
so:

$\norm {z - T x_1 - T x_2}_Y < 2^{-2} r$
Repeating this process, for each $n \in \N$ we can find $x_n \in \map {B_X} {0, 2^{-n + 1} m}$ such that: 

$\ds \norm {z - \sum_{k \mathop = 1}^n T x_k}_Y < 2^{-n} r$
From the linearity of $T$ we then have: 

$\ds \norm {z - \map T {\sum_{k \mathop = 1}^n x_k} }_Y < 2^{-n} r$
We have: 














\(\ds \sum_{k \mathop = 1}^n \norm {x_k}_X\)

\(<\)







\(\ds m \sum_{k \mathop = 1}^n 2^{-k + 1}\)




















\(\ds \)

\(=\)







\(\ds m \sum_{k \mathop = 0}^{n - 1} 2^{-k}\)




















\(\ds \)

\(<\)







\(\ds m \sum_{k \mathop = 0}^\infty 2^{-k}\)




















\(\ds \)

\(=\)







\(\ds 2 m\)





Sum of Infinite Geometric Progression



So the sequence $\sequence {\sum_{k \mathop = 1}^n \norm {x_k}_X}_{n \mathop \in \N}$ is bounded and increasing.
From the Monotone Convergence Theorem and Infinite Series preserves Strict Inequality, we therefore have: 

$\ds \sum_{k \mathop = 1}^\infty \norm {x_k}_X < 2 m < \infty$
Since $X$ is Banach, from Absolutely Convergent Series in Normed Vector Space is Convergent iff Space is Banach we have: 

$\ds \sum_{k \mathop = 1}^\infty x_k$ converges to a limit $x \in X$.
Note that we have by Norm of Summation: 

$\ds \norm {\sum_{k \mathop = 1}^n x_k}_X \le \sum_{k \mathop = 1}^n \norm {x_k}_X $ for each $n \in \N$.
So, taking $n \to \infty$ and using Norm is Continuous, we have: 

$\ds \norm {\sum_{k \mathop = 1}^\infty x_k}_X < 2 m$
So we have: 

$x \in \map {B_X} {0, 2 m}$
Further, since $2^{-n} r$, we have: 

$\ds \norm {z - \map T {\sum_{k \mathop = 1}^n x_k} }_Y \to 0$
from the Squeeze Theorem for Real Sequences. 
From Sequence in Normed Vector Space Convergent to Limit iff Norm of Sequence minus Limit is Null Sequence, we have: 

$\ds \lim_{n \mathop \to \infty} \map T {\sum_{k \mathop = 1}^n x_k} = z$
From Continuity of Linear Transformations, we have that:

$T$ is continuous
since $T$ is bounded.
So, from Continuous Mappings preserve Convergent Sequences:

$\ds z = \map T {\lim_{n \mathop \to \infty} \sum_{k \mathop = 1}^n x_k} = T x$
So:

$z \in T \sqbrk {\map {B_X} {0, 2 m} }$
So by the definition of set inclusion:

$\map {B_Y} {0, r} \subseteq T \sqbrk {\map {B_X} {0, 2 m} }$
as desired.
$\blacksquare$





