# 

Source: https://proofwiki.org/wiki/Functions_in_Vector_Space_of_Real-Valued_Functions_Continuously_Differentiable_on_Closed_Interval_vanish_at_Endpoints



Theorem
Let $I := \closedint a b$ be a closed real interval.
Let $\struct {\map {C^1} I, +, \, \cdot \,}_\R$ be the continuously differentiable on closed interval real function vector space.
Let $S := \set {x \in \map {C^1} I : \map x a = y_a, \map x b = y_b}$.

Then $S$ is a vector subspace of $\struct {\map {C^1} I, +, \, \cdot \,}_\R$ if and only if $y_a = y_b = 0$.


Proof
Necessary Condition
Suppose $y_a = y_b = 0$.


Closure under Vector Addition
Let $x_1, x_2 \in \map {C^1} I$.
By sum rule for derivatives, $x_1 + x_2 \in \map {C^1} I$
Evaluate the sum at both endpoints:














\(\ds \map {\paren {x_1 + x_2} } a\)

\(=\)







\(\ds \map {x_1} a + \map {x_2} a\)





Definition of Pointwise Addition of Real-Valued Functions














\(\ds \)

\(=\)







\(\ds 0\)




















\(\ds \)

\(=\)







\(\ds y_a\)





Assumption
















\(\ds \map {\paren {x_1 + x_2} } b\)

\(=\)







\(\ds \map {x_1} a + \map {x_2} b\)





Definition of Pointwise Addition of Real-Valued Functions














\(\ds \)

\(=\)







\(\ds 0\)




















\(\ds \)

\(=\)







\(\ds y_b\)





Assumption



Hence, if $x_1, x_2 \in S$ then $x_1 + x_2 \in S$.


Closure under Scalar Multiplication
Let $x \in \map {C^1} I$ and $\alpha \in \R$.
By derivative of constant multiple, $\alpha \cdot x \in \map {C^1} I$.
Evaluation at both endpoint yields:














\(\ds \map {\paren {\alpha \cdot x} } a\)

\(=\)







\(\ds \alpha \cdot \map x a\)





Definition of Pointwise Scalar Multiplication of Real-Valued Functions














\(\ds \)

\(=\)







\(\ds \alpha \cdot 0\)




















\(\ds \)

\(=\)







\(\ds 0\)




















\(\ds \)

\(=\)







\(\ds y_a\)





Assumption
















\(\ds \map {\paren {\alpha \cdot x} } b\)

\(=\)







\(\ds \alpha \cdot \map x b\)





Definition of Pointwise Scalar Multiplication of Real-Valued Functions














\(\ds \)

\(=\)







\(\ds \alpha \cdot 0\)




















\(\ds \)

\(=\)







\(\ds 0\)




















\(\ds \)

\(=\)







\(\ds y_b\)





Assumption



Hence, if $x \in S$ and $\alpha \in \R$, then $\alpha \cdot x \in S$.


Nonemptiness
Let $\map 0 x \in \map {C^1} I$ be such that:

$\map 0 x : I \to 0$.
Then:














\(\ds \map 0 a\)

\(=\)







\(\ds 0\)




















\(\ds \)

\(=\)







\(\ds y_a\)





Assumption














\(\ds \)

\(=\)







\(\ds y_b\)





Assumption














\(\ds \)

\(=\)







\(\ds \map 0 b\)









Hence, $S$ is a subspace of $\struct {\map {C^1} I, +, \, \cdot \,}_\R$
$\Box$


Sufficient Condition
Suppose $S$ is a subspace of $\struct {\map {C^1} I, +, \, \cdot \,}_\R$.
Let $x \in S$.
Then $2 \cdot x \in S$ and $\map {\paren {2 \cdot x} } a = y_a$.
However, by Pointwise Scalar Multiplication of Real-Valued Functions we have that:

$\map {\paren {2 \cdot x} } a = 2 \map x a = 2 y_a$
Hence, $2 y_a = y_a$, or $y_a = 0$.
Analogously, $y_b = 0$.
$\blacksquare$


Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): Chapter $1.1$: Normed and Banach spaces. Vector Spaces




