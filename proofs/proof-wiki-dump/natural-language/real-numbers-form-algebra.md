# 

Source: https://proofwiki.org/wiki/Real_Numbers_form_Algebra



Theorem
The set of real numbers $\R$ forms an algebra over the field of real numbers.
This algebra is:

$(1): \quad$ An associative algebra.
$(2): \quad$ A commutative algebra.
$(3): \quad$ A normed division algebra.
$(4): \quad$ A nicely normed $*$-algebra whose $*$ operator is the identity mapping.
$(5): \quad$ A real $*$-algebra.


Proof
Construction of Algebra
From Real Numbers form Field, $\struct {\R, +, \times}$ is a field.
Let this be expressed as $\struct {\R, +_\R, \times_\R}$ in order to call attention to the precise scope of the operators.
From Real Numbers form Vector Space, we have that $\struct {\R^1, +, \cdot}_\R$ is a vector space, where:

the field is $\struct {\R, +_\R, \times_\R}$
the abelian group is $\struct {\R, +_G}$ where $+_G$ is real addition.

In Real Numbers form Vector Space, it is established that elements of $\struct {\R^1, +, \cdot}_\R$ are in fact just real numbers.
So, let $\times$ be the binary operation on $\struct {\R^1, +, \cdot}_\R$ defined as:

$\forall x, y \in \struct {\R^1, +, \cdot}_\R: x \times y = x \times_\R y$
where $\times_\R$ is real multiplication.


Proof of an Algebra
We need to show that $\times$ as defined on $\struct {\R^1, +, \cdot}_\R$ as:

$\forall x, y \in \struct {\R^1, +, \cdot}_\R = x \times_\R y$
is bilinear.
That is: $\forall a, b \in \R, x, y \in \R^1$:

$\paren {\paren {a \cdot x} + \paren {b \cdot y} } \times z = \paren {a \cdot \paren {x \times z} } + \paren {b \cdot \paren {y \times z} }$
$z \times \paren {\paren {a \cdot x} + \paren {b \cdot y} } = \paren {a \cdot \paren {z \times x} } + \paren {b \cdot \paren {z \times y} }$

So:














\(\ds \paren {\paren {a \cdot x} + \paren {b \cdot y} } \times z\)

\(=\)







\(\ds \paren {\paren {a \times_\R x} + \paren {b \times_\R y} } \times_\R z\)





$\cdot$ and $\times$ are Real Multiplication














\(\ds \)

\(=\)







\(\ds \paren {\paren {a \times_\R x} \times_\R z} + \paren {\paren {b \times_\R y} \times_\R z}\)





Real Multiplication Distributes over Addition














\(\ds \)

\(=\)







\(\ds \paren {a \times_\R \paren {x \times_\R z} } + \paren {b \times_\R \paren {y \times_\R z} }\)





Real Multiplication is Associative














\(\ds \)

\(=\)







\(\ds \paren {a \cdot \paren {x \times z} } + \paren {b \cdot \paren {y \times z} }\)





$\cdot$ and $\times$ are Real Multiplication




Similarly:














\(\ds z \times \paren {\paren {a \cdot x} + \paren {b \cdot y} }\)

\(=\)







\(\ds z \times_\R \paren {\paren {a \times_\R x} + \paren {b \times_\R y} }\)





$\cdot$ and $\times$ are Real Multiplication














\(\ds \)

\(=\)







\(\ds \paren {z \times_\R \paren {a \times_\R x} } + \paren {z \times_\R \paren {b \times_\R y} }\)





Real Multiplication Distributes over Addition














\(\ds \)

\(=\)







\(\ds \paren {\paren {z \times_\R a} \times_\R x} + \paren {\paren {z \times_\R b} \times_\R y}\)





Real Multiplication is Associative














\(\ds \)

\(=\)







\(\ds \paren {\paren {a \times_\R z} \times_\R x} + \paren {\paren {b \times_\R z} \times_\R y}\)





Real Multiplication is Commutative














\(\ds \)

\(=\)







\(\ds \paren {a \times_\R \paren {z \times_\R x} } + \paren {b \times_\R \paren {z \times_\R y} }\)





Real Multiplication is Associative














\(\ds \)

\(=\)







\(\ds \paren {a \cdot \paren {z \times x} } + \paren {b \cdot \paren {z \times y} }\)





$\cdot$ and $\times$ are Real Multiplication



So the set of real numbers forms an algebra $\struct {\R, \times}$.
$\Box$


Proof of Associativity
Elements of $\struct {\R, \times}$ are merely real numbers, and $\times$ is just real multiplication.
Associativity of $\times$ therefore follows directly from Real Multiplication is Associative.
$\Box$


Proof of Commutativity
Elements of $\struct {\R, \times}$ are merely real numbers, and $\times$ is just real multiplication.
Commutativity of $\times$ therefore follows directly from Real Multiplication is Commutative.
$\Box$


Proof of Normed Division Algebra
Elements of $\struct {\R, \times}$ are merely real numbers, and $\times$ is just real multiplication.
So from Real Multiplication Identity is One, $\struct {\R, \times}$ has a unit, which is $1$.
So $\struct {\R, \times}$ is a unitary algebra.

From Inverse for Real Multiplication, every element of $\struct {\R, \times}$ except $0$ has a multiplicative inverse.
So $\struct {\R, \times}$ is a division algebra and hence a unitary division algebra.

We define a norm on $\struct {\R, \times}$ by:

$\forall a \in \R: \norm a = \size a = \sqrt {a^2}$
That is, by the absolute value of $a$.
This is a norm because:

$(1): \quad \norm x = 0 \iff x = \mathbf 0$
$(2): \quad \norm {\lambda x} = \size \lambda \size x = \size \lambda \norm x$
$(3): \quad \norm {x - y} \le \norm {x - z} + \norm {z - y}$ which follows from Real Number Line is Metric Space.
It also follows that:

$\norm {x \times y} = \size {x \times y} = \size x \times \size y = \norm x \times \norm y$
and so $\struct {\R, \times}$ is a normed division algebra.
$\Box$


Proof of Nicely Normed $*$-Algebra
We define the conjugation $*$ by making it the identity mapping on $\R$.
That is:

$\forall a \in \R: a^* = a$

We have that:




\(\text {(1)}: \quad\)









\(\ds \paren {a^*}^*\)

\(=\)







\(\ds a^*\)





Definition of $*$














\(\ds \)

\(=\)







\(\ds a\)





Definition of $*$






\(\text {(2)}: \quad\)









\(\ds \paren {a + b}^*\)

\(=\)







\(\ds a + b\)





Definition of $*$














\(\ds \)

\(=\)







\(\ds b + a\)





Real Addition is Commutative














\(\ds \)

\(=\)







\(\ds b^* + a^*\)









demonstrating that $*$ is indeed a conjugation.

Then we have that:




\(\text {(3)}: \quad\)









\(\ds a + a^*\)

\(=\)







\(\ds a + a\)





Definition of $*$














\(\ds \)

\(\in\)







\(\ds \R\)












\(\text {(4)}: \quad\)









\(\ds a \times a^*\)

\(=\)







\(\ds a \times a\)





Definition of $*$














\(\ds \)

\(=\)







\(\ds a^2\)




















\(\ds \)

\(>\)







\(\ds 0\)





Square of Real Number is Non-Negative



Similarly for $a^* + a$.
Trivially, $a^* + a$ and $a \times a^*$ are both real.
So $\struct {\R, \times}$ is a nicely normed $*$-algebra.
$\Box$


Proof of Real $*$-Algebra
By definition of $*$:

$\forall a \in \R: a^* = a$
Hence, trivially:

$\forall a \in \R: a^* \in \R$
That is, $\struct {\R, \times}$ is a real $*$-algebra.
$\blacksquare$





