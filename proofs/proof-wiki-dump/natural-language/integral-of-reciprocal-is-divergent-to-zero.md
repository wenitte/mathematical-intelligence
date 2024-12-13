# 

Source: https://proofwiki.org/wiki/Integral_of_Reciprocal_is_Divergent/To_Zero

Theorem
$\ds \int_\gamma^1 \frac {\d x} x \to -\infty$ as $\gamma \to 0^+$

Thus the improper integral $\ds \int_{\to 0^+}^1 \frac {\d x} x$ does not exist.


Proof
Put $x = \dfrac 1 z$.
Then:














\(\ds \int_\gamma^1 \frac {\d x} x\)

\(=\)







\(\ds \int_{1 / \gamma}^1 \frac {-z} {z^2} \rd z\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds \int_1^{1 / \gamma} \frac {\d z} z\)










But as $\gamma \to 0+$, we have that $\dfrac 1 \gamma \to +\infty$.

Hence, from Integral of Reciprocal Unbounded Above is Divergent:

$\ds \int_1^{1 / \gamma} \frac {\d z} z \to +\infty$
as $\dfrac 1 \gamma \to +\infty$.
The result follows.
$\blacksquare$


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 13.33$




