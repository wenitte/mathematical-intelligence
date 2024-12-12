# 

Source: https://proofwiki.org/wiki/Expectation_of_Geometric_Distribution/Formulation_2



Theorem
Let $X$ be a discrete random variable with the geometric distribution with parameter $p$ for some $0 < p < 1$.

$\map X \Omega = \set {0, 1, 2, \ldots} = \N$
$\map \Pr {X = k} = p \paren {1 - p}^k$

Then the expectation of $X$ is given by:

$\map E X = \dfrac {1-p} p$


Proof 1
From the definition of expectation:

$\ds \expect X = \sum_{x \mathop \in \Omega_X} x \map \Pr {X = x}$
By definition of geometric distribution:

$\ds \expect X = \sum_{k \mathop \in \Omega_X} k p \paren {1 - p}^k$
Let $q = 1 - p$:














\(\ds \expect X\)

\(=\)







\(\ds p \sum_{k \mathop \ge 0} k q^k\)





as $\Omega_X = \N$














\(\ds \)

\(=\)







\(\ds p \sum_{k \mathop \ge 1} k q^k\)





as the $k = 0$ term is zero














\(\ds \)

\(=\)







\(\ds pq \sum_{k \mathop \ge 1} k q^{k - 1}\)




















\(\ds \)

\(=\)







\(\ds p q \frac 1 {\paren {1 - q}^2}\)





Derivative of Geometric Sequence














\(\ds \)

\(=\)







\(\ds \frac {p q} {p^2}\)





as $q = 1 - p$














\(\ds \)

\(=\)







\(\ds \frac {1 - p} p\)









$\blacksquare$


Proof 2
By Moment Generating Function of Geometric Distribution, the moment generating function of $X$ is given by: 

$\map {M_X} t = \dfrac p {1 - \paren {1 - p} e^t}$
for $t < -\map \ln {1 - p}$, and is undefined otherwise.
From Moment in terms of Moment Generating Function: 

$\expect X = \map { {M_X}'} 0$
From Moment Generating Function of Geometric Distribution: First Moment: 

$\map { {M_X}'} t = \dfrac {p \paren {1 - p} e^t } {\paren {1 - \paren {1 - p} e^t}^2 }$
Hence setting $t = 0$:














\(\ds \map { {M_X}'} 0\)

\(=\)







\(\ds \dfrac {p \paren {1 - p} } {\paren {1 - \paren {1 - p} }^2 }\)




















\(\ds \)

\(=\)







\(\ds \dfrac {p \paren {1 - p} } {p^2 }\)




















\(\ds \)

\(=\)







\(\ds \dfrac {1 - p} p\)









$\blacksquare$


Also presented as
The Expectation of Geometric Distribution is also presented in the form:

$\var X = \dfrac q p$
where $q$ has been defined conventionally as $q = 1 - p$.


Sources
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): geometric distribution




