# 

Source: https://proofwiki.org/wiki/Law_of_Mass_Action

Theorem
Let $\AA$ and $\BB$ be two chemical substances in a solution $C$ which are involved in a second-order reaction.

Let $x$ grams of $\CC$ contain $a x$ grams of $\AA$ and $b x$ grams of $\BB$, where $a + b = 1$.
Let there be $a A$ grams of $\AA$ and $b B$ grams of $\BB$ at time $t = t_0$, at which time $x = 0$.

Then:

$x = \begin{cases}
\dfrac {k A^2 a b t} {k A a b t + 1} & : A = B \\
& \\
\dfrac {A B e^{-k \paren {A - B} a b t}} {A - B e^{-k \paren {A - B} a b t}} & : A \ne B
\end{cases}$
for some positive real constant $k$.

This is known as the law of mass action.


Proof
By the definition of a second-order reaction:

The rate of formation of $\CC$ is jointly proportional to the quantities of $\AA$ and $\BB$ which have not yet transformed.

By definition of joint proportion:

$\dfrac {\d x} {\d t} \propto \paren {A - x} a \paren {B - x} b$
or:

$\dfrac {\d x} {\d t} = k a b \paren {A - x} \paren {B - x}$
for some positive real constant $k$.

Thus:














\(\ds \int \d t\)

\(=\)







\(\ds \int \frac {\d x} {k a b \paren {A - x} \paren {B - x} }\)





Solution to Separable Differential Equation








\(\ds \leadsto \ \ \)





\(\ds k a b t\)

\(=\)







\(\ds \int \frac {\d x} {\paren {A - B} \paren {B - x} } + \int \frac {\d x} {\paren {B - A} \paren {A - x} }\)





Partial Fractions








\(\ds \leadsto \ \ \)





\(\ds \paren {A - B} k a b t\)

\(=\)







\(\ds \int \frac {\d x} {A - x} - \int \frac {\d x} {B - x}\)














\(\ds \leadsto \ \ \)





\(\ds \paren {A - B} k a b t\)

\(=\)







\(\ds \map \ln {\frac {A - x} {B - x} } + C_1\)





$C_1$ is an arbitrary constant








\(\ds \leadsto \ \ \)





\(\ds -k \paren {A - B} a b t\)

\(=\)







\(\ds \map \ln {\frac {B - x} {A - x} } + C_2\)





$C_2$ is another arbitrary constant: $C_2 = -C_1$








\(\ds \leadsto \ \ \)





\(\ds C e^{-k \paren {A - B} a b t}\)

\(=\)







\(\ds \frac {B - x} {A - x}\)





$C$ is another arbitrary constant








\(\ds \leadsto \ \ \)





\(\ds C \paren {A - x} e^{-k \paren {A - B} a b t}\)

\(=\)







\(\ds B - x\)














\(\ds \leadsto \ \ \)





\(\ds x \paren {1 - C e^{-k \paren {A - B} a b t} }\)

\(=\)







\(\ds B - A C e^{-k \paren {A - B}) a b t}\)














\(\ds \leadsto \ \ \)





\(\ds x\)

\(=\)







\(\ds \frac {B - A C e^{-k \paren {A - B} a b t} } {1 - C e^{-k \paren {A - B} a b t} }\)










Note that in the above, we have to assume that $A \ne B$ or the integrals on the right hand side will not be defined.
We will look later at how we handle the situation when $A = B$.

We are given the initial condition $x = 0$ at $t = 0$.
Thus:














\(\ds 0\)

\(=\)







\(\ds \frac {B - A C} {1 - C}\)














\(\ds \leadsto \ \ \)





\(\ds B\)

\(=\)







\(\ds A C\)





(assuming $C \ne 1$)








\(\ds \leadsto \ \ \)





\(\ds C\)

\(=\)







\(\ds \frac B A\)










Our assumption that $C \ne 1$ is justified, because that only happens when $A = B$, and we have established that this is not the case.
So, we now have:














\(\ds x\)

\(=\)







\(\ds \frac {B - A \paren {B / A} e^{-k \paren {A - B} a b t} } {1 - \paren {B / A} e^{-k \paren {A - B} a b t} }\)














\(\ds \leadsto \ \ \)





\(\ds x\)

\(=\)







\(\ds \frac {A B e^{-k \paren {A - B} a b t} } {A - B e^{-k \paren {A - B} a b t} }\)










Now we can investigate what happens when $A = B$.
We need to solve:

$\dfrac {\d x} {\d t} = k a b \paren {A - x} \paren {A - x} = k a b \paren {A - x}^2$

So:














\(\ds \frac {\d x} {\d t}\)

\(=\)







\(\ds k a b \paren {A - x}^2\)














\(\ds \leadsto \ \ \)





\(\ds \int k a b \rd t\)

\(=\)







\(\ds \int \frac {\d x} {\paren {A - x}^2}\)














\(\ds \leadsto \ \ \)





\(\ds k a b t\)

\(=\)







\(\ds \frac 1 {A - x} + C\)














\(\ds \leadsto \ \ \)





\(\ds \paren {A - x} k a b t\)

\(=\)







\(\ds 1 + C \paren {A - x}\)














\(\ds \leadsto \ \ \)





\(\ds A k a b t - x k a b t\)

\(=\)







\(\ds 1 + C A - C x\)














\(\ds \leadsto \ \ \)





\(\ds x \paren {C - k a b t}\)

\(=\)







\(\ds 1 + C A - A k a b t\)














\(\ds \leadsto \ \ \)





\(\ds x\)

\(=\)







\(\ds \frac {1 + C A - A k a b t} {C - k a b t}\)










We are given the initial condition $x = 0$ at $t = 0$.
Thus:














\(\ds 0\)

\(=\)







\(\ds \frac {1 + C A - 0} {C - 0}\)





assuming $C \ne 0$








\(\ds \leadsto \ \ \)





\(\ds 1 + C A\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds C\)

\(=\)







\(\ds -1 / A\)





confirming that $C \ne 0$ as we had assumed




This gives us:














\(\ds x\)

\(=\)







\(\ds \frac {1 + \paren {-1 / A} A - A k a b t} {\paren {-1 / A} - k a b t}\)














\(\ds \leadsto \ \ \)





\(\ds x\)

\(=\)







\(\ds \frac {A k a b t} {\frac 1 A + k a b t}\)














\(\ds \leadsto \ \ \)





\(\ds x\)

\(=\)







\(\ds \frac {k A^2 a b t} {k A a b t + 1}\)










So:

$x = \begin{cases}
\dfrac {k A^2 a b t} {k A a b t + 1} & : A = B \\
& \\
\dfrac {A B e^{-k \paren {A - B} a b t} } {A - B e^{-k \paren {A - B} a b t} } & : A \ne B
\end{cases}$
$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $1$: The Nature of Differential Equations: $\S 4$: Growth, Decay and Chemical Reactions: Problem $1$




