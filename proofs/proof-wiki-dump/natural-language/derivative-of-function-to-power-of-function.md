# 

Source: https://proofwiki.org/wiki/Derivative_of_Function_to_Power_of_Function



Theorem
Let $\map u x, \map v x$ be real functions which are differentiable on $\R$.

Then:

$\map {\dfrac \d {\d x} } {u^v} = v u^{v - 1} \map {\dfrac \d {\d x} } u + u^v \paren {\ln u} \map {\dfrac \d {\d x} } v$


Proof













\(\ds \map {\dfrac \d {\d x} } {u^v}\)

\(=\)







\(\ds \map {\dfrac \d {\d x} } {\map \exp {v \ln u} }\)





Definition of Power to Real Number














\(\ds \)

\(=\)







\(\ds \map \exp {v \ln u} \map {\dfrac \d {\d x} } {v \ln u}\)





Chain Rule for Derivatives and Derivative of Exponential Function














\(\ds \)

\(=\)







\(\ds \map \exp {v \ln u} \paren {\paren {\ln u} \map {\dfrac \d {\d x} } v + v \map {\dfrac \d {\d x} } {\ln u} }\)





Product Rule for Derivatives














\(\ds \)

\(=\)







\(\ds u^v \paren {\paren {\ln u} \map {\dfrac \d {\d x} } v + \frac v u \map {\dfrac \d {\d x} } u}\)





Chain Rule for Derivatives














\(\ds \)

\(=\)







\(\ds v u^{v - 1} \map {\dfrac \d {\d x} } u + u^v \paren {\ln u} \map {\dfrac \d {\d x} } v\)





gathering terms



$\blacksquare$


Also presented as
Derivative of Function to Power of Function can also be seen presented in the form:

$\map {\dfrac \d {\d x} } {u^v} = u^v \paren {\dfrac v u \dfrac {\d u} {\d x} + \ln u \dfrac {\d v} {\d x} }$


Also see
Power Rule for Derivatives: when $u = x$ and $v = n$ where $n$ is constant:
$\map {\dfrac \d {\d x} } {x^n} = n x^{n-1}$


Derivative of Exponential Function: when $v = x$ and $u = a$ where $a$ is constant:
$\map {\dfrac \d {\d x} } {a^x} = a^x \ln a$


Sources
1964: Milton Abramowitz and Irene A. Stegun: Handbook of Mathematical Functions ... (previous) ... (next): $3$: Elementary Analytic Methods: $3.3$ Rules for Differentiation and Integration: Derivatives: $3.3.6$
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 13$: Derivatives of Exponential and Logarithmic Functions: $13.30$




