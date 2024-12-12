# 

Source: https://proofwiki.org/wiki/Factorization_Theorem_for_C*-Algebra_in_terms_of_Bound_on_Modulus



Theorem
Let $\struct {A, \ast, \norm {\, \cdot \,} }$ be a $\text C^\ast$-algebra. 
Let $\le_A$ be the canonical preordering of $A$.
Let $a \in A$ be positive.
Let $x \in A$ be such that:

$x^\ast x \le_A a$
That is:

$\cmod x^2 \le_A a$
where $\cmod x$ is the modulus of $x$.
Let $0 < \alpha < 1/2$. 

Then there exists $u \in A$ such that:

$\norm u \le \norm a^{\frac 1 2 - \alpha}$
and:

$x = u a^\alpha$
where the meaning of $a^\alpha$ in the case of $A$ not unital is to be clarified, being given directly by the continuous functional calculus otherwise.


Proof
First take $A$ unital.

Lemma
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
$\Box$

Take:

$u_n = x \paren {n^{-1} {\mathbf 1}_A + a}^{-1/2} a^{\frac 1 2 - \alpha}$
for each $n \in \N$.
Note that:

$x^\ast x \le_A a^1$
and:

$\paren {a^{\frac 1 2 - \alpha} }^\ast a^{\frac 1 2 - \alpha} = a^{1 - 2 \alpha} \le_A a^{1 - 2 \alpha}$
Hence from the lemma, $\sequence {u_n}_{n \mathop \in \N}$ converges to $u \in A$ satisfying:

$\ds \norm u \le \norm a^{\frac 1 2 \paren {1 + 1 - 2 \alpha - 1} } = \norm a^{\frac 1 2 - \alpha}$
Since $u_n \to u$ as $n \to \infty$, we have:

$u_n a^\alpha \to u a^\alpha$ as $n \to \infty$
from Multiplication on Normed Algebra is Continuous.
From Convergent Sequence in Normed Vector Space has Unique Limit, it suffices to also show:

$u_n a^\alpha \to x$ as $n \to \infty$.
We have:

$u_n a^\alpha = x \paren {n^{-1} {\mathbf 1}_A + a}^{-1/2} a^{1/2}$
from Product of Powers of Positive Element of Unital C*-Algebra.
We then have:














\(\ds \norm {x - u_n a^\alpha}\)

\(=\)







\(\ds \norm {x \paren { {\mathbf 1}_A - \paren {n^{-1} {\mathbf 1}_A + a}^{-1/2} a^{1/2} } }\)




















\(\ds \)

\(=\)







\(\ds \norm {\paren { {\mathbf 1}_A - a^{1/2} \paren {n^{-1} {\mathbf 1}_A + a}^{-1/2} } x^\ast x \paren { {\mathbf 1}_A - \paren {n^{-1} {\mathbf 1}_A + a}^{-1/2} a^{1/2} } }\)





continuous functional calculus commutes, Definition of C*-Algebra



From Product of Element of C*-Algebra with its Star is Positive, we have:

${\mathbf 0}_A \le_A x^\ast x$
From Conjugation in C*-Algebra preserves Positivity: Corollary, we have:

$\paren { {\mathbf 1}_A - a^{1/2} \paren {n^{-1} {\mathbf 1}_A + a}^{-1/2} } x^\ast x \paren { {\mathbf 1}_A - \paren {n^{-1} {\mathbf 1}_A + a}^{-1/2} a^{1/2} } \le_A \paren { {\mathbf 1}_A - a^{1/2} \paren {n^{-1} {\mathbf 1}_A + a}^{-1/2} } a \paren { {\mathbf 1}_A - \paren {n^{-1} {\mathbf 1}_A + a}^{-1/2} a^{1/2} }$
Hence from Norm Preserves Ordering on Positive Elements of C*-Algebra we have:

$\norm {\paren { {\mathbf 1}_A - a^{1/2} \paren {n^{-1} {\mathbf 1}_A + a}^{-1/2} } x^\ast x \paren { {\mathbf 1}_A - \paren {n^{-1} {\mathbf 1}_A + a}^{-1/2} a^{1/2} } } \le \norm {\paren { {\mathbf 1}_A - a^{1/2} \paren {n^{-1} {\mathbf 1}_A + a}^{-1/2} } a \paren { {\mathbf 1}_A - \paren {n^{-1} {\mathbf 1}_A + a}^{-1/2} a^{1/2} } }$
We then have:














\(\ds \norm {\paren { {\mathbf 1}_A - a^{1/2} \paren {n^{-1} {\mathbf 1}_A + a}^{-1/2} } a \paren { {\mathbf 1}_A - \paren {n^{-1} {\mathbf 1}_A + a}^{-1/2} a^{1/2} } }\)

\(=\)







\(\ds \norm {\paren {a^{1/2} - a^{1/2} \paren {n^{-1} {\mathbf 1}_A + a}^{-1/2} a^{1/2} } \paren {a^{1/2} - a^{1/2} \paren {n^{-1} {\mathbf 1}_A + a}^{-1/2} a^{1/2} } }\)




















\(\ds \)

\(=\)







\(\ds \norm {\paren {a^{1/2} - a^{1/2} \paren {n^{-1} {\mathbf 1}_A + a}^{-1/2} a^{1/2} } }^2\)





$(\text C^\ast 5)$ in Definition of C*-Algebra



Define $f_n : \map {\sigma_A} a \to \R$ by:

$\ds \map {f_n} t = \frac t {\paren {n^{-1} + t}^{1/2} }$
for each $t \in \map {\sigma_A} a$.
For $n \ge m$ we have $n^{-1} \le m^{-1}$ and hence:

$\ds \frac 1 {n^{-1} + t} \ge \frac 1 {m^{-1} + t}$
Hence $\map {f_n} t \ge \map {f_m} t$ for $m \ge n$ and $t \in \map {\sigma_A} a$.
So $\sequence {\map {f_n} t}_{n \mathop \in \N}$ is increasing for each $t \in \map {\sigma_A} a$.
Since $n^{-1} + t \to 0$ as $n \to \infty$, we obtain:

$\ds \map {f_n} t = \sqrt t \sqrt {\frac t {n + t} } \to \sqrt t$
as $n \to \infty$ for $t \in \map {\sigma_A} a \setminus \set 0$.
We have $\map {f_n} 0 = 0 = \sqrt 0$ for each $n \in \N$, so we also obtain $\map {f_n} 0 \to 0$ if $0 \in \map {\sigma_A} a$.
Hence by Dini's Theorem we have:

$\norm {f_n - \sqrt t}_\infty \to 0$ as $n \to \infty$
where $\norm {\, \cdot \,}_\infty$ is the supremum norm on $\map \CC {\map {\sigma_A} a}$.
Since the continuous functional calculus is an isometry, we have:

$\norm { {\mathbf 1}_A - \paren {n^{-1} {\mathbf 1}_A + a}^{-1/2} a^{1/2} }^2 = \norm {f_n - \sqrt t}_\infty^2 \to 0$ as $n \to \infty$.
Hence we have:

$u_n a^\alpha \to x$ as $n \to \infty$.
Hence $x = u a^\alpha$ as desired.

Now suppose that $A$ is not unital.
Let $A_+$ be the unitization of $A$. 
Let ${\mathbf 1}_+$ be the identity element of $A_+$.
Let $A_0 = \set {\tuple {a, 0} : a \in A}$.
Define:

$\tuple {x, \lambda}^\ast = \tuple {x^\ast, \overline \lambda}$
for each $\tuple {x, \lambda}$.
From Existence of Unitization of C*-Algebra, there exists an algebra norm $\norm {\, \cdot \,}_\ast$ such that $\struct {A_+, \ast, \norm {\, \cdot \,}_\ast}$ is a unital $\text C^\ast$-algebra and $\norm {\tuple {a, 0} }_\ast = \norm a$ for each $a \in A$.
We give meaning to $a^\lambda$ for $\lambda > 0$. 
We obtain $\tuple {a, 0}^\lambda$ from the continuous functional calculus.
Since $a$ is Hermitian and $0^\lambda = 0$, we have $\tuple {a, 0}^\lambda \in A_0$ from Real-Valued Continuous Function Vanishing at Zero applied to Hermitian Element of Closed Ideal of Unital C*-Algebra is contained in Ideal: Corollary.
Hence there exists $a^\lambda \in A$ such that $\tuple {a, 0}^\lambda = \tuple {a^\lambda, 0}$.
This is the meaning we fix for $a^\lambda$ for $\lambda > 0$.
Take:

$u_n = \tuple {x, 0} \paren {n^{-1} {\mathbf 1}_+ + a}^{-1/2} \tuple {a^{\frac 1 2 - \alpha}, 0}$
for each $n \in \N$.
From the unital case, we have $u_n \to v$ for some $u \in A_+$, satisfying:

$\tuple {x, 0} = v \tuple {a^\alpha, 0}$
and:

$\norm v_\ast \le \norm {\tuple {a, 0} }^{\frac 1 2 - \alpha}_\ast = \norm a^{\frac 1 2 - \alpha}$
From Normed Algebra Embeds into Unitization as Closed Ideal, we have that $A_0$ is a closed ideal of $A_+$.
Since we then have $u_n \in A_0$ for each $n \in \N$, we have $v \in A_0$.
Hence there exists $u \in A$ with $v = \tuple {u, 0}$.
So we have:

$\tuple {x, 0} = \tuple {u, 0} \tuple {a^\alpha, 0} = \tuple {u a^\alpha, 0}$
and:

$\norm {\tuple {u, 0} }_\ast \le \norm a^{\frac 1 2 - \alpha}$
Hence we have:

$x = u a^\alpha$
and:

$\norm u \le \norm a^{\frac 1 2 - \alpha}$
We therefore obtain the conclusion in the non-unital case.
$\blacksquare$


Sources
2000: John B. Conway: A Course in Operator Theory ... (previous) ... (next): Proposition $4.6$




