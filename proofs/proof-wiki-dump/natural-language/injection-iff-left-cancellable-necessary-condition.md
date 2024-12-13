# 

Source: https://proofwiki.org/wiki/Injection_iff_Left_Cancellable/Necessary_Condition

Theorem
Let $f: Y \to Z$ be an injection.

Then $f$ is left cancellable.


Proof
From the definition: a mapping $f: Y \to Z$ is left cancellable if and only if:

$\forall X: \forall g_1: X \to Y, g_2: X \to Y: f \circ g_1 = f \circ g_2 \implies g_1 = g_2$

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
$\blacksquare$


Sources
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $4$: Mappings: Exercise $14$




