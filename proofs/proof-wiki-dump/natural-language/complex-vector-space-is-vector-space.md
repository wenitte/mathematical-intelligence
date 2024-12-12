# 

Source: https://proofwiki.org/wiki/Complex_Vector_Space_is_Vector_Space



Theorem
Let $\C$ denote the set of complex numbers.

Then the complex vector space $\C^n$ is a vector space.


Proof
Construction of Complex Vector Space
From the definition, a vector space is a unitary module whose scalar ring is a field.

In order to call attention to the precise scope of the operators, let complex addition and complex multiplication be expressed as $+_\C$ and $\times_\C$ respectively.
Then we can express the field of complex numbers as $\struct {\C, +_\C, \times_\C}$.

From Complex Numbers under Addition form Group, $\struct {\C, +}$ is a group.
Again, in order to call attention to the precise scope of the operator, let complex addition be expressed on $\struct {\C, +}$ as $+_G$.
That is, the group under consideration is $\struct {\C, +_G}$.

Consider the cartesian product:

$\ds \C^n = \prod_{i \mathop = 1}^n \struct {\C, +_G} = \underbrace {\struct {\C, +_G} \times \cdots \times \struct {\C, +_G} }_{n \text{ copies} }$

Let:

$\mathbf a = \tuple {a_1, a_2, \ldots, a_n}$
$\mathbf b = \tuple {b_1, b_2, \ldots, b_n}$
be arbitrary elements of $\C^n$.
Let $\lambda$ be an arbitrary element of $\C$.
Let $+$ be the binary operation defined on $\C^n$ as:

$\mathbf a + \mathbf b = \tuple {a_1 +_G b_1, a_2 +_G b_2, \ldots, a_n +_G b_n}$
Also let $\cdot$ be the binary operation defined on $\C \times \C^n$ as:

$\lambda \cdot \mathbf a = \tuple {\lambda \times_\C a_1, \lambda \times_\C a_2, \ldots, \lambda \times_\C a_n}$
In this context, $\lambda \times_\C a_j$ is defined as complex multiplication, as is appropriate (both $\lambda$ and $a_j$ are complex numbers).

With this set of definitions, the structure $\struct {\C^n, +, \cdot}$ is a vector space, as is shown in Proof of Complex Vector Space below.


Proof of Complex Vector Space
In order to show that $\struct {\C^n, +, \cdot}$ is a vector space, we need to show that:
$\forall \mathbf x, \mathbf y \in \C^n, \forall \lambda, \mu \in \C$:

$(1): \quad \lambda \cdot \paren {\mathbf x + \mathbf y} = \paren {\lambda \cdot \mathbf x} + \paren {\lambda \cdot \mathbf y}$
$(2): \quad \paren {\lambda +_\C \mu} \cdot x = \paren {\lambda \cdot \mathbf x} + \paren {\mu \cdot \mathbf x}$
$(3): \quad \paren {\lambda \times_\C \mu} \cdot x = \lambda \cdot \paren {\mu \cdot \mathbf x}$
$(4): \quad \forall \mathbf x \in \C^n: 1 \cdot \mathbf x = \mathbf x$.
where $1$ in this context means $1 + 0 i$, as derived in Complex Multiplication Identity is One.

From External Direct Product of Groups is Group, we have that $\struct {\C^n, +}$ is a group in its own right.

Let:

$\mathbf x = \tuple {x_1, x_2, \ldots, x_n}$
$\mathbf y = \tuple {y_1, y_2, \ldots, y_n}$

Checking the criteria in turn:
$(1): \quad \lambda \cdot \paren {\mathbf x + \mathbf y} = \paren {\lambda \cdot \mathbf x} + \paren {\lambda \cdot \mathbf y}$:














\(\ds \lambda \cdot \paren {\mathbf x + \mathbf y}\)

\(=\)







\(\ds \tuple {\lambda \times_\C \paren {x_1 +_G y_1}, \lambda \times_\C \paren {x_2 +_G y_2}, \ldots, \lambda \times_\C \paren {x_n +_G y_n} }\)





Definition of $\cdot$ over $\C \times \C^n$














\(\ds \)

\(=\)







\(\ds \tuple {\paren {\lambda \times_\C x_1 +_G \lambda \times_\C y_1}, \paren {\lambda \times_\C x_2 +_G \lambda \times_\C y_2}, \ldots, \paren {\lambda \times_\C x_n +_G \lambda \times_\C y_n} }\)





$\times_\C$ distributes over $+_G$














\(\ds \)

\(=\)







\(\ds \tuple {\lambda \times_\C x_1, \lambda \times_\C x_2, \ldots, \lambda \times_\C x_n} + \tuple {\lambda \times_\C y_1, \lambda \times_\C y_2, \ldots, \lambda \times_\C y_n}\)





Definition of $+$ over $\C^n$














\(\ds \)

\(=\)







\(\ds \lambda \cdot \tuple {x_1, x_2, \ldots, x_n} + \lambda \cdot \tuple {y_1, y_2, \ldots, y_n}\)





Definition of $\cdot$ over $\C \times \C^n$














\(\ds \)

\(=\)







\(\ds \lambda \cdot \mathbf x + \lambda \cdot \mathbf y\)





Definition of $\mathbf x$ and $\mathbf y$



So $(1)$ has been shown to hold.

$(2): \quad \paren {\lambda +_\C \mu} \cdot x = \paren {\lambda \cdot \mathbf x} + \paren {\mu \cdot \mathbf x}$:














\(\ds \paren {\lambda +_\C \mu} \cdot x\)

\(=\)







\(\ds \tuple {\paren {\lambda +_\C \mu} \times_\C x_1, \paren {\lambda +_\C \mu} \times_\C x_2, \ldots, \paren {\lambda +_\C \mu} \times_\C x_n}\)





Definition of $\cdot$ over $\C \times \C^n$














\(\ds \)

\(=\)







\(\ds \tuple {\paren {\lambda \times_\C x_1 +_G \mu \times_\C x_1}, \paren {\lambda \times_\C x_2 +_G \mu \times_\C x_2}, \ldots, \paren {\lambda \times_\C x_n +_G \mu \times_\C x_n} }\)





$\times_\C$ distributes over $+_\C$, and $+_\C$ is the same operation as $+_G$














\(\ds \)

\(=\)







\(\ds \tuple {\lambda \times_\C x_1, \lambda \times_\C x_2, \ldots, \lambda \times_\C x_n} + \tuple {\mu \times_\C x_1, \mu \times_\C x_2, \ldots, \mu \times_\C x_n}\)





Definition of $+$ over $\C^n$














\(\ds \)

\(=\)







\(\ds \lambda \cdot \tuple {x_1, x_2, \ldots, x_n} + \mu \cdot \tuple {x_1, x_2, \ldots, x_n}\)





Definition of $\cdot$ over $\C \times \C^n$














\(\ds \)

\(=\)







\(\ds \lambda \cdot \mathbf x + \mu \cdot \mathbf x\)





Definition of $\mathbf x$ and $\mathbf y$



So $(2)$ has been shown to hold.

$(3): \quad \paren {\lambda \times_\C \mu} \cdot x = \lambda \cdot \paren {\mu \cdot \mathbf x}$:














\(\ds \paren {\lambda \times_\C \mu} \cdot x\)

\(=\)







\(\ds \tuple {\paren {\lambda \times_\C \mu} \times_\C x_1, \paren {\lambda \times_\C \mu} \times_\C x_2, \ldots, \paren {\lambda \times_\C \mu} \times_\C x_n}\)





Definition of $\cdot$ over $\C \times \C^n$














\(\ds \)

\(=\)







\(\ds \tuple {\lambda \times_\C \paren {\mu \times_\C x_1}, \lambda \times_\C \paren {\mu \times_\C x_2}, \ldots, \lambda \times_\C \paren {\mu \times_\C x_n} }\)





Complex Multiplication is Associative














\(\ds \)

\(=\)







\(\ds \lambda \cdot \tuple {\mu \times_\C x_1, \mu \times_\C x_2, \ldots, \mu \times_\C x_n}\)





Definition of $\cdot$ over $\C \times \C^n$














\(\ds \)

\(=\)







\(\ds \lambda \cdot \paren {\mu \cdot \tuple {x_1, x_2, \ldots, x_n} }\)





Definition of $\cdot$ over $\C \times \C^n$














\(\ds \)

\(=\)







\(\ds \lambda \cdot \paren {\mu \cdot \mathbf x}\)





Definition of $\mathbf x$



So $(3)$ has been shown to hold.

$(4): \quad \forall \mathbf x \in \C^n: 1 \cdot \mathbf x = \mathbf x$:














\(\ds 1 \cdot \mathbf x = \mathbf x\)

\(=\)







\(\ds \tuple {1 \times_\C x_1, 1 \times_\C x_2, \ldots, 1 \times_\C x_n}\)





Definition of $\cdot$ over $\C \times \C^n$














\(\ds \)

\(=\)







\(\ds \tuple {x_1, x_2, \ldots, x_n}\)





Complex Multiplication Identity is One














\(\ds \)

\(=\)







\(\ds \mathbf x\)





Definition of $\mathbf x$



So $(4)$ has been shown to hold.

So the $\C$-module $\C^n$ is a vector space, as we were to prove.
$\blacksquare$


Also see
It follows directly, by setting $n = 1$, that the $\C$-module $\C$ itself can also be regarded as a vector space.
This is expanded upon in Complex Numbers form Vector Space over Themselves.


Sources
1998: Yoav Peleg, Reuven Pnini and Elyahu Zaarur: Quantum Mechanics ... (previous) ... (next): Chapter $2$: Mathematical Background: $2.2$ Vector Spaces over $C$




