# 

Source: https://proofwiki.org/wiki/Continuous_Mappings_preserve_Convergent_Sequences



Theorem
Let $X, Y$ be normed vector spaces.
Let $c \in X$.
Let $f : X \to Y$ be a mapping.

Then $f$ is continuous at $c$ iff for every sequence $\sequence {x_n}_{n \mathop \in \N} \in X$ such that $\sequence {x_n}_{n \mathop \in \N}$ converges to $c$, $\sequence {\map f {x_n}}_{n \mathop \in \N}$ converges to $\map f c$.


Proof
Necessary Condition
Let $f$ be continuous at $c$.
Let $\sequence {x_n}_{n \mathop \in \N}$ be a sequence in $X$ such that $\sequence {x_n}_{n \mathop \in \N}$ converges to $c$.
Let $\epsilon \in \R_{\mathop > 0}$.
By definition of continuous mapping:

$\exists \delta \in \R_{\mathop > 0} : \forall x \in X : \norm {x - c} < \delta \implies \norm {\map f x - \map f c} < \epsilon$
Since $\sequence {x_n}_{n \mathop \in \N}$ converges to $c$:

$\exists N \in \N : \forall n \in \N : n > \N \implies \norm {x_n - c} < \delta$
By definition of continuity, and because $\sequence {x_n}_{n \mathop \in \N} \in X$:

$\norm {\map f {x_n} - \map f c} < \epsilon$
Choice of $\epsilon$ was arbitrary.
Hence:

$\forall \epsilon \in \R_{\mathop > 0} : \exists N \in \N : \forall n \in \N : n > \N \implies \norm {\map f {x_n} - \map f c} < \epsilon$
By definition, $\sequence {\map f {x_n}}_{n \mathop \in \N}$ converges to $\map f c$.
$\Box$


Sufficient Condition
Suppose $f$ is not continuous at $c$.
By definition of continuous mapping:

$\forall \epsilon \in \R_{\mathop > 0} : \exists \delta \in \R_{\mathop > 0} : \forall x \in X : \norm {x - c} < \delta \implies \norm {\map f x - \map f c} < \epsilon$

By De Morgan's laws and negation of implication:

$\exists \epsilon \in \R_{\mathop > 0} : \forall \delta \in \R_{\mathop > 0} : \exists x \in X : \paren {\norm {x - c} < \delta} \land \paren {\norm {\map f x - \map f c} \ge \epsilon}$
Consider a sequence $\ds \delta_n = \frac 1 n$ where $n \in \N$.
Then there exists a sequence $\sequence {x_n}_{n \mathop \in \N}$ in $X$ such that:

$\ds \forall n \in \N : \norm {x_n - c} < \delta_n$.
At the same time we have that: 

$\forall n \in \N : \norm {\map f {x_n} - \map f c} \ge \epsilon$
By definition of convergent sequence:

$\forall \epsilon' \in \R_{>0}: \exists N \in \N: \forall n \in \N: n > N \implies \norm {x_n - L} < \epsilon'$
Let $N \in \N$.
Let $\epsilon' := \delta_N$
Then:

$\forall n \in \N : n > N \implies \norm {x_n - c} < \delta_n < \delta_N$
But $N \in \N$ was arbitrary.
Hence, $\sequence {x_n}_{n \mathop \in \N}$ is convergent with limit $c$.
However, $\sequence {\map f {x_n}}_{n \mathop \in \N}$ does not converge to $\map f c$ because:

$\forall n \in \N : \norm {\map f {x_n} - \map f c} \ge \epsilon$
In other words, if $f$ is not continuous at $c$ then not for all $\sequence {x_n}_{n \mathop \in \N}$ convergent to $c$ $\sequence {\map f {x_n}}$ converges to $\map f c$.
By rule of transposition, if for all $\sequence {x_n}_{n \mathop \in \N}$ convergent to $c$ $\sequence {\map f {x_n}}$ converges to $\map f c$ then $f$ is continuous at $c$.
$\blacksquare$


Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): Chapter $\S 2.2$: Continuous and linear maps. Continuous maps




