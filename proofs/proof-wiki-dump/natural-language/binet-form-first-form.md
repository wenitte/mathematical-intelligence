# 

Source: https://proofwiki.org/wiki/Binet_Form/First_Form



Theorem
Let $m \in \R$.
Define:














\(\ds \Delta\)

\(=\)







\(\ds \sqrt {m^2 + 4}\)




















\(\ds \alpha\)

\(=\)







\(\ds \frac {m + \Delta} 2\)




















\(\ds \beta\)

\(=\)







\(\ds \frac {m - \Delta} 2\)










The recursive sequence:

$U_n = m U_{n - 1} + U_{n - 2}$
where:














\(\ds U_0\)

\(=\)







\(\ds 0\)




















\(\ds U_1\)

\(=\)







\(\ds 1\)









has the closed-form solution:

$U_n = \dfrac {\alpha^n - \beta^n} \Delta$


Proof
Proof by induction:
Let $\map P n$ be the proposition:

$U_n = \dfrac {\alpha^n - \beta^n} \Delta$
Basis for the Induction
We have:














\(\ds \frac {\alpha^0 - \beta^0} \Delta\)

\(=\)







\(\ds \frac {1 - 1} \Delta\)





Zeroth Power of Real Number equals One














\(\ds \)

\(=\)







\(\ds 0\)




















\(\ds \)

\(=\)







\(\ds U_0\)





From definition














\(\ds \frac {\alpha^1 - \beta^1} \Delta\)

\(=\)







\(\ds \frac 1 \Delta \paren {\frac {m + \Delta} 2 - \frac {m - \Delta} 2}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 \Delta \paren \Delta\)




















\(\ds \)

\(=\)







\(\ds 1\)




















\(\ds \)

\(=\)







\(\ds U_1\)





From definition



Therefore $\map P 0$ and $\map P 1$ are true.
This is the basis for the induction.


Induction Hypothesis
This is our induction hypothesis:

For some $k \in \N$, both $\map P k$ and $\map P {k + 1}$ are true.
That is:

$U_k = \dfrac {\alpha^k - \beta^k} \Delta$
$U_{k + 1} = \dfrac {\alpha^{k + 1} - \beta^{k + 1}} \Delta$

Now we need to show true for $n = k + 2$:

$\map P {k + 2}$ is true.
That is:

$U_{k + 2} = \dfrac {\alpha^{k + 2} - \beta^{k + 2}} \Delta$


Induction Step
This is our induction step:
First we notice that:














\(\ds \alpha^2\)

\(=\)







\(\ds \paren {\frac {m + \Delta} 2}^2\)




















\(\ds \)

\(=\)







\(\ds \frac 1 4 \paren {m^2 + 2 m \Delta + m^2 + 4}\)





Square of Sum














\(\ds \)

\(=\)







\(\ds \frac 1 4 \paren {2 m^2 + 2 m \Delta + 4}\)




















\(\ds \)

\(=\)







\(\ds \frac {m^2 + m \Delta} 2 + 1\)




















\(\ds \)

\(=\)







\(\ds m \alpha + 1\)









Similarly:














\(\ds \beta^2\)

\(=\)







\(\ds \paren {\frac {m - \Delta} 2}^2\)




















\(\ds \)

\(=\)







\(\ds \frac 1 4 \paren {m^2 - 2 m \Delta + m^2 + 4}\)





Square of Sum














\(\ds \)

\(=\)







\(\ds \frac 1 4 \paren {2 m^2 - 2 m \Delta + 4}\)




















\(\ds \)

\(=\)







\(\ds \frac {m^2 - m \Delta} 2 + 1\)




















\(\ds \)

\(=\)







\(\ds m \beta + 1\)









Thus:














\(\ds U_{k + 2}\)

\(=\)







\(\ds m U_{k + 1} + U_k\)





Definition of the recursive sequence














\(\ds \)

\(=\)







\(\ds m \paren {\frac {\alpha^{k + 1} - \beta^{k + 1} } \Delta} + \frac {\alpha^k - \beta^k} \Delta\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds \frac 1 \Delta \paren {\paren {m \alpha + 1} \alpha^k - \paren {m \beta + 1} \beta^k}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 \Delta \paren {\alpha^2 \alpha^k - \beta^2 \beta^k}\)





From above














\(\ds \)

\(=\)







\(\ds \frac {\alpha^{k + 2} - \beta^{k + 2} } \Delta\)









This show that $\map P {k + 2}$ is true.
By principle of mathematical induction, $\map P n$ is true for all $n \in \N$.
$\blacksquare$





