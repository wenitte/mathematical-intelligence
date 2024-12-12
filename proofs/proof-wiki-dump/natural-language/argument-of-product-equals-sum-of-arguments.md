# 

Source: https://proofwiki.org/wiki/Argument_of_Product_equals_Sum_of_Arguments

Theorem
Let $z_1, z_2 \in \C$ be complex numbers.
Let $\arg$ be the argument operator.
Then:

$\map \arg {z_1 z_2} = \map \arg {z_1} + \map \arg {z_2} + 2 k \pi$
where $k$ can be $0$, $1$ or $-1$.


Proof
Let $\theta_1 = \map \arg {z_1}, \theta_2 = \map \arg {z_2}$.
Then the polar forms of $z_1, z_2$ are:














\(\ds z_1\)

\(=\)







\(\ds \cmod {z_1} \paren {\cos \theta_1 + i \sin \theta_1}\)




















\(\ds z_2\)

\(=\)







\(\ds \cmod {z_2} \paren {\cos \theta_2 + i \sin \theta_2}\)










By the definition of complex multiplication, factoring $\cmod {z_1} \cmod {z_2}$ from all terms, we have:

$z_1 z_2 = \cmod {z_1} \cmod {z_2} \paren {\paren {\cos \theta_1 \cos \theta_2 - \sin \theta_1 \sin \theta_2} + i \paren {\cos \theta_1 \sin \theta_2 + \sin \theta_1 \cos \theta_2} }$
Using Sine of Sum and Cosine of Sum, we have:

$z_1 z_2 = \cmod {z_1} \cmod {z_2} \paren {\map \cos {\theta_1 + \theta_2} + i \, \map \sin {\theta_1 + \theta_2} }$
The theorem follows from the definition of $\map \arg z$, which says that $\map \arg {z_1 z_2}$ satisfies the equations:




\(\text {(1)}: \quad\)









\(\ds \dfrac {\cmod {z_1} \cmod {z_2} \map \cos {\theta_1 + \theta_2} } {\cmod {z_1} \cmod {z_2} }\)

\(=\)







\(\ds \map \cos {\map \arg {z_1 z_2} }\)










\(\text {(2)}: \quad\)









\(\ds \dfrac {\cmod {z_1} \cmod {z_2} \map \sin {\theta_1 + \theta_2} } {\cmod {z_1} \cmod {z_2} }\)

\(=\)







\(\ds \map \sin {\map \arg {z_1 z_2} }\)









which in turn means that:














\(\ds \map \cos {\theta_1 + \theta_2}\)

\(=\)







\(\ds \map \cos {\map \arg {z_1 z_2} }\)




















\(\ds \map \sin {\theta_1 + \theta_2}\)

\(=\)







\(\ds \map \sin {\map \arg {z_1 z_2} }\)










There are $3$ possibilities for the size of $\theta_1 + \theta_2$:


$(1): \quad \theta_1 + \theta_2 > \pi$
Then:

$-\pi < \theta_1 + \theta_2 - 2 \pi \le \pi$
and we have:














\(\ds \map \cos {\theta_1 + \theta_2}\)

\(=\)







\(\ds \map \cos {\theta_1 + \theta_2 - 2 \pi}\)





Cosine of Angle plus Full Angle














\(\ds \map \sin {\theta_1 + \theta_2}\)

\(=\)







\(\ds \map \sin {\theta_1 + \theta_2 - 2 \pi}\)





Sine of Angle plus Full Angle



and so $\theta_1 + \theta_2 - 2 \pi$ is the argument of $z_1 z_2$ within its principal range.


$(2): \quad \theta_1 + \theta_2 \le -\pi$
Then:

$-\pi < \theta_1 + \theta_2 + 2 \pi \le \pi$
and we have:














\(\ds \map \cos {\theta_1 + \theta_2}\)

\(=\)







\(\ds \map \cos {\theta_1 + \theta_2 + 2 \pi}\)





Cosine of Angle plus Full Angle














\(\ds \map \sin {\theta_1 + \theta_2}\)

\(=\)







\(\ds \map \sin {\theta_1 + \theta_2 + 2 \pi}\)





Sine of Angle plus Full Angle



and so $\theta_1 + \theta_2 + 2 \pi$ is within the principal range of $z_1 z_2$.


$(3): \quad -\pi < \theta_1 + \theta_2 \le \pi$
Then $\theta_1 + \theta_2$ is already within the principal range of $z_1 z_2$.

Therefore:

$\map \arg {z_1 z_2} = \theta_1 + \theta_2 = \map \arg {z_1} + \map \arg {z_2} + 2 k \pi$
where $k$ can be $0$, $1$ or $-1$.
$\blacksquare$


Sources
1960: Walter Ledermann: Complex Numbers ... (previous) ... (next): $\S 2$. Geometrical Representations: $(2.13)$
1964: Milton Abramowitz and Irene A. Stegun: Handbook of Mathematical Functions ... (previous) ... (next): $3$: Elementary Analytic Methods: $3.7$ Complex Numbers and Functions: Multiplication and Division: $3.7.12$
1981: Murray R. Spiegel: Theory and Problems of Complex Variables (SI ed.) ... (previous) ... (next): $1$: Complex Numbers: Solved Problems: De Moivre's Theorem: $27 \ \text{(a)}$




