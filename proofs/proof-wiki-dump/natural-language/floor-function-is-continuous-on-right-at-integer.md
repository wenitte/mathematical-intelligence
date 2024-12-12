# 

Source: https://proofwiki.org/wiki/Floor_Function_is_Continuous_on_Right_at_Integer

Theorem
Let $f$ be the real function defined as:

$\map f x = \floor x$
where $\floor{\, \cdot \,}$ denotes the floor function.

Let $n \in \Z$ be an integer.
Then $\map f x$ is continuous on the right at $n$.


Proof
From Real Number is Integer iff equals Floor:

$\floor n = n$
By definition $\floor x$ is the unique integer such that:

$\floor x \le x < \floor x + 1$
Consider the open real interval:

$\II = \openint n {n + 1}$
By definition of $\floor x$ we have that:

$\forall x \in \II: \floor x = n$
That is:

$\forall x \in \II: \floor x - n = 0$
Let $\epsilon \in \R_{>0}$.
Let $\delta \in \openint n {n + 1}$.
Then:

$\forall x \in \II: n < x < n + \delta: \size {\floor x - n} < \epsilon$
That is:

$\ds \lim_{x \mathop \to n^+} \floor x = \floor n$

Hence, by definition, $\map f x$ is continuous on the right at $n$.
$\blacksquare$


Sources
1961: David V. Widder: Advanced Calculus (2nd ed.) ... (previous) ... (next): $1$ Partial Differentiation: $\S 2$. Functions of One Variable: Exercise $2$




