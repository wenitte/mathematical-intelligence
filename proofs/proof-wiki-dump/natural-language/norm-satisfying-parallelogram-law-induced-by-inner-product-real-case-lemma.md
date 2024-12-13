# 

Source: https://proofwiki.org/wiki/Norm_satisfying_Parallelogram_Law_induced_by_Inner_Product/Real_Case/Lemma



Lemma
Let $V$ be a vector space over $\R$.
Let $\norm \cdot : V \to \R$ be a norm on $V$ such that: 

$\norm {x + y}^2 + \norm {x - y}^2 = 2 \paren {\norm x^2 + \norm y^2}$
for each $x, y \in V$.
Define the function $\innerprod \cdot \cdot : V \times V \to \R$ by: 

$\ds \innerprod x y = \frac {\norm {x + y}^2 - \norm {x - y}^2} 4$
for each $x, y \in V$.

Then: 

$\innerprod {n x} y = n \innerprod x y$
for each integer $n \ge 0$ and $x, y \in V$.


Proof
Let $x, y \in V$.
In the case $n = 0$, we have: 

$\innerprod {n x} y = \innerprod 0 y$
From Inner Product with Zero Vector, we then have: 

$\innerprod 0 y = 0$
so:

$\innerprod {n x} y = n \innerprod x y$
in this case. 
Now we prove the statement for $n \ge 1$. 
We proceed by induction.
For each $n \in \N$ let $\map P n$ be the proposition:

$\innerprod {n x} y = n \innerprod x y$


Basis for the Induction
We have: 

$\innerprod {1 \times x} y = \innerprod x y$
So $\map P 1$ holds.


Induction Hypothesis
Now we need to show that, if $\map P n$ is true, where $n \ge 1$, then it logically follows that $\map P {n + 1}$ is true.

So this is our induction hypothesis:

$\ds \innerprod {n x} y = n \innerprod x y$


Induction Step
Now we need to show:

$\innerprod {\paren {n + 1} x} y = \paren {n + 1} \innerprod x y$
We have: 














\(\ds \innerprod {\paren {n + 1} x} y\)

\(=\)







\(\ds \innerprod {n x + x} y\)




















\(\ds \)

\(=\)







\(\ds \innerprod {n x} y + \innerprod x y\)





as show in Norm satisfying Parallelogram Law induced by Inner Product: Real Case














\(\ds \)

\(=\)







\(\ds n \innerprod x y + \innerprod x y\)





from the induction assumption














\(\ds \)

\(=\)







\(\ds \paren {n + 1} \innerprod x y\)










So $\map P n \implies \map P {n + 1}$ and the result follows by the Principle of Mathematical Induction.
$\blacksquare$





