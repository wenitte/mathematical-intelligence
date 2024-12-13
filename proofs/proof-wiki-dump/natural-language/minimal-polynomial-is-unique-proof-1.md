# 

Source: https://proofwiki.org/wiki/Minimal_Polynomial_is_Unique/Proof_1

Theorem
Let $L / K$ be a field extension.
Let $\alpha \in L$ be algebraic over $K$.

Then the minimal polynomial of $\alpha$ over $K$ is unique.


Proof
Let $f$ be a minimal polynomial of $\alpha$ over $K$ according to definition 1.
By Minimal Polynomial is Irreducible, we have that $f$ is irreducible over $K$. 

Let $g$ be another polynomial in $K \sqbrk x$ such that $\map g \alpha = 0$.

By the definition of minimal polynomial, $\map \deg f \le \map \deg g$, where $\deg$ denotes degree.
By Division Theorem for Polynomial Forms over Field, there exist polynomials $q, r \in K \sqbrk x$ such that:

$g = q f + r$ and $\map \deg r < \map \deg f$.

Suppose $\map \deg r > 0$.
Then evaluating both sides of the equation above at $\alpha$, we obtain $\map r \alpha = 0$.
This contradicts the minimality of the degree of $f$.
Thus, $r$ is constant and equal to $0$.

We have now shown that $f$ divides all polynomials in $K \sqbrk x$ which vanish at $\alpha$.
By the monic restriction, it then follows that $f$ is unique.
$\blacksquare$





