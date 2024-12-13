# 

Source: https://proofwiki.org/wiki/P-Product_Metrics_are_Lipschitz_Equivalent

Theorem
Let $M_A = \left({A, d_A}\right)$ and $M_B = \left({B, d_B}\right)$ be metric spaces.
Let $\tau_A$ and $\tau_B$ be the topologies on $A$ and $B$ induced by $d_A$ and $d_B$, respectively.

For all extended real numbers $p \ge 1$, let $M_p = \left({A \times B, d_p}\right)$ be the $p$-product of $M_A$ and $M_B$.

Then all the metrics $\left\{{d_p: p \ge 1}\right\}$ are Lipschitz equivalent.


Proof
From $p$-Product Metric is Metric, $M_p$ is a metric space.

For all real numbers $p \ge 1$, it follows from the definition of $d_p$ that:

$\forall x, y \in A \times B: d_{\infty} \left({x, y}\right) \le d_p \left({x, y}\right) \le 2^{1/p} d_{\infty} \left({x, y}\right)$
Hence, $d_p$ and $d_{\infty}$ are Lipschitz equivalent.

The result follows from Lipschitz Equivalence is Equivalence Relation.
$\blacksquare$





