# 

Source: https://proofwiki.org/wiki/Limit_of_Monotone_Real_Function/Increasing



Theorem
Let $f$ be a real function which is increasing and bounded above on the open interval $\openint a b$.
Let the supremum of $f$ on $\openint a b$ be $L$.

Then:

$\ds \lim_{x \mathop \to b^-} \map f x = L$
where $\ds \lim_{x \mathop \to b^-} \map f x$ is the limit of $f$ from the left at $b$.


Corollary
Let $f$ be a real function which is increasing on the open interval $\openint a b$.
If $\xi \in \openint a b$, then:

$\map f {\xi^-}$ and $\map f {\xi^+}$ both exist
and:

$\map f x \le \map f {\xi^-} \le \map f \xi \le \map f {\xi^+} \le \map f y$
provided that $a < x < \xi < y < b$.


Proof
Let $\epsilon > 0$.
We have to find a value of $\delta > 0$ such that $\forall x: b - \delta < x < b: \size {\map f x - L} < \epsilon$.
That is, that $L - \epsilon < \map f x < L + \epsilon$.
As $L$ is an upper bound for $f$ on $\openint a b$, $\map f x < L + \epsilon$ automatically happens.
Since $L - \epsilon$ is not an upper bound for $f$ on $\openint a b$, it follows that:

$\exists y \in \openint a b: \map f y > L - \epsilon$
But $f$ increases on $\openint a b$.
So:

$\forall x: y < x < b: L - \epsilon < \map f y \le \map f x$
We choose $\delta = b - y$ and hence the result.
$\blacksquare$


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 12.4 \ \text{(i)}$




