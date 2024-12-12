# 

Source: https://proofwiki.org/wiki/Conversion_of_Cauchy-Euler_Equation_to_Constant_Coefficient_Linear_ODE/General_Result



Theorem
Let $n \in \Z_{>0}$ be a strictly positive integer.
The ordinary differential equation:

$a_n x^n \, \map {f^{\paren n} } x + \dotsb + a_1 x \, \map {f'} c + a_0 \, \map f x = 0$
can be transformed to a linear differential equation with constant coefficients by substitution $x = e^t$.


Proof
Let $y = \map f x$.
First the following are established:














\(\ds x\)

\(=\)







\(\ds e^t\)





Derivative of Exponential Function








\(\ds \leadsto \ \ \)





\(\ds \frac {\d x} {\d t}\)

\(=\)







\(\ds e^t\)










\(\text {(1)}: \quad\)









\(\ds \)

\(=\)







\(\ds x\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d t} {\d x}\)

\(=\)







\(\ds \frac 1 x\)





Derivative of Inverse Function




\(\text {(2)}: \quad\)









\(\ds \)

\(=\)







\(\ds e^{-t}\)










The proof now proceeds by induction.
For all $n \in \Z_{> 0}$, let $\map P n$ be the proposition:

$a_n x^n \, \map {f^{\paren n} } x + \dotsb + a_1 x \, \map {f'} x + a_0 \, \map f x = 0$
can be transformed to a linear differential equation with constant coefficients by substitution $x = e^t$.


Basis for the Induction
$\map P 1$ is the case:














\(\ds a_1 x \frac {\d y} {\d x}\)

\(=\)







\(\ds a_1 e^t \frac {\d y} {\d t} \frac {\d t} {\d x}\)





Chain Rule for Derivatives














\(\ds \)

\(=\)







\(\ds a_1 e^t \frac {\d y} {\d t} e^{-t}\)





from $(2)$














\(\ds \)

\(=\)







\(\ds a_1 \frac {\d y} {\d t}\)









Thus:

$a_1 x \, \map {f'} x + a_0 \, \map f x = 0$
has been transformed into:

$a_1 \dfrac \d {\d t} \map f {e^t} + a_0 \, \map f {e^t} = 0$
which is a linear first Order ODE with constant coefficients.

This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P k$ is true, where $k \ge 1$, then it logically follows that $\map P {k + 1}$ is true.

So this is our induction hypothesis:

$a_k x^k \, \map {f^{\paren k} } x + \dotsb + a_1 x \, \map {f'} x + a_0 \, \map f x = 0$
can be transformed to a linear differential equation with constant coefficients by substitution $x = e^t$ thus:














\(\ds a_k x^k \dfrac {\d^k y} {\d x^k}\)

\(=\)







\(\ds b_k \frac {\d^k y} {\d t^k} + b_{k - 1} \frac {\d^{k - 1} y} {\d t^{k - 1} } + \dotsb + b_1 \frac {\d y} {\d t}\)




















\(\ds \frac {\d^k y} {\d x^k}\)

\(=\)







\(\ds c_k \frac {\d^k y} {\d t^k} e^{-t k} + c_{k - 1} \frac {\d^{k - 1} y} {\d t^{k - 1} } e^{-t n} + \dotsb + c_1 \frac {\d y} {\d t} e^{-t k}\)










Then we need to show that:

$a_{k + 1} x^{k + 1} \map {f^{\paren {k + 1} } } x + \dotsb + a_1 x \, \map {f'} x + a_0 \, \map f x = 0$
can be transformed to a linear differential equation with constant coefficients by substitution $x = e^t$ thus:














\(\ds a_{k + 1} x^{k + 1} \dfrac {\d^{k + 1} y} {\d x^{k + 1} }\)

\(=\)







\(\ds b_{k + 1} \frac {\d^{k + 1} y} {\d t^{k + 1} } + b_k \frac {\d^k y} {\d t^k} + \dotsb + b_1 \frac {\d y} {\d t}\)




















\(\ds \frac {\d^{k + 1} y} {\d x^{k + 1} }\)

\(=\)







\(\ds c_{k + 1} \frac {\d^{k + 1} y} {\d t^{k + 1} } e^{-t \paren {k + 1} } + c_k \frac {\d^k y} {\d t^k} e^{-t \paren {k + 1} } + \dotsb + c_1 \frac {\d y} {\d t} e^{-t \paren {k + 1} }\)











Induction Step
This is our induction step:















\(\ds a_{k + 1} x^{k + 1} \frac {\d^{k + 1} y} {\d x^{k + 1} }\)

\(=\)







\(\ds a_{k + 1} e^{\paren {k + 1} t} \, \map {\frac \d {\d t} } {\frac {\d^k y} {\d x^k} } \frac {\d t} {\d x}\)




















\(\ds \)

\(=\)







\(\ds a_{k + 1} e^{\paren {k + 1} t} \, \map {\frac \d {\d t} } {\frac {\d^k y} {\d x^k} } e^{-t}\)




















\(\ds \)

\(=\)







\(\ds a_{k + 1} e^{k t} \, \map {\frac \d {\d t} } {\frac {\d^k y} {\d x^k} }\)




















\(\ds \)

\(=\)







\(\ds a_{k + 1} e^{k t} \, \map {\frac \d {\d t} } {c_k \frac {\d^k y} {\d t^k} e^{-t k} + c_{k - 1} \frac {\d^{k - 1} y} {\d t^{k - 1} } e^{-t k} + \dotsb + c_1 \frac {\d y} {\d t} e^{-t k} }\)




















\(\ds \)

\(=\)







\(\ds a_{k + 1} e^{k t} \paren {c_k \frac {\d^{k + 1} y} {\d t^{k + 1} } e^{-t k} - k c_k \frac {\d^k y} {\d t^k} e^{-t k} + c_{k - 1} \frac {\d^k y} {\d t^k}e^{-t k} - k c_{k - 1} \frac {\d^{k - 1} y} {\d t^{k - 1} } e^{-t k} + \dotsb + c_1 \frac {\d^2 y} {\d t^2} e^{-t k} - k c_1 \frac {\d y} {\d t} e^{-t k} }\)




















\(\ds \)

\(=\)







\(\ds a_{k + 1} c_k \frac {\d^{k + 1} y} {\d t^{k + 1} } - a_n k c_k \frac {\d^k y} {\d t^k} + c_{k - 1} \frac {\d^k y} {\d t^k} - k c_{k - 1} \frac {\d^{k - 1} y} {\d t^{k - 1} } + \dotsb + a_n c_1 \frac {\d^2 y} {\d t^2} - a_n k c_1 \frac {\d y} {\d t}\)




















\(\ds \)

\(=\)







\(\ds b_{k + 1} \frac {\d^{k + 1} y} {\d t^{k + 1} } + b_k \frac {\d^k y} {\d t^k} + \dotsb + b_1 \frac {\d y} {\d t}\)









Hence the result by the Principle of Mathematical Induction.
$\blacksquare$





