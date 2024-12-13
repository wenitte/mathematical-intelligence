# 

Source: https://proofwiki.org/wiki/Inner_Product_is_Continuous

Theorem
Let $\struct {V, \innerprod \cdot \cdot}$ be a inner product space. 
Let $\norm \cdot$ be the inner product norm on $V$. 
Let $x, y \in V$.
Let $\sequence {x_n}_{n \mathop \in \N}$ and $\sequence {y_n}_{n \mathop \in \N}$ be sequences converging in $\struct {V, \norm \cdot}$ to $x$ and $y$ respectively.

Then we have: 

$\innerprod {x_n} {y_n} \to \innerprod x y$
as $n \to \infty$.


Proof
Let $\sequence {x_n}_{n \mathop \in \N}$ and $\sequence {y_n}_{n \mathop \in \N}$ be sequences converging to $x$ and $y$ respectively.
From Modulus of Limit in Normed Vector Space, we have that: 

$\norm {x_n} \to \norm x$
and:

$\norm {y_n} \to \norm y$
We have:














\(\ds \size {\innerprod {x_n} {y_n} - \innerprod x y}\)

\(=\)







\(\ds \size {\innerprod {x_n - x} {y_n} + \innerprod x {y_n - y} }\)




















\(\ds \)

\(\le\)







\(\ds \size {\innerprod {x_n - x} {y_n} } + \size {\innerprod x {y_n - y} }\)





Triangle Inequality














\(\ds \)

\(\le\)







\(\ds \norm {x_n - x} \norm {y_n} + \norm x \norm {y_n - y}\)





Cauchy-Bunyakovsky-Schwarz Inequality



From Convergent Real Sequence is Bounded, we have: 

$\sequence {\norm {y_n} }$ is bounded.
That is, there exists a positive real number $M$ such that: 

$\norm {y_n} < M$
Let $\epsilon > 0$. 
From the definition of a convergent sequence in a normed vector space, there exists $N_1 \in \N$ such that: 

$\norm {x_n - x} < \dfrac \epsilon {2 M}$
for $n > N_1$.

If $x = 0$, we have: 

$\norm x = 0$
Then:














\(\ds \size {\innerprod {x_n} {y_n} - \innerprod x y}\)

\(\le\)







\(\ds \norm {x_n - x} \norm {y_n}\)




















\(\ds \)

\(<\)







\(\ds M \norm {x_n - x}\)




















\(\ds \)

\(<\)







\(\ds \frac \epsilon 2\)




















\(\ds \)

\(<\)







\(\ds \epsilon\)









for $n > N_1$, so we are done in this case. 

Now take $x \ne 0$, then: 

$\norm x \ne 0$
So by the definition of a convergent sequence in a normed vector space, there exists $N_2 \in \N$ such that: 

$\norm {y_n - y} < \dfrac \epsilon {2 \norm x}$
Let:

$N = \max \set {N_1, N_2}$
Then, for $n > N$, we have: 














\(\ds \size {\innerprod {x_n} {y_n} - \innerprod x y}\)

\(\le\)







\(\ds \norm {x_n - x} \norm {y_n} + \norm x \norm {y_n - y}\)




















\(\ds \)

\(<\)







\(\ds M \times \frac \epsilon {2 M} + \norm x \times \frac \epsilon {2 \norm x}\)




















\(\ds \)

\(=\)







\(\ds \frac \epsilon 2 + \frac \epsilon 2\)




















\(\ds \)

\(=\)







\(\ds \epsilon\)









So we have: 

$\innerprod {x_n} {y_n} \to \innerprod x y$
as $n \to \infty$, hence the claim.
$\blacksquare$





