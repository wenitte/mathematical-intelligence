# 

Source: https://proofwiki.org/wiki/Derivative_of_Natural_Logarithm_Function



Theorem
Let $\ln x$ be the natural logarithm function.
Then:

$\map {\dfrac \d {\d x} } {\ln x} = \dfrac 1 x$


Proof 1













\(\ds \ln x\)

\(:=\)







\(\ds \int_1^x \dfrac 1 t \rd t\)





Definition 1 of Natural Logarithm














\(\ds \frac \d {\d x} \ln x\)

\(=\)







\(\ds \frac \d {\d x} \int_1^x \dfrac 1 t \rd t\)




















\(\ds \)

\(=\)







\(\ds \frac 1 x\)





Fundamental Theorem of Calculus



$\blacksquare$


Proof 2
This proof assumes the definition of the natural logarithm as the inverse of the exponential function, where the exponential function is defined as the limit of a sequence:

$e^x := \ds \lim_{n \mathop \to +\infty} \paren {1 + \frac x n}^n$
It also assumes the Laws of Logarithms.














\(\ds \map {\frac \d {\d x} } {\ln x}\)

\(=\)







\(\ds \lim_{\Delta x \mathop \to 0} \frac {\map \ln {x + \Delta x} - \ln x} {\Delta x}\)





Definition of Derivative














\(\ds \)

\(=\)







\(\ds \lim_{\Delta x \mathop \to 0} \frac {\map \ln {\frac {x + \Delta x} x} } {\Delta x}\)





Difference of Logarithms














\(\ds \)

\(=\)







\(\ds \lim_{\Delta x \mathop \to 0} \paren {\frac 1 {\Delta x} \centerdot \map \ln {1 + \frac {\Delta x} x} }\)










\(\text {(1)}: \quad\)









\(\ds \)

\(=\)







\(\ds \lim_{\Delta x \mathop \to 0} \paren {\map \ln {\paren {1 + \frac {\Delta x} x}^{1 / \Delta x} } }\)





Natural Logarithm of Power




Define $u$ as:














\(\ds u\)

\(=\)







\(\ds \dfrac {\Delta x} x\)














\(\ds \leadsto \ \ \)





\(\ds \Delta x\)

\(=\)







\(\ds u x\)














\(\ds \leadsto \ \ \)





\(\ds \frac 1 {\Delta x}\)

\(=\)







\(\ds \frac 1 x \cdot \frac 1 u\)









Hence:














\(\ds \)

\(=\)







\(\ds \lim_{u \mathop \to 0} \paren {\map \ln {\paren {1 + u}^{\frac 1 u \cdot \frac 1 x} } }\)





substituting $u x$ for $\Delta x$ in $(1)$














\(\ds \)

\(=\)







\(\ds \lim_{u \mathop \to 0} \paren {\frac 1 x \cdot \map \ln {1 + u}^{\frac 1 u} }\)





Natural Logarithm of Power














\(\ds \)

\(=\)







\(\ds \frac 1 x \cdot \lim_{u \mathop \to 0} \paren {\map \ln {1 + u}^{\frac 1 u} }\)





factoring out constants














\(\ds \)

\(=\)







\(\ds \frac 1 x \cdot \lim_{v \mathop \to +\infty} \paren {\map \ln {1 + \frac 1 v}^v}\)





substituting $\dfrac 1 v$ for $u$














\(\ds \)

\(=\)







\(\ds \frac 1 x \cdot \ln e^1\)





Limit of Composite Function, Limit definition of $e^x$, Real Natural Logarithm Function is Continuous














\(\ds \)

\(=\)







\(\ds \frac 1 x\)





Exponential of Natural Logarithm



$\blacksquare$


Proof 3
This proof assumes the definition of the natural logarithm as the inverse of the exponential function as defined by differential equation:

$y = \dfrac {\d y} {\d x}$
$y = e^x \iff \ln y = x$













\(\ds \frac {\d y} {\d x}\)

\(=\)







\(\ds y\)





Definition of Exponential Function














\(\ds \int \frac 1 y \rd y\)

\(=\)







\(\ds \int \rd x\)





Solution to Separable Differential Equation














\(\ds \)

\(=\)







\(\ds x + C_0\)





Integral of Constant where that constant is $1$














\(\ds \)

\(=\)







\(\ds \ln y + C_0\)





Definition 2 of Natural Logarithm: $x = \ln y$



The result follows from the definition of the antiderivative and the defined  initial condition:

$\tuple {x_0, y_0} = \tuple {0, 1}$
$\blacksquare$


Proof 4
This proof assumes the definition of the natural logarithm as the limit of a sequence of real functions.
Let $\sequence {f_n}$ be the sequence of mappings $f_n: \R_{>0} \to \R$ defined as:

$\map {f_n} x = n \paren {\sqrt [n] x - 1}$
Fix $x_0 \in \R_{>0}$.
Pick $k \in \N : x_0 \in J := \closedint {\dfrac 1 k} k$.
From definition of bounded interval, $J$ is bounded.
From Derivative of Nth Root and Combination Theorem for Sequences:

$\forall n \in \N : \forall x \in J : D_x \map {f_n} x = \dfrac {\sqrt [n] x} x$
In particular:

$\forall n: f_n$ is differentiable on $J$
From Defining Sequence of Natural Logarithm is Convergent, $\sequence {\map {f_n} {x_0} }$ is convergent.


Lemma
Let $\sequence {f_n}_n$ be the sequence of real functions $f_n: \R_{>0} \to \R$ defined as:

$\map {f_n} x = n \paren {\sqrt [n] x - 1}$
Let $k \in \N$.
Let $J = \closedint {\dfrac 1 k} k$.

Then the sequence of derivatives $\sequence { {f_n}'}_n$ converges uniformly to some real function $g: J \to \R$.
$\Box$

From the lemma, $\sequence { {f_n}'}$ converges uniformly to $\dfrac 1 x$ on $J$.
From Derivative of Uniformly Convergent Sequence of Differentiable Functions, $\map {f'} x = \dfrac 1 x$ on $J$
In particular:

$\map {f'} {x_0} = \dfrac 1 {x_0}$
Hence the result.
$\blacksquare$


Examples
Example: $\paren {x - 2}^{1/3} \paren {x - 3}^{1/2} \paren {2 x - 1}^{3/2}$
Let $y = \paren {x - 2}^{1/3} \paren {x - 3}^{1/2} \paren {2 x - 1}^{3/2}$.
Then:

$\dfrac {\d y} {\d x} = \paren {\dfrac 1 {3 \paren {x - 2} } + \dfrac 1 {2 \paren {x - 3} } + \dfrac 3 {2 x - 1} } \paren {x - 2}^{1/3} \paren {x - 3}^{1/2} \paren {2 x - 1}^{3/2}$


Sources
1944: R.P. Gillespie: Integration (2nd ed.) ... (previous) ... (next): Chapter $\text {II}$: Integration of Elementary Functions: $\S 7$. Standard Integrals: $2$.
1953: L. Harwood Clarke: A Note Book in Pure Mathematics ... (previous) ... (next): $\text {II}$. Calculus: Differentiation
1963: Morris Tenenbaum and Harry Pollard: Ordinary Differential Equations ... (previous) ... (next): Chapter $1$: Basic Concepts: Lesson $3$: The Differential Equation
1976: K. Weltner and W.J. Weber: Mathematics for Engineers and Scientists ... (previous) ... (next): $5$. Differential Calculus: Appendix: Derivatives of fundamental functions: $5.$ Logarithmic function
1989: Ephraim J. Borowski and Jonathan M. Borwein: Dictionary of Mathematics ... (previous) ... (next): Appendix $2$: Table of derivatives and integrals of common functions
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Appendix: Table $1$: Derivatives
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Appendix: Table $1$: Derivatives
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): Appendix $6$: Derivatives
2021: Richard Earl and James Nicholson: The Concise Oxford Dictionary of Mathematics (6th ed.) ... (previous) ... (next): Appendix $7$: Derivatives
For a video presentation of the contents of this page, visit the Khan Academy.




