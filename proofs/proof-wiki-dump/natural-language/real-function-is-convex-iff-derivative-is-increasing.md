# 

Source: https://proofwiki.org/wiki/Real_Function_is_Convex_iff_Derivative_is_Increasing



Theorem
Let $f$ be a real function which is differentiable on the open interval $\openint a b$.

Then:

$f$ is convex on $\openint a b$
if and only if:

its derivative $f'$ is increasing on $\openint a b$.

Thus the intuitive result that a convex function "gets steeper".


Proof
Necessary Condition
Let $f$ be convex on $\openint a b$.
Let $x_1, x_2, x_3, x_4 \in \openint a b$ such that:

$x_1 < x_2 < x_3 < x_4$
By the definition of convex function:

$\dfrac {\map f {x_2} - \map f {x_1} } {x_2 - x_1} \le \dfrac {\map f {x_3} - \map f {x_2} } {x_3 - x_2} \le \dfrac {\map f {x_4} - \map f {x_3} } {x_4 - x_3}$
Ignore the middle term and let $x_2 \to x_1^+$ and $x_3 \to x_4^-$.
Thus:

$\map {f'} {x_1} \le \map {f'} {x_4}$
Hence $f'$ is increasing on $\openint a b$.
$\Box$


Sufficient Condition
Let $f'$ be increasing on $\openint a b$.
Let $x_1, x_2, x_3 \in \openint a b$ such that $x_1 < x_2 < x_3$.
By the Mean Value Theorem:

$\exists \xi: \dfrac {\map f {x_2} - \map f {x_1} } {x_2 - x_1} = \map {f'} \xi$
$\exists \eta: \dfrac {\map f {x_3} - \map f {x_2} } {x_3 - x_2} = \map {f'} \eta$
where $x_1 < \xi < x_2 < \eta < x_3$.
Since $f'$ is increasing:

$\map {f'} \xi \le \map {f'} \eta$
Thus:

$\dfrac {\map f {x_2} - \map f {x_1} } {x_2 - x_1} \le \dfrac {\map f {x_3} - \map f {x_2} } {x_3 - x_2}$
Hence $f$ is convex by definition.
$\blacksquare$


Also see
Real Function is Strictly Convex iff Derivative is Strictly Increasing
Real Function is Concave iff Derivative is Decreasing
Real Function is Strictly Concave iff Derivative is Strictly Decreasing


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 12.18$

This page may be the result of a refactoring operation.As such, the following source works, along with any process flow, will need to be reviewed.When this has been completed, the citation of that source work (if it is appropriate that it stay on this page) is to be placed above this message, into the usual chronological ordering.If you have access to any of these works, then you are invited to review this list, and make any necessary corrections.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{SourceReview}} from the code.
2005: Roland E. Larson, Robert P. Hostetler and Bruce H. Edwards: Calculus (8th ed.): $\S 3.3, \S 3.4$




