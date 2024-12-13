# 

Source: https://proofwiki.org/wiki/User:S.anzengruber/Sandbox/Regularization_Theory/LSC_of_Discrepancy_Functional

Theorem
Let $\struct {X, \tau_X}$ and $\struct {Y, \tau_Y}$ be Hausdorff spaces.
Let $F: X \to Y$ be a sequentially continuous mapping.
Let $d : Y \times Y \to \R \cup \set {+\infty}$ be an extended real-valued functional.
If $d$ is sequentially lower semicontinuous with respect to the product topology on $Y \times Y$, then:

$\map \SS {x, y} := \map d {\map F x, y}$
is sequentially lower semicontinuous with respect to the product topology on $X \times Y$.


Proof
Let $\sequence {\tuple {x_n, y_n} }_{n \mathop \in \N}$ be a sequence in $X \times Y$ such that:

$\tuple {x_n, y_n} \to \tuple {\bar x, \bar y}$
This implies that $x_n \to \bar x$ and $y_n \to \bar y$ by Sequence on Product Space Converges to Point iff Projections Converge to Projections of Point.
By the sequential continuity of $F$ it follows that $\map F {x_n} \to \map F {\bar x}$.
Thus $\tuple {\map F {x_n}, y_n} \to \tuple {\map F {\bar x}, \bar y}$ because Sequence on Product Space Converges to Point iff Projections Converge to Projections of Point
By the sequential lower semicontinuity of $d$, we obtain

$\ds \map \SS {\bar x, \bar y} = \map d {\map F {\bar x}, \bar y} \le \liminf_{n \mathop \to \infty} \map d {\map F {x_n}, y_n} = \liminf_{n \mathop \to \infty} \map \SS {x_n, y_n}$
Hence the result.
$\blacksquare$


Open question
Can the proof be generalized to hold for sequentially closed mappings $F$?





