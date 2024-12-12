# 

Source: https://proofwiki.org/wiki/Direct_Image_Mapping_of_Surjection_is_Surjection/Proof_1

Theorem
Let $f: S \to T$ be a surjection.

Then the direct image mapping of $f$:

$f^\to: \powerset S \to \powerset T$
is a surjection.


Proof
Let $f: S \to T$ be a surjection.
Then:

$\forall y \in T: \exists x \in S: f \paren x = y$
From the Quotient Theorem for Surjections, there is one and only one bijection $r: S / \RR_f \to T$ such that $r \circ q_{\RR_f} = f$.
Each element of $S / \RR_f$ is a subset of $S$ and therefore an element of $\powerset S$.
Thus as $r: S / \RR_f \to T$ is a bijection, and hence a fortiori also an injection:

$\forall X_1, X_2 \in \powerset S: \map r {X_1} = \map r {X_2} \implies X_1 = X_2$

Because $f$ is a surjection, every $y \in T$ is mapped to by exactly one element of the partition of $S$ defined by $\RR_f$.
Let $T = \set {y_1, y_2, \ldots}$.
Let the partition defined by $\RR_f$ be $\bigcup \paren {X_1, X_2, \ldots}$ where $\map r {X_n} = y_n$.

Let $Y_r \in \powerset T$, such that $Y_r = \set {y_{r_1}, y_{r_2}, \ldots}$.
Then:

$\map {f^\to} {X_r} = Y_r$
where $\ds X_r = \bigcup \paren {X_{r_1}, X_{r_2}, \ldots}$.
As $\set {X_1, X_2, \ldots}$ is a partition of $S$, $\forall Y_r \in \powerset T: X_r$ is unique.
Thus $f^\to: \powerset S \to \powerset T$ is a surjection.
$\blacksquare$


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.




