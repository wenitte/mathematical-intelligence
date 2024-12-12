# 

Source: https://proofwiki.org/wiki/Closed_Subspace_of_Banach_Space_forms_Banach_Space

Theorem
Let $\struct {X, \norm \cdot_X}$ be a Banach space.
Let $Y$ be a closed linear subspace of $X$.
Let $\norm \cdot_Y$ be the restriction of $\norm \cdot_X$ to $Y$. 

Then $\struct {Y, \norm \cdot_Y}$ is a Banach space.


Proof
From Restriction of Norm on Vector Space to Subspace is Norm, $\struct {Y, \norm \cdot_Y}$ is a normed vector space.
We now show that $\struct {Y, \norm \cdot_Y}$ is complete.
Let $\sequence {y_n}_{n \mathop \in \N}$ be a Cauchy sequence in $\struct {Y, \norm \cdot_Y}$. 
Then, for each $\epsilon > 0$ there exists $N \in \N$ such that: 

$\norm {y_n - y_m}_Y < \epsilon$
for all $n, m \ge N$.
Since $\norm \cdot_Y$ is the restriction of $\norm \cdot_X$ to $Y$, we have: 

$\norm {y_n - y_m}_Y = \norm {y_n - y_m}_X$
so:

$\norm {y_n - y_m}_X < \epsilon$
So $\sequence {y_n}_{n \mathop \in \N}$ is a Cauchy sequence in $\struct {X, \norm \cdot_X}$.
Since $\struct {X, \norm \cdot_X}$ is Banach, we have that $\sequence {y_n}_{n \mathop \in \N}$ converges to $y \in X$.
Since $Y$ is closed in $\struct {X, \norm \cdot_X}$, we have that $Y$ contains all its limit points.
So $y \in Y$. 
From Sequence in Normed Vector Space Convergent to Limit iff Norm of Sequence minus Limit is Null Sequence, we therefore have: 

$\norm {y_n - y}_X \to 0$
with $y_n - y \in Y$ for each $n \in \N$. 
Since $\norm \cdot_Y$ is the restriction of $\norm \cdot_X$ to $Y$, we have: 

$\norm {y_n - y}_Y \to 0$
So $\sequence {y_n}_{n \mathop \in \N}$ converges to $y$ in $\struct {Y, \norm \cdot_Y}$. 
Since $\sequence {y_n}_{n \mathop \in \N}$ was arbitrary, we have that all Cauchy sequence in $\struct {Y, \norm \cdot_Y}$ converge.
$\blacksquare$


Also see
Subspace of Complete Metric Space is Closed iff Complete




