# 

Source: https://proofwiki.org/wiki/Raw_Moment_of_Pareto_Distribution

Theorem
Let $X$ be a continuous random variable with the Pareto distribution with $a, b \in \R_{> 0}$.
Let $n$ be a strictly positive integer. 

Then the $n$th raw moment $\expect {X^n}$ of $X$ is given by: 

$\expect {X^n} = \begin {cases} \dfrac {a b^n} {a - n} & n < a \\ \text {does not exist} & n \ge a \end {cases}$


Proof
From the definition of the Pareto distribution, $X$ has probability density function:

$\map {f_X} x = \dfrac {a b^a} {x^{a + 1} }$
Where $\Img X \in \hointr b \infty$.

From the definition of the expected value of a continuous random variable: 

$\ds \expect {X^n} = \int_b^\infty x^n \map {f_X} x \rd x$

First take $a > n$. 














\(\ds \expect {X^n}\)

\(=\)







\(\ds a b^a \int_b^\infty x^{n - a - 1} \rd x\)




















\(\ds \)

\(=\)







\(\ds a b^a \bigintlimits {\dfrac {x^{n - a} } {n - a} } b \infty\)





Primitive of Power














\(\ds \)

\(=\)







\(\ds \dfrac {a b^a} {n - a} \paren {\lim_{x \mathop \to \infty} x^{n - a} - b^{n - a} }\)




















\(\ds \)

\(=\)







\(\ds a b^a \paren {0 - \dfrac {b^{n - a} } {n - a} }\)





for $n - a < 0$, $x^{n - a} \mathop \to 0$ as $x \mathop \to \infty$














\(\ds \)

\(=\)







\(\ds \dfrac {a b^n} {a - n}\)









$\Box$

Now take $a = n$.














\(\ds \expect {X^n}\)

\(=\)







\(\ds a b^a \int_b^\infty x^{a - a - 1} \rd x\)




















\(\ds \)

\(=\)







\(\ds a b^a \bigintlimits {\ln x } b \infty\)





Primitive of Reciprocal














\(\ds \)

\(=\)







\(\ds a b^a \paren {\lim_{x \mathop \to \infty} \ln x - \ln b }\)




















\(\ds \)

\(\to\)







\(\ds \infty\)





Logarithm Tends to Infinity



$\Box$

Finally, take $a < n$. 














\(\ds \expect {X^n}\)

\(=\)







\(\ds a b^a \int_b^\infty x^{n - a - 1} \rd x\)




















\(\ds \)

\(=\)







\(\ds a b^a \bigintlimits {\dfrac {x^{n - a} } {n - a} } b \infty\)





Primitive of Power














\(\ds \)

\(=\)







\(\ds \dfrac {a b^a} {n - a} \paren {\lim_{x \mathop \to \infty} x^{n - a} - b^{n - a} }\)




















\(\ds \)

\(\to\)







\(\ds \infty\)





for $n - a > 0$, $x^{n - a}$ increases without bound as $x \mathop \to \infty$



$\blacksquare$





