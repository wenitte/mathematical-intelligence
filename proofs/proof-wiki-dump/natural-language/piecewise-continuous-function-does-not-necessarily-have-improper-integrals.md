# 

Source: https://proofwiki.org/wiki/Piecewise_Continuous_Function_does_not_necessarily_have_Improper_Integrals

Theorem
Let $f$ be a real function defined on a closed interval $\closedint a b$, $a < b$. 
Let $f$ be a piecewise continuous function:
Let $f$ be a real function defined on a closed interval $\closedint a b$.

$f$ is piecewise continuous if and only if:

there exists a finite subdivision $\set {x_0, x_1, \ldots, x_n}$ of $\closedint a b$, where $x_0 = a$ and $x_n = b$, such that:
for all $i \in \set {1, 2, \ldots, n}$, $f$ is continuous on $\openint {x_{i − 1} } {x_i}$.

Then it is not necessarily the case that $f$ is a piecewise continuous function with improper integrals:
$f$ is piecewise continuous with improper integrals if and only if:

there exists a finite subdivision $\set {x_0, x_1, \ldots, x_n}$ of $\closedint a b$, where $x_0 = a$ and $x_n = b$, such that for all $i \in \set {1, 2, \ldots, n}$:
$(1): \quad f$ is continuous on $\openint {x_{i − 1} } {x_i}$
$(2): \quad$ the improper integrals $\ds \int_{ {x_{i - 1} }^+}^{ {x_i}^-} \map f x \rd x$ all exist.


Proof
Consider the function:

$\map f x = \begin{cases}
0 & : x = a \\
\dfrac 1 {x - a} & : x \in \hointl a b
\end{cases}$
Since $\dfrac 1 {x - a}$ is continuous on $\openint a b$, $f$ is continuous on $\openint a b$.
Therefore, $f$ is a piecewise continuous function for the (finite) subdivision $\set {a, b}$ of $\closedint a b$.

We now consider whether the improper integral $\ds \int_{a^+}^{b^-} \dfrac 1 {x - a} \rd x$ exists.

Let $c$ be a point in $\openint a b$.
From the definition of improper integral, the existence of $\ds \int_{a^+}^{b^-} \dfrac 1 {x - a} \rd x$ requires that $\ds \lim_{\gamma \mathop \to a^+} \int_\gamma^c \dfrac 1 {x - a} \rd x$ exists.
We have














\(\ds \int_\gamma^c \frac 1 {x - a} \rd x\)

\(=\)







\(\ds \bigintlimits {\map \ln {x - a} } \gamma c\)




















\(\ds \)

\(=\)







\(\ds \map \ln {c - a} - \map \ln {\gamma - a}\)




















\(\ds \)

\(=\)







\(\ds \map \ln {c - a} + \map \ln {\frac 1 {\gamma - a} }\)









The last right hand side approaches $\infty$ as $\gamma$ approaches $a$ from above.
So $\ds \int_{a^+}^c \dfrac 1 {x - a} \rd x$ does not exist.
Therefore, $\ds \int_{a^+}^{b^-} \dfrac 1 {x - a} \rd x$ does not exist either.
Accordingly, $f$ is not a piecewise continuous function with improper integrals.
$\blacksquare$





