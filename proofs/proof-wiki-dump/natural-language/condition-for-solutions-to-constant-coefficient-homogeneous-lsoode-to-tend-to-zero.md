# 

Source: https://proofwiki.org/wiki/Condition_for_Solutions_to_Constant_Coefficient_Homogeneous_LSOODE_to_tend_to_Zero



Theorem
Let:

$(1): \quad y + p y' + q y = 0$
be a constant coefficient homogeneous linear second order ODE.
Let the general solution to $(1)$ be $\map y {x, C_1, C_2}$.
Then:

$\ds \lim_{x \mathop \to \infty} \map y {x, C_1, C_2} = 0$
if and only if

$p$ and $q$ are both strictly positive.


Proof
By Solution of Constant Coefficient Homogeneous LSOODE, $y$ is in one of the following forms:

$y = \begin{cases}
C_1 e^{m_1 x} + C_2 e^{m_2 x} & : p^2 > 4 q \\

& \\

C_1 e^{m_1 x} + C_2 x e^{m_2 x} & : p^2 = 4 q \\

& \\

e^{a x} \paren {C_1 \sin b x + C_2 \cos b x} & : p^2 < 4 q
\end{cases}$
where:

$m_1$ and $m_2$ are the roots of the auxiliary equation $m^2 + p m + q = 0$
$a + i b = m_1$
$a - i b = m_2$


Sufficient Condition
Let:

$\ds \lim_{x \mathop \to \infty} \map y {x, C_1, C_2} = 0$

Let $y$ be of the form:

$y = C_1 e^{m_1 x} + C_2 e^{m_2 x}$
Then it follows that $m_1 < 0$ and $m_2 < 0$.
From Sum of Roots of Quadratic Equation:

$p = -\paren {m_1 + m_2}$
from which it follows that:

$p > 0$
From Product of Roots of Quadratic Equation:

$q = m_1 m_2$
from which it follows that:

$q > 0$
$\Box$

Let $y$ be of the form:

$y = C_1 e^{m_1 x} + C_2 x e^{m_1 x}$
From Limit at Infinity of Polynomial over Complex Exponential:

$\ds \lim_{x \mathop \to \infty} C_2 x e^{m_1 x} = 0$
if and only if $m_1 < 0$.
Thus it follows that $m_1 < 0$.
Again from Sum of Roots of Quadratic Equation:

$p = -\paren {2 m_1}$
from which it follows that:

$p > 0$
From Product of Roots of Quadratic Equation:

$q = m_1^2$
from which it follows that:

$q > 0$
$\Box$

Let $y$ be of the form:

$y = e^{a x} \paren {C_1 \sin b x + C_2 \cos b x}$
Thus it follows that $a < 0$.
From Sum of Roots of Quadratic Equation:














\(\ds p\)

\(=\)







\(\ds -\paren {a + i b + a - i b}\)





Sum of Roots of Quadratic Equation














\(\ds \)

\(=\)







\(\ds -2 a\)














\(\ds \leadsto \ \ \)





\(\ds p\)

\(>\)







\(\ds 0\)










Then:














\(\ds q\)

\(=\)







\(\ds \paren {a + i b} \paren {a - i b}\)





Product of Roots of Quadratic Equation














\(\ds \)

\(=\)







\(\ds a^2 + b^2\)














\(\ds \leadsto \ \ \)





\(\ds q\)

\(>\)







\(\ds 0\)





whatever $a$ and $b$ are



$\Box$

Thus it is seen that in all three cases:

$\ds \lim_{x \mathop \to \infty} \map y {x, C_1, C_2} = 0$
implies that $p$ and $q$ are both strictly positive.


Necessary Condition
Let $p$ and $q$ both be strictly positive.

Let $p^2 > 4 q$.
Then both $m_1$ and $m_2$ are real and unequal.
Thus from Solution of Constant Coefficient Homogeneous LSOODE:

$y = C_1 e^{m_1 x} + C_2 e^{m_2 x}$
From Product of Roots of Quadratic Equation:

$m_1 m_2 = q > 0$
and so either $m_1$ and $m_2$ are either both strictly positive or strictly negative.
It follows that $m_1 + m_2$ is also either strictly positive or strictly negative.

From Sum of Roots of Quadratic Equation:

$-\paren {m_1 + m_2} = p > 0$
and so $m_1 + m_2 < 0$
Hence both $m_1$ and $m_2$ are strictly negative.
It follows that: 

$\ds \lim_{x \mathop \to \infty} C_1 e^{m_1 x} + C_2 e^{m_2 x} = 0$
$\Box$

Let $p^2 = 4 q$.
Then from Solution to Quadratic Equation with Real Coefficients:

$m_1 = m_2 = -\frac p 2$
and so:

$y = C_1 e^{m_1 x} + C_2 x e^{m_1 x}$
From Limit at Infinity of Polynomial over Complex Exponential:

$\ds \lim_{x \mathop \to \infty} C_2 x e^{m_1 x} = 0$
if and only if $m_1 < 0$.
It follows that: 

$\ds \lim_{x \mathop \to \infty} C_1 e^{m_1 x} + C_2 x e^{m_1 x} = 0$
$\Box$

Let $p^2 < 4 q$.
Then both $m_1$ and $m_2$ are complex and unequal:

$m_1 = a + i b = -\dfrac p 2 + i \dfrac {\sqrt {4 q - p^2} } 2$
$m_2 = a + i b = -\dfrac p 2 - i \dfrac {\sqrt {4 q - p^2} } 2$
Then from Solution of Constant Coefficient Homogeneous LSOODE:

$y = e^{a x} \paren {C_1 \sin b x + C_2 \cos b x}$
As $p > 0$ it follows that $a < 0$.
Thus it follows that: 

$\ds \lim_{x \mathop \to \infty} e^{a x} \paren {C_1 \sin b x + C_2 \cos b x} = 0$
$\Box$

Thus in all cases:

$\ds \lim_{x \mathop \to \infty} \map y {x, C_1, C_2} = 0$
$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $\S 3.17$: Problem $2$




