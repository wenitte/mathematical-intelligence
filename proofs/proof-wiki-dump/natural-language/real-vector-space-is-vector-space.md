# 

Source: https://proofwiki.org/wiki/Real_Vector_Space_is_Vector_Space



Theorem
Let $\R$ be the set of real numbers.

Then the real vector space $\R^n$ is a vector space.


Proof
Construction of Real Vector Space
From the definition, a vector space is a unitary module whose scalar ring is a field.

In order to call attention to the precise scope of the operators, let real addition and real multiplication be expressed as $+_\R$ and $\times_\R$ respectively.
Then we can express the field of real numbers as $\struct {\R, +_\R, \times_\R}$.

From Real Numbers under Addition form Group, $\struct {\R, +}$ is a group.
Again, in order to call attention to the precise scope of the operator, let real addition be expressed on $\struct {\R, +}$ as $+_G$.
That is, the group under consideration is $\struct {\R, +_G}$.

Consider the cartesian product:

$\ds \R^n = \prod_{i \mathop = 1}^n \struct {\R, +_G} = \underbrace {\struct {\R, +_G} \times \cdots \times \struct {\R, +_G} }_{n \text{ copies} }$

Let:

$\mathbf a = \tuple {a_1, a_2, \ldots, a_n}$
$\mathbf b = \tuple {b_1, b_2, \ldots, b_n}$
be arbitrary elements of $\R^n$.
Let $\lambda$ be an arbitrary element of $\R$.
Let $+$ be the binary operation defined on $\R^n$ as:

$\mathbf a + \mathbf b = \tuple {a_1 +_G b_1, a_2 +_G b_2, \ldots, a_n +_G b_n}$
Also let $\cdot$ be the binary operation defined on $\R \times \R^n$ as:

$\lambda \cdot \mathbf a = \tuple {\lambda \times_\R a_1, \lambda \times_\R a_2, \ldots, \lambda \times_\R a_n}$
In this context, $\lambda \times_\R a_j$ is defined as real multiplication, as is appropriate (both $\lambda$ and $a_j$ are real numbers).

With this set of definitions, the structure $\struct {\R^n, +, \cdot}$ is a vector space, as is shown in Proof of Real Vector Space below.


Proof of Real Vector Space
In order to show that $\struct {\R^n, +, \cdot}$ is a vector space, we need to show that:
$\forall \mathbf x, \mathbf y \in \R^n, \forall \lambda, \mu \in \R$:

$(1): \quad \lambda \cdot \paren {\mathbf x + \mathbf y} = \paren {\lambda \cdot \mathbf x} + \paren {\lambda \cdot \mathbf y}$
$(2): \quad \paren {\lambda +_\R \mu} \cdot x = \paren {\lambda \cdot \mathbf x} + \paren {\mu \cdot \mathbf x}$
$(3): \quad \paren {\lambda \times_\R \mu} \cdot x = \lambda \cdot \paren {\mu \cdot \mathbf x}$
$(4): \quad \forall \mathbf x \in \R^n: 1 \cdot \mathbf x = \mathbf x$.
where $1$ in this context means the real number one.

From External Direct Product of Groups is Group, we have that $\struct {\R^n, +}$ is a group in its own right.

Let:

$\mathbf x = \tuple {x_1, x_2, \ldots, x_n}$
$\mathbf y = \tuple {y_1, y_2, \ldots, y_n}$

Checking the criteria in turn:
$(1): \quad \lambda \cdot \paren {\mathbf x + \mathbf y} = \paren {\lambda \cdot \mathbf x} + \paren {\lambda \cdot \mathbf y}$:














\(\ds \lambda \cdot \paren {\mathbf x + \mathbf y}\)

\(=\)







\(\ds \tuple {\lambda \times_\R \paren {x_1 +_G y_1}, \lambda \times_\R \paren {x_2 +_G y_2}, \ldots, \lambda \times_\R \paren {x_n +_G y_n} }\)





Definition of $\cdot$ over $\R \times \R^n$














\(\ds \)

\(=\)







\(\ds \tuple {\paren {\lambda \times_\R x_1 +_G \lambda \times_\R y_1}, \paren {\lambda \times_\R x_2 +_G \lambda \times_\R y_2}, \ldots, \paren {\lambda \times_\R x_n +_G \lambda \times_\R y_n} }\)





$\times_\R$ distributes over $+_G$














\(\ds \)

\(=\)







\(\ds \tuple {\lambda \times_\R x_1, \lambda \times_\R x_2, \ldots, \lambda \times_\R x_n} + \tuple {\lambda \times_\R y_1, \lambda \times_\R y_2, \ldots, \lambda \times_\R y_n}\)





Definition of $+$ over $\R^n$














\(\ds \)

\(=\)







\(\ds \lambda \cdot \tuple {x_1, x_2, \ldots, x_n} + \lambda \cdot \tuple {y_1, y_2, \ldots, y_n}\)





Definition of $\cdot$ over $\R \times \R^n$














\(\ds \)

\(=\)







\(\ds \lambda \cdot \mathbf x + \lambda \cdot \mathbf y\)





Definition of $\mathbf x$ and $\mathbf y$



So $(1)$ has been shown to hold.

$(2): \quad \paren {\lambda +_\R \mu} \cdot x = \paren {\lambda \cdot \mathbf x} + \paren {\mu \cdot \mathbf x}$:














\(\ds \paren {\lambda +_\R \mu} \cdot x\)

\(=\)







\(\ds \tuple {\paren {\lambda +_\R \mu} \times_\R x_1, \paren {\lambda +_\R \mu} \times_\R x_2, \ldots, \paren {\lambda +_\R \mu} \times_\R x_n}\)





Definition of $\cdot$ over $\R \times \R^n$














\(\ds \)

\(=\)







\(\ds \tuple {\paren {\lambda \times_\R x_1 +_G \mu \times_\R x_1}, \paren {\lambda \times_\R x_2 +_G \mu \times_\R x_2}, \ldots, \paren {\lambda \times_\R x_n +_G \mu \times_\R x_n} }\)





$\times_\R$ distributes over $+_\R$, and $+_\R$ is the same operation as $+_G$














\(\ds \)

\(=\)







\(\ds \tuple {\lambda \times_\R x_1, \lambda \times_\R x_2, \ldots, \lambda \times_\R x_n} + \tuple {\mu \times_\R x_1, \mu \times_\R x_2, \ldots, \mu \times_\R x_n}\)





Definition of $+$ over $\R^n$














\(\ds \)

\(=\)







\(\ds \lambda \cdot \tuple {x_1, x_2, \ldots, x_n} + \mu \cdot \tuple {x_1, x_2, \ldots, x_n}\)





Definition of $\cdot$ over $\R \times \R^n$














\(\ds \)

\(=\)







\(\ds \lambda \cdot \mathbf x + \mu \cdot \mathbf x\)





Definition of $\mathbf x$ and $\mathbf y$



So $(2)$ has been shown to hold.

$(3): \quad \paren {\lambda \times_\R \mu} \cdot x = \lambda \cdot \paren {\mu \cdot \mathbf x}$:














\(\ds \paren {\lambda \times_\R \mu} \cdot x\)

\(=\)







\(\ds \tuple {\paren {\lambda \times_\R \mu} \times_\R x_1, \paren {\lambda \times_\R \mu} \times_\R x_2, \ldots, \paren {\lambda \times_\R \mu} \times_\R x_n}\)





Definition of $\cdot$ over $\R \times \R^n$














\(\ds \)

\(=\)







\(\ds \tuple {\lambda \times_\R \paren {\mu \times_\R x_1}, \lambda \times_\R \paren {\mu \times_\R x_2}, \ldots, \lambda \times_\R \paren {\mu \times_\R x_n} }\)





Real Multiplication is Associative














\(\ds \)

\(=\)







\(\ds \lambda \cdot \tuple {\mu \times_\R x_1, \mu \times_\R x_2, \ldots, \mu \times_\R x_n}\)





Definition of $\cdot$ over $\R \times \R^n$














\(\ds \)

\(=\)







\(\ds \lambda \cdot \paren {\mu \cdot \tuple {x_1, x_2, \ldots, x_n} }\)





Definition of $\cdot$ over $\R \times \R^n$














\(\ds \)

\(=\)







\(\ds \lambda \cdot \paren {\mu \cdot \mathbf x}\)





Definition of $\mathbf x$



So $(3)$ has been shown to hold.

$(4): \quad \forall \mathbf x \in \R^n: 1 \cdot \mathbf x = \mathbf x$:














\(\ds 1 \cdot \mathbf x = \mathbf x\)

\(=\)







\(\ds \tuple {1 \times_\R x_1, 1 \times_\R x_2, \ldots, 1 \times_\R x_n}\)





Definition of $\cdot$ over $\R \times \R^n$














\(\ds \)

\(=\)







\(\ds \tuple {x_1, x_2, \ldots, x_n}\)





Real Multiplication Identity is One














\(\ds \)

\(=\)







\(\ds \mathbf x\)





Definition of $\mathbf x$



So $(4)$ has been shown to hold.

So the $\R$-module $\R^n$ is a vector space, as we were to prove.
$\blacksquare$


Warning
Notice that the factors of $\R^n$ are considered to be elements of a group, where $+_\R$ is the only operator defined.
That is, in this particular context, $\times_G$ is not defined and can not be used.
This stands to reason, as in the context of a vector space, there is no unique and canonical definition for multiplication of vectors.
Several are defined (for example, dot product and cross product), but these are not canonical.


Also see
It follows directly, by setting $n = 1$, that the $\R$-module $\R$ itself can also be regarded as a vector space.
This is expanded upon in Real Numbers form Vector Space.


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {V}$: Vector Spaces: $\S 26$. Vector Spaces and Modules
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): Chapter $1.1$: Normed and Banach spaces. Vector Spaces




