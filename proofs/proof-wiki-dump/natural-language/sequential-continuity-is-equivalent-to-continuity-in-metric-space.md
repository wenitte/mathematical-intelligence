# 

Source: https://proofwiki.org/wiki/Sequential_Continuity_is_Equivalent_to_Continuity_in_Metric_Space

Theorem
Let $\struct {X, d}$ and $\struct {Y, e}$ be metric spaces.
Let $f: X \to Y$ be a mapping.
Let $x \in X$.

Then $f$ is continuous at $x$ if and only if $f$ is sequentially continuous at $x$.


Corollary
$f$ is continuous on $X$ if and only if $f$ is sequentially continuous on $X$.


Proof
We have that a Continuous Mapping is Sequentially Continuous.
To prove the converse, by the Rule of Transposition we may prove the contrapositive:

If $f$ is not continuous at $x$, then $f$ is not sequentially continuous at $x$.
We suppose therefore that there exists $\epsilon_0 > 0$  such that for all $\delta > 0$ there exists $y \in X$ such that $\map d {x, y} < \delta$ and $\map e {\map f x, \map f y} \ge \epsilon_0$.
For $n \ge 1$, define $\delta_n = \dfrac 1 n$.
For $n \ge 1$, we may choose $y_n \in X$ such that $\map d {x, y_n} < \delta_n$ and $\map e {\map f x, \map f {y_n} } \ge \epsilon_0$.
Therefore, by definition the sequence $\sequence {y_n}_{n \mathop \ge 1}$ converges to $x$.
However, by definition the sequence $\sequence {\map f {y_n} }_{n \mathop \ge 1}$ does not converge to $\map f x$.
That is, $f$ is not sequentially continuous at $x$.
$\blacksquare$





