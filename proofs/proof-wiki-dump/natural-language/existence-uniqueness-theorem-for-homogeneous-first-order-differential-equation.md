# 

Source: https://proofwiki.org/wiki/Existence-Uniqueness_Theorem_for_Homogeneous_First-Order_Differential_Equation



Theorem
Let $\map P x$ be a continuous function on an open interval $I \subseteq \R$.
Let $a \in I$.
Let $b \in \R$.
Let $\map f x = y$ be a function satisfying the differential equation:

$y' + \map P x y = 0$
and the initial condition:

$\map f a = b$

Then there exists a unique function satisfying these initial conditions on the interval $I$.
That function takes the form:

$\map f x = b e^{-\map A x}$
where:

$\ds \map A x = -\int_a^x \map P t \rd t$


Proof
Existence
Differentiating $\map f x = b e^{-\map A x}$ with respect to $x$:














\(\ds \map {f'} x\)

\(=\)







\(\ds b e^{-\map A x} \cdot \paren {-\map {A'} x}\)




















\(\ds \)

\(=\)







\(\ds -b \map P x e^{-\map A x}\)




















\(\ds \)

\(=\)







\(\ds -\map P x \map f x\)










So thedifferential equation becomes:

$\map {f'} x + \map P x \map f x = -\map P x \map f x + \map P x \map f x = 0$

For the initial condition:














\(\ds \map f a\)

\(=\)







\(\ds b e^{-\map A a}\)




















\(\ds \)

\(=\)







\(\ds b e^{-\int_a^a \map P x \rd x}\)




















\(\ds \)

\(=\)







\(\ds b e^0\)




















\(\ds \)

\(=\)







\(\ds b\)










Thus such a function exists satisfying the conditions.
$\Box$


Uniqueness
Suppose that $f$ is a function satisfying the initial conditions.
Let $\map g x = \map f x e^{\map A x}$.

By Product Rule for Derivatives:














\(\ds \map {g'} x\)

\(=\)







\(\ds \map {f'} x e^{\map A x} + \map f x e^{\map A x} \cdot \map {A'} x\)




















\(\ds \)

\(=\)







\(\ds e^{\map A x} \paren {\map {f'} x + \map P x \map f x}\)




















\(\ds \)

\(=\)







\(\ds 0\)










So $\map g x$ must be constant.
Therefore:

$\map g x = \map g a = \map f a e^{\map A a} = \map f a = b$

From this, we conclude that:

$\map f x = \map g x e^{-\map A x} = b e^{-\map A x}$
$\blacksquare$


Sources
1967: Tom M. Apostol: Calculus Volume 1: $\S 8.2$




