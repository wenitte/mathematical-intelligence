# 

Source: https://proofwiki.org/wiki/Right-Hand_Derivative_not_Limit_of_Derivative_from_Right



Theorem
Let $f$ be a real function.
Let the right-hand derivative $f'_+$ of $f$ exist.
Then it is not necessarily the case that:

$\map {f'_+} a$
is the same thing as:

$\map {f'} {a^+}$


Proof
By definition:

$\map {f'_+} a := \ds \lim_{h \mathop \to 0} \dfrac {\map f {a + h} - \map f a} h$
while:

$\map {f'} {a^+} := \ds \lim_{x \mathop \to a^+} \map {f'} x$

Let:

$\map f x = \begin {cases} x^2 \sin \dfrac 1 x & : x \ne 0 \\ 0 & : x = 0 \end {cases}$.
Then:














\(\ds \map {f'_+} 0\)

\(=\)







\(\ds \lim_{h \mathop \to 0} \dfrac {h^2 \sin \dfrac 1 h - 0} h\)




















\(\ds \)

\(=\)







\(\ds \lim_{h \mathop \to 0} h \sin \dfrac 1 h\)




















\(\ds \)

\(=\)







\(\ds 0\)





Limit of $x \sin \dfrac 1 x$ at $0$



but:














\(\ds \map {f'} {0^+}\)

\(=\)







\(\ds \lim_{x \mathop \to 0^+} \paren {2 x \sin \dfrac 1 x - \cos \dfrac 1 x}\)





which does not exist



$\blacksquare$


Also see
Extendability Theorem for Derivatives Continuous on Open Intervals


Sources
1961: David V. Widder: Advanced Calculus (2nd ed.) ... (previous) ... (next): $1$ Partial Differentiation: $\S 2$. Functions of One Variable: $2.2$ Derivatives: Example $\text E$




