# 

Source: https://proofwiki.org/wiki/Differential_Equation_of_Perpendicular_Pursuit_Curve

Therorem
Let a rabbit $R$ be situated at the origin of a cartesian plane.
Let a dog $D$ be situated at the point $\tuple {c, 0}$.
Let $R$ start running up the $y$-axis with speed $a$.
At the same instant, let $D$ start pursuing $R$ by running directly towards it at speed $b$.

Then the differential equation describing the path taken by $D$ is:

$\dfrac {\d y} {\d x} = \dfrac 1 2 \paren {\paren {\dfrac x c}^k - \paren {\dfrac c x}^k}$
where $k = \dfrac a b$.


Proof


Let $C$ be the curve traced out by $D$.
Let the time $t$ be measured from the instant $R$ and $D$ start running.
At $t$, $R$ will be at the point $\tuple {0, a t}$.
Let $D$ be at $\tuple {x, y}$ at $t$.
By the nature of the motion of $D$, the line $DR$ is tangent to $C$.
Hence:

$\dfrac {\d y} {\d x} = \dfrac {y - a t} x$
or:

$(1): \quad x y' - y =  - a t$
Differentiating $(1)$ with respect to $x$:

$(2): \quad x y' ' = -a \dfrac {\d t} {\d x}$
Let $s$ be the length of $C$ between $\tuple {c, 0}$ and $\tuple {x, y}$ at time $t$.
Then:

$\dfrac {\d s} {\d t} = b$
so:

$(3): \quad \dfrac {\d t} {\d x} = \dfrac {\d t} {\d s} \dfrac {\d s} {\d x} = -\dfrac 1 b \sqrt {1 + \paren {y'}^2}$
The minus sign is there because $s$ increases as $x$ decreases.
When $(2)$ and $(3)$ are combined, the differential equation describing $C$ is seen to be:

$(4): \quad x y' ' = k \sqrt {1 + \paren {y'}^2}$
where $k = \dfrac a b$.
Let $p = y'$.
Then $(4)$ becomes:














\(\ds x \dfrac {\d p} {\d x}\)

\(=\)







\(\ds k \sqrt {1 + p^2}\)














\(\ds \leadsto \ \ \)





\(\ds k \int \frac {\d x} x\)

\(=\)







\(\ds \int \frac {\d p} {\sqrt {1 + p^2} }\)





Solution to Separable Differential Equation








\(\ds \leadsto \ \ \)





\(\ds k \ln x\)

\(=\)







\(\ds \map \ln {p + \sqrt {1 + p^2} } + C\)





Primitive of $\dfrac 1 {\sqrt {x^2 + a^2} }$



When $x = c$ we have $p = 0$, so:














\(\ds k \ln x\)

\(=\)







\(\ds \map \ln {p + \sqrt {1 + p^2} } + C\)





Primitive of $\dfrac 1 {\sqrt {x^2 + a^2} }$








\(\ds \leadsto \ \ \)





\(\ds k \ln c\)

\(=\)







\(\ds \map \ln {0 + \sqrt {1 + 0} } + C\)














\(\ds \leadsto \ \ \)





\(\ds \ln c^k\)

\(=\)







\(\ds 0 + C\)









Hence:














\(\ds k \ln x\)

\(=\)







\(\ds \map \ln {p + \sqrt {1 + p^2} } + C\)














\(\ds \leadsto \ \ \)





\(\ds k \ln x - k \ln c\)

\(=\)







\(\ds \map \ln {p + \sqrt {1 + p^2} }\)














\(\ds \leadsto \ \ \)





\(\ds \map \ln {\frac x c}^k\)

\(=\)







\(\ds \map \ln {p + \sqrt {1 + p^2} }\)









Solving for $p$ reveals:

$p = \dfrac {\d y} {\d x} = \dfrac 1 2 \paren {\paren {\dfrac x c}^k - \paren {\dfrac c x}^k}$
$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $\S 2.12$: The Hanging Chain. Pursuit Curves: Example $(3)$




