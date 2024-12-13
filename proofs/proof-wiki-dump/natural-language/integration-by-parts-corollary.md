# 

Source: https://proofwiki.org/wiki/Integration_by_Parts/Corollary

Corollary to Integration by Parts
Let $u$ and $v$ be real functions which are integrable on their domain.
Then:

$\ds \int u v \rd x = \paren {\int u \rd x} v - \int \paren {\int u \rd x} \dfrac {\d v} {\d x} \rd x$


Proof
From Integration by Parts:

$(1): \quad \ds \int u \dfrac {\d v} {\d x} \rd x = u v - \int v \dfrac {\d u} {\d x} \rd x$

In $(1)$, let us make the identifications:




\(\text {(2)}: \quad\)









\(\ds u\)

\(\gets\)







\(\ds v\)










and:












\(\ds \dfrac {\d v} {\d x}\)

\(\gets\)







\(\ds u\)










\(\text {(3)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds v = \int \dfrac {\d v} {\d x} \rd x\)

\(\gets\)







\(\ds \int u \rd x\)










This gives:














\(\ds \int u v \rd x\)

\(=\)







\(\ds \int v \cdot u \rd x\)





changing order for clarity














\(\ds \)

\(=\)







\(\ds v \int u \rd x - \int \paren {\int u \rd x} \dfrac {\d v} {\d x} \rd x\)





substituting from $(2)$ and $(3)$



$\blacksquare$


Sources
1964: Milton Abramowitz and Irene A. Stegun: Handbook of Mathematical Functions ... (previous) ... (next): $3$: Elementary Analytic Methods: $3.3$ Rules for Differentiation and Integration: Integration by Parts: $3.3.13$




