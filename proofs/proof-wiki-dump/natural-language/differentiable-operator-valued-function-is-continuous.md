# 

Source: https://proofwiki.org/wiki/Differentiable_Operator-Valued_Function_is_Continuous


December 2022:  It has been suggested that this page be renamed.In particular: Suggestion to re-name page to "Differentiable Function With Values in Normed Space is Continuous" because I originally proved this result for operator-valued functions, but nothing about the proof changes if the co-domain is any normed spaceTo discuss this page in more detail, feel free to use the talk page.
Theorem
Let $\struct {X, \norm \cdot_X}$ be a normed vector space.
Let $f : I \to X$ be a map defined on an interval $I$.
Let $x_0 \in I$ such that $f$ is differentiable at $x_0$.

Then $f$ is continuous at $x_0$.


Proof
We have by hypothesis that the derivative $\map {f'} {x_0}$ of $f$ at $x_0$ exists.
Hence:














\(\ds \lim_{x \mathop \to x_0} \norm {\map f {x} - \map f {x_0} }_X\)

\(=\)







\(\ds \lim_{h \mathop \to 0} \norm {\map f {x_0 + h} - \map f {x_0} }_X\)





re-write limit














\(\ds \)

\(=\)







\(\ds \lim_{h \mathop \to 0} \norm {h \cdot \dfrac {\map f {x_0 + h} - \map f {x_0} } h}_X\)




















\(\ds \)

\(=\)







\(\ds \lim_{h \mathop \to 0} \size h \cdot \norm {\dfrac {\map f {x_0 + h} - \map f {x_0} } h}_X\)





Norm Axiom $\text N 2$: Positive Homogeneity














\(\ds \)

\(=\)







\(\ds \lim_{h \mathop \to 0} \size h \cdot \norm {\dfrac {\map f {x_0 + h} - \map f {x_0} } h - \map {f'} {x_0} + \map {f'} {x_0} }_X\)




















\(\ds \)

\(\le\)







\(\ds \lim_{h \mathop \to 0} \size h \paren {\norm {\dfrac {\map f {x_0 + h} - \map f {x_0} } h - \map {f'} {x_0} }_X + \norm {\map {f'} {x_0} }_X }\)





Norm Axiom $\text N 3$: Triangle Inequality














\(\ds \)

\(=\)







\(\ds 0 \cdot \norm {\map {f'} {x_0} }_X = 0\)





$f$ is differentiable at $x_0$ with derivative $\map {f'} {x_0}$ by assumption



Thus:

$\map f x \to \map f {x_0}$ as $x \to x_0$
The result follows by the definition of continuity in metric spaces and Metric Induced by Norm is Metric.
$\blacksquare$


Sources
1996: E. Hille and R.S. Phillips: Functional Analysis and Semi-Groups (Revised ed.): Chapter $\text {III}$: Vector-Valued Functions: $3.2$. Some properties of vector-valued functions. Before Theorem $3.2.1$




