# 

Source: https://proofwiki.org/wiki/Norm_satisfying_Parallelogram_Law_induced_by_Inner_Product/Real_Case



Theorem
Let $V$ be a vector space over $\R$.
Let $\norm \cdot : V \to \R$ be a norm on $V$ such that: 

$\norm {x + y}^2 + \norm {x - y}^2 = 2 \paren {\norm x^2 + \norm y^2}$
for each $x, y \in V$.

Then the function $\innerprod \cdot \cdot : V \times V \to \R$ defined by: 

$\ds \innerprod x y = \frac {\norm {x + y}^2 - \norm {x - y}^2} 4$
for each $x, y \in V$, is an inner product on $V$.
Further, $\norm \cdot$ is the inner product norm of $\struct {V, \innerprod \cdot \cdot}$.


Corollary
Let $\struct {V, \norm \cdot}$ be a normed vector space over $\R$.

Then there exists an inner product $\innerprod \cdot \cdot : V \times V \to \R$ such that: 

$\norm x = \sqrt {\innerprod x x}$
if and only if:

$\norm {x + y}^2 + \norm {x - y}^2 = 2 \paren {\norm x^2 + \norm y^2}$
for each $x, y \in V$.

That is, a norm is induced by an inner product if and only if it satisfies the Parallelogram Law for Inner Product Spaces.


Proof
We first verify symmetry. 
Let $x, y \in V$. 
Then we have: 














\(\ds \innerprod y x\)

\(=\)







\(\ds \frac {\norm {y + x}^2 - \norm {y - x}^2} 4\)




















\(\ds \)

\(=\)







\(\ds \frac {\norm {x + y}^2 - \norm {-\paren {x - y} }^2} 4\)




















\(\ds \)

\(=\)







\(\ds \frac {\norm {x + y}^2 - \norm {x - y}^2} 4\)





Norm Axiom $\text N 2$: Positive Homogeneity














\(\ds \)

\(=\)







\(\ds \innerprod x y\)









We now show non-negative definiteness and positiveness.
We have for each $x \in V$: 














\(\ds \innerprod x x\)

\(=\)







\(\ds \frac {\norm {x + x}^2 - \norm {x - x}^2} 4\)




















\(\ds \)

\(=\)







\(\ds \frac {\norm {2 x}^2 - \norm 0^2} 4\)




















\(\ds \)

\(=\)







\(\ds \frac {4 \norm x^2} 4\)





from the positive homogeneity of the norm $\norm \cdot$














\(\ds \)

\(=\)







\(\ds \norm x^2\)









Since norms are positive definite, we then have: 

$\innerprod x x \ge 0$
for each $x \in V$, with: 

$\innerprod x x = 0$
if and only if $x = 0$.
We finally show linearity in the first argument. 
We first show that for each $x, y, z \in V$ we have: 

$\innerprod {x + y} z = \innerprod x z + \innerprod y z$
We have: 














\(\ds \innerprod x y + \innerprod y z\)

\(=\)







\(\ds \frac 1 4 \paren {\norm {x + y}^2 - \norm {x - y}^2 + \norm {y + z}^2 - \norm {y - z}^2}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 4 \paren {\norm {x + z}^2 + \norm y^2 - \norm {x - z}^2 - \norm y^2 + \norm x^2 + \norm {y + z}^2 - \norm x^2 - \norm {y - z}^2}\)





adding $\dfrac 1 4 \paren {\norm y^2 - \norm y^2 + \norm x^2 - \norm x^2} = 0$



Note that by hypothesis, we have: 

$\norm {f + g}^2 + \norm {f - g}^2 = 2 \paren {\norm f^2 + \norm g^2}$
for each $f, g \in V$.
So by hypothesis, setting $f = x + z$ and $g = y$, we have: 

$\norm {x + y + z}^2 + \norm {x - y + z}^2 = 2 \paren {\norm {x + z}^2 + \norm y^2}$
similarly, setting $f = x - z$ and $g = y$:

$\norm {x + y - z}^2 + \norm {x - y - z}^2 = 2 \paren {\norm {x - z}^2 - \norm y^2}$
Setting $f = x$ and $g = y + z$ we also obtain:

$\norm {x + y + z}^2 + \norm {x - y - z}^2 = 2 \paren {\norm x^2 + \norm {y + z}^2}$
Finally setting $f = x$ and $g = y - z$ we get:

$\norm {x + y - z}^2 + \norm {x - y + z}^2 = 2 \paren {\norm x^2 + \norm {y - z}^2}$
Putting this all together, we have:














\(\ds \frac 1 4 \paren {\norm {x + z}^2 + \norm y^2 - \norm {x - z}^2 - \norm y^2 + \norm x^2 + \norm {y + z}^2 - \norm x^2 - \norm {y - z}^2}\)

\(=\)







\(\ds \frac 1 8 \paren {\norm {x + y + z}^2 + \norm {x - y + z}^2 - \norm {x + y - z}^2 - \norm {x - y - z}^2 + \norm {x + y + z}^2 + \norm {x - y - z}^2 - \norm {x + y - z}^2 - \norm {x - y + z}^2}\)




















\(\ds \)

\(=\)







\(\ds \frac 2 8 \paren {\norm {x + y + z}^2 - \norm {x + y - z}^2}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 4 \paren {\norm {x + y + z}^2 - \norm {x + y - z}^2}\)




















\(\ds \)

\(=\)







\(\ds \innerprod {x + y} z\)









We now show that: 

$\innerprod {\alpha x} y = \alpha \innerprod x y$
for any $\alpha \in \R$ and $x, y \in V$. 

We then have the Lemma:

Lemma
$\innerprod {n x} y = n \innerprod x y$
for each integer $n \ge 0$ and $x, y \in V$.
$\Box$

We then have, for $q \in \N$: 

$\ds q \innerprod {\frac x q} y = \innerprod x y$
so:

$\ds \innerprod {\frac x q} y = \frac 1 q \innerprod x y$
So, for any integer $p \ge 0$, we have: 

$\ds \innerprod {\frac p q x} y = \frac p q \innerprod x y$
That is: 

$\innerprod {\alpha x} y = \alpha \innerprod x y$
for any rational number $\alpha \ge 0$.
We now note that:














\(\ds \innerprod {-x} y\)

\(=\)







\(\ds \frac 1 4 \paren {\norm {-x + y}^2 + \norm {-x - y}^2}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 4 \paren {\norm {x - y}^2 - \norm {x + y}^2}\)





from the positive homogeneity of the norm $\norm \cdot$














\(\ds \)

\(=\)







\(\ds -\innerprod x y\)









We can therefore obtain, for any rational number $\alpha \ge 0$:














\(\ds \innerprod {-\alpha x} y\)

\(=\)







\(\ds -\innerprod {\alpha x} y\)




















\(\ds \)

\(=\)







\(\ds -\alpha \innerprod x y\)









That is: 

$\innerprod {\alpha x} y = \alpha \innerprod x y$
for all $\alpha \in \Q$.
We now conclude with a density argument using Inner Product is Continuous.
Let $\alpha \in \R$ and $x, y \in V$. 
From Rationals are Everywhere Dense in Reals: Normed Vector Space:

for each $n \in \N$, we can pick $\alpha_n \in \Q$ such that $\size {\alpha - \alpha_n} < \dfrac 1 n$
Then we have: 

$\alpha_n \to \alpha$
So from Convergence of Product of Convergent Scalar Sequence and Convergent Vector Sequence in Normed Vector Space, we have: 

$\alpha_n x \to \alpha x$
Then we have, from Inner Product is Continuous: 

$\ds \lim_{n \mathop \to \infty} \innerprod {\alpha_n x} y = \innerprod {\alpha x} y$
while:

$\innerprod {\alpha_n x} y = \alpha_n \innerprod x y$
So, from the Multiple Rule for Real Sequences, we have: 

$\ds \innerprod {\alpha x} y = \paren {\lim_{n \mathop \to \infty} \alpha_n} \innerprod x y = \alpha \innerprod x y$
for all $x, y \in V$ and $\alpha \in \R$. 
So we have that $\innerprod \cdot \cdot$ is an inner product. 

Finally, note that since: 

$\innerprod x x = \norm x^2$
We immediately obtain: 

$\norm x = \sqrt {\innerprod x x}$
Since $\innerprod \cdot \cdot$ is an inner product, we have that $\norm \cdot$ is the inner product norm for $\struct {V, \innerprod \cdot \cdot}$.
$\blacksquare$





