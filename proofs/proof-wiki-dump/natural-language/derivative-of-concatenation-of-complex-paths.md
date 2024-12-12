# 

Source: https://proofwiki.org/wiki/Derivative_of_Concatenation_of_Complex_Paths

Theorem
Let $\gamma_0 : \closedint {a_0}{b_0} \to \C$ be an injective complex-differentiable function.
Let $\gamma_1 : \closedint {a_1}{b_1} \to \C$ be a complex-differentiable function such that $\map {\gamma_0}{b_0} = \map {\gamma_1}{a_1}$.
Let $t_0 \in \openint {a_0}{b_0}$.
Define the concatenation $\gamma_0 * \gamma_1 : \closedint 0 1 \to \C$ as:

$\map {\gamma_0 * \gamma_1}{ s } = \begin{cases} \map {\gamma_0}{2 s \paren{b_0 - a_0} + a_0} & \forall s \in \closedint 0 {\dfrac 1 2} \\ \map {\gamma_1}{ \paren{2 s - 1} \paren{b_1 - a_1} + a_1} & \forall s \in \closedint {\dfrac 1 2} 1 \end{cases}$

Then there exists $s_0 \in \openint 0 {\dfrac 1 2}$ and $C \in \R_{>0}$ such that:














\(\ds \map {\gamma_0}{t_0}\)

\(=\)







\(\ds \map {\gamma_0 * \gamma_1}{s_0}\)




















\(\ds C \map {\gamma_0 '}{t_0}\)

\(=\)







\(\ds \map { \paren{ \gamma_0 * \gamma_1 }' }{s_0}\)











Proof
Set $s_0 := \dfrac {t_0 - a_0}{2 \paren{ b_0 - a_0 } }$.
Then:














\(\ds \map {\gamma_0 * \gamma_1}{s_0}\)

\(=\)







\(\ds \map{\gamma_0}{ \dfrac{2 \paren{ t_0 - a_0 } \paren{ b_0 - a_0 } }{2 \paren{ b_0 - a_0 } } + a_0 }\)





as $t_0 - a_0 < b_0 - a_0$, so $\dfrac {t_0 - a_0}{2 \paren{ b_0 - a_0 } } < \dfrac 1 2$.














\(\ds \)

\(=\)







\(\ds \map {\gamma_0}{t_0}\)









For all $s \in \openint 0 {\dfrac 1 2}$, it follows that:














\(\ds \map {\dfrac {\d \paren{\gamma_0 * \gamma_1} } {\d s} } s\)

\(=\)







\(\ds \map {\dfrac {\d {\gamma_0} } {\d s} }{ 2 s \paren{b_0 - a_0} + a_0 } \dfrac{\d}{\d s} \paren{ 2 s \paren{b_0 - a_0} + a_0}\)





by Derivative of Complex Composite Function














\(\ds \)

\(=\)







\(\ds 2 \paren{ b_0 - a_0} \map {\dfrac {\d {\gamma_0} } {\d s} }{ 2 s \paren{b_0 - a_0} + a_0 }\)





by Derivative of Complex Polynomial




Hence:














\(\ds \map { \paren{ \gamma_0 * \gamma_1 }' }{s_0}\)

\(=\)







\(\ds 2 \paren{ b_0 - a_0} \map {\gamma_0 '}{ \dfrac{2 \paren{ t_0 - a_0 } \paren{ b_0 - a_0 } }{2 \paren{ b_0 - a_0 } } + a_0 }\)




















\(\ds \)

\(=\)







\(\ds 2 \paren{ b_0 - a_0} \map {\gamma_0 '}{t_0}\)










As $\closedint {a_0}{b_0}$ is a closed real interval, it follows that $a_0 < b_0$, so $2 \paren {b_0 - a_0} > 0$.
$\blacksquare$





