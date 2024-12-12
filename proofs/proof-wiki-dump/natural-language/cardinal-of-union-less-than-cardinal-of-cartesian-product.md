# 

Source: https://proofwiki.org/wiki/Cardinal_of_Union_Less_than_Cardinal_of_Cartesian_Product

Theorem
Let $S$ and $T$ be sets that are equivalent to their cardinal numbers.
Let $\card S$ denote the cardinal number of $S$.
Let $\card S > 1$ and $\card T > 1$.

Then:

$\card {S \cup T} \le \card {S \times T}$


Proof
Let $x_1$ and $x_2$ be distinct elements of $S$.
Let $y_1$ and $y_2$ be distinct elements of $T$.

Define the mapping $f : S \times T \to S \cup T$ as follows:

$\quad\map f {x, y} = \begin {cases}
y &: x = x_1 \\
x_1 &: x = x_2 \land y = y_1 \\
x &: \text {otherwise}
\end {cases}$

If $x \in S$, then we have that either $x = x_1$ or $x \ne x_1$.
If $x \ne x_1$, then $\map f {x, y_2} = x$ by the definition of $f$.
If $x = x_1$, then $\map f {x_2, y_1} = x_1$ by the definition of $f$.

If $y \in S$, then we have that:

$\map f {x_1, y} = y$ by the definition of $f$.

Therefore, it follows that $f : S \times T \to S \cup T$ is a surjection.
Thus by Surjection iff Cardinal Inequality:

$\card {S \cup T} \le \card {S \times T}$
$\blacksquare$


Sources
1971: Gaisi Takeuti and Wilson M. Zaring: Introduction to Axiomatic Set Theory: $\S 10.28$




