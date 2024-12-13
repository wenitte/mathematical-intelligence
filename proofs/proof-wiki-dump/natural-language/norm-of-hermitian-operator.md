# 

Source: https://proofwiki.org/wiki/Norm_of_Hermitian_Operator



Theorem
Let $\mathbb F \in \set {\R, \C}$.
Let $\struct {\HH, \innerprod \cdot \cdot_\HH}$ be a Hilbert space over $\mathbb F$. 
Let $A : \HH \to \HH$ be a bounded Hermitian operator.
Let $\norm \cdot_\HH$ be the inner product norm on $\HH$. 

Then the norm of $A$ satisfies:

$\norm A = \sup \set {\size {\innerprod {A h} h_\HH}: h \in \HH, \norm h_\HH = 1}$


Corollary
Suppose that:

$\forall h \in \HH: \innerprod {A h} h_\HH = 0$
Then $A$ is the zero operator $\mathbf 0$.


Proof
Let:

$M = \sup \set {\size {\innerprod {A h} h_\HH}: h \in \HH, \norm h_\HH = 1}$
To show that $M = \norm A$ we first show that: 

$M \le \norm A$
We will then show that: 

$\norm A \le M$

Let $x \in \HH$ be such that: 

$\norm x_\HH = 1$.
Then we have: 














\(\ds \size {\innerprod {A x} x_\HH}\)

\(\le\)







\(\ds \norm {A x}_\HH \norm x_\HH\)





Cauchy-Bunyakovsky-Schwarz Inequality for Inner Product Spaces














\(\ds \)

\(\le\)







\(\ds \norm A \norm x_\HH^2\)





Fundamental Property of Norm on Bounded Linear Transformation














\(\ds \)

\(=\)







\(\ds \norm A\)





since $\norm x_\HH = 1$



So taking the supremum over:

$\set {x \in \HH : \norm x_\HH = 1}$
we have: 

$M \le \norm A$

We will now show that: 

$\norm A \le M$
Let $x, y \in \HH$. 
Since $A$ is linear operator, we have: 

$\innerprod {\map A {u + v} } {u + v}_\HH = \innerprod {A u + A v} {u + v}_\HH$
and:

$\innerprod {\map A {u - v} } {u - v}_\HH = \innerprod {A u - A v} {u - v}_\HH$
Using Inner Product is Sesquilinear, we have: 

$\innerprod {\map A {u + v} } {u + v}_\HH = \innerprod {A u} u_\HH + \innerprod {A u} v_\HH + \innerprod {A v} u_\HH + \innerprod {A v} v_\HH$
and:

$\innerprod {\map A {u - v} } {u - v}_\HH = \innerprod {A u} u_\HH - \innerprod {A u} v_\HH - \innerprod {A v} u_\HH + \innerprod {A v} v_\HH$
We therefore obtain: 

$\innerprod {\map A {u + v} } {u + v}_\HH - \innerprod {\map A {u - v} } {u - v}_\HH = 2 \innerprod {A u} v_\HH + 2 \innerprod {A v} u_\HH$
We have: 














\(\ds 2 \innerprod {A u} v_\HH + 2 \innerprod {A v} u_\HH\)

\(=\)







\(\ds 2 \paren {\innerprod {A u} v_\HH + \innerprod {A v} u_\HH}\)




















\(\ds \)

\(=\)







\(\ds 2 \paren {\innerprod {A u} v_\HH + \innerprod v {A u}_\HH }\)





Definition of Hermitian Operator














\(\ds \)

\(=\)







\(\ds 2 \paren {\innerprod {A u} v_\HH + \overline {\innerprod {A u} v_\HH} }\)





using conjugate symmetry of the inner product














\(\ds \)

\(=\)







\(\ds 4 \map \Re {\innerprod {A u} v_\HH}\)





Sum of Complex Number with Conjugate



so we have: 

$4 \map \Re {\innerprod {A u} v_\HH} = \innerprod {\map A {u + v} } {u + v}_\HH - \innerprod {\map A {u - v} } {u - v}_\HH$
Recall that for each $h \in \HH$ with $\norm h_\HH = 1$, we have: 

$\size {\innerprod {A h} h_\HH} \le M$
by the definition of supremum.
From Operator is Hermitian iff Numerical Range is Real, we have: 

$\innerprod {A h} h_\HH$ is a real number.
So, from the definition of the absolute value, we have:

$\innerprod {A h} h_\HH \le M$
We can therefore see that: 

$\innerprod {A \dfrac h {\norm h_\HH} } {\dfrac h {\norm h_\HH} }_\HH \le M$
for each $h \in \HH \setminus \set 0$. 
So from Inner Product is Sesquilinear, we obtain: 

$\innerprod {A h} h_\HH \le M \norm h_\HH^2$
Note that if $h = 0$, from Inner Product with Zero Vector we have: 

$\innerprod {A h} h_\HH = 0$
and: 

$\norm h_\HH = 0$
so the inequality also holds for $h = 0$, and we obtain: 

$\innerprod {A h} h_\HH \le M \norm h_\HH^2$
for all $h \in \HH$. 
So, we obtain: 














\(\ds 4 \map \Re {\innerprod {A u} v_\HH}\)

\(=\)







\(\ds \innerprod {\map A {u + v} } {u + v}_\HH - \innerprod {\map A {u - v} } {u - v}_\HH\)




















\(\ds \)

\(\le\)







\(\ds M \norm {u + v}_\HH^2 - M \norm {u - v}_\HH^2\)





applying the above inequality with $h = u + v$ and $h = u - v$














\(\ds \)

\(\le\)







\(\ds M \paren {\norm {u + v}_\HH^2 + \norm {u - v}_\HH^2}\)





Definition of Norm on Vector Space














\(\ds \)

\(=\)







\(\ds 2 M \paren {\norm u_\HH^2 + \norm v_\HH^2}\)





Parallelogram Law (Inner Product Space)




Now, take $u \in \HH$ with $A u \ne 0$. 
Let: 

$v = \dfrac {\norm u_\HH} {\norm {A u}_\HH} A u$
Then, we have: 














\(\ds \norm v_\HH\)

\(=\)







\(\ds \norm {\frac {\norm u_\HH} {\norm {A u}_\HH} A u}_\HH\)




















\(\ds \)

\(=\)







\(\ds \frac {\norm u_\HH} {\norm {A u}_\HH} \norm {A u}_\HH\)





using positive homogeneity of the norm














\(\ds \)

\(=\)







\(\ds \norm u_\HH\)









and:














\(\ds \innerprod {A u} v_\HH\)

\(=\)







\(\ds \innerprod {A u} {\frac {\norm u_\HH} {\norm {A u}_\HH} A u}_\HH\)




















\(\ds \)

\(=\)







\(\ds \frac {\norm u_\HH} {\norm {A u}_\HH} \innerprod {A u} {A u}_\HH\)





Inner Product is Sesquilinear














\(\ds \)

\(=\)







\(\ds \frac {\norm u_\HH} {\norm {A u}_\HH} \norm {A u}_\HH^2\)





Definition of Inner Product Norm














\(\ds \)

\(=\)







\(\ds \norm u_\HH \norm {A u}_\HH\)









Since from the definition of a norm:

$\norm u_\HH \norm {A u}_\HH$ is a real number
we have that: 

$\innerprod {A u} v$ is a real number.
So we have: 

$4 \map \Re {\innerprod {A u} v} = 4 \norm u_\HH \norm {A u}_\HH$
giving:

$4 \norm u_\HH \norm {A u}_\HH \le 2 M \paren {\norm u_\HH^2 + \norm v_\HH^2}$
Since $\norm u = \norm v$, we have:

$4 \norm u_\HH \norm {A u}_\HH \le 4 M \norm u_\HH^2$
That is: 

$\norm u_\HH \norm {A u}_\HH \le M \norm u_\HH^2$
for all $u \in \HH$ with $A u \ne 0$. 
Note that we have: 

$M \norm u_\HH^2 \ge 0$
so the inequality also holds for $u \in \HH$ with $A u = 0$. 
So, for $u \in \HH \setminus \set 0$, we have: 

$\norm {A u}_\HH \le M \norm u_\HH$
Since $\map A 0 = 0$, this inequality also holds for $u = 0$.
So:

$M \in \set {c > 0: \forall h \in \HH: \norm {A h}_\HH \le c \norm h_\HH}$
From definition $4$ of the operator norm, we have: 

$\norm A = \inf \set {c > 0: \forall h \in \HH: \norm {A h}_\HH \le c \norm h_\HH}$
so, from the definition of infimum we have: 

$\norm A \le M$

Since: 

$M \le \norm A$
and:

$\norm A \le M$
we have: 

$\norm A = M = \sup \set {\size {\innerprod {A h} h_\HH}: h \in \HH, \norm h_\HH = 1}$
$\blacksquare$


Sources
1990: John B. Conway: A Course in Functional Analysis (2nd ed.) ... (previous) ... (next) $\text {II}.2.13$
2020: James C. Robinson: Introduction to Functional Analysis ... (previous) ... (next) $16.1$: Eigenvalues of Self-Adjoint Operators




