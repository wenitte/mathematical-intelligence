# 

Source: https://proofwiki.org/wiki/Banach-Steinhaus_Theorem/F-Space



Theorem
Let $\GF \in \set {\R, \C}$.
Let $\struct {X, \tau_X}$ be an $F$-Space over $\GF$.
Let $\struct {Y, \tau_Y}$ be a topological vector space over $\GF$.
Let $\Gamma$ be a set of continuous linear transformations $X \to Y$ such that for all $x \in X$:

$\map \Gamma x = \set {T x : T \in \Gamma}$ is von Neumann-bounded in $Y$.

Then $\Gamma$ is equicontinuous.


Proof
Let $B$ be the set of $x \in X$ such that:

$\map \Gamma x = \set {T x : T \in \Gamma}$ is von Neumann-bounded in $Y$.
By hypothesis, $B = X$. 
Let $d$ be a metric inducing $\tau_X$ such that $\struct {X, d}$ is a complete metric space. 
From the Baire Category Theorem, $\struct {X, d}$ is a Baire space.
From Baire Space is Non-Meager, $\struct {X, d}$ is not meager.
Since $B$ is then not meager, we can apply the Banach-Steinhaus Theorem to obtain that $\Gamma$ is equicontinuous.
$\blacksquare$


Historical Note
The Banach-Steinhaus Theorem was first proved, in the context of normed vector spaces, by Eduard Helly in around $1912$.
This was some years before Stefan Banach's work, but Helly failed to obtain recognition for this.


Sources
1991: Walter Rudin: Functional Analysis (2nd ed.) ... (previous) ... (next): $2.6$: Theorem




