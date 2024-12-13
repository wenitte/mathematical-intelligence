# 

Source: https://proofwiki.org/wiki/Differentiable_Bounded_Concave_Real_Function_is_Constant

Theorem
Let $f$ be a real function which is:

$(1): \quad$ differentiable on $\R$
$(2): \quad$ bounded on $\R$
$(3): \quad$ concave on $\R$.

Then $f$ is constant.


Proof
Let $f$ be differentiable and bounded on $\R$.
Let $f$ be concave on $\R$.
Let $\xi \in \R$.
Aiming for a contradiction, suppose $\map {f'} \xi > 0$.
Then by Mean Value of Concave Real Function it follows that:

$\map f x \le \map f \xi + \map {f'} \xi \paren {x - \xi} \to -\infty$ as $x \to -\infty$
and therefore is not bounded.
Similarly, suppose $\map {f'} \xi < 0$.
Then by Mean Value of Concave Real Function it follows that:

$\map f x \le \map f \xi + \map {f'} \xi \paren {x - \xi} \to -\infty$ as $x \to +\infty$
and therefore is likewise not bounded.
Hence $\map {f'} \xi = 0$.
From Zero Derivative implies Constant Function, it follows that $f$ is constant.
$\blacksquare$


Also see
Differentiable Bounded Convex Real Function is Constant



