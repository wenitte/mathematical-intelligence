# 

Source: https://proofwiki.org/wiki/Convergence_of_Product_of_Convergent_Scalar_Sequence_and_Convergent_Vector_Sequence_in_Normed_Vector_Space

Theorem
Let $\Bbb F \in \set {\R, \C}$.
Let $\struct {V, \norm \cdot}$ be a normed vector space on $\Bbb F$.
Let $\alpha \in \R$.
Let $x \in V$.
Let $\sequence {\alpha_n}_{n \mathop \in \N}$ be a real sequence in $\Bbb F$ such that: 

$\alpha_n \to \alpha$
Let $\sequence {x_n}_{n \mathop \in \N}$ be a sequence in $V$ such that:

$x_n \to x$
in $\struct {V, \norm \cdot}$. 

Then we have: 

$\alpha_n x_n \to \alpha x$
in $\struct {V, \norm \cdot}$.


Proof
Let $\epsilon > 0$.
We have: 














\(\ds \norm {\alpha_n x_n - \alpha x}\)

\(=\)







\(\ds \norm {\alpha_n x_n - \alpha x + \alpha_n x - \alpha_n x}\)




















\(\ds \)

\(\le\)







\(\ds \norm {\alpha_n x_n - \alpha_n x} + \norm {\alpha_n x - \alpha x}\)





using the triangle inequality for the norm $\norm \cdot$














\(\ds \)

\(=\)







\(\ds \size {\alpha_n} \norm {x_n - x} + \norm x \size {\alpha_n - \alpha}\)





using positive homogeneity for the norm $\norm \cdot$



From Convergent Real Sequence is Bounded, there exists $M > 0$ such that we have: 

$\size {\alpha_n} \le M$
for each $n \in \N$. 
Then we have: 

$\norm {\alpha_n x_n - \alpha x} \le M \norm {x_n - x} + \norm x \size {\alpha_n - \alpha}$

Suppose that: 

$\norm x = 0$
then, from positive definiteness of $\norm \cdot$: 

$x = 0$
In this case:

$x_n \to 0$
and:

$\norm {\alpha_n x_n} = \norm {\alpha_n x_n - \alpha x} \le M \norm {x_n - x} = M \norm {x_n}$
Then we can choose $N \in \N$ such that: 

$\ds \norm {x_n} < \frac \epsilon M$
for $n > N$.
From which we have: 

$\norm {\alpha_n x_n} < M$
for $n > N$. 
So, from the definition of a convergent sequence, we have: 

$\alpha_n x_n \to 0 = \alpha x$
in the case $\norm x = 0$.
Now suppose that: 

$\norm x \ne 0$

Now suppose that: 

$\norm x \ne 0$
Since: 

$\alpha_n \to \alpha$
we can pick $N_1 \in \N$ such that: 

$\ds \size {\alpha_n - \alpha} < \frac \epsilon {2 \norm x}$
for $n \ge N_1$, from the definition of convergence.
Since we also have: 

$x_n \to x$
we can pick $N_2 \in \N$ such that: 

$\ds \norm {x_n - x} < \frac \epsilon {2 M}$
from the definition of a convergent sequence.
Let:

$N = \max \set {N_1, N_2}$
We then have, for $n > N$: 














\(\ds \norm {\alpha_n x_n - \alpha x}\)

\(<\)







\(\ds M \paren {\frac \epsilon {2 M} } + \norm x \paren {\frac \epsilon {2 \norm x} }\)




















\(\ds \)

\(=\)







\(\ds \frac \epsilon 2 + \frac \epsilon 2\)




















\(\ds \)

\(=\)







\(\ds \epsilon\)









So, from the definition of a convergent sequence, we have: 

$\alpha_n x_n \to \alpha x$
in the case $x \ne 0$ also, hence the result.
$\blacksquare$





