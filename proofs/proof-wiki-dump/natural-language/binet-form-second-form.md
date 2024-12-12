# 

Source: https://proofwiki.org/wiki/Binet_Form/Second_Form



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


Proof
Proof by induction:
Let $\map P n$ be the proposition:

$V_n = \alpha^n + \beta^n$
Basis for the Induction
We have:














\(\ds \alpha^0 + \beta^0\)

\(=\)







\(\ds 1 + 1\)





Zeroth Power of Real Number equals One














\(\ds \)

\(=\)







\(\ds 2\)




















\(\ds \)

\(=\)







\(\ds V_0\)





From definition














\(\ds \alpha^1 + \beta^1\)

\(=\)







\(\ds \frac {m + \Delta} 2 + \frac {m - \Delta} 2\)




















\(\ds \)

\(=\)







\(\ds m\)




















\(\ds \)

\(=\)







\(\ds V_1\)





From definition



Therefore $\map P 0$ and $\map P 1$ are true.
This is the basis for the induction.


Induction Hypothesis
This is our induction hypothesis:

For some $k \in \N$, both $\map P k$ and $\map P {k + 1}$ are true.
That is:

$V_k = \alpha^k + \beta^k$
$V_{k + 1} = \alpha^{k + 1} + \beta^{k + 1}$

Now we need to show true for $n = k + 2$:

$\map P {k + 2}$ is true.
That is:

$V_{k + 2} = \alpha^{k + 2} + \beta^{k + 2}$


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














\(\ds V_{k + 2}\)

\(=\)







\(\ds m V_{k + 1} + V_k\)





Definition of the recursive sequence














\(\ds \)

\(=\)







\(\ds m \paren {\alpha^{k + 1} + \beta^{k + 1} } + \alpha^k + \beta^k\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds \paren {m \alpha + 1} \alpha^k + \paren {m \beta + 1} \beta^k\)




















\(\ds \)

\(=\)







\(\ds \alpha^2 \alpha^k + \beta^2 \beta^k\)





From above














\(\ds \)

\(=\)







\(\ds \alpha^{k + 2} + \beta^{k + 2}\)









This show that $\map P {k + 2}$ is true.
By principle of mathematical induction, $\map P n$ is true for all $n \in \N$.
$\blacksquare$





