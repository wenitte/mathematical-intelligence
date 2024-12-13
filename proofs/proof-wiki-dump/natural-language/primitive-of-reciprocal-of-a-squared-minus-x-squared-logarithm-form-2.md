# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_a_squared_minus_x_squared/Logarithm_Form_2



Theorem
Let $a \in \R_{>0}$ be a strictly positive real constant.
Let $x \in \R$ such that $\size x \ne a$.


$\ds \int \frac {\d x} {a^2 - x^2} = \dfrac 1 {2 a} \ln \size {\dfrac {a + x} {a - x} } + C$


Corollary
$\ds \int \frac {\d x} {a^2 - b^2 x^2} = \dfrac 1 {2 a b} \ln \size {\dfrac {a + b x} {a - b x} } + C$


Proof
From the $1$st logarithm form:

$\ds \int \frac {\d x} {a^2 - x^2} = \begin {cases} \dfrac 1 {2 a} \map \ln {\dfrac {a + x} {a - x} } + C & : \size x < a\\ & \\  \dfrac 1 {2 a} \map \ln {\dfrac {x + a} {x - a} } + C & : \size x > a \\ & \\ \text {undefined} & : \size x = a \end {cases}$

From Primitive of Reciprocal of a squared minus x squared: Logarithm Form: Lemma:

$\map \ln {\dfrac {a + x} {a - x} }$ is defined if and only if $\size x < a$
$\map \ln {\dfrac {x + a} {x - a} }$ is defined if and only if $\size x > a$

Let $\size x < a$.
Then $\map \ln {\dfrac {a + x} {a - x} }$ is defined.
We have that:














\(\ds \dfrac {a + x} {a - x}\)

\(>\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds \dfrac {a + x} {a - x}\)

\(=\)







\(\ds \size {\dfrac {a + x} {a - x} }\)









So the result holds for $\size x < a$.

Let $\size x > a$.
Then $\map \ln {\dfrac {x + a} {x - a} }$ is defined.
We have:
We have that:














\(\ds \dfrac {x + a} {x - a}\)

\(=\)







\(\ds -\dfrac {a + x} {a - x}\)




















\(\ds \)

\(<\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds \dfrac {x + a} {x - a}\)

\(=\)







\(\ds \size {\dfrac {a + x} {a - x} }\)









The result follows.
$\blacksquare$


Also presented as
This result is also seen presented in the form:

$\ds \int \frac {\d x} {a^2 - x^2} = \dfrac 1 {2 a} \ln \size {\dfrac {x + a} {x - a} } + C$


Sources
1945: A. Geary, H.V. Lowry and H.A. Hayden: Advanced Mathematics for Technical Students, Part I ... (previous) ... (next): Chapter $\text {III}$: Integration: Integration
1953: L. Harwood Clarke: A Note Book in Pure Mathematics ... (previous) ... (next): $\text {II}$. Calculus: Integration
1972: Frank Ayres, Jr. and J.C. Ault: Theory and Problems of Differential and Integral Calculus (SI ed.) ... (previous) ... (next): Chapter $25$: Fundamental Integration Formulas: $22$.




