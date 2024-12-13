# 

Source: https://proofwiki.org/wiki/Local_Uniform_Convergence_Implies_Compact_Convergence

Theorem
Let $X$ be a topological space.
Let $M = \struct {A, d}$ be a metric space.
Let $\sequence {f_n}$ be a sequence of mappings $f_n : X \to M$.
Let $f_n$ converge locally uniformly to $f : X \to M$.

Then $f_n$ converges compactly to $f$.


Proof

This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.

This article needs to be tidied.Please fix formatting and $\LaTeX$ errors and inconsistencies. It may also need to be brought up to our standard house style.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Tidy}} from the code.

This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Recall that a sequence $f_n$ converges compactly to $f$, if $f_n$ converges uniformly to $f$ over any compact subset $K \subset X$.
Consider a sequence $f_n$ which converges locally uniformly to $f : X \to M$.
Let $K$ be an arbitrary subset $K \subset X$.
For $x \in K$ there exists an open neighborhood $U_x$ such that over $U_x$ the sequence $f_n$ converges uniformly to $f$.
Observe that $\set {U_x : x \in K}$ is an open cover of $K$.
Since $K$ is compact, there exists a finite collection of points $x_1, \ldots, x_\ell$ such that $\set {U_{x_1}, \ldots, U_{x_\ell} }$ is an open subcover of $K$. 
Fix $\epsilon > 0$.
Consider $i \in \set {1, \ldots, \ell}$.
Then there exists $N_i \in \N$ such that:

$\forall n \ge N_i: \sup \set {\map d {\map {f_n} z, \map f z} : z \in U_{x_i} } < \epsilon$

Take $N = \max \set {N_1, \ldots, N_\ell}$. 
Then for $\ds z \in \bigcup_{i \mathop = 1}^\ell U_{x_i}$:

$\sup \set {\map d {\map {f_n} z, \map f z} : z \in U_{x_i} } < \epsilon$
But since $\ds K \subset \bigcup_{i \mathop = 1}^\ell U_{x_i}$, and $\epsilon$ is arbitrary we conclude that $f_n$ converges uniformly over $K$.
The fact that $K$ is an arbitrary compact subset finishes the proof. 
$\blacksquare$


Also see
Compact Convergence Implies Local Uniform Convergence if Weakly Locally Compact
Equivalence of Local Uniform Convergence and Compact Convergence




