# 

Source: https://proofwiki.org/wiki/Differentiability_Class/Examples/Class_1_Function

Example of Differentiability Class
Let $f$ be the real function defined as:

$\map f x = \begin {cases} 0 & : x < 0 \\ x^2 & : x \ge 0 \end {cases}$
Then $f \in C^1$ but $f \notin C^2$. 


Proof
By inspection it is seen that $f$ is continuous everywhere.
We have that:

$\map {f'} x = \begin {cases} 0 & : x < 0 \\ 2 x & : x \ge 0 \end {cases}$
By inspection it is seen that $f'$ is continuous everywhere.
So by definition of differentiability class, $f$ is a member of $C^1$.

Then we have that:

$\map {f} x = \begin {cases} 0 & : x < 0 \\ 2 & : x \ge 0 \end {cases}$
Hence $f$ is not continuous at $x = 0$.
So by definition of differentiability class, $f$ is not a member of $C^2$.
$\blacksquare$


Sources
1961: David V. Widder: Advanced Calculus (2nd ed.) ... (previous) ... (next): $1$ Partial Differentiation: $\S 2$. Functions of One Variable: $2.2$ Derivatives: Example $\text F$




