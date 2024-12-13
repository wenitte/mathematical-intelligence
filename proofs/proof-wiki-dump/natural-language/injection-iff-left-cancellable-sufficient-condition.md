# 

Source: https://proofwiki.org/wiki/Injection_iff_Left_Cancellable/Sufficient_Condition

Theorem
Let $f: Y \to Z$ be a mapping which is left cancellable.

Then $f$ is an injection.


Proof
From the definition: a mapping $f: Y \to Z$ is left cancellable if and only if:

$\forall X: \forall g_1: X \to Y, g_2: X \to Y: f \circ g_1 = f \circ g_2 \implies g_1 = g_2$
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


Sources
1996: H. Jerome Keisler and Joel Robbin: Mathematical Logic and Computability ... (previous) ... (next): $\S 1.14$: Exercise $19 \ \text{(a)}$




