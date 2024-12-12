# 

Source: https://proofwiki.org/wiki/Complex_Numbers_form_Algebra



Theorem
The set of complex numbers $\C$ forms an algebra over the field of real numbers.
This algebra is:

$(1): \quad$ An associative algebra.
$(2): \quad$ A commutative algebra.
$(3): \quad$ A normed division algebra.
$(4): \quad$ A nicely normed $*$-algebra.
However, $\C$ is not a real $*$-algebra.


Proof
The complex numbers $\C$ are formed by the Cayley-Dickson Construction from the real numbers $\R$.
From Real Numbers form Algebra, we have that $\R$ forms:

$(1): \quad$ An associative algebra.
$(2): \quad$ A commutative algebra.
$(3): \quad$ A normed division algebra.
$(4): \quad$ A nicely normed $*$-algebra whose $*$ operator is the identity mapping.
$(5): \quad$ A real $*$-algebra.
From Cayley-Dickson Construction forms Star-Algebra, $\C$ is a $*$-algebra.
From Cayley-Dickson Construction from Nicely Normed Algebra is Nicely Normed, $\C$ is a nicely normed $*$-algebra.
From Cayley-Dickson Construction from Real Star-Algebra is Commutative, $\C$ is a commutative algebra.
From Cayley-Dickson Construction from Commutative Associative Algebra is Associative, $\C$ is an associative algebra.

However, from Algebra from Cayley-Dickson Construction is not Real Star-Algebra, $\C$ is not a real $*$-algebra.


Proof of Normed Division Algebra
Consider the element $\tuple {1, 0}$ of $\R^2$.
We have:










\(\ds \forall x_1, x_2 \in \R: \, \)



\(\ds \)

\(\)







\(\ds \tuple {x_1, x_2} \times \tuple {1, 0}\)




















\(\ds \)

\(=\)







\(\ds \tuple {x_1 \times 1 - 0 \times x_2, x_1 \times 0 + x_2 \times 1}\)




















\(\ds \)

\(=\)







\(\ds \tuple {x_1, x_2}\)









As $\times$ has already been shown to be commutative, it follows that:

$\tuple {1, 0} \times \tuple {x_1, x_2} = \tuple {x_1, x_2}$.
So $\tuple {1, 0} \in \R^2$ functions as a unit.
That is, $\struct {\R^2, \times}$ is a unitary algebra.

We define a norm on $\struct {\R^2, \times}$ by:

$\forall \mathbf a = \tuple {a_1, a_2} \in \R^2: \norm {\mathbf a} = \sqrt { {a_1}^2 + {a_2}^2}$
This is a norm because:

$(1): \quad \forall \mathbf x \in \R^2: \norm {\mathbf x} = 0 \iff \mathbf x = \mathbf 0$
$(2): \quad \forall \mathbf x \in \R^2: \norm {\lambda \mathbf x} = \size \lambda \norm x$
$(3): \quad \forall x, y, z \in \R: \norm {x - y} \le \norm {x - z} + \norm {z - y}$
It also follows that:










\(\ds \forall x, y \in \R: \, \)



\(\ds \norm {x \times y}\)

\(=\)







\(\ds \size {x \times y}\)




















\(\ds \)

\(=\)







\(\ds \size x \times \size y\)




















\(\ds \)

\(=\)







\(\ds \norm x \times \norm y\)









and so $\struct {\R^2, \times}$ is a normed division algebra.
$\blacksquare$


Sources
1992: George F. Simmons: Calculus Gems ... (previous) ... (next): Chapter $\text {B}.26$: Extensions of the Complex Number System. Algebras, Quaternions, and Lagrange's Four Squares Theorem




