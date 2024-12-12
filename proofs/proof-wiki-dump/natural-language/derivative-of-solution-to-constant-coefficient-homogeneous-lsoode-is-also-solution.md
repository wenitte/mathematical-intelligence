# 

Source: https://proofwiki.org/wiki/Derivative_of_Solution_to_Constant_Coefficient_Homogeneous_LSOODE_is_also_Solution

Theorem
Let:

$(1): \quad y + p y' + q y = 0$
be a constant coefficient homogeneous linear second order ODE.
Let $\map y x$ be a particular solution of $(1)$.

Then its derivative $\map {y'} x$ is also a particular solution of $(1)$.


Proof
By Solution of Constant Coefficient Homogeneous LSOODE, $y$ is in one of the following forms:

$y = \begin{cases}
C_1 e^{m_1 x} + C_2 e^{m_2 x} & : p^2 > 4 q \\

& \\

C_1 e^{m_1 x} + C_2 x e^{m_2 x} & : p^2 = 4 q \\

& \\

e^{a x} \paren {C_1 \sin b x + C_2 \cos b x} & : p^2 < 4 q
\end{cases}$

Let:

$y = A e^{m_1 x} + B e^{m_2 x}$
where $A, B \in \R$.
Then:

$y' = m_1 A e^{m_1 x} + m_2 B e^{m_2 x}$
which is also in the form:

$y = C_1 e^{m_1 x} + C_2 e^{m_2 x}$
and so is also a particular solution of $(1)$.
$\Box$

Let:

$y = A e^{m_1 x} + B x e^{m_1 x}$
where $A, B \in \R$.
Then:














\(\ds y'\)

\(=\)







\(\ds m_1 A e^{m_1 x} + B e^{m_1 x} + B m_1 x e^{m_1 x}\)




















\(\ds \)

\(=\)







\(\ds \paren {m_1 A + B} e^{m_1 x} + B m_1 x e^{m_1 x}\)









which is also in the form:

$y = C_1 e^{m_1 x} + C_2 x e^{m_1 x}$
and so is also a particular solution of $(1)$.
$\Box$

Let:

$y = e^{a x} \left({A \sin b x + B \cos b x}\right)$
where $A, B \in \R$.
Then:

$y' = m_1 A e^{m_1 x} + m_2 B e^{m_2 x}$













\(\ds y'\)

\(=\)







\(\ds a e^{a x} \paren {A \sin b x + B \cos b x} + e^{a x} \paren {A b \cos b x - B b \sin b x}\)




















\(\ds \)

\(=\)







\(\ds e^{a x} \paren {a A \sin b x + a B \cos b x + A b \cos b x - B b \sin b x}\)




















\(\ds \)

\(=\)







\(\ds e^{a x} \paren {\paren {a B + A b} \cos b x + \paren {a A - b B} \sin b x}\)









which is also in the form:

$y = e^{a x} \paren {C_1 \sin b x + C_2 \cos b x}$
and so is also a particular solution of $(1)$.
$\Box$

Hence the result.
$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $\S 3.17$: Problem $3$




