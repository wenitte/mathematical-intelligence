# 

Source: https://proofwiki.org/wiki/Metric_Space_Completeness_is_Preserved_by_Isometry/Proof_2

Theorem
Let $M_1 = \struct {A_1, d_1}$ and $M_2 = \struct {A_2, d_2}$ be metric spaces.
Let $\phi: M_1 \to M_2$ be an isometry.

If $M_1$ is complete then so is $M_2$.


Proof
Let $\epsilon \in \R_{>0}$.
Let $\sequence {b_n}$ be a Cauchy sequence in $A_2$.
Thus:

$\exists N_1 \in \N: \map {d_2} {b_n, b_m} < \epsilon$
whenever $n, m \ge N_1$ and $b_n, b_m \in A_2$.
We have that $M_1$ is isometric to $M_2$.
Isometry is Equivalence Relation and so in particular symmetric.
Hence $M_2$ is isometric to $M_1$, via $\phi^{-1}$.
Thus:

$\map {d_1} {\map {\phi^{-1} } {b_n}, \map {\phi^{-1} } {b_m} } = \map {d_2} {b_n, b_m} < \epsilon$
whenever $n, m \ge N_1$ and $\map {\phi^{-1} } {b_n}, \map {\phi^{-1} } {b_m} \in A$.
So $\sequence {\map {\phi^{-1} } {b_n} }$ is Cauchy in $A_1$.

Since $A_1$ is complete, $\sequence {\map {\phi^{-1} } {b_n} }$ converges in $A_1$ to, say, $a$.
By definition of isometry, $\phi^{-1}$ is a bijection, and in particular surjective.
Thus there exists some $b \in A_2$ such that $\map {\phi^{-1} } b = a$.
Since $\sequence {\map {\phi^{-1} } {b_n} }$ converges to $\map {\phi^{-1} } b$, there exists some $N_2 \in \N$ such that:

$\map {d_1} {\map {\phi^{-1} } {b_n}, \map {\phi^{-1} } b} < \epsilon$
whenever $n \ge N_2$ and $\map {\phi^{-1} } {b_n}, \map {\phi^{-1} } b \in A_1$.

Since $M_2$ is  isometric to $M_1$, we have:

$\map {d_1} {\map {\phi^{-1} } {b_n}, \map {\phi^{-1} } b} = \map {d_2} {b_n, b}$
and so:

$\map {d_2} {b_n, b} < \epsilon$
whenever $n \ge N_2$ and $b_n, b \in A_2$.
Thus $\sequence {b_n}$ converges in $A_2$.
Since $\sequence {b_n}$ was an arbitrary Cauchy sequence, we have that $M_2$ is complete, as required.
$\blacksquare$




