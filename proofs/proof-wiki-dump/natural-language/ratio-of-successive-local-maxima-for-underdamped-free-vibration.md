# 

Source: https://proofwiki.org/wiki/Ratio_of_Successive_Local_Maxima_for_Underdamped_Free_Vibration

Theorem
Consider a physical system $S$ whose behaviour can be described with the second order ODE in the form:

$(1): \quad \dfrac {\d^2 x} {\d t^2} + 2 b \dfrac {\d x} {\d t} + a^2 x = 0$
for $a, b \in \R_{>0}$.
Let $b < a$, so as to make $S$ underdamped.




Let $T$ be the period of oscillation of $S$.

Let $x_1$ and $x_2$ be successive local maxima of $x$.
Then:

$\dfrac {x_1} {x_2} = e^{b T}$


Proof
Let the position of $S$ be described in the canonical form:

$(1): \quad x = \dfrac {x_0 \, a} \alpha e^{-b t} \map \cos {\alpha t - \theta}$
where:

$\alpha = \sqrt {a^2 - b^2}$
$\theta = \map \arctan {\dfrac b \alpha}$
From Period of Oscillation of Underdamped System is Regular, the period of oscillation $T$ is given by:

$T = \dfrac {2 \pi} {a^2 - b^2}$

From Interval between Local Maxima for Underdamped Free Vibration, the local maxima of $x$ occur at:

$t = 0, T, 2 T, \ldots$
Let $x_1$ occur at $n T$.
Thus $x_2$ occurs at $\paren {n + 1} T$.
Differentiating with respect to $t$:














\(\ds x_1\)

\(=\)







\(\ds \dfrac {x_0 \, a} \alpha e^{-b n T} \map \cos {\alpha n T - \theta}\)




















\(\ds x_2\)

\(=\)







\(\ds \dfrac {x_0 \, a} \alpha e^{-b \paren {n + 1} T} \map \cos {\alpha \paren {n + 1} T - \theta}\)










As $T = \dfrac {2 \pi} {a^2 - b^2} = \dfrac {2 \pi} \alpha$, we have:














\(\ds \map \cos {\alpha \paren {n + 1} T - \theta}\)

\(=\)







\(\ds \map \cos {\alpha \paren {n + 1} \dfrac {2 \pi} \alpha - \theta}\)




















\(\ds \)

\(=\)







\(\ds \map \cos {\paren {n + 1} 2 \pi - \theta}\)




















\(\ds \)

\(=\)







\(\ds \map \cos {n 2 \pi - \theta}\)




















\(\ds \)

\(=\)







\(\ds \map \cos {\alpha n \dfrac {2 \pi} \alpha  - \theta}\)




















\(\ds \)

\(=\)







\(\ds \map \cos {\alpha n T  - \theta}\)









Hence:














\(\ds \dfrac {x_1} {x_2}\)

\(=\)







\(\ds \dfrac {\dfrac {x_0 \, a} \alpha e^{-b n T} \map \cos {\alpha n T - \theta} } {\dfrac {x_0 \, a} \alpha e^{-b \paren {n + 1} T} \map \cos {\alpha \paren {n + 1} T - \theta} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac {e^{-b n T} \map \cos {\alpha n T - \theta} } {e^{-b \paren {n + 1} T} \map \cos {\alpha n T - \theta} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac {e^{-b n T} } {e^{-b \paren {n + 1} T} }\)




















\(\ds \)

\(=\)







\(\ds e^{-b n T + b \paren {n + 1} T}\)




















\(\ds \)

\(=\)







\(\ds e^{b T}\)









as required.
$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $\S 3.20$: Problem $(2)$




