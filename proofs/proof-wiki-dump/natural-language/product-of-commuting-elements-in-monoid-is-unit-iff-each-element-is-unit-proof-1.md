# 

Source: https://proofwiki.org/wiki/Product_of_Commuting_Elements_in_Monoid_is_Unit_iff_Each_Element_is_Unit/Proof_1



Theorem
Let $A$ be a monoid.
Let $\map G A$ be the group of units of $A$.
Let $n \ge 2$ be an integer. 
Let $x_1, \ldots, x_n$ be commuting elements in $A$.
Let:

$\ds x = \prod_{i \mathop = 1}^n x_i$

Then:

$x \in \map G A$ if and only if $x_i \in \map G A$ for each $1 \le i \le n$.


Proof
Necessary Condition
We proceed by induction on $n$. 
For all $n \ge 2$, let $\map P n$ be the proposition:

for every set of commuting elements $x_1, \ldots, x_n$ in $A$
if $\ds \prod_{i \mathop = 1}^n x_i \in \map G A$, then $x_i \in \map G A$ for each $1 \le i \le n$.


Basis for the Induction
Let $x, y \in A$ be commuting elements in $A$ such that $x y \in \map G A$.
Let $z \in A$ be such that $\paren {x y} z = z \paren {x y} = e$. 
We then have:














\(\ds y z x\)

\(=\)







\(\ds y z x x y z\)





since $x y z = e$














\(\ds \)

\(=\)







\(\ds y z x y x z\)





using $x y = y z$ and Monoid Axiom $\text S 1$: Associativity














\(\ds \)

\(=\)







\(\ds y \paren {z x y} x z\)





Monoid Axiom $\text S 1$: Associativity














\(\ds \)

\(=\)







\(\ds y x z\)





since $z x y = e$














\(\ds \)

\(=\)







\(\ds x y z\)





since $y x = x y$














\(\ds \)

\(=\)







\(\ds \paren {x y} z\)





Monoid Axiom $\text S 1$: Associativity














\(\ds \)

\(=\)







\(\ds e\)









So we have: 

$\paren {y z} x = x \paren {y z} = e$
So we have $x \in \map G A$ with $x^{-1} = y z$. 
Then we have $y = x^{-1} z^{-1}$.
From Inverse of Product: Monoid: General Result, it follows that $y \in \map G A$ as well.
This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P k$ is true, where $k \ge 2$, then it logically follows that $\map P {k + 1}$ is true.
So this is our induction hypothesis:

for every set of commuting elements $x_1, \ldots, x_k$ in $A$
if $\ds \prod_{i \mathop = 1}^k x_i \in \map G A$, then $x_i \in \map G A$ for each $1 \le i \le k$.
Then we need to show:

for every set of commuting elements $x_1, \ldots, x_{k + 1}$ in $A$
if $\ds \prod_{i \mathop = 1}^{k + 1} x_i \in \map G A$, then $x_i \in \map G A$ for each $1 \le i \le k + 1$.


Induction Step
This is our induction step.
Let $x_1, \ldots, x_{k + 1}$ be commuting elements of $A$ such that:

$\ds \prod_{i \mathop = 1}^{k + 1} x_i \in \map G A$
We can write:

$\ds \prod_{i \mathop = 1}^{k + 1} x_i = \paren {\prod_{i \mathop = 1}^k x_i} x_{k + 1}$
Using the basis for the induction, we have that:

$\ds \prod_{i \mathop = 1}^k x_i \in \map G A$ and $x_{k + 1} \in \map G A$.
Using the induction hypothesis, we then have:

$x_1, \ldots, x_k \in \map G A$ and $x_{k + 1} \in \map G A$
So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.
$\Box$


Sufficient Condition
This is precisely Inverse of Product: Monoid: General Result.
$\blacksquare$





