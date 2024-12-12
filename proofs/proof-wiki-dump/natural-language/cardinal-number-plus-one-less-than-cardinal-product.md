# 

Source: https://proofwiki.org/wiki/Cardinal_Number_Plus_One_Less_than_Cardinal_Product



Theorem
Let $x$ be an ordinal such that $x > 1$.

Then:

$\card {x + 1} \le \card {x \times x}$
Where $\times$ denotes the Cartesian product.


Proof
Since $x > 1$, then $0 < x$ and $1 < x$.
Define the function $f: x + 1 \to x \times x$ as follows:

$\map f y = \begin{cases}
\tuple {y, 0} &: y < x \\
\tuple {0, 1} &: y = x
\end{cases}$

If $\map f y = \map f z$, then $y = z$ by cases.


Case 1: $y = x$
If $y = x$, then $\map f y = \tuple {0, 1}$ by the definition of $f$.
So if $z < x$, then $\map f y \ne \map f z$.
This contradicts the hypothesis, so $z = x$ and therefore $z = y$.


Case 2: $y < x$
If $y < x$, then $\map f y = \tuple {y, 0}$ by the definition of $f$.
$z = x$ yields the contradictory statement $\tuple {y, 0} = \tuple {0, 1}$.

Therefore, $z < x$ and $\tuple {y, 0} = \tuple {z, 0}$.
By Equality of Ordered Pairs, it follows that $y = z$.

It follows that $f$ is an injection.
By Injection iff Cardinal Inequality, it follows that $\card {x + 1} \le \card {x \times x}$.
$\blacksquare$


Sources
1971: Gaisi Takeuti and Wilson M. Zaring: Introduction to Axiomatic Set Theory: $\S 10.32$




