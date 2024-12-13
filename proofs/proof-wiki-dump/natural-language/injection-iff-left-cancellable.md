# 

Source: https://proofwiki.org/wiki/Injection_iff_Left_Cancellable



Theorem
A mapping $f$ is an injection if and only if $f$ is left cancellable.


Proof
From the definition: a mapping $f: Y \to Z$ is left cancellable if and only if:

$\forall X: \forall g_1: X \to Y, g_2: X \to Y: f \circ g_1 = f \circ g_2 \implies g_1 = g_2$


Necessary Condition
Let $f: Y \to Z$ be an injection.
Let $X$ be a set
Let $g_1: X \to Y, g_2: X \to Y$ be mappings such that:

$f \circ g_1 = f \circ g_2$

Then $\forall x \in X$:














\(\ds \map f {g_1 \paren x}\)

\(=\)







\(\ds \map {f \circ g_1} x\)





Definition of Composite Mapping














\(\ds \)

\(=\)







\(\ds \map {f \circ g_2} x\)





By Hypothesis














\(\ds \)

\(=\)







\(\ds \map f {\map {g_2} x}\)





Definition of Composite Mapping




As $f$ is an injection, $\map {g_1} x = \map {g_2} x$ and thus the condition for left cancellability holds.
$\Box$


Sufficient Condition
We use a Proof by Contraposition.
That is, we show that if $f: Y \to Z$ is not injective, then $f$ is not left cancellable.
Hence, suppose $f: Y \to Z$ is not injective.
Then:

$\exists y_1 \ne y_2 \in Y: f \left({y_1}\right) = f \left({y_2}\right)$
Let the two mappings $g_1: Y \to Y, g_2: Y \to Y$ be defined as follows:

$\forall y \in Y: g_1 \left({y}\right) = y$
$\forall y \in Y: g_2 \left({y}\right) = \begin{cases}
y_2 & : y = y_1 \\
y & : y \ne y_1
\end{cases}$
Thus we have $g_1 \ne g_2$ such that $f \circ g_1 = f \circ g_2$.
That is, $f$ is not left cancellable.
From Rule of Transposition it follows that if $f$ is left cancellable, it is injective.
$\blacksquare$


Also see
Surjection iff Right Cancellable


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 8$: Compositions Induced on Subsets: Exercise $8.10 \ \text{(a)}$
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): Chapter $\text{I}$: Sets and Functions: Problem $\text{BB}$: Categorical Matters
1968: Ian D. Macdonald: The Theory of Groups ... (previous) ... (next): Appendix: Elementary set and number theory
1975: T.S. Blyth: Set Theory and Abstract Algebra ... (previous) ... (next): $\S 5$. Induced mappings; composition; injections; surjections; bijections: Theorem $5.4$
1996: H. Jerome Keisler and Joel Robbin: Mathematical Logic and Computability ... (previous) ... (next): Appendix $\text{A}.5$: Identity, One-one, and Onto Functions: Proposition $\text{A}.5.1: 1 \ \text{(d)}$




