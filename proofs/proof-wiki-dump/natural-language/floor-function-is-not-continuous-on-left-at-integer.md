# 

Source: https://proofwiki.org/wiki/Floor_Function_is_Not_Continuous_on_Left_at_Integer

Theorem
Let $f$ be the real function defined as:

$\map f x = \floor x$
where $\floor{\, \cdot \,}$ denotes the floor function.

Let $n \in \Z$ be an integer.
Then $\map f x$ is not continuous on the left at $n$.


Proof
From Real Number is Integer iff equals Floor:

$\floor n = n$
By definition $\floor x$ is the unique integer such that:

$\floor x \le x < \floor x + 1$
Consider the open real interval:

$\II = \openint {n - 1} n$
By definition of $\floor x$ we have that:

$\forall x \in \II: \floor x = n - 1$
That is:

$\forall x \in \II: \floor x - n = -1$
Let $\epsilon \in \R_{>0}$.
Let $\delta \in \openint {n - 1} n$.
Then:

$\forall x \in \II: \paren n - \delta < x < n: \size {\floor x - \paren {n - 1} } < \epsilon$
That is:

$\ds \lim_{x \mathop \to n^-} \floor x = n - 1$
But we have that:

$\map f n = n$
That is:

$\ds \lim_{x \mathop \to n^-} \map f x \ne \map f n$

Hence, by definition, $\map f x$ is not continuous on the left at $n$.
$\blacksquare$


Sources
1961: David V. Widder: Advanced Calculus (2nd ed.) ... (previous) ... (next): $1$ Partial Differentiation: $\S 2$. Functions of One Variable: Exercise $2$




