# 

Source: https://proofwiki.org/wiki/Logarithm_of_Power/Natural_Logarithm



Theorem
Let $x \in \R$ be a strictly positive real number.
Let $a \in \R$ be a real number such that $a > 1$.
Let $r \in \R$ be any real number.
Let $\ln x$ be the natural logarithm of $x$.

Then:

$\map \ln {x^r} = r \ln x$


Proof 1
Consider the function $\map f x = \map \ln {x^r} - r \ln x$.
Then from:

The definition of the natural logarithm
The Fundamental Theorem of Calculus
The Power Rule for Derivatives
The Chain Rule for Derivatives:
$\forall x > 0: \map {f'} x = \dfrac 1 {x^r} r x^{r-1} - \dfrac r x = 0$
Thus from Zero Derivative implies Constant Function, $f$ is constant:

$\forall x > 0: \map \ln {x^r} - r \ln x = c$
To determine the value of $c$, put $x = 1$.
From Logarithm of 1 is 0:

$\ln 1 = 0$
Thus:

$c = \ln 1 - r \ln 1 = 0$
$\blacksquare$


Proof 2













\(\ds \ln a\)

\(=\)







\(\ds b\)














\(\ds \leadstoandfrom \ \ \)





\(\ds e^b\)

\(=\)







\(\ds a\)














\(\ds \leadsto \ \ \)





\(\ds \paren {e^b}^c\)

\(=\)







\(\ds a^c\)














\(\ds \leadsto \ \ \)





\(\ds e^{c b}\)

\(=\)







\(\ds a^c\)





Exponential of Product








\(\ds \leadsto \ \ \)





\(\ds \ln e^{c b}\)

\(=\)







\(\ds \ln a^c\)














\(\ds \leadsto \ \ \)





\(\ds c b\)

\(=\)







\(\ds \ln a^c\)





Exponential of Natural Logarithm




By hypothesis, $\ln a = b$.
Multiplying both sides by $c$:

$c \ln a = c b$
But we proved above that:

$c b = \ln a^c$
$\blacksquare$


Proof 3
Here we adopt the definition of $\ln x$ to be:

$\ds \ln x := \int_1^x \dfrac {\d t} t$













\(\ds \map \ln {x^r}\)

\(=\)







\(\ds \int_1^{x^r} \dfrac {\d t} t\)





Definition of Natural Logarithm














\(\ds \)

\(=\)







\(\ds \int_1^x \dfrac {r t^{r - 1} \rd t} {t^r}\)





Integration by Substitution: $t \mapsto t^r$, $\d t \mapsto r t^{r - 1} \rd t$, $1 \mapsto 1$, $x^r \mapsto x$














\(\ds \)

\(=\)







\(\ds r \int_1^x \dfrac {\d t} t\)





Primitive of Constant Multiple of Function














\(\ds \)

\(=\)







\(\ds r \ln x\)





Definition of Natural Logarithm



$\blacksquare$


Sources
For a video presentation of the contents of this page, visit the Khan Academy.




