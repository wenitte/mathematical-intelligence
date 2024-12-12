# 

Source: https://proofwiki.org/wiki/Entire_Function_Bounded_by_Polynomial_is_Polynomial

Theorem
Let $f : \C \to \C$ be an entire function such that: 

$\cmod {\map f z} \le M {\cmod z}^k$
for all $z \in \C$, for some $k \in \N$ and real $M > 0$. 

Then $f$ is a polynomial of degree at most $k$. 


Proof
Let $r > 0$ be a real number.
Let $D = \map {B_r} 0$ be the open ball with centre $0$ of radius $r$.
By Holomorphic Function is Analytic, we have that: 

$\ds \map f z = \sum_{n \mathop = 0}^\infty a_n z^n$
for all $z \in \C$, where: 

$\ds a_n = \frac 1 {2 \pi i} \oint_{\partial D} \frac {\map f t} {t^{n + 1} } \rd t$
Note that for $t \in \partial D$, we have: 

$\cmod {\map f t} \le M {\cmod t}^k = M r^k$
so for all $t \in \partial D$:

$\cmod {\dfrac {\map f t} {t^{n + 1} } } \le \dfrac {M r^k} {r^{n + 1} }$

From the Estimation Lemma for Contour Integrals::














\(\ds \cmod {a_n}\)

\(=\)







\(\ds \cmod {\frac 1 {2 \pi i} \oint_{\partial D} \frac {\map f t} {t^{n + 1} } \rd t}\)




















\(\ds \)

\(\le\)







\(\ds \frac 1 {2 \pi} \times 2 \pi r \times \frac {M r^k} {r^{n + 1} }\)





Estimation Lemma for Contour Integrals














\(\ds \)

\(=\)







\(\ds \frac M {r^{n - k} }\)









Then for $n > k$, we have: 

$\dfrac M {r^{n - k} } \to 0$
as $r \to \infty$.
Since $r$ was arbitrary, we have: 

$a_n = 0$
for all $n > k$. 
That is: 

$\ds \map f z = \sum_{n \mathop = 0}^k a_n z^n$
for all $z \in \C$.
That is, $f$ is a polynomial of degree at most $k$.
$\blacksquare$





