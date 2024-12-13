# 

Source: https://proofwiki.org/wiki/Limit_of_Real_Function_of_2_Variables/Examples/(x_-_y)_over_(x_%2B_y)_at_0



Example of Limit of Real Function of 2 Variables
Let $f$ be the real function of $2$ variables defined as:

$\map f {x, y} = \begin {cases} \dfrac {x - y} {x + y} & : x \ne -y \\ 1 & : x = -y \end {cases}$
Then:

$\ds \lim_{\substack {x \mathop \to 0 \\ y \mathop \to 0} } \map f {x, y}$
does not exist.

However, note that:

$\ds \lim_{x \mathop \to 0} \paren {\lim_{y \mathop \to 0} \map f {x, y} }$ equals $1$
Limit of Real Function of 2 Variables/Examples/(x - y) over (x + y) at 0/Limit on x of Limit on y

$\ds \lim_{y \mathop \to 0} \paren {\lim_{x \mathop \to 0} \map f {x, y} }$ equals $-1$
Limit of Real Function of 2 Variables/Examples/(x - y) over (x + y) at 0/Limit on y of Limit on x

Proof
Let $\epsilon$ be arbitrary.
Consider $\tuple {x, y}$ along the $L$ defined as $x = -y$.
Then selecting points close to $L$ we can make $\dfrac {x - y} {x + y}$ as large as we like by making $x - \paren {-y}$ as small as we like.
Hence any square around $\tuple {0, 0}$ is going to contain $\tuple {x, y}$ for which $\map f {x, y}$ is greater than any $\epsilon$ you pick.
Hence the result.
$\blacksquare$


Sources
1961: David V. Widder: Advanced Calculus (2nd ed.) ... (previous) ... (next): $1$ Partial Differentiation: $\S 3$. Functions of Several Variables: $3.1$ Limits and Continuity: Example $\text B$




