# 

Source: https://proofwiki.org/wiki/Order_of_Sum_of_Reciprocal_of_Primes

Theorem
Let $x \ge 2$ be a real number. 
We have: 

$\ds \sum_{p \mathop \le x} \frac 1 p = \map \ln {\ln x} + \map \OO 1$
where:

$\ds \sum_{p \mathop \le x}$ sums over the primes less than or equal to $x$
$\OO$ is big-$\OO$ notation.


Proof
We have: 














\(\ds \int_p^x \frac 1 {t \ln^2 t} \rd t\)

\(=\)







\(\ds \int_{\ln p}^{\ln x} \frac {e^u} {e^u u^2} \rd u\)





substituting $t \mapsto e^u$














\(\ds \)

\(=\)







\(\ds \int_{\ln p}^{\ln x} \frac 1 {u^2} \rd u\)




















\(\ds \)

\(=\)







\(\ds \intlimits {-\frac 1 u} {\ln p} {\ln x}\)





Primitive of Power, Fundamental Theorem of Calculus














\(\ds \)

\(=\)







\(\ds \frac 1 {\ln p} - \frac 1 {\ln x}\)









So we can write: 














\(\ds \sum_{p \mathop \le x} \frac 1 p\)

\(=\)







\(\ds \sum_{p \mathop \le x} \paren {\frac {\ln p} p \times \frac 1 {\ln p} }\)





since $p \ge 2$, $\ln p \ne 0$














\(\ds \)

\(=\)







\(\ds \sum_{p \mathop \le x} \frac {\ln p} p \paren {\int_p^x \frac 1 {t \ln^2 t} \rd t + \frac 1 {\ln x} }\)




















\(\ds \)

\(=\)







\(\ds \sum_{p \mathop \le x} \frac {\ln p} p \paren {\int_p^x \frac 1 {t \ln^2 t} \rd t} + \frac 1 {\ln x} \sum_{p \mathop \le x} \frac {\ln p} p\)









We look to interchange summation and integral in our first term. 


Lemma
$\ds \sum_{p \mathop \le x} \frac {\ln p} p \paren {\int_p^x \frac 1 {t \ln^2 t} \rd t} = \int_2^x \frac 1 {t \ln^2 t} \paren {\sum_{p \mathop \le t} \frac {\ln p} p} \rd t$
$\Box$

From Order of Sum over Primes of $\dfrac {\ln p} p$, there exists a real function $R : \hointr 2 \infty \to \R$ such that: 

$\ds \sum_{p \mathop \le x} \frac {\ln p} p = \ln x + \map R x$
with $\map R x = \map \OO 1$.
We then have: 

$\ds \int_2^x \frac 1 {t \ln^2 t} \paren {\sum_{p \le t} \frac {\ln p} p} \rd t + \frac 1 {\ln x} \sum_{p \mathop \le x} \frac {\ln p} p = \int_2^x \frac {\ln t + \map R t} {t \ln^2 t} \rd t + 1 + \frac {\map R x} {\ln x}$
We have, by Linear Combination of Definite Integrals: 

$\ds \int_2^x \frac {\ln t + \map R t} {t \ln^2 t} \rd t = \int_2^x \frac 1 {t \ln t} \rd t + \int_2^x \frac {\map R t} {t \ln^2 t} \rd t$
Evaluating the first term: 














\(\ds \int_2^x \frac 1 {t \ln t} \rd t\)

\(=\)







\(\ds \int_{\ln 2}^{\ln x} \frac {e^u} {e^u \ln e^u} \rd u\)





substituting $t \mapsto e^u$














\(\ds \)

\(=\)







\(\ds \intlimits {\ln u} {\ln 2} {\ln x}\)





Primitive of Reciprocal, Fundamental Theorem of Calculus














\(\ds \)

\(=\)







\(\ds \map \ln {\ln x} - \map \ln {\ln 2}\)









We now have: 

$\ds \sum_{p \mathop \le x} \frac {\ln p} p = \map \ln {\ln x} + \paren {\int_2^x \frac {\map R t} {t \ln^2 t} \rd t + 1 + \frac {\map R x} {\ln x} - \map \ln {\ln 2} }$
We aim to show that the bracketed term is $\map \OO 1$. 
As shown in Order of Sum over Primes of $\dfrac {\ln p} p$, there exists a real constant $C > 0$ such that: 

$\size {\map R t} \le C$
for $t \ge 2$. 
Then: 














\(\ds \size {\int_2^x \frac {\map R t} {t \ln^2 t} \rd t}\)

\(\le\)







\(\ds C \int_2^x \frac 1 {t \ln^2 t} \rd t\)





Relative Sizes of Definite Integrals














\(\ds \)

\(=\)







\(\ds C \paren {\frac 1 {\ln 2} - \frac 1 {\ln x} }\)





using the previous integral result with $p = 2$














\(\ds \)

\(\le\)







\(\ds \frac C {\ln 2}\)





since $\dfrac 1 {\ln x} \ge 0$ for $x > 1$



So:

$\ds \int_2^x \frac {\map R t} {t \ln^2 t} \rd t = \map \OO 1$
We also have: 

$\ds \size {\frac {\map R x} {\ln x} } \le \frac C {\ln x}$
From Logarithm is Strictly Increasing, we then have:

$\ds \frac 1 {\ln x} \le \frac 1 {\ln 2}$
for $x \ge 2$, and so:

$\ds \size {\frac {\map R x} {\ln x} } \le \frac C {\ln 2}$
for $x \ge 2$. 
So:

$\ds \frac {\map R x} {\ln x} = \map \OO 1$
Clearly:

$1 - \map \ln {\ln 2} = \map \OO 1$
So from Sum of Big-$\OO$ Estimates, we have: 

$\ds \int_2^x \frac {\map R t} {t \ln^2 t} \rd t + 1 + \frac {\map R x} {\ln x} - \map \ln {\ln 2} = \map \OO 1$
giving:

$\ds \sum_{p \mathop \le x} \frac {\ln p} p = \map \ln {\ln x} + \map \OO 1$
$\blacksquare$





