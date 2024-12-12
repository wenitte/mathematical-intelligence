# 

Source: https://proofwiki.org/wiki/Characterization_of_Euler%27s_Number_by_Inequality



Theorem
Let $a$ be a (strictly) positive real number.

Then:

$a = e \iff \forall x \in \R: a^x \ge x + 1$
where $e$ denotes Euler's number.


Proof
Forward Implication
Proved in Exponential Function Inequality.
$\Box$


Reverse Implication
Consider $\map {f_a} x = a^x - x - 1$.
Then we need to prove:

$a = e \impliedby \forall x \in \R: \map {f_a} x \ge 0$

By Linear Combination of Derivatives, Derivative of Power of Constant, Derivative of Identity Function, and Derivative of Constant:

$\map {f'_a} x = a^x \ln a - 1$

By Linear Combination of Derivatives, Derivative of Power of Constant, Derivative of Constant Multiple, and Derivative of Constant:

$\map {f_a} x = a^x \paren {\ln a}^2$

Now, we divide the theorem into two cases:


Case 1: $0 < a \le 1$
Consider $x = 1$.
Then:














\(\ds \map {f_a} 1\)

\(=\)







\(\ds a^1 - 1 - 1\)




















\(\ds \)

\(=\)







\(\ds a - 2\)




















\(\ds \)

\(\le\)







\(\ds 1 - 2\)




















\(\ds \)

\(=\)







\(\ds -1\)




















\(\ds \)

\(<\)







\(\ds 0\)









Thus the right hand side is not true.
$\Box$


Case 2: $a > 1$
We have:














\(\ds \ln a\)

\(>\)







\(\ds 0\)





Logarithm of 1 is 0 and Logarithm is Strictly Increasing




\(\text {(1)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \paren {\ln a}^2\)

\(>\)







\(\ds 0\)





Square of Non-Zero Real Number is Strictly Positive




\(\text {(2)}: \quad\)









\(\ds a^x\)

\(>\)







\(\ds 0\)





Power of Positive Real Number is Positive over Reals








\(\ds \vdash \ \ \)





\(\ds a^x \paren {\ln a}^2\)

\(>\)







\(\ds 0\)





Real Number Axiom $\R \text O2$: Usual Ordering is Compatible with Multiplication, using $(1)$ and $(2)$














\(\ds \map {f_a} x\)

\(>\)







\(\ds 0\)









Hence, by Real Function with Strictly Positive Second Derivative is Strictly Convex, we have that $f_a$ is strictly convex.

Trying to find its minimum, we solve:

$\map {f'_a} x = 0$
Therefore:














\(\ds a^x \ln a - 1\)

\(=\)







\(\ds 0\)




















\(\ds a^x \ln a\)

\(=\)







\(\ds 1\)




















\(\ds a^x\)

\(=\)







\(\ds \frac 1 {\ln a}\)




















\(\ds x\)

\(=\)







\(\ds \map {\log_a} {\frac 1 {\ln a} }\)




















\(\ds x\)

\(=\)







\(\ds - \map {\log_a} {\ln a}\)










At this point:














\(\ds \map {f_a} x\)

\(=\)







\(\ds \map {f_a} {- \map {\log_a} {\ln a} }\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {\ln a} + \map {\log_a} {\ln a} - 1\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {\ln a} + \frac {\map \ln {\ln a} } {\ln a} - 1\)





Change of Base of Logarithm














\(\ds \)

\(=\)







\(\ds \frac {1 + \map \ln {\ln a} } {\ln a} - 1\)










It is to be noted that when $a = e$, the minimum is:

$\dfrac {1 + \map \ln {\ln e} } {\ln e} - 1 = 0$
meaning that the only solution to $\map {f_e} x = 0$ is $x = 0$.

Also, from Exponential Function Inequality, we have:

$\forall x \in \R: e^x \ge x + 1$
Substituting $x = \map \ln {\ln a}$:

$\ln a \ge \map \ln {\ln a} + 1$
From Logarithm is Strictly Increasing and Logarithm of 1 is 0:

$\ln a > 0$
Thus:

$\dfrac {\ln a} {\ln a} \ge \dfrac {\map \ln {\ln a} + 1} {\ln a}$
Therefore:

$\dfrac {1 + \map \ln {\ln a} } {\ln a} - 1 \le 0$

Then, we solve the case of equality:














\(\ds \frac {1 + \map \ln {\ln a} } {\ln a} - 1\)

\(=\)







\(\ds 0\)




















\(\ds \frac {1 + \map \ln {\ln a} } {\ln a}\)

\(=\)







\(\ds 1\)




















\(\ds 1 + \map \ln {\ln a}\)

\(=\)







\(\ds \ln a\)









From earlier, we have that the only solution is $\map \ln {\ln a} = 0$, when $a = e$.

Therefore, for other values of $a$, the minimum is negative.
$\blacksquare$





