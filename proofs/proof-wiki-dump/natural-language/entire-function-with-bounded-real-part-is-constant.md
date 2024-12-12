# 

Source: https://proofwiki.org/wiki/Entire_Function_with_Bounded_Real_Part_is_Constant

Theorem
Let $f : \C \to \C$ be an entire function. 
Let the real part of $f$ be bounded.
That is, there exists a positive real number $M$ such that: 

$\cmod {\map \Re {\map f z} } < M$
for all $z \in \C$, where $\map \Re {\map f z}$ denotes the real part of $\map f z$.

Then $f$ is constant.


Corollary
Let $f : \C \to \C$ be an entire function. 
Let the imaginary part of $f$ be bounded.
That is, there exists a positive real number $M$ such that: 

$\cmod {\map \Im {\map f z} } < M$
for all $z \in \C$, where $\map \Im {\map f z}$ denotes the imaginary part of $\map f z$.

Then $f$ is constant.


Proof
Let $g : \C \to \C$ be a complex function with:

$\ds \map g z = e^{\map f z}$
By Derivative of Complex Composite Function, $g$ is entire with derivative:

$\ds \map {g'} z = \map {f'} z e^{\map f z}$
We have:














\(\ds \cmod {\map g z}\)

\(=\)







\(\ds e^{\map \Re {\map f z} }\)





Modulus of Positive Real Number to Complex Power is Positive Real Number to Power of Real Part














\(\ds \)

\(\le\)







\(\ds e^{\cmod {\map \Re {\map f z} } }\)





Exponential is Strictly Increasing














\(\ds \)

\(<\)







\(\ds e^M\)





Exponential is Strictly Increasing



So $g$ is a bounded entire function.
By Liouville's Theorem, $g$ is therefore a constant function.
We therefore have, by Derivative of Constant: Complex:

$\map {g'} z = 0$
for all $z \in \C$.
That is:

$\map {f'} z e^{\map f z} = 0$
Since the exponential function is non-zero, we must have: 

$\map {f'} z = 0$
for all $z \in \C$.
From Zero Derivative implies Constant Complex Function, we then have that $f$ is constant on $\C$. 
$\blacksquare$





