# 

Source: https://proofwiki.org/wiki/Mean_Value_Theorem_for_Integrals/Proof_2

Theorem
Let $f$ be a continuous real function on the closed interval $\closedint a b$.
Then there exists a real number $k \in \closedint a b$ such that:

$\ds \int_a^b \map f x \rd x = \map f k \paren {b - a}$


Proof
From Continuous Real Function is Darboux Integrable, $f$ is Darboux integrable on $\closedint a b$.
Let $F : \closedint a b \to \R$ be a real function defined by: 

$\ds \map F x = \int_a^x \map f x \rd x$
We are assured that this function is well-defined, since $f$ is integrable on $\closedint a b$.
From Fundamental Theorem of Calculus: First Part, we have: 

$F$ is continuous on $\closedint a b$
$F$ is differentiable on $\openint a b$ with derivative $f$
By the Mean Value Theorem, there therefore exists $k \in \openint a b$ such that: 

$\map {F'} k = \dfrac {\map F b - \map F a} {b - a}$
As $F$ is differentiable on $\openint a b$ with derivative $f$: 

$\map {F'} k = \map f k$
We therefore have: 














\(\ds \map f k\)

\(=\)







\(\ds \frac {\map F b - \map F a} {b - a}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {b - a} \paren {\int_a^b \map f x \rd x - \int_a^a \map f x \rd x}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {b - a} \int_a^b \map f x \rd x\)





Definite Integral on Zero Interval



giving: 

$\ds \int_a^b \map f x \rd x = \paren {b - a} \map f k$
as required.
$\blacksquare$





