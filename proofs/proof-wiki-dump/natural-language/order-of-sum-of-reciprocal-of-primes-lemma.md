# 

Source: https://proofwiki.org/wiki/Order_of_Sum_of_Reciprocal_of_Primes/Lemma

Lemma
Let $x \ge 2$ be a real number.
Then:

$\ds \sum_{p \mathop \le x} \frac {\ln p} p \paren {\int_p^x \frac 1 {t \ln^2 t} \rd t} = \int_2^x \frac 1 {t \ln^2 t} \paren {\sum_{p \mathop \le t} \frac {\ln p} p} \rd t$
where: 

$\ds \sum_{p \mathop \le x}$ sums over the primes less than or equal to $x$.


Proof
Let $\set {p_1, p_2, \ldots, p_n}$ be the primes in the interval $\closedint 2 x$, labelled so that $p_i < p_{i + 1}$ for each $1 \le i \le n - 1$.
Note that $p_1 = 2$. 
Then, we can write: 

$\ds \int_2^x \frac 1 {t \ln^2 t} \paren {\sum_{p \mathop \le t} \frac {\ln p} p} \rd t = \sum_{i \mathop = 1}^{n - 1} \paren {\int_{p_i}^{p_{i + 1} } \paren {\frac 1 {t \ln^2 t} \paren {\sum_{p \mathop \le t} \frac {\ln p} p} } \rd t} + \int_{p_n}^x \frac 1 {t \ln^2 t} \paren {\sum_{p \mathop \le t} \frac {\ln p} p} \rd t$
Note that since there are no primes between $p_i$ and $p_{i + 1}$, the sum: 

$\ds \sum_{p \mathop \le t} \frac {\ln p} p$
is constant for $t \in \hointr {p_i} {p_{i + 1} }$, for each $i$. 
So:

$\ds \int_{p_i}^{p_{i + 1} } \paren {\frac 1 {t \ln^2 t} \paren {\sum_{p \mathop \le t} \frac {\ln p} p} } \rd t = \paren {\sum_{j \mathop = 1}^i \frac {\ln p_j} {p_j} } \int_{p_i}^{p_{i + 1} } \frac 1 {t \ln^2 t} \rd t$
and:

$\ds \int_{p_n}^x \frac 1 {t \ln^2 t} \paren {\sum_{p \mathop \le t} \frac {\ln p} p} \rd t = \paren {\sum_{j \mathop = 1}^{n - 1} \frac {\ln p_j} {p_j} } \int_{p_n}^x \frac 1 {t \ln^2 t} \rd t$
We can now rewrite: 

$\ds \sum_{i \mathop = 1}^{n - 1} \paren {\int_{p_i}^{p_{i + 1} } \paren {\frac 1 {t \ln^2 t} \paren {\sum_{p \mathop \le t} \frac {\ln p} p} } \rd t} = \sum_{i \mathop = 1}^{n - 1} \paren {\sum_{j \mathop = 1}^i \frac {\ln p_j} {p_j} } \int_{p_i}^{p_{i + 1} } \frac 1 {t \ln^2 t} \rd t$
Clearly: 

$\ds \sum_{j \mathop = 1}^i \frac {\ln p_j} {p_j}$
sums $p = p_j$ if and only if $j \le i$.
With this in mind, we can write:

$\ds \sum_{i \mathop = 1}^{n - 1} \paren {\sum_{j \mathop = 1}^i \frac {\ln p_j} {p_j} } \int_{p_i}^{p_{i + 1} } \frac 1 {t \ln^2 t} \rd t = \sum_{j \mathop = 1}^{n - 1} \frac {\ln p_j} {p_j} \paren {\sum_{i \mathop = j}^{n - 1} \int_{p_i}^{p_{i + 1} } \frac 1 {t \ln^2 t} \rd t}$
Then, from Sum of Integrals on Adjacent Intervals for Integrable Functions: 

$\ds \sum_{j \mathop = 1}^{n - 1} \frac {\ln p_j} {p_j} \paren {\sum_{i \mathop = j}^n \int_{p_i}^{p_{i + 1} } \frac 1 {t \ln^2 t} \rd t} = \sum_{j \mathop = 1}^{n - 1} \frac {\ln p_j} {p_j} \int_{p_j}^{p_n} \frac 1 {t \ln^2 t} \rd t$
Putting everything together, we have: 














\(\ds \sum_{i \mathop = 1}^{n - 1} \paren {\int_{p_i}^{p_{i + 1} } \paren {\frac 1 {t \ln^2 t} \paren {\sum_{p \mathop \le t} \frac {\ln p} p} } \rd t} + \int_{p_n}^x \frac 1 {t \ln^2 t} \paren {\sum_{p \mathop \le t} \frac {\ln p} p} \rd t\)

\(=\)







\(\ds \sum_{j \mathop = 1}^{n - 1} \frac {\ln p_j} {p_j} \int_{p_j}^{p_n} \frac 1 {t \ln^2 t} \rd t + \paren {\sum_{j \mathop = 1}^n \frac {\ln p_j} {p_j} } \int_{p_n}^x \frac 1 {t \ln^2 t} \rd t\)




















\(\ds \)

\(=\)







\(\ds \sum_{j \mathop = 1}^{n - 1} \frac {\ln p_j} {p_j} \int_{p_j}^{p_n} \frac 1 {t \ln^2 t} \rd t + \sum_{j \mathop = 1}^{n - 1} \frac {\ln p_j} {p_j} \int_{p_n}^x \frac 1 {t \ln^2 t} \rd t + \frac {\ln p_n} {p_n} \int_{p_n}^x \frac 1 {t \ln^2 t} \rd t\)





writing $\ds \sum_{j \mathop = 1}^n \frac {\ln p_j} {p_j} = \sum_{j \mathop = 1}^{n - 1} \frac {\ln p_j} {p_j} + \frac {\ln p_n} {p_n}$














\(\ds \)

\(=\)







\(\ds \sum_{j \mathop = 1}^{n - 1} \frac {\ln p_j} {p_j} \paren {\int_{p_j}^{p_n} \frac 1 {t \ln^2 t} \rd t + \int_{p_n}^x \frac 1 {t \ln^2 t} \rd t} + \frac {\ln p_n} {p_n} \int_{p_n}^x \frac 1 {t \ln^2 t} \rd t\)





combining the first two sums














\(\ds \)

\(=\)







\(\ds \sum_{j \mathop = 1}^{n - 1} \frac {\ln p_j} {p_j} \int_{p_j}^x \frac 1 {t \ln^2 t} \rd t + \frac {\ln p_n} {p_n} \int_{p_n}^x \frac 1 {t \ln^2 t} \rd t\)





Sum of Integrals on Adjacent Intervals for Integrable Functions














\(\ds \)

\(=\)







\(\ds \sum_{j \mathop = 1}^n \frac {\ln p_j} {p_j} \int_{p_j}^x \frac 1 {t \ln^2 t} \rd t\)





recombining














\(\ds \)

\(=\)







\(\ds \sum_{p \mathop \le x} \frac {\ln p} p \int_p^x \frac 1 {t \ln^2 t} \rd t\)









$\blacksquare$





