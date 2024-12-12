# 

Source: https://proofwiki.org/wiki/Derivative_of_Absolute_Value_Function



Theorem
Let $\size x$ be the absolute value of $x$ for real $x$.
Then:

$\dfrac \d {\d x} \size x = \dfrac x {\size x}$
for $x \ne 0$.


Corollary
Let $u$ be a differentiable real function of $x$.
Then:

$\dfrac \d {\d x} \size u = \dfrac u {\size u} \dfrac {\d u} {\d x}$
for $u \ne 0$.
At $u = 0$, $\size u$ is not differentiable.


Proof













\(\ds \frac \d {\d x} \size x\)

\(=\)







\(\ds \frac \d {\d x} \sqrt{x^2}\)





Square of Real Number is Non-Negative














\(\ds \)

\(=\)







\(\ds \frac \d {\d x} \paren {x^2}^{\frac 1 2}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 2 \paren {x^2}^{-\frac 1 2} \cdot 2 x\)





Chain Rule for Derivatives














\(\ds \)

\(=\)







\(\ds \frac x {\sqrt{x^2} }\)




















\(\ds \)

\(=\)







\(\ds \frac x {\size x}\)









$\Box$

Now consider $x = 0$.
From the definition of derivative:














\(\ds \valueat {\dfrac {\d \size x} {\d x} } {x \mathop = 0}\)

\(=\)







\(\ds \lim_{x \mathop \to 0}\frac {\size x - 0} {x - 0}\)




















\(\ds \)

\(=\)







\(\ds \begin {cases} \lim_{x \mathop \to 0^+} \dfrac x x & : x > 0 \\ \lim_{x \mathop \to 0^-} \dfrac {-x} x & : x < 0 \end {cases}\)





Definition of Absolute Value














\(\ds \)

\(=\)







\(\ds \begin {cases} 1 & : x > 0 \\ -1 & : x < 0 \end {cases}\)









From Limit iff Limits from Left and Right, the limit does not exist.
$\blacksquare$


Also see
Distributional Derivative of Absolute Value Function




