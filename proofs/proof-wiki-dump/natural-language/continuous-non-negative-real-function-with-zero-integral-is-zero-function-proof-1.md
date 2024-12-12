# 

Source: https://proofwiki.org/wiki/Continuous_Non-Negative_Real_Function_with_Zero_Integral_is_Zero_Function/Proof_1

Theorem
Let $a, b$ be real numbers with $a < b$. 
Let $f : \closedint a b \to \R$ be a continuous function. 
Let: 

$\map f x \ge 0$
for all $x \in \closedint a b$.
Let: 

$\ds \int_a^b \map f x \rd x = 0$

Then $\map f x = 0$ for all $x \in \closedint a b$.


Proof
From Definite Integral of Constant, if $\map f x = 0$ for all $x \in \closedint a b$, then: 

$\ds \int_a^b \map f x \rd x = 0$
We want to show that if:

$\ds \int_a^b \map f x \rd x = 0$
then:

$\map f x = 0$ for all $x \in \closedint a b$.
Since $\map f x \ge 0$, by Relative Sizes of Definite Integrals:

$\ds \int_a^b \map f x \rd x \ge 0$
It therefore suffices to show that if: 

$\map f x > 0$ for some $x \in \closedint a b$
then:

$\ds \int_a^b \map f x \rd x > 0$
We split this into three cases: 

$x = a$
$a < x < b$
$x = b$
since continuity on endpoints is defined slightly differently.
Consider the case: 

$a < x < b$
By continuity at $x$ we have that there exists $\delta > 0$ such that: 

for all $y \in \openint {x - \delta} {x + \delta}$ we have $\size {\map f y - \map f x} < \dfrac {\map f x} 2$
In particular for $y \in \openint {x - \delta} {x + \delta}$ we have: 

$0 < \dfrac {\map f x} 2 < \map f y$
Pick $\delta$ sufficiently small so that:

$\openint {x - \delta} {x + \delta} \subseteq \closedint a b$
We then have:














\(\ds \int_a^b \map f y \rd y\)

\(=\)







\(\ds \int_a^{x - \delta} \map f y \rd y + \int_{x - \delta}^{x + \delta} \map f y \rd y + \int_{x + \delta}^b \map f y \rd y\)





Sum of Integrals on Adjacent Intervals for Continuous Functions














\(\ds \)

\(\ge\)







\(\ds \int_{x - \delta}^{x + \delta} \map f y \rd y\)





Relative Sizes of Definite Integrals gives $\ds \int_a^{x - \delta} \map f y \rd y + \int_{x + \delta}^b \map f y \rd y \ge 0$














\(\ds \)

\(>\)







\(\ds \delta \map f x\)





Relative Sizes of Definite Integrals, Definite Integral of Constant














\(\ds \)

\(>\)







\(\ds 0\)









In the case $x = a$, by the definition of right continuity, there exists $\delta > 0$ such that: 

for all $x \in \openint a {a + \delta}$ we have $\size {\map f x - \map f a} < \dfrac {\map f a} 2$
That is, there exists some $x \in \openint a b$ such that: 

$\map f x > \dfrac {\map f a} 2 > 0$
So the former proof applies in this case. 
The case $x = b$ follows similarly.
In the case $x = b$, by the definition of left continuity, there exists $\delta > 0$ such that: 

for all $x \in \openint {b - \delta} b$ we have $\size {\map f x - \map f b} < \dfrac {\map f b} 2$
That is, there exists some $x \in \openint a b$ such that: 

$\map f x > \dfrac {\map f b} 2 > 0$
So, again, the proof for the case $a < x < b$ applies.
We have covered all three cases, so we are done.
$\blacksquare$





