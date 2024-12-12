# 

Source: https://proofwiki.org/wiki/Argument_of_Quotient_equals_Difference_of_Arguments

Theorem
Let $z_1$ and $z_2$ be complex numbers.
Then:

$\map \arg {\dfrac {z_1} {z_2} } = \map \arg {z_1} - \map \arg {z_1} + 2 k \pi$
where:

$\arg$ denotes the argument of a complex number
$k$ can be $0$, $1$ or $-1$.


Proof
Let $z_1$ and $z_2$ be expressed in polar form.

$z_1 = \polar {r_1, \theta_1}$
$z_2 = \polar {r_2, \theta_2}$
From Division of Complex Numbers in Polar Form:

$\dfrac {z_1} {z_2} = \dfrac {r_1} {r_2} \paren {\map \cos {\theta_1 - \theta_2} + i \, \map \sin {\theta_1 - \theta_2} }$
By the definition of argument:

$\map \arg {z_1} = \theta_1$
$\map \arg {z_2} = \theta_2$
$\map \arg {\dfrac {z_1} {z_2} } = \theta_1 - \theta_2$

There are $3$ possibilities for the size of $\theta_1 + \theta_2$:


$(1): \quad \theta_1 - \theta_2 > \pi$
Then:

$-\pi < \theta_1 - \theta_2 - 2 \pi \le \pi$
and we have:














\(\ds \map \cos {\theta_1 - \theta_2}\)

\(=\)







\(\ds \map \cos {\theta_1 - \theta_2 - 2 \pi}\)





Cosine of Angle plus Full Angle














\(\ds \map \sin {\theta_1 - \theta_2}\)

\(=\)







\(\ds \map \sin {\theta_1 - \theta_2 - 2 \pi}\)





Sine of Angle plus Full Angle



and so $\theta_1 + \theta_2 - 2 \pi$ is the argument of $\dfrac {z_1} {z_2}$ within its principal range.


$(2): \quad \theta_1 - \theta_2 \le -\pi$
Then:

$-\pi < \theta_1 - \theta_2 + 2 \pi \le \pi$
and we have:














\(\ds \map \cos {\theta_1 - \theta_2}\)

\(=\)







\(\ds \map \cos {\theta_1 - \theta_2 + 2 \pi}\)





Cosine of Angle plus Full Angle














\(\ds \map \sin {\theta_1 - \theta_2}\)

\(=\)







\(\ds \map \sin {\theta_1 - \theta_2 + 2 \pi}\)





Sine of Angle plus Full Angle



and so $\theta_1 - \theta_2 + 2 \pi$ is within the principal range of $\dfrac {z_1} {z_2}$.


$(3): \quad -\pi < \theta_1 + \theta_2 \le \pi$
Then $\theta_1 - \theta_2$ is already within the principal range of $\dfrac {z_1} {z_2}$.
$\blacksquare$


Sources
1960: Walter Ledermann: Complex Numbers ... (previous) ... (next): $\S 2$. Geometrical Representations
1964: Milton Abramowitz and Irene A. Stegun: Handbook of Mathematical Functions ... (previous) ... (next): $3$: Elementary Analytic Methods: $3.7$ Complex Numbers and Functions: Multiplication and Division: $3.7.15$
1981: Murray R. Spiegel: Theory and Problems of Complex Variables (SI ed.) ... (previous) ... (next): $1$: Complex Numbers: Solved Problems: De Moivre's Theorem: $27 \ \text{(b)}$




