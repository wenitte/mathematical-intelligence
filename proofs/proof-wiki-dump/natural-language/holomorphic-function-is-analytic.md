# 

Source: https://proofwiki.org/wiki/Holomorphic_Function_is_Analytic

Theorem
Let $a \in \C$ be a complex number.
Let $r > 0$ be a real number.
Let $f$ be a function holomorphic on some open ball $D = \map B {a, r}$. 
Then $f$ is complex analytic on $D$.


Proof
Let $z \in D$.
Then: 














\(\ds \map f z\)

\(=\)







\(\ds \frac 1 {2 \pi i} \int_{\partial D} \frac {\map f t} {t - z} \rd t\)





Cauchy's Integral Formula














\(\ds \)

\(=\)







\(\ds \frac 1 {2 \pi i} \int_{\partial D} \frac {\map f t} {\paren {t - a} \paren {1 - \frac {z - a} {t - a} } } \rd t\)









Note that for all $t \in \partial D$, we have:

$\cmod {z - a} < \cmod {t - a} = r$.
Therefore:

$\cmod {\dfrac {z - a} {t - a} } < 1$
so Sum of Infinite Geometric Sequence may be applied.
This gives:














\(\ds \map f z\)

\(=\)







\(\ds \frac 1 {2 \pi i} \int_{\partial D} \frac {\map f t} {t - a} \sum_{n \mathop = 0}^\infty \paren {\frac {z - a} {t - a} }^n \rd t\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {2 \pi i} \int_{\partial D} \sum_{n \mathop = 0}^\infty \map f t \frac {\paren {z - a}^n} {\paren {t - a}^{n + 1} } \rd t\)









From Continuous Function on Compact Space is Bounded, there exists a real $M \ge 0$, such that:

$\forall t \in \partial D: \cmod {\map f t} \le M$
As $\cmod {\dfrac {z - a} {t - a} } < 1$, there exists a real $0 \le N < 1$ such that:

$\cmod {\dfrac {z - a} {t - a} } \le N$
Then: 

$\cmod {\dfrac {\paren {z - a}^n} {\paren {t - a}^{n + 1} } \map f t} = \cmod {\dfrac 1 {t - a} } \cmod {\dfrac {\paren {z - a}^n} {\paren {t - a}^n} } \cmod {\map f t} \le \dfrac 1 r M N^n$
As $N < 1$, we have that $\ds \frac 1 r \sum_{n \mathop = 0}^\infty M N^n$ converges by Sum of Infinite Geometric Sequence. 
Therefore by the Weierstrass M-Test, we have that: 

$\ds \sum_{n \mathop = 0}^\infty \map f t \frac {\paren {z - a}^n} {\paren {t - a}^{n + 1} }$
converges uniformly on $D$.
Therefore: 

$\ds \frac 1 {2 \pi i} \int_{\partial D} \sum_{n \mathop = 0}^\infty \map f t \frac {\paren {z - a}^n} {\paren {t - a}^{n + 1} } \rd t = \sum_{n \mathop = 0}^\infty \paren {z - a}^n \paren {\frac 1 {2 \pi i} \int_{\partial D} \frac {\map f t} {\paren {t - a}^{n + 1} } \rd t}$
Let: 

$\ds c_n = \frac 1 {2 \pi i} \int_{\partial D} \frac {\map f t} {\paren {t - a}^{n + 1} } \rd t$
Then: 

$\ds \map f z = \sum_{n \mathop = 0}^\infty c_n \paren {z - a}^n$
so $f$ is complex analytic on $D$. 
$\blacksquare$


Sources
2021: Richard Earl and James Nicholson: The Concise Oxford Dictionary of Mathematics (6th ed.) ... (previous) ... (next): holomorphic




