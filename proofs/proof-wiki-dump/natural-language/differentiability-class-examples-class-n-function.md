# 

Source: https://proofwiki.org/wiki/Differentiability_Class/Examples/Class_n_Function

Example of Differentiability Class
Let a real function $f$ be required that has the following properties:

$(1): \quad f \in C^n$
$(2): \quad f \notin C^{n + 1}$
where $C^k$ denotes the differentiability class of order $k$.

Then $f$ may be defined as:

$\map f x = \begin {cases} 0 & : x < 0 \\ x^{n + 1} & : x \ge 0 \end {cases}$


Proof
By inspection it is seen that $f$ is continuous everywhere.
We have from Nth Derivative of Mth Power that:

$\map {f^{\paren n} } x = \begin {cases} 0 & : x < 0 \\ \paren {n + 1}^{\underline n} x & : x \ge 0 \end {cases}$
where $\paren {n + 1}^{\underline n}$ denotes the $n$th falling factorial of $n + 1$.
At $x = 0$ it is seen that $\map {f^{\paren n} } x = 0$ and so $\map {f^{\paren n} } x$ is continuous at $0$.
By inspection it is seen that $f^{\paren n}$ is continuous everywhere.
So by definition of differentiability class, $f$ is a member of $C^n$.

Then we have that:

$\map {f^{\paren {n + 1} } } x = \begin {cases} 0 & : x < 0 \\ \paren {n + 1}! & : x \ge 0 \end {cases}$
Hence $f^{\paren {n + 1} }$ is not continuous at $x = 0$.
So by definition of differentiability class, $f$ is not a member of $C^{n + 1}$.
$\blacksquare$


Sources
1961: David V. Widder: Advanced Calculus (2nd ed.) ... (previous) ... (next): $1$ Partial Differentiation: $\S 2$. Functions of One Variable: $2.2$ Derivatives




