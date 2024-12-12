# 

Source: https://proofwiki.org/wiki/Differentiable_Function_is_Continuous

  This article was Featured Proof between 3rd October 2012 and 20 October 2012.


Theorem
Let $f$ be a real function defined on an interval $I$.
Let $x_0 \in I$ such that $f$ is differentiable at $x_0$.

Then $f$ is continuous at $x_0$.


Corollary
If $f$ is not continuous at $x_0$, $f$ is not differentiable at $x_0$.


Proof
We have by hypothesis that $\map {f'} {x_0}$ exists.
Then:














\(\ds \map f x - \map f {x_0}\)

\(=\)







\(\ds \frac {\map f x - \map f {x_0} } {x - x_0} \cdot \paren {x - x_0}\)




















\(\ds \)

\(\to\)







\(\ds \map {f'} {x_0} \cdot 0\)





as $x \to x_0$




Thus:

$\map f x \to \map f {x_0}$ as $x \to x_0$
or in other words:

$\ds \lim_{x \mathop \to x_0} \map f x = \map f {x_0}$

The result follows by definition of continuous.
$\blacksquare$


Also see
Complex-Differentiable Function is Continuous


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 10.6$
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): continuous function (continuous mapping)
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): differentiable
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): continuous function (continuous mapping, continuous map)
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): differentiable




