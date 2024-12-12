# 

Source: https://proofwiki.org/wiki/Function_Measurable_iff_Positive_and_Negative_Parts_Measurable



Theorem
Let $\struct {X, \Sigma}$ be a measurable space.
Let $f: X \to \overline \R$ be an extended real-valued function.
Let $f^+, f^-: X \to \overline \R$ be the positive and negative parts of $f$.

Then $f$ is $\Sigma$-measurable if and only if both $f^+$ and $f^-$ are $\Sigma$-measurable.


Proof
Necessary Condition
Suppose $f$ is measurable.
By definition, its positive part $f^+$ equals the pointwise maximum:

$f^+ = \max \set {f, 0}$
where $0$ denotes the zero function.
By Constant Function is Measurable, $0$ is a measurable function.

Thus, by Pointwise Maximum of Measurable Functions is Measurable, $f^+$ is measurable.

Subsequently, the negative part $f^-$ of $f$ is defined by means of a pointwise minimum:

$f^- = - \min \set {f, 0}$
By Pointwise Maximum of Measurable Functions is Measurable and Negative of Measurable Function is Measurable, $f^-$ is measurable as well.
$\Box$


Sufficient Condition
Suppose $f^+$ and $f^-$ are both measurable.
By Difference of Positive and Negative Parts:

$f = f^+ - f^-$
and hence, by Pointwise Difference of Measurable Functions is Measurable, $f$ is also measurable.
$\blacksquare$


Sources
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $8.11$, $\S 8$: Problem $11$




