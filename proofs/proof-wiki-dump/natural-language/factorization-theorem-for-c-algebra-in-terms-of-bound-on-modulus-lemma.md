# 

Source: https://proofwiki.org/wiki/Factorization_Theorem_for_C*-Algebra_in_terms_of_Bound_on_Modulus/Lemma

Theorem
Let $\struct {A, \ast, \norm {\, \cdot \,} }$ be a unital $\text C^\ast$-algebra. 
Let $\le_A$ be the canonical preordering of $A$.
Let $\alpha, \beta \in \R$ be such that $\alpha + \beta > 1$. 
Let $a \in A$ be positive.
Let $x, y \in A$ be such that:

$x^\ast x \le_A a^\alpha$
and:

$y y^\ast \le_A a^\beta$
Let:

$u_n = x \paren {n^{-1} {\mathbf 1}_A + a}^{-1/2} y$
where $\paren {n^{-1} {\mathbf 1}_A + a}^{-1/2}$ is given by the continuous functional calculus for $a$.

Then $\sequence {u_n}_{n \mathop \in \N}$ converges to $u \in A$ such that:

$\norm u \le \norm a^{\frac 1 2 \paren {\alpha + \beta - 1} }$


Proof
Define:

$d_{n, m} = \paren {n^{-1} {\mathbf 1}_A + a}^{-1/2} - \paren {m^{-1} {\mathbf 1}_A + a}^{-1/2}$
From Product of Element of C*-Algebra with its Star is Positive, we have:

${\mathbf 0}_A \le_A x^\ast x \le_A a^\alpha$
and:

${\mathbf 0}_A \le_A y^\ast y \le_A a^\beta$
From Continuous Function applied to Normal Element of Unital C*-Algebra is Hermitian iff Function is Real-Valued, we have that $d_{n, m}$ is Hermitian for each $n, m \in \N$. 
We then have:














\(\ds \norm {u_n - u_m}^2\)

\(=\)







\(\ds \norm {x d_{n, m} y}^2\)




















\(\ds \)

\(=\)







\(\ds \norm {\paren {x d_{n, m} y}^\ast x d_{n, m} y}\)





Definition of C*-Algebra














\(\ds \)

\(=\)







\(\ds \norm {y^\ast d_{n, m} x^\ast x d_{n, m} y}\)





$(\text C^\ast 3)$ in Definition of C*-Algebra



From Conjugation in C*-Algebra preserves Positivity: Corollary to $x^\ast x \le_A a^\alpha$, we have:

${\mathbf 0}_A \le_A \paren {d_{n, m} y}^\ast x^\ast x \paren {d_{n, m} y} \le_A \paren {d_{n, m} y}^\ast a^\alpha \paren {d_{n, m} y}$
hence:

${\mathbf 0}_A \le_A y^\ast d_{n, m} x^\ast x d_{n, m} y \le_A y^\ast d_{n, m} a^\alpha d_{n, m} y$
From Norm Preserves Ordering on Positive Elements of C*-Algebra, we have:

$\norm {y^\ast d_{n, m} x^\ast x d_{n, m} y} \le \norm {y^\ast d_{n, m} a^\alpha d_{n, m} y}$
From Power of Power of Positive Element of Unital C*-Algebra, we have:

$\paren {a^{\alpha/2} }^2 = a^\alpha$
We then have:














\(\ds \norm {y^\ast d_{n, m} a^\alpha d_{n, m} y}\)

\(=\)







\(\ds \norm {y^\ast d_{n, m} a^{\alpha/2} a^{\alpha/2} d_{n, m} y}\)




















\(\ds \)

\(=\)







\(\ds \norm {\paren {a^{\alpha/2} d_{n, m} y}^\ast a^{\alpha/2} d_{n, m} y}\)




















\(\ds \)

\(=\)







\(\ds \norm {a^{\alpha/2} d_{n, m} y}^2\)





Definition of C*-Algebra














\(\ds \)

\(=\)







\(\ds \norm {a^{\alpha/2} d_{n, m} y \paren {a^{\alpha/2} d_{n, m} y}^\ast}\)





Definition of C*-Algebra














\(\ds \)

\(=\)







\(\ds \norm {a^{\alpha/2} d_{n, m} y y^\ast d_{n, m} a^{\alpha/2} }\)









Applying Conjugation in C*-Algebra preserves Positivity: Corollary again to $y y^\ast \le_A a^\beta$ we have:

${\mathbf 0}_A \le_A \paren {a^{\alpha/2} d_{n, m} }^\ast y y^\ast \paren {a^{\alpha/2} d_{n, m} } \le_A \paren {a^{\alpha/2} d_{n, m} }^\ast a^\beta \paren {a^{\alpha/2} d_{n, m} }$
so that:

${\mathbf 0}_A \le_A a^{\alpha/2} d_{n, m} y y^\ast d_{n, m} a^{\alpha/2} \le_A a^{\alpha/2} d_{n, m} a^\beta d_{n, m} a^{\alpha/2}$
Hence from Norm Preserves Ordering on Positive Elements of C*-Algebra, we have:

$\norm {a^{\alpha/2} d_{n, m} y y^\ast d_{n, m} a^{\alpha/2} } \le \norm {a^{\alpha/2} d_{n, m} a^\beta d_{n, m} a^{\alpha/2} }$
By the definition of the continuous functional calculus, $a^{\alpha/2}$, $d_{n, m}$ and $a^\beta$ all commute.
Hence we have:

$a^{\alpha/2} d_{n, m} a^\beta d_{n, m} a^{\alpha/2} = d_{n, m}^2 a^{\alpha + \beta}$
from Product of Powers of Positive Element of Unital C*-Algebra.
Since $d_{n, m}^2 a^{\alpha + \beta}$ is Hermitian, we have:

$\norm {d_{n, m}^2 a^{\alpha + \beta} } = \norm {d_{n, m} a^{\paren {\alpha + \beta}/2} }^2$
by $(\text C^\ast 5)$ in the definition of a $\text C^\ast$-algebra.
To recall, so far we have shown that:

$\norm {u_n - u_m} \le \norm {d_{n, m} a^{\paren {\alpha + \beta}/2} }$

Let $\norm {\, \cdot \,}_\infty$ be the supremum norm on $\map \CC {\map {\sigma_A} a}$. 
Now define $f_n : \map {\sigma_A} a \to \R$ by:

$\ds \map {f_n} t = \frac 1 {\sqrt {n^{-1} + t} } t^{\paren {\alpha + \beta}/2}$
for each $t \in \map {\sigma_A} a$.
Also define $f : \map {\sigma_A} a \to \R$ by:

$\map f t = t^{\paren {\alpha + \beta - 1}/2}$
for each $t \in \map {\sigma_A} a$. 
For $n \ge m$, we have $n^{-1} \le m^{-1}$ and hence:

$\ds \frac 1 {\sqrt {n^{-1} + t} } t^{\paren {\alpha + \beta}/2} \ge \frac 1 {\sqrt {m^{-1} + t} } t^{\paren {\alpha + \beta}/2}$ for each $t \in \map {\sigma_A} a$.
Hence for each $t \in \map {\sigma_A} a$, $\sequence {f_n}_{n \mathop \in \N}$ is increasing.
Further for $t \in \map {\sigma_A} a \setminus \set 0$, we have:

$\ds \frac 1 {\sqrt {n^{-1} + t} } \to t^{-1/2}$
and hence:

$\ds \frac 1 {\sqrt {n^{-1} + t} } t^{\paren {\alpha + \beta}/2} \to t^{\frac {\alpha + \beta - 1} 2}$
Further, $\map {f_n} 0 = 0$ for each $n \in \N$ and $\map f 0 = 0$, so convergence also holds for $t = 0$. 
So $\sequence {f_n}_{n \mathop \in \N}$ converges pointwise to $f$.
Since $\sequence {f_n}_{n \mathop \in \N}$ is increasing, we have that:

$\norm {f_n - f}_\infty \to 0$
by Dini's Theorem.
Since the continuous functional calculus is an isometry, we have:

$\norm {d_{n, m} a^{\paren {\alpha + \beta}/2} } = \norm {f_n - f_m}_\infty$
Let $\epsilon > 0$. 
Since $\sequence {f_n}_{n \mathop \in \N}$ converges, there exists $N \in \N$ such that:

$\norm {f_n - f_m}_\infty < \epsilon$ for $n, m \ge N$.
Hence $\norm {u_n - u_m} < \epsilon$ for $n, m \ge N$.
Hence $\sequence {u_n}_{n \mathop \in \N}$ is a Cauchy sequence.
Since $A$ is a Banach algebra, $\sequence {u_n}_{n \mathop \in \N}$ converges to $u \in A$.

We just need to prove the bound on $\norm u$.
For brevity, define $g_n : \map {\sigma_A} a \to \R$ such that:

$\map {g_n} t = \paren {n^{-1} + t}^{-1/2}$
for each $t \in \map {\sigma_A} a$.
Then:

$\map {f_n} t = \map {g_n} t t^{\paren {\alpha + \beta - 1}/2}$
for each $t \in \map {\sigma_A} a$.
Almost identically (hence we suppress details) to before we have:














\(\ds \norm {u_n}\)

\(=\)







\(\ds \norm {x \map {g_n} a y}\)




















\(\ds \)

\(=\)







\(\ds \norm {y^\ast \map {g_n} a x^\ast x \map {g_n} a y}\)





$(\text C^\ast 3)$ in Definition of C*-Algebra














\(\ds \)

\(\le\)







\(\ds \norm {y^\ast \map {g_n} a a^\alpha \map {g_n} a y}\)





Conjugation in C*-Algebra preserves Positivity: Corollary, Norm Preserves Ordering on Positive Elements of C*-Algebra














\(\ds \)

\(=\)







\(\ds \norm {y^\ast \map {g_n} a a^{\alpha/2} a^{\alpha/2} \map {g_n} a y}\)




















\(\ds \)

\(=\)







\(\ds \norm {a^{\alpha/2} \map {g_n} a y}^2\)





Definition of C*-Algebra














\(\ds \)

\(=\)







\(\ds \norm {a^{\alpha/2} \map {g_n} a y y^\ast \map {g_n} a a^{\alpha/2} }\)





Definition of C*-Algebra














\(\ds \)

\(\le\)







\(\ds \norm {a^{\alpha/2} \map {g_n} a a^\beta \map {g_n} a a^{\alpha/2} }\)





Conjugation in C*-Algebra preserves Positivity: Corollary, Norm Preserves Ordering on Positive Elements of C*-Algebra














\(\ds \)

\(=\)







\(\ds \norm {\paren {\map {g_n} a}^2 a^{\alpha + \beta} }\)





Product of Powers of Positive Element of Unital C*-Algebra














\(\ds \)

\(=\)







\(\ds \norm {\map {g_n} a a^{\paren {\alpha + \beta}/2} }\)





Definition of C*-Algebra














\(\ds \)

\(=\)







\(\ds \norm {\map {f_n} a}\)




















\(\ds \)

\(=\)







\(\ds \norm {f_n}_\infty\)





continuous functional calculus is a linear isometry














\(\ds \)

\(=\)







\(\ds \sup_{\lambda \in \map {\sigma_A} a} \cmod {\map {f_n} \lambda}\)





Definition of Supremum Norm














\(\ds \)

\(=\)







\(\ds \sup_{\lambda \in \map {\sigma_A} a} \map {f_n} \lambda\)





$f_n \ge 0$














\(\ds \)

\(\le\)







\(\ds \sup_{\lambda \in \map {\sigma_A} a} \map f \lambda\)





$\sequence {f_n}_{n \mathop \in \N}$ is increasing














\(\ds \)

\(=\)







\(\ds \sup_{\lambda \in \map {\sigma_A} a} \cmod {\map f \lambda}\)





since $f \ge 0$














\(\ds \)

\(=\)







\(\ds \norm f_\infty\)




















\(\ds \)

\(=\)







\(\ds \norm {\map f a}\)





continuous functional calculus is a linear isometry














\(\ds \)

\(=\)







\(\ds \norm {a^{\paren {\alpha + \beta + 1}/2} }\)




















\(\ds \)

\(=\)







\(\ds \norm a^{\paren {\alpha + \beta + 1}/2}\)





Norm of Non-Negative Increasing Continuous Function applied to Positive Element of Unital C*-Algebra



Hence:

$\ds \norm {u_n} \le \norm a^{\paren {\alpha + \beta + 1}/2}$ for each $n \in \N$.
From Modulus of Limit: Normed Vector Space, we have:

$\ds \norm u \le \norm a^{\paren {\alpha + \beta + 1}/2}$
by taking $n \to \infty$.
$\blacksquare$


Sources
2000: John B. Conway: A Course in Operator Theory ... (previous) ... (next): Lemma $4.5$




