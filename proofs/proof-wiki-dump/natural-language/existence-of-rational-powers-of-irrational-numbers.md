# 

Source: https://proofwiki.org/wiki/Existence_of_Rational_Powers_of_Irrational_Numbers

  This article was Featured Proof .




Theorem
There exist irrational numbers $a$ and $b$ such that $a^b$ is rational.


Proof 1
We have that:

$\sqrt 2$ is irrational.
$2$ is trivially rational, as $2 = \dfrac 2 1$.
Consider the number $q = \sqrt 2^{\sqrt 2}$, which is irrational by the Gelfond-Schneider Theorem.
Thus:

$q^{\sqrt 2} = \left({\sqrt 2^{\sqrt 2}}\right)^{\sqrt 2} = \sqrt 2 ^{\left({\sqrt 2}\right) \left({\sqrt 2}\right)} = \sqrt 2^2 = 2$
is rational.
So $a = q = \sqrt 2^{\sqrt 2}$ and $b = \sqrt 2$ are the desired irrationals.
$\blacksquare$


Proof 2
Given that $2$ is rational and $\sqrt 2$ is irrational, consider the number $q = \sqrt 2^{\sqrt 2}$.
We consider the two cases.

$(1): \quad$ If $q$ is rational then $a = \sqrt 2$ and $b = \sqrt 2$ are the desired irrational numbers.
$(2): \quad$ If $q$ is irrational then $q^{\sqrt 2} = \paren {\sqrt 2^{\sqrt 2} }^{\sqrt 2} = \sqrt 2^{\paren {\sqrt 2} \paren {\sqrt 2} } = \sqrt 2^2 = 2$ is rational, so $a = q = \sqrt 2^{\sqrt 2}$ and $b = \sqrt 2$ are the desired irrational numbers.
$\blacksquare$


Proof 3
Consider the equation:

$\left({\sqrt 2}\right)^{\log_{\sqrt 2} 3} = 3$

We have that $\sqrt 2$ is irrational and $3$ is (trivially) rational.

It remains to be proved $\log_{\sqrt 2} 3$ is irrational.
We have:














\(\ds \log_{\sqrt 2} 3\)

\(=\)







\(\ds \frac{\log_2 3}{\log_2 \sqrt 2}\)





Change of Base of Logarithm














\(\ds \)

\(=\)







\(\ds \frac{\log_2 3}{1/2}\)





Logarithms of Powers: $\sqrt 2 = 2^{1/2}$ and $\log_2 2 = 1$














\(\ds \)

\(=\)







\(\ds 2 \, \log_2 3\)









From Irrationality of Logarithm, $\log_2 3$ is irrational.
Therefore $2 \, \log_2 3$ is irrational.
Thus there exist two irrational numbers $a = \sqrt 2$ and $b = \log_{\sqrt 2} 3$ such that $a^b$ is rational.
$\blacksquare$





