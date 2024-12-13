# 

Source: https://proofwiki.org/wiki/Piecewise_Continuous_Function_with_Improper_Integrals_may_not_be_Bounded

Theorem
Let $f$ be a real function defined on a closed interval $\closedint a b$, $a < b$. 
Let $f$ be a piecewise continuous function with improper integrals.

Then $f$ may not be piecewise continuous and bounded on $\closedint a b$.


Proof
Consider the function:

$\map f x = \begin{cases}
0 & : x = a \\
\dfrac 1 {\sqrt{x - a} } & : x \in \hointl a b
\end{cases}$
Since $\dfrac 1 {\sqrt{x - a} }$ is continuous on $\openint a b$, $f$ is continuous on $\openint a b$.
Therefore, $f$ satisfies $(1)$ in the requirements of a piecewise continuous function with improper integrals for the subdivision $\set {a, b}$ of $\closedint a b$.

Also: 














\(\ds \int_{a+}^{b-} \map f x \rd x\)

\(=\)







\(\ds \int_{a+}^{b-} \dfrac 1 {\sqrt{x - a} } \rd x\)




















\(\ds \)

\(=\)







\(\ds \bigintlimits {2 \sqrt {x - a} } {a+} {b-}\)




















\(\ds \)

\(=\)







\(\ds \lim_{x \mathop \to b-} 2 \sqrt{x - a} - \lim_{x \mathop \to a+} 2 \sqrt{x - a}\)




















\(\ds \)

\(=\)







\(\ds 2 \sqrt {b - a} - 2 \sqrt {a - a}\)





as $2 \sqrt{x - a}$ is left-continuous at $b$ and right-continuous at $a$














\(\ds \)

\(=\)







\(\ds 2 \sqrt{b - a}\)









Hence $\ds \int_{a+}^{b-} \map f x \rd x$ exists.
Thus $f$ is a piecewise continuous function with improper integrals.

However, we have that $\map f x$ approaches $\infty$ as $x$ approaches $a$ from above.
Thus $f$ is not bounded.
Therefore $f$ is not piecewise continuous and bounded.
Hence the result.
$\blacksquare$


Also see
Bounded Piecewise Continuous Function has Improper Integrals




