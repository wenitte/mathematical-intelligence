# 

Source: https://proofwiki.org/wiki/Closed_Graph_Theorem

Theorem
Let $\struct {X, \norm {\,\cdot\,}_X}$ and $\struct {Y, \norm {\,\cdot\,}_Y}$ be Banach spaces.
Let $T : X \to Y$ be a linear transformation.
Let $G_T \subseteq X \times Y$ be the graph of $T$. 
Suppose that: 

$G_T$ is closed in the direct product $X \times Y$ equipped with the direct product norm $\norm \cdot_{X \times Y}$.

Then: 

$T$ is bounded.


Proof
Let $\norm {\,\cdot\,}_{G_T}$ be the restriction of $\norm \cdot_{X \times Y}$ to $G_T$. 
By Closed Subspace of Banach Space forms Banach Space, $\struct {G_T, \norm \cdot_{G_T} }$ is a Banach space.
Define $\pi_X : G_T \to X$ by: 

$\map {\pi_X} {x, y} = x$ for each $\tuple {x, y} \in X \times Y$.
Note that by the definition of $G_T$, we have $\tuple {x, y} \in G_T$ if and only if $y = T x$.
So, we have that $\pi_X$ is a bijection with inverse $\pi_X^{-1} : X \to G_T$ with: 

$\map {\pi_X^{-1} } x = \tuple {x, T x}$ for each $x \in X$.
From Projections on Direct Product of Normed Vector Spaces define Bounded Linear Transformations, $\pi_X$ is a bounded linear transformation.
By the Banach Isomorphism Theorem: 

since $\pi_X$ is a bijective bounded linear transformation between Banach spaces, its inverse $\pi_X^{-1}$ is a bounded linear transformation.
So there exists $C > 0$ such that: 

$\norm {\pi_X^{-1} x}_{G_T} \le C \norm x_X$
for each $x \in X$.
That is: 

$\norm {\tuple {x, T x} }_{X \times Y} \le C \norm x_X$ for each $x \in X$.
From the definition of the direct product norm, we have: 

$\max \set {\norm x_X, \norm {T x}_Y} \le C \norm x_X$ for each $x \in X$.
From the definition of the max operation, we have: 

$\norm {T x}_Y \le \max \set {\norm x_X, \norm {T x}_Y}$
So:

$\norm {T x}_Y \le C \norm x_X$ for all $x \in X$.
So:

$T$ is bounded.
$\blacksquare$





