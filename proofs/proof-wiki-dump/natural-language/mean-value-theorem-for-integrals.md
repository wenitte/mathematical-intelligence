# 

Source: https://proofwiki.org/wiki/Mean_Value_Theorem_for_Integrals



Theorem
Let $f$ be a continuous real function on the closed interval $\closedint a b$.
Then there exists a real number $k \in \closedint a b$ such that:

$\ds \int_a^b \map f x \rd x = \map f k \paren {b - a}$


Generalization
Let $f$ and $g$ be continuous real functions on the closed interval $\closedint a b$ such that:

$\forall x \in \closedint a b: \map g x \ge 0$
Then there exists a real number $k \in \closedint a b$ such that:

$\ds \int_a^b \map f x \map g x \rd x = \map f k \int_a^b \map g x \rd x$


Proof 1
From Continuous Real Function is Darboux Integrable, $f$ is Darboux integrable on $\closedint a b$.
By the Extreme Value Theorem, there exist $m, M \in \closedint a b$ such that:

$\ds \map f m = \min_{x \mathop \in \closedint a b} \map f x$
$\ds \map f M = \max_{x \mathop \in \closedint a b} \map f x$
Then, from Darboux's Theorem:

$\ds \map f m \paren {b - a} \le \int_a^b \map f x \rd x \le \map f M \paren {b - a}$
Dividing all terms by $\paren {b - a}$ gives:

$\ds \map f m \le \frac 1 {b - a}\int_a^b \map f x \rd x \le \map f M$
By the Intermediate Value Theorem, there exists some $k \in \openint a b$ such that:














\(\ds \frac 1 {b - a} \int_a^b \map f x \rd x\)

\(=\)







\(\ds \map f k\)














\(\ds \leadsto \ \ \)





\(\ds \int_a^b \map f x \rd x\)

\(=\)







\(\ds \map f k \paren {b - a}\)









$\blacksquare$


Proof 2
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


Also known as
The Mean Value Theorem for Integrals is also seen hyphenated: Mean-Value Theorem for Integrals.


Also see
Definition:Mean Value of Function
Darboux's Theorem
Mean Value Theorem


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 15$: General Formulas involving Definite Integrals: $15.12$
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): mean-value theorem
2005: Roland E. Larson, Robert P. Hostetler and Bruce H. Edwards: Calculus (8th ed.): $\S 1.4, \ \S 4.4$
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): mean-value theorem




