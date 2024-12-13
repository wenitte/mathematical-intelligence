# 

Source: https://proofwiki.org/wiki/Logarithmic_Integral_as_Non-Convergent_Series


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Theorem
The logarithmic integral can be defined in terms of a non-convergent series.
That is:

$\ds \map \li z = \sum_{i \mathop = 0}^{+\infty} \frac {i! \, z} {\ln^{i + 1} z} = \frac z {\ln z} \paren {\sum_{i \mathop = 0}^{+\infty} \frac {i!} {\ln^i z} }$


Proof
From the definition of the logarithmic integral:

$\ds \map \li z = \int_0^z \frac {\d t} {\ln t}$
Using Integration by Parts:














\(\ds \map \li z\)

\(=\)







\(\ds \intlimits {\frac t {\ln t} } 0 z - \int_0^t t \map \rd {\ln^{-1} t}\)




















\(\ds \)

\(=\)







\(\ds \frac z {\ln z} + \int_0^z \frac {\d t} {\ln^2 t}\)





$\dfrac 0 {\ln 0} = 0$ and Derivative of Function to Power of Function














\(\ds \)

\(=\)







\(\ds \frac z {\ln z} + \frac z {\ln^2 z} + \int_0^z \frac {2 \rd t} {\ln^3 x}\)





Integration by Parts, $\dfrac 0 {\ln^2 0} = 0$, $t \map \rd {ln^{-2} t} = -2 \ln^{-3} t$



This sequence can be continued indefinitely.

We will consider the nature of the terms outside and inside the integral, after a number $n$ of iterations of integration by parts.
Let $u_n$ be the term outside the integral.
Let $v_n$ be the term inside the integral.
After $n$ iterations of Integration by Parts as above, we have:

$\ds \map \li z = u_n + \int_0^z v_n \rd t$
$u_0 = 0$
$v_0 = \dfrac 1 {\ln t}$

It follows that:














\(\ds \map \li z\)

\(=\)







\(\ds u_n + \bigintlimits {t \, v_n} 0 z - \int_0^z t \map \rd {v_n}\)




















\(\ds \)

\(=\)







\(\ds u_n + \bigintlimits {t \, v_n} 0 z + \int_0^z -t \map \rd {v_n}\)










Although this article appears correct, it's inelegant. There has to be a better way of doing it.In particular: This is actually a proof by induction using different language.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by redesigning it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Improve}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
which gives us the recurrence relations:




\(\text {(1)}: \quad\)









\(\ds u_{n + 1}\)

\(=\)







\(\ds u_n + \bigintlimits {t \, v_n} 0 z\)










\(\text {(2)}: \quad\)









\(\ds v_{n + 1}\)

\(=\)







\(\ds -t \cdot \map {\frac \d {\d t} } {v_n}\)










By recurrence on $n$, with the following recurrence hypothesis:

$\text{R.H.}: \quad v_n = \dfrac {n!} {\ln^{n + 1} t}$

When $n = 0$, we have:

$v_0 = \dfrac 1 {\ln t} = \dfrac {0!} {\ln^{0 + 1} t}$
which verifies the hypothesis.

By supposing true at $n$, we have at $n + 1$:














\(\ds v_{n + 1}\)

\(=\)







\(\ds -t \cdot \map {\frac \d {\d t} } {v_n}\)





from $(2)$














\(\ds \)

\(=\)







\(\ds -t \cdot \map {\frac \d {\d t} } {\frac {n!} {\ln^{n + 1} t} }\)





from $(\text{R.H.})$














\(\ds \)

\(=\)







\(\ds -t \cdot n! \cdot \paren {-\paren {n + 1} } \cdot \frac 1 t \cdot \ln^{-\paren {n + 1} - 1} t\)





Derivative of Function to Power of Function, Derivative of Natural Logarithm Function














\(\ds \)

\(=\)







\(\ds \frac {\paren {n + 1}!} {\ln^{n + 2} t}\)





Definition of Factorial



So $\text{R.H.}$ is verified at $n + 1$ if it is verified at $n$.
So it is proved for every $n \in \N$ (since it is true at $n = 0$):

$(3): \quad v_n = \dfrac {n!} {\ln^{n + 1} t}$
By taking $(1)$, and substituting from $(3)$, a new expression for $u_{n + 1}$ in function of $u_n$ (recursive expression):














\(\ds u_{n + 1}\)

\(=\)







\(\ds u_n + \intlimits {t \cdot \frac {n!} {\ln^{n + 1} t} } 0 z\)




















\(\ds \)

\(=\)







\(\ds u_n + \frac {z \, n!} {\ln^{n + 1} z} - \frac {0 \cdot n!} {\ln^{n + 1} 0}\)




















\(\ds \)

\(=\)







\(\ds u_n + \frac {z \, n!} {\ln^{n + 1} z}\)










That is, we can write by expanding:

$(4): \quad u_{n + 1} = \ds \sum_{i \mathop = 0}^n \frac {z \, i!} {\ln^{i + 1} z}$
$\blacksquare$





