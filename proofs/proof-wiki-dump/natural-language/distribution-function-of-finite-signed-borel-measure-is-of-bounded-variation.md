# 

Source: https://proofwiki.org/wiki/Distribution_Function_of_Finite_Signed_Borel_Measure_is_of_Bounded_Variation

Theorem
Let $\mu$ be a finite signed Borel measure on $\R$.
Let $F_\mu$ be the distribution function of $\mu$. 

Then $F_\mu$ is of bounded variation.


Proof
Let $\SS$ be a non-empty finite subset of $\R$. 
Write: 

$\SS = \set {x_0, x_1, \ldots, x_n}$
with:

$x_0 < x_1 < x_2 < \cdots < x_{n - 1} < x_n$
Then, we have: 














\(\ds \sum_{i \mathop = 1}^n \size {\map {F_\mu} {x_i} - \map {F_\mu} {x_{i - 1} } }\)

\(=\)







\(\ds \sum_{i \mathop = 1}^n \size {\map \mu {\hointl {-\infty} {x_i} } - \map \mu {\hointl {-\infty} {x_{i - 1} } } }\)





Definition of Distribution Function of Finite Signed Borel Measure














\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 1}^n \size {\map \mu {\hointl {-\infty} {x_i} \setminus \hointl {-\infty} {x_{i - 1} } } }\)





Measure of Set Difference with Subset: Signed Measure














\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 1}^n \size {\map \mu {\hointl {x_{i - 1} } {x_i} } }\)




















\(\ds \)

\(\le\)







\(\ds \size {\map \mu {\hointl {-\infty} {x_0} } } + \sum_{i \mathop = 1}^n \size {\map \mu {\hointl {x_{i - 1} } {x_i} } } + \size {\map \mu {\hointr {x_n} \infty} }\)









Note that: 

$\set {\hointl {-\infty} {x_0}, \hointl {x_0} {x_1}, \hointl {x_1} {x_2}, \ldots, \hointl {x_{n - 1} } {x_n}, \hointr {x_n} \infty}$ is a partition of $\R$ into Borel sets.
So from Definition 2 of the variation of a signed measure, we have: 

$\ds \size {\map \mu {\hointl {-\infty} {x_0} } } + \sum_{i \mathop = 1}^n \size {\map \mu {\hointl {x_{i - 1} } {x_i} } } + \size {\map \mu {\hointr {x_n} \infty} } \le \map {\size \mu} \R$
where $\size \mu$ is the variation of $\mu$.
From Signed Measure Finite iff Finite Total Variation, we have: 

$\map {\size \mu} \R < \infty$
So, using the notation from the definition of bounded variation, for all non-empty finite subset of $\R$, $\SS$, we have:

$\map {V_f^\ast} {\SS; I} \le M = \map {\size \mu} \R$
So $f$ is of bounded variation.
$\blacksquare$


Sources
2013: Donald L. Cohn: Measure Theory (2nd ed.) ... (previous) ... (next): $4.4$: Functions of Finite Variation




