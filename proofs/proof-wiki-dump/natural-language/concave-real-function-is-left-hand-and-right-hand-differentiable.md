# 

Source: https://proofwiki.org/wiki/Concave_Real_Function_is_Left-Hand_and_Right-Hand_Differentiable

Theorem
Let $f$ be a real function which is concave on the open interval $\openint a b$.

Then the left-hand derivative $\map {f'_-} x$ and right-hand derivative $\map {f'_+} x$ both exist for all $x \in \openint a b$.


Proof
Let $f$ be concave on $\openint a b$.
Then by definition of concavity:

$\forall x_1, x_2, x_3 \in \openint a b: x_1 < x_2 < x_3: \dfrac {\map f {x_2} - \map f {x_1} } {x_2 - x_1} \ge \dfrac {\map f {x_3} - \map f {x_1} } {x_3 - x_1}$

Let $0 < h_1 < h_2$.
Substitute $x_1 = x$, $x_2 = x + h_1$, $x_3 = x + h_2$. Then:

$\dfrac {\map f {x + h_1} - \map f x} {h_1} \ge \dfrac {\map f {x + h_2} - \map f x} {h_2}$
Hence the function $\map F h = \dfrac {\map f {x + h} - \map f x} h$ decreases in some $\closedint 0 \delta$.
Thus from Limit of Decreasing Function it follows that both $\ds \lim_{h \mathop \to 0^+} \map F h = \map {f'_+} x$ and $\ds \lim_{h \mathop \to 0^-} \map F h = \map {f'_-} x$ exist.
$\blacksquare$


Also see
Convex Real Function is Left-Hand and Right-Hand Differentiable




