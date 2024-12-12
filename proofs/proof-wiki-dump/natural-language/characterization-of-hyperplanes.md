# 

Source: https://proofwiki.org/wiki/Characterization_of_Hyperplanes



Theorem
Let $\Bbb F$ be a field.
Let $X$ be a vector space over $\Bbb F$.
Let $U$ be a subspace of $X$. 

The following statements are equivalent:

$(1): \quad$ $U$ is a hyperplane
$(2): \quad$ $U \ne X$, and for any $x \in X \setminus U$ we have $\map \span {U \cup \set x} = X$
$(3): \quad$ there exists a non-zero linear functional $\phi : X \to \Bbb F$ such that $U = \map \ker \phi$.


Proof
$(1)$ implies $(2)$
Suppose that: 

$U$ is a hyperplane.
Let $x \in X \setminus U$. 
Then from Linear Span is Linear Subspace, we have: 

$\map \span {U \cup \set x}$ is a subspace of $X$.
We have that: 

$U \subseteq \map \span {U \cup \set x}$
So either: 

$U = \map \span {U \cup \set x}$
or: 

$X = \map \span {U \cup \set x}$
Since $x \in \map \span {U \cup \set x}$ but $x \not \in U$, we must have: 

$X = \map \span {U \cup \set x}$
$\Box$

$(2)$ implies $(1)$
Suppose that $U \ne X$ and:

for any $x \in X \setminus U$ we have $\map \span {U \cup \set x} = X$.
Now, let $Z$ be a subspace of $X$ such that: 

$U \subseteq Z \subseteq X$
Then either: 

$U = Z$
in which case we are done, or:

there exists $x \in X \setminus U$
Suppose that:

there exists $x \in X \setminus U$
then we have: 

$\map \span {U \cup \set x} = X$
We can also write any $z \in \map \span {U \cup \set x}$ in the form: 

$z = u + \lambda x$
for $u \in U$ and $\lambda \in \Bbb F$ from the definition of linear span.
Since $Z$ is a linear subspace and $U \subseteq Z$, we have: 

$u \in Z$
and:

$\lambda x \in Z$
so:

$u + \lambda x \in Z$
We can therefore see that: 

$z \in Z$
so that: 

$\map \span {U \cup \set x} \subseteq Z$
So we have: 

$X \subseteq Z$
as well as:

$Z \subseteq X$
giving:

$X = Z$
Since $Z$ was arbitrary, we have that $U$ is a hyperplane.
$\Box$

$(2)$ implies $(3)$
Suppose that: 

$U \ne X$, and for any $x \in X \setminus U$ we have $\map \span {U \cup \set x} = X$
then:

$U$ is a hyperplane.
Let $x \in X \setminus U$ and consider: 

$\map \span {U \cup \set x}$
From hypothesis, we have: 

$\map \span {U \cup \set x} = X$
We prove that any: 

$v \in \map \span {U \cup \set x} = X$
can be uniquely written in the form $v = u + \lambda x$ for $u \in U$ and $\lambda \in \Bbb F$. 
Suppose that: 

$v = u + \lambda x = u' + \lambda' x$
Then: 

$\paren {u - u'} + \paren {\lambda - \lambda'} x = 0$
Suppose that $\lambda \ne \lambda'$, we can write: 

$\ds x = \frac 1 {\lambda' - \lambda} \paren {u - u'}$
So we must have $\lambda = \lambda'$, and hence $u = u'$. 
Since $U$ is a linear subspace, we have $x \in U$, a contradiction. 
So, we can define a map $\phi : X \to \Bbb F$ by: 

$\map \phi {u + \lambda x} = \lambda$
Clearly $\phi$ is non-zero, since: 

$\map \phi x = 1$
We show that $\phi$ is linear and $U = \map \ker \phi$. 
Let $v_1, v_2 \in \map \span {U \cup \set x}$ and $\alpha, \beta \in \Bbb F$ and write: 

$v_1 = u_1 + \lambda_1 x$
and:

$v_2 = u_2 + \lambda_2 x$
Then: 














\(\ds \map \phi {\alpha v_1 + \beta v_2}\)

\(=\)







\(\ds \map \phi {\paren {\alpha u_1 + \beta u_2} + \paren {\alpha \lambda_1 + \beta \lambda_2} x}\)




















\(\ds \)

\(=\)







\(\ds \alpha \lambda_1 + \beta \lambda_2\)




















\(\ds \)

\(=\)







\(\ds \alpha \map \phi {u_1 + \lambda_1 x} + \beta \map \phi {u_2 + \lambda_2 x}\)




















\(\ds \)

\(=\)







\(\ds \alpha \map \phi {v_1} + \beta \map \phi {v_2}\)









so $\phi$ is linear.
We then have: 

$\map \phi x = 0$
if and only if the unique representation of $x$ in the form: 

$x = u + \lambda x$
for $u \in U$ and $\lambda \in \Bbb F$ has $\lambda = 0$.
That is: 

$\map \phi x = 0$
if and only if:

$x \in U$
So from the definition of kernel, we have: 

$U = \map \ker \phi$
$\Box$

$(3)$ implies $(2)$
Suppose that there exists a non-zero linear functional $\phi : U \to \Bbb F$ such that: 

$U = \map \ker \phi$
Since $\phi$ is non-zero, we have: 

$X \ne \map \ker \phi$
Let $x \not \in U$.
We aim to show that: 

$\map \span {U \cup \set x} = X$
From the definition of kernel, we have: 

$\map \phi x \ne 0$
Now, let: 

$z \in X \setminus U$
and let: 

$\ds y = z - \frac {\map \phi z} {\map \phi x} x$
We then have: 














\(\ds \map \phi y\)

\(=\)







\(\ds \map \phi z - \map \phi {\frac {\map \phi z} {\map \phi x} x}\)





Definition of Linear Functional














\(\ds \)

\(=\)







\(\ds \map \phi z - \frac {\map \phi z} {\map \phi x} \map \phi x\)





Definition of Linear Functional














\(\ds \)

\(=\)







\(\ds \map \phi z - \map \phi z\)




















\(\ds \)

\(=\)







\(\ds 0\)









so:

$y \in U$
Writing: 

$\ds z = y + \paren {\frac {\map \phi z} {\map \phi x} } x$
we see that: 

$z \in \map \span {U \cup \set x}$
So, we have: 

$X \setminus U \subseteq \map \span {U \cup \set x}$
So:

$\map \span {U \cup \set x} = X$
$\blacksquare$


Sources
2020: James C. Robinson: Introduction to Functional Analysis ... (previous) ... (next) $21.3$: Linear Functionals and Hyperplanes




