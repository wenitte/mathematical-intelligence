# 

Source: https://proofwiki.org/wiki/Inverse_for_Complex_Multiplication



Theorem
Each element $z = x + i y$ of the set of non-zero complex numbers $\C_{\ne 0}$ has an inverse element $z^{-1}$ under the operation of complex multiplication:

$\forall z \in \C_{\ne 0}: \exists z^{-1} \in \C_{\ne 0}: z \times z^{-1} = 1 + 0 i = z^{-1} \times z$
This inverse can be expressed as:

$\dfrac 1 z := \dfrac {x - i y} {x^2 + y^2} = \dfrac {\overline z} {z \overline z}$
where $\overline z$ is the complex conjugate of $z$.


Proof













\(\ds \paren {x + i y} \frac {x - i y} {x^2 + y^2}\)

\(=\)







\(\ds \frac {\paren {x \cdot x - y \cdot \paren {-y} } + i \paren {x \cdot \paren {-y} + x \cdot y} } {x^2 + y^2}\)




















\(\ds \)

\(=\)







\(\ds \frac {\paren {x^2 + y^2} + 0 i} {x^2 + y^2}\)




















\(\ds \)

\(=\)







\(\ds 1 + 0 i\)









Similarly for $\dfrac {x - i y} {x^2 + y^2} \paren {x + i y}$.
So the inverse of $x + i y \in \struct {\C_{\ne 0}, \times}$ is $\dfrac {x - i y} {x^2 + y^2}$.
As $x^2 + y^2 > 0 \iff x, y \ne 0$ the inverse is defined for all $z \in \C: z \ne 0 + 0 i$.
$\Box$

From the definition, the complex conjugate $\overline z$ of $z = x + i y$ is $x - i y$.
From the definition of the modulus of a complex number, we have:

$\cmod z = \sqrt {a^2 + b^2}$
From Modulus in Terms of Conjugate, we have that:

$\cmod z^2 = z \overline z$
Hence the result:

$\dfrac 1 z = \dfrac {\overline z} {z \overline z}$
$\blacksquare$


This article is complete as far as it goes, but it could do with expansion.In particular: Add the polar and exponential forms of thisYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding this information.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Expand}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.


Examples
Example: $\dfrac 1 {1 + i}$
$\dfrac 1 {1 + i} = \dfrac {1 - i} 2$


Example: $\dfrac 1 {3 + 2 i}$
$\dfrac 1 {3 + 2 i} = \dfrac 3 {13} + \dfrac {2 i} {13}$


Sources
1960: Walter Ledermann: Complex Numbers ... (previous) ... (next): $\S 1.2$. The Algebraic Theory: $(1.15)$
1964: Milton Abramowitz and Irene A. Stegun: Handbook of Mathematical Functions ... (previous) ... (next): $3$: Elementary Analytic Methods: $3.7$ Complex Numbers and Functions: Powers: $3.7.25$
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 4$: Neutral Elements and Inverses
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): Chapter $\text{II}$: Groups: Subgroups
1981: Murray R. Spiegel: Theory and Problems of Complex Variables (SI ed.) ... (previous) ... (next): $1$: Complex Numbers: Axiomatic Foundations of the Complex Number System: $9$
1981: Murray R. Spiegel: Theory and Problems of Complex Variables (SI ed.) ... (previous) ... (next): $1$: Complex Numbers: Supplementary Problems: Axiomatic Foundations of Complex Numbers: $78$
1990: H.A. Priestley: Introduction to Complex Analysis (revised ed.) ... (previous) ... (next): $1$ The complex plane: Complex numbers $\S 1.2$ The algebraic structure of the complex numbers
1998: Yoav Peleg, Reuven Pnini and Elyahu Zaarur: Quantum Mechanics ... (previous) ... (next): Chapter $2$: Mathematical Background: $2.1$ The Complex Field $C$
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): inverse of a complex number




