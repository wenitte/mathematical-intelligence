# 

Source: https://proofwiki.org/wiki/Hellinger-Toeplitz_Theorem/Proof_2

Theorem
Let $\struct {\HH, \innerprod \cdot \cdot}$ be a Hilbert space.
Let $T : \HH \to \HH$ be a Hermitian operator.
That is: 

$\innerprod {T x} y = \innerprod x {T y}$ for each $x, y \in \HH$.

Then: 

$T$ is bounded.


Proof
Aiming for a contradiction, suppose suppose that $T$ is not bounded.
Then there does not exist $C > 0$ such that: 

$\norm {T x}_\HH \le C$ for each $x \in \HH$ with $\norm x_\HH = 1$.
That is, for each $n \in \N$ there exists $y_n \in \HH$ such that: 

$\norm {T y_n}_\HH \ge n$
with $\norm {y_n}_\HH = 1$.
For each $n \in \N$, define the linear functional $f_n : \HH \to \HH$ by: 

$\map {f_n} x = \innerprod x {T y_n}$
Then, from the Riesz Representation Theorem (Hilbert Spaces), we have that $f_n$ is a bounded linear functional with: 

$\norm {f_n}_{\HH^\ast} = \norm {T y_n}_\HH \ge n$
So:

$\ds \sup_n \norm {f_n}_{\HH^\ast} = \infty$
Then, from the Principle of Condensation of Singularities, there exists $x \in X$ such that: 

$\ds \sup_n \cmod {\map {f_n} x} = \infty$
Since $T$ is Hermitian, we have: 

$\map {f_n} x = \innerprod {T x} {y_n}$ for each $n \in \N$.
Then, we have:














\(\ds \cmod {\map {f_n} x}\)

\(=\)







\(\ds \cmod {\innerprod {T x} {y_n} }\)




















\(\ds \)

\(\le\)







\(\ds \norm {T x}_\HH \norm {y_n}_\HH\)





Cauchy-Bunyakovsky-Schwarz Inequality














\(\ds \)

\(=\)







\(\ds \norm {T x}_\HH\)









But then we have: 

$\ds \sup_n \cmod {\map {f_n} x} \le \norm {T x}_\HH < \infty$
a contradiction.
So $T$ is bounded.
$\blacksquare$





