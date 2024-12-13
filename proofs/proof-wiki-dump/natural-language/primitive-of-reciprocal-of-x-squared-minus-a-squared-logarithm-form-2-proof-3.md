# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_x_squared_minus_a_squared/Logarithm_Form_2/Proof_3

Theorem
$\ds \int \frac {\d x} {x^2 - a^2} = \frac 1 {2 a} \ln \size {\frac {x - a} {x + a} } + C$


Proof
From the $1$st logarithm form:
$\quad \ds \int \frac {\d x} {x^2 - a^2} = \begin {cases} \dfrac 1 {2 a} \map \ln {\dfrac {a - x} {a + x} } + C & : \size x < a \\
& \\
\dfrac 1 {2 a} \map \ln {\dfrac {x - a} {x + a} } + C & : \size x > a \\
& \\
\text {undefined} & : \size x = a \end {cases}$

From Primitive of Reciprocal of a squared minus x squared: Logarithm Form: Lemma:

$\map \ln {\dfrac {x - a} {x + a} }$ is defined if and only if $\size x > a$
$\map \ln {\dfrac {a - x} {a + x} }$ is defined if and only if $\size x < a$

Let $\size x > a$.
Then $\map \ln {\dfrac {x - a} {x + a} }$ is defined.
We have that:














\(\ds \dfrac {x - a} {x + a}\)

\(>\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds \dfrac {x - a} {x + a}\)

\(=\)







\(\ds \size {\dfrac {x - a} {x + a} }\)









So the result holds for $\size x > a$.

Let $\size x < a$.
Then $\map \ln {\dfrac {a - x} {a + x} }$ is defined.
We have:
We have that:














\(\ds \dfrac {a - x} {a + x}\)

\(=\)







\(\ds -\dfrac {x - a} {x + a}\)




















\(\ds \)

\(<\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds \dfrac {a - x} {a + x}\)

\(=\)







\(\ds \size {\dfrac {x - a} {x + a} }\)









The result follows.
$\blacksquare$





