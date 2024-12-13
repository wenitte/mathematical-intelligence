# 

Source: https://proofwiki.org/wiki/Limit_of_Monotone_Real_Function/Decreasing



Theorem
Let $f$ be a real function which is decreasing and bounded below on the open interval $\openint a b$.
Let the infimum of $f$ on $\openint a b$ be $l$.

Then:

$\ds \lim_{x \mathop \to b^-} \map f x = l$
where $\ds \lim_{x \mathop \to b^-} \map f x$ is the limit of $f$ from the left at $b$.


Corollary
Let $f$ be a real function which is decreasing on the open interval $\openint a b$.
If $\xi \in \openint a b$, then:

$\map f {\xi^-}$ and $\map f {\xi^+}$ both exist
and:

$\map f x \ge \map f {\xi^-} \ge \map f \xi \ge \map f {\xi^+} \ge \map f y$
provided that $a < x < \xi < y < b$.


Proof
Let $\epsilon > 0$.
We have to find a value of $\delta > 0$ such that:

$\forall x: b - \delta < x < b: \size {\map f x - l} < \epsilon$
That is:

$l - \epsilon < \map f x < l + \epsilon$
As $l$ is a lower bound for $f$ on $\openint a b$:

$l - \epsilon < \map f x$
automatically happens
Because $l + \epsilon$ is not a lower bound for $f$ on $\openint a b$:

$\exists y \in \openint a b: \map f y < l + \epsilon$
But $f$ decreases on $\openint a b$.
So:

$\forall x: y < x < b: \map f x \le \map f y < l + \epsilon$
We choose $\delta = y - a$ and hence the result.
$\blacksquare$


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 12.4 \ \text{(ii)}$




