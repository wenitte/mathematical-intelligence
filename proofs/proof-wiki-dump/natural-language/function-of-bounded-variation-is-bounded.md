# 

Source: https://proofwiki.org/wiki/Function_of_Bounded_Variation_is_Bounded

Theorem
Let $a, b$ be real numbers with $a < b$.
Let $f : \closedint a b \to \R$ be a function of bounded variation.

Then $f$ is bounded.


Proof
We use the notation from the definition of bounded variation.
Since $f$ is of bounded variation, there exists $M \ge 0$ such that:

$\map {V_f} {P ; \closedint a b} \le M$
for all finite subdivisions $P$ of $\closedint a b$.
Let $x$ be a real number with:

$a < x < b$
Then $\set {a, x, b}$ is a finite subdivision of $\closedint a b$.
We have: 

$\map {V_f} {\set {a, x, b} ; \closedint a b} = \size {\map f x - \map f a} + \size {\map f b - \map f x}$
Since $x \in \openint a b$ was arbitrary, we therefore have: 

$\size {\map f x - \map f a} + \size {\map f b - \map f x} \le M$
for all $x \in \openint a b$.
We have:














\(\ds \size {\map f x - \map f a} + \size {\map f b - \map f x}\)

\(\ge\)







\(\ds \size {\map f x - \map f a}\)




















\(\ds \)

\(\ge\)







\(\ds \size {\size {\map f x} - \size {\map f a} }\)





Reverse Triangle Inequality: Real and Complex Fields














\(\ds \)

\(\ge\)







\(\ds \size {\map f x} - \size {\map f a}\)









So for all $x \in \openint a b$, we have: 

$\size {\map f x} \le \size {\map f a} + M$
Since $M \ge 0$, this inequality is also satisfied for $x = a$. 
We therefore have: 

$\size {\map f x} \le \map \max {\size {\map f a} + M, \size {\map f b} }$
for all $x \in \closedint a b$.
So $f$ is is bounded.
$\blacksquare$


Sources
1973: Tom M. Apostol: Mathematical Analysis (2nd ed.) ... (previous) ... (next): $\S 6.3$: Functions of Bounded Variation: Theorem $6.7$




