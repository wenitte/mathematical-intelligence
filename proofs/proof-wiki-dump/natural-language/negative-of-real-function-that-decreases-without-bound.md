# 

Source: https://proofwiki.org/wiki/Negative_of_Real_Function_that_Decreases_Without_Bound

Theorem
Let $f: \R \to \R$ be a real function.

Then:

$(1): \quad \ds \lim_{x \mathop \to +\infty} \map f x = -\infty \implies \lim_{x \mathop \to +\infty} -\map f x = +\infty$
$(2): \quad \ds \lim_{x \mathop \to -\infty} \map f x = -\infty \implies \lim_{x \mathop \to -\infty} -\map f x = +\infty$


Proof
Suppose $\ds \lim_{x \mathop \to +\infty} \map f x = -\infty$.

Then by the definition of negative infinite limit at infinity:

$\forall M < 0: \exists N > 0: x > N \implies \map f x < M$
But:

$M < 0 \iff -M > 0$
Likewise:

$\map f x < M \iff -\map f x > -M$

Putting $M' = -M$:

$\forall M' > 0: \exists N > 0: x > N \implies -\map f x > M'$
The result then follows from the definition of infinite limit at infinity.

The proof for $\ds \lim_{x \mathop \to -\infty} \map f x = -\infty$ is analogous.
$\blacksquare$


Also see
Negative of Real Function that Increases Without Bound




