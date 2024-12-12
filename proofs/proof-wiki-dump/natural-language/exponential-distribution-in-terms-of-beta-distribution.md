# 

Source: https://proofwiki.org/wiki/Exponential_Distribution_in_terms_of_Beta_Distribution

Theorem
Let $\sequence {X_n}$ be a sequence of independent random variables with:

$X_n \sim \BetaDist 1 n$
for each natural number $n$, where $\BetaDist 1 n$ denotes the beta distribution with parameters $1$ and $n$. 

Then: 

$n X_n \xrightarrow d X$
with:

$X \sim \Exponential 1$
where: 

$\Exponential 1$ denotes the exponential distribution with parameter $1$,
$\xrightarrow d$ denotes convergence in distribution.


Proof
We aim to show that for each real $x > 0$, we have: 

$\ds \lim_{n \mathop \to \infty} \map \Pr {X_n \le x} = \map \Pr {X \le x}$
From the definition of the exponential distribution, we have: 

$\map \Pr {X \le x} = 1 - e^{-x}$
Note that, from the definition of the beta distribution:

$0 \le X_n \le 1$
So, if $n \le x$, we have: 

$\map \Pr {X_n \le x} = 1$
Take $n \ge x$. 
Then, we have: 














\(\ds \map \Pr {n X_n \le x}\)

\(=\)







\(\ds \map \Pr {X_n \le \frac x n}\)




















\(\ds \)

\(=\)







\(\ds \int_0^{\frac x n} \frac {t^{1 - 1} \paren {1 - t}^{n - 1} } {\map \Beta {1, n} } \rd t\)





Definition of Beta Distribution














\(\ds \)

\(=\)







\(\ds \int_0^{\frac x n} \frac {\paren {1 - t}^{n - 1} } {\frac {\map \Gamma 1 \map \Gamma n} {\map \Gamma {n + 1} } } \rd t\)





Definition of Beta Function














\(\ds \)

\(=\)







\(\ds \int_0^{\frac x n} \frac {\paren {1 - t}^{n - 1} } {\frac {\map \Gamma n} {n \map \Gamma n} } \rd t\)





Gamma Difference Equation














\(\ds \)

\(=\)







\(\ds \int_0^{\frac x n} n \paren {1 - t}^{n - 1} \rd t\)




















\(\ds \)

\(=\)







\(\ds \intlimits {-\paren {1 - t}^n} 0 {\frac x n}\)





Primitive of Power














\(\ds \)

\(=\)







\(\ds 1 - \paren {1 - \frac x n}^n\)









From the definition of the exponential function as a sequence, we have:

$\ds \lim_{n \mathop \to \infty} \paren {1 - \frac x n}^n = e^{-x}$
so:

$\ds \lim_{n \mathop \to \infty} \paren {1 - \paren {1 - \frac x n}^n} = 1 - e^{-x} = \map \Pr {X \le x}$
That is: 

$\ds \lim_{n \mathop \to \infty} \map \Pr {X_n \le x} = \map \Pr {X \le x}$
as required.
$\blacksquare$





