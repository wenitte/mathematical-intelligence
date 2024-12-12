# 

Source: https://proofwiki.org/wiki/Banach_Algebra_with_Unity_is_Unital_Banach_Algebra

Theorem
Let $\mathbb F \in \set {\R, \C}$.
Let $\struct {X, \norm \cdot}$ be a non-trivial Banach algebra over $\mathbb F$.
Suppose that $X$ has an identity element $\mathbf 1_X$.

Then there exists a norm $\norm \cdot '$ on $X$ equivalent to $\norm \cdot$ such that $\struct {X, \norm \cdot '}$ is a unital Banach algebra.
That is:

$(1): \quad\norm \cdot$ and $\norm \cdot '$ are equivalent
$(2): \quad\struct {X, \norm \cdot '}$ is a Banach algebra
$(3): \quad\norm {\mathbf 1_X}' = 1$


Proof
Define $\norm \cdot' : X \to \closedint 0 \infty$ by: 

$\norm a' = \sup \set {\norm {a b} : \norm b \le 1}$
for each $a \in X$. 
Note that for each $a, b \in X$ with $\norm b \le 1$, we have: 

$\norm {a b} \le \norm a \norm b \le \norm a$
so that: 

$\norm a' \in \hointr 0 \infty$
for each $a \in X$. 

We now verify that $\norm \cdot'$ is an norm. 
We can see that: 

$\norm 0' = \sup \set {\norm 0 : \norm b \le 1} = 0$
Conversely, suppose that: 

$\norm a' = 0$
for $a \in X$. 
Then: 

$\sup \set {\norm {a b} : \norm b \le 1} = 0$
while: 

$\norm {a b} \ge 0$ for each $b \in X$ with $\norm b \le 1$.
So we have: 

$a b = 0$ for all $b \in X$ with $\norm b \le 1$.
In particular, since: 

$\ds \norm {\frac {\mathbf 1_X} {\norm {\mathbf 1_X} } } = 1$
we have, setting $b = \paren {\norm {\mathbf 1_X} }^{-1} \mathbf 1_X$: 

$\dfrac a {\norm {\mathbf 1_X} } = 0$
so that: 

$a = 0$
So Norm Axiom $\text N 1$: Positive Definiteness holds for $\norm \cdot'$. 

Now let $a \in X$ and $\lambda \in \Bbb F$. 
We then have: 














\(\ds \norm {\lambda a}'\)

\(=\)







\(\ds \sup \set {\norm {\lambda a b} : \norm b \le 1}\)




















\(\ds \)

\(=\)







\(\ds \sup \set {\cmod \lambda \norm {a b} : \norm b \le 1}\)




















\(\ds \)

\(=\)







\(\ds \cmod \lambda \sup \set {\norm {a b} : \norm b \le 1}\)





Multiple of Supremum














\(\ds \)

\(=\)







\(\ds \cmod \lambda \norm a'\)









So Norm Axiom $\text N 2$: Positive Homogeneity holds for $\norm \cdot'$.

We now verify Norm Axiom $\text N 3$: Triangle Inequality.
Let $x, y \in X$.
Then for each $b \in X$ with $\norm b \le 1$, we have: 

$\norm {\paren {x + y} b} \le \norm {x b} + \norm {y b}$
by Norm Axiom $\text N 3$: Triangle Inequality for $\norm \cdot$. 
Then, we have: 

$\norm {\paren {x + y} b} \le \sup \set {\norm {x b} : \norm b \le 1} + \sup \set {\norm {y b} : \norm b \le 1}$
for each $\norm b \le 1$. 
Taking the supremum over such $b$ we obtain:

$\norm {x + y}' \le \norm x' + \norm y'$
for each $x, y \in X$. 
So Norm Axiom $\text N 3$: Triangle Inequality holds for $\norm \cdot'$.
So, we have that $\norm \cdot'$ is a norm. 

We now show that $\norm \cdot'$ is equivalent to $\norm \cdot$.
Note that we have already shown that: 

$\norm a' \le \norm a$
for each $a \in X$. 
For the other direction, noting that: 

$\ds \norm {\frac {\mathbf 1_X} {\norm {\mathbf 1_X} } } = 1$
so that: 

$\ds \frac {\norm a} {\norm {\mathbf 1_X} } \in \set {\norm {a b} : \norm b \le 1}$
giving:

$\ds \frac {\norm a} {\norm {\mathbf 1_X} } \le \sup \set {\norm {a b} : \norm b \le 1}$
We therefore have: 

$\ds \frac {\norm a} {\norm {\mathbf 1_X} } \le \norm a' \le \norm a$
for each $a \in X$. 
So $\norm \cdot'$ is equivalent to $\norm \cdot$.
So we have shown $(1)$. 

From Norm Equivalence Preserves Completeness, we have: 

$\struct {X, \norm \cdot'}$ is a Banach space.
To show that $\struct {X, \norm \cdot'}$ is a Banach algebra, we now just need to show that $\norm \cdot'$ is an algebra norm. 
We clearly have: 

$\norm {x y}' \le \norm x' \norm y'$
if $x = 0$ or $y = 0$. 
Now take $x, y \in X \setminus \set 0$. 
Clearly we have: 

$\norm {\paren {x y} b} \le \norm x' \norm y'$
for $b = 0$. 
Now let $b \in X \setminus \set 0$.
We have: 














\(\ds \norm {\paren {x y} b}\)

\(=\)







\(\ds \norm {x \paren {y b} }\)




















\(\ds \)

\(=\)







\(\ds \norm {x \paren {\frac {y b} {\norm {y b} } } \norm {y b} }\)




















\(\ds \)

\(=\)







\(\ds \norm {y b} \norm {x \paren {\frac {y b} {\norm {y b} } } }\)





Norm Axiom $\text N 2$: Positive Homogeneity



Since: 

$\ds \norm {\frac {y b} {\norm {y b} } } = 1$
we have: 

$\ds \norm {x \paren {\frac {y b} {\norm {y b} } } } \le \norm x'$
Since $\norm b \le 1$, we have: 

$\norm {y b} \le \norm y'$
and so: 

$\norm {\paren {x y} b} \le \norm x' \norm y'$
for each $b \in X$ with $\norm b \le 1$. 
Taking the supremum over $b$ we have: 

$\norm {x y}' \le \norm x' \norm y'$
for each $x, y \in X$. 
So we have $(2)$. 

Now, we show that: 

$\norm {\mathbf 1_X}' = 1$
We have: 














\(\ds \norm {\mathbf 1_X}'\)

\(=\)







\(\ds \sup \set {\norm b : \norm b \le 1}\)




















\(\ds \)

\(=\)







\(\ds \sup \closedint 0 1\)




















\(\ds \)

\(=\)







\(\ds 1\)









and so we have $(3)$, and are done.
$\blacksquare$





