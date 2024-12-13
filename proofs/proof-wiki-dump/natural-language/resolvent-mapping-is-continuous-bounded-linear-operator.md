# 

Source: https://proofwiki.org/wiki/Resolvent_Mapping_is_Continuous/Bounded_Linear_Operator


This article needs to be tidied.Please fix formatting and $\LaTeX$ errors and inconsistencies. It may also need to be brought up to our standard house style.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Tidy}} from the code.

This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.

It has been suggested that this page be renamed.To discuss this page in more detail, feel free to use the talk page.
Theorem
Let $B$ be a Banach space.
Let $\mathfrak{L}(B, B)$ be the set of bounded linear operators from $B$ to itself.
Let $T \in \mathfrak{L}(B, B)$.
Let $\rho(T)$ be the resolvent set of $T$ in the complex plane.

Then the resolvent mapping $f : \rho(T) \to \mathfrak{L}(B,B)$ given by:

$f(z) = (T - zI)^{-1}$
is continuous in the operator norm $\|\cdot\|_*$.


Proof
Pick $z\in\rho(T)$. Since $z\in\rho(T)$, the operator $R_z = (T - zI)^{-1}$ exists and has finite norm $C \geq 0$.
Since Resolvent Set is Open, $z+h\in\rho(T)$ for any $h\in \Bbb C$ smaller than some $\delta > 0$. For such $h$,














\(\ds \norm{ f(z+h) - f(z) }_*\)

\(=\)







\(\ds \norm{ (T-(z+h)I)^{-1} - (T-zI)^{-1}  }_*\)




















\(\ds \)

\(=\)







\(\ds \norm{ ((T-zI)-hI)^{-1} - (T-zI)^{-1}  }_*\)




















\(\ds \)

\(=\)







\(\ds \norm{ [(T-zI)(I-h(T-zI)^{-1})]^{-1} - (T-zI)^{-1}  }_*\)





by factoring out $T-zI$ from inside the first term














\(\ds \)

\(=\)







\(\ds \norm{ (I-h(T-zI)^{-1})^{-1}(T-zI)^{-1} - (T-zI)^{-1}  }_*\)




















\(\ds \)

\(=\)







\(\ds \norm{ \big[(I-h(T-zI)^{-1})^{-1} - I\big] (T-zI)^{-1}  }_*\)




















\(\ds \)

\(\leq\)







\(\ds \norm{ (I-h(T-zI)^{-1})^{-1} - I }_* \norm{(T-zI)^{-1}  }_*\)





by Operator Norm on Banach Space is Submultiplicative.














\(\ds \)

\(=\)







\(\ds C\norm{ (I-hR_z)^{-1} - I }_*.\)





(1)



Consider $(I - hR_z)^{-1}$. Either $\|R_z\|_* = 0$ so that $\|hR_z\|_* = |h|\|R_z\|_* = 0$ (by Operator Norm is Norm) for all $h$, or else $\|hR_z\|_* < 1$ for $h < 1/\|R_z\|_*$. In either case, $\|hR_z\|_* < 1$ for all sufficiently small $h$.
Therefore, by Invertibility of Identity Minus Operator, for sufficiently small $h$ we have $(I - hR_z)^{-1} = I + hR_z + h^2R_z^2 + \ldots$. Substituting this into $(1)$, we get














\(\ds \norm{ f(z+h) - f(z) }_*\)

\(\leq\)







\(\ds C\norm{ hR_z + h^2R_z^2 + \ldots }_*\)




















\(\ds \)

\(=\)







\(\ds C\norm{hR_z (I + hR_z + h^2R_z^2 + \ldots) }_*\)




















\(\ds \)

\(\leq\)







\(\ds C\size{h}\norm{R_z}_*\norm{I + hR_z + h^2R_z^2 + \ldots }_*\)





by Operator Norm on Banach Space is Submultiplicative














\(\ds \)

\(\leq\)







\(\ds C^2\size{h} \sum_{n\in N} (\size{h}\norm{R_z})^n\)





by Triangle Inequality and Operator Norm on Banach Space is Submultiplicative again on each term














\(\ds \)

\(\leq\)







\(\ds 2C^2\size{h}\)









as long as $|h| \leq \frac{1}{2\norm{R_z}}$.
The expression on the right-hand side goes to zero as $h$ gets small. Therefore, taking limits, we get
$$
\lim_{h\to0} \norm{ f(z+h) - f(z) }_* = 0.
$$
This establishes continuity of $f$ at arbitrary $z\in\rho(T)$.

$\blacksquare$





