# 

Source: https://proofwiki.org/wiki/Continuous_Non-Negative_Real_Function_with_Zero_Integral_is_Zero_Function/Proof_2

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
From Continuous Real Function is Darboux Integrable, $f$ is Darboux integrable on $\closedint a b$.
Let $F : \closedint a b \to \R$ be a real function defined by: 

$\ds \map F x = \int_a^x \map f x \rd x$
We are assured that this function is well-defined, since $f$ is integrable on $\closedint a b$.
From Fundamental Theorem of Calculus: First Part, we have: 

$F$ is continuous on $\closedint a b$
$F$ is differentiable on $\openint a b$ with derivative $f$
Note that: 














\(\ds \map {F'} x\)

\(=\)







\(\ds \map f x\)




















\(\ds \)

\(\ge\)







\(\ds 0\)









for all $x \in \openint a b$. 
We therefore have, by Real Function with Positive Derivative is Increasing: 

$F$ is increasing on $\closedint a b$.
However, by hypothesis:














\(\ds \map F b\)

\(=\)







\(\ds \int_a^b \map f x \rd x\)




















\(\ds \)

\(=\)







\(\ds 0\)




















\(\ds \)

\(=\)







\(\ds \int_a^a \map f x \rd x\)





Definite Integral on Zero Interval














\(\ds \)

\(=\)







\(\ds \map F a\)









So, it must be the case that: 

$\map F x = 0$ for all $x \in \closedint a b$.
We therefore have, from Derivative of Constant: 

$\map {F'} x = \map f x = 0$ for all $x \in \closedint a b$
as required.
$\blacksquare$





