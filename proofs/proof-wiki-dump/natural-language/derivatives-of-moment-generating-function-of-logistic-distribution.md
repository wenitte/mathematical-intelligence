# 

Source: https://proofwiki.org/wiki/Derivatives_of_Moment_Generating_Function_of_Logistic_Distribution



Theorem
Let $X$ be a continuous random variable which satisfies the logistic distribution:

$X \sim \map {\operatorname {Logistic} } {\mu, s}$
for some $\mu \in \R, s \in \R_{> 0}$.
Let $\size t < \dfrac 1 s$.
Let $M_X$ denote the moment generating function of $X$.

The $n$th derivative of $M_X$ is given by:

$\ds {M_X}^{\paren n} = \map \exp {\mu t} \sum_{k \mathop = 0}^n \paren {-1}^k \dbinom n k \mu^{n - k} s^k \int_{\to 0}^{\to 1} \map {\ln^k} {\dfrac {1 - u} u} \paren {\dfrac {1 - u} u}^{-s t} \rd u$


Proof
The proof proceeds by induction on $n$.
For all $n \in \Z_{\ge 0}$, let $\map P n$ be the proposition:

$\ds {M_X}^{\paren n} = \map \exp {\mu t} \sum_{k \mathop = 0}^n \paren {-1}^k \dbinom n k \mu^{n - k} s^k \int_{\to 0}^{\to 1} \map {\ln^k} {\dfrac {1 - u} u} \paren {\dfrac {1 - u} u}^{-s t} \rd u$


Basis for the Induction
$\map P 0$ is the case:














\(\ds {M_X}^{\paren 0}\)

\(=\)







\(\ds M_X\)





Definition of Higher Derivative














\(\ds \)

\(=\)







\(\ds \map \exp {\mu t} \int_{\to 0}^{\to 1}  \paren {\dfrac {1 - u} u}^{-s t} \rd u\)





Moment Generating Function of Logistic Distribution














\(\ds \)

\(=\)







\(\ds \map \exp {\mu t} \sum_{k \mathop = 0}^0 \paren {-1}^k \dbinom n k \mu^{n - k} s^k \int_{\to 0}^{\to 1} \map {\ln^k} {\dfrac {1 - u} u} \paren {\dfrac {1 - u} u}^{-s t} \rd u\)










Thus $\map P 0$ is seen to hold.

This is the basis for the induction.


Induction Hypothesis
Now it needs to be shown that if $\map P k$ is true, where $k \ge 1$, then it logically follows that $\map P {k + 1}$ is true.

So this is the induction hypothesis:

$\ds {M_X}^{\paren k} = \map \exp {\mu t} \sum_{r \mathop = 0}^k \paren {-1}^r \dbinom k r \mu^{k - r} s^r \int_{\to 0}^{\to 1} \map {\ln^r} {\dfrac {1 - u} u} \paren {\dfrac {1 - u} u}^{-s t} \rd u$

from which it is to be shown that:

$\ds {M_X}^{\paren {k + 1} } = \map \exp {\mu t} \sum_{r \mathop = 0}^{k + 1} \paren {-1}^r \dbinom {k + 1} r \mu^{k + 1 - r} s^r \int_{\to 0}^{\to 1} \map {\ln^r} {\dfrac {1 - u} u} \paren {\dfrac {1 - u} u}^{-s t} \rd u$


Induction Step
This is the induction step:














\(\ds {M_X}^{\paren {k + 1} }\)

\(=\)







\(\ds \dfrac \d {\d t} {M_X}^{\paren k}\)





Definition of Higher Derivative














\(\ds \)

\(=\)







\(\ds \dfrac \d {\d t} \map \exp {\mu t} \sum_{r \mathop = 0}^k \paren {-1}^r \dbinom k r \mu^{k - r} s^r \int_{\to 0}^{\to 1} \map {\ln^r} {\dfrac {1 - u} u} \paren {\dfrac {1 - u} u}^{-s t} \rd u\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds \map \exp {\mu t} \paren {\mu \sum_{r \mathop = 0}^k \paren {-1}^r \dbinom k r \mu^{k - r} s^r \int_{\to 0}^{\to 1} \map {\ln^r} {\dfrac {1 - u} u} \paren {\dfrac {1 - u} u}^{-s t} \rd u + \paren {-s \map \ln {\dfrac {1 - u} u} } \sum_{r \mathop = 0}^k \paren {-1}^r \dbinom k r \mu^{k - r} s^r \int_{\to 0}^{\to 1} \map {\ln^r} {\dfrac {1 - u} u} \paren {\dfrac {1 - u} u}^{-s t} \rd u }\)





Product Rule for Derivatives, Chain Rule for Derivatives Derivative of Power of Constant and Derivative of Exponential Function














\(\ds \)

\(=\)







\(\ds \map \exp {\mu t} \paren {\sum_{r \mathop = 0}^k \paren {-1}^r \dbinom k r \mu^{k + 1 - r} s^r \int_{\to 0}^{\to 1} \map {\ln^r} {\dfrac {1 - u} u} \paren {\dfrac {1 - u} u}^{-s t} \rd u + \sum_{r \mathop = 0}^k \paren {-1}^{r + 1} \dbinom k r \mu^{k - r} s^{r + 1} \int_{\to 0}^{\to 1} \map {\ln^{r + 1} } {\dfrac {1 - u} u} \paren {\dfrac {1 - u} u}^{-s t} \rd u }\)




















\(\ds \)

\(=\)







\(\ds \map \exp {\mu t} \paren {\sum_{r \mathop = 0}^k \paren {-1}^r \dbinom k r \mu^{k + 1 - r} s^r \int_{\to 0}^{\to 1} \map {\ln^r} {\dfrac {1 - u} u} \paren {\dfrac {1 - u} u}^{-s t} \rd u + \sum_{r \mathop = 1}^{k + 1} \paren {-1}^r \dbinom k {r - 1} \mu^{k + 1 - r} s^r \int_{\to 0}^{\to 1} \map {\ln^r} {\dfrac {1 - u} u} \paren {\dfrac {1 - u} u}^{-s t} \rd u }\)





re-index the second sum: $r = r + 1$














\(\ds \)

\(=\)







\(\ds \map \exp {\mu t} \sum_{r \mathop = 0}^{k + 1} \paren {-1}^r \dbinom {k + 1} r \mu^{k + 1 - r} s^r \int_{\to 0}^{\to 1} \map {\ln^r} {\dfrac {1 - u} u} \paren {\dfrac {1 - u} u}^{-s t} \rd u\)





Pascal's Rule: $\dbinom n {k - 1} + \dbinom n k = \dbinom {n + 1} k$



So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\ds \forall n \in \Z_{\ge 0}: {M_X}^{\paren n} = \map \exp {\mu t} \sum_{k \mathop = 0}^n \paren {-1}^k \dbinom n k \mu^{n - k} s^k \int_{\to 0}^{\to 1} \map {\ln^k} {\dfrac {1 - u} u} \paren {\dfrac {1 - u} u}^{-s t} \rd u$
$\blacksquare$





