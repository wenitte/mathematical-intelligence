# 

Source: https://proofwiki.org/wiki/Relation_Between_First_and_Second_Form_of_Binet_Form



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









First Form
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


Second Form
The recursive sequence:

$V_n = m V_{n - 1} + V_{n - 2}$
where:














\(\ds V_0\)

\(=\)







\(\ds 2\)




















\(\ds V_1\)

\(=\)







\(\ds m\)









has the closed-form solution:

$V_n = \alpha^n + \beta^n$
where $\Delta, \alpha, \beta$ are as for the first form.

For any given value of $m$:

$U_{n - 1} + U_{n + 1} = V_n$


Proof
Proof by induction:
Let $\map P n$ be the proposition:

$U_{n - 1} + U_{n + 1} = V_n$
Basis for the Induction
We have:














\(\ds U_0 + U_2\)

\(=\)







\(\ds 0 + m U_1 + U_0\)




















\(\ds \)

\(=\)







\(\ds m \times 1 + 0\)




















\(\ds \)

\(=\)







\(\ds m\)




















\(\ds \)

\(=\)







\(\ds V_1\)





Definition of $V_1$














\(\ds U_1 + U_3\)

\(=\)







\(\ds 1 + m U_2 + U_1\)




















\(\ds \)

\(=\)







\(\ds m \times m + 2\)




















\(\ds \)

\(=\)







\(\ds m \times V_1 + V_0\)




















\(\ds \)

\(=\)







\(\ds V_2\)





Definition of $V_2$



Therefore $\map P 1$ and $\map P 2$ are true.
This is the basis for the induction.


Induction Hypothesis
This is our induction hypothesis:

For some $k \in \N_{> 0}$, both $\map P k$ and $\map P {k + 1}$ are true.
That is:

$U_{k - 1} + U_{k + 1} = V_k$
$U_k + U_{k + 2} = V_{k + 1}$

Now we need to show true for $n = k + 2$:

$\map P {k + 2}$ is true.
That is:

$U_{k + 1} + U_{k + 3} = V_{k + 2}$


Induction Step
This is our induction step:














\(\ds V_{k + 2}\)

\(=\)







\(\ds m V_{k + 1} + V_k\)





Definition of Recursive Sequence














\(\ds \)

\(=\)







\(\ds m \paren {U_k + U_{k + 2} } + \paren {U_{k - 1} + U_{k + 1} }\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds \paren {m U_k + U_{k - 1} } + \paren {m U_{k + 2} + U_{k + 1} }\)




















\(\ds \)

\(=\)







\(\ds U_{k + 1} + U_{k + 3}\)









This show that $\map P {k + 2}$ is true.
By Principle of Mathematical Induction, $\map P n$ is true for all $n \in \N _{>0}$.
$\blacksquare$


Source of Name
This entry was named for Jacques Philippe Marie Binet.


Sources
Weisstein, Eric W. "Binet Forms." From MathWorld--A Wolfram Web Resource.  https://mathworld.wolfram.com/BinetForms.html




