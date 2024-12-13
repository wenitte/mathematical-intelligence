# 

Source: https://proofwiki.org/wiki/Logarithm_of_Power/Natural_Logarithm/Proof_3

Theorem
Let $x \in \R$ be a strictly positive real number.
Let $a \in \R$ be a real number such that $a > 1$.
Let $r \in \R$ be any real number.
Let $\ln x$ be the natural logarithm of $x$.

Then:

$\map \ln {x^r} = r \ln x$


Proof
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





