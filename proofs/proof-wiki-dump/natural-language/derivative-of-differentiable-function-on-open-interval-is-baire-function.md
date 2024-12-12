# 

Source: https://proofwiki.org/wiki/Derivative_of_Differentiable_Function_on_Open_Interval_is_Baire_Function

Theorem
Let $I = \openint a b$ be a open interval.
Let $f : I \to \R$ be a differentiable function.
Let $f' : I \to \R$ be the derivative of $f$.

Then $f'$ is a Baire function. 


Proof
For each $n \in \N$, let $f_n : I \to \R$ be a function with: 

$\ds \map {f_n} x = n \paren {\map f {\min \set {x + \frac 1 n, \frac {b + x} 2} } - \map f x}$
for each $x$.
Note that from:

Minimum of Finitely Many Continuous Real Functions is Continuous
Composite of Continuous Mappings is Continuous
Combined Sum Rule for Continuous Real Functions
we have:

$f_n$ is continuous for each $n$.
We aim to show that $f_n$ converges pointwise to $f'$.
Fix $x \in I$. 
Let $\epsilon$ be a positive real number.
Since $f$ is differentiable with derivative $f'$, there exists $\delta > 0$ such that: 

$\ds \size {\frac {\map f {x + h} - \map f x} h - \map {f'} x} < \epsilon$
for all real $h$ with $0 < \size h < \delta$.
Let $N$ be the least natural number such that:

$\ds x + \frac 1 N < \frac {b + x} 2$
That is:

$\ds N > \frac 2 {b - x} > 0$
Then, for $n > N$ we have: 

$\ds \min \set {x + \frac 1 n, \frac {b + x} 2} = x + \frac 1 n$
Then, for $n > \max \set {1/\delta, N}$ we also have $0 < 1/n < \delta$, and so: 














\(\ds \size {\map {f_n} x - \map {f'} x}\)

\(=\)







\(\ds \size {n \paren {\map f {x + \frac 1 n} - \map f x} - \map {f'} x}\)




















\(\ds \)

\(=\)







\(\ds \size {\frac {\map f {x + \frac 1 n} - \map f x} {\frac 1 n} - \map {f'} x}\)




















\(\ds \)

\(<\)







\(\ds \epsilon\)









By the definition of pointwise convergence:

$f_n$ converges pointwise to $f'$.
Since $\sequence {f_n}$ is a sequence of continuous real functions converging pointwise to $f'$, we have: 

$f'$ is a Baire function.
$\blacksquare$





