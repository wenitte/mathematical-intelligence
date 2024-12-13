# 

Source: https://proofwiki.org/wiki/Quaternions_form_Algebra



Theorem
The set of quaternions $\Bbb H$ forms an algebra over the field of real numbers.
This algebra is:

$(1): \quad$ An associative algebra, but not a commutative algebra.
$(2): \quad$ A normed division algebra.
$(3): \quad$ A nicely normed $*$-algebra.


Proof
The quaternions $\Bbb H$ are formed by the Cayley-Dickson Construction from the complex numbers $\C$.
From Complex Numbers form Algebra, we have that $\C$ forms:

$(1): \quad$ An associative algebra
$(2): \quad$ A commutative algebra
$(3): \quad$ A normed division algebra
$(4): \quad$ A nicely normed $*$-algebra.
From Cayley-Dickson Construction forms Star-Algebra, $\Bbb H$ is a $*$-algebra.
From Cayley-Dickson Construction from Nicely Normed Algebra is Nicely Normed, $\Bbb H$ is a nicely normed $*$-algebra.
From Cayley-Dickson Construction from Commutative Associative Algebra is Associative, $\Bbb H$ is an associative algebra.

Now suppose $\Bbb H$ formed a commutative algebra.
Then from Cayley-Dickson Construction from Real Star-Algebra is Commutative, that would mean $\C$ is a real $*$-algebra.
But from Complex Numbers form Algebra it is explicitly demonstrated that $\C$ is not a real $*$-algebra.
So $\Bbb H$ can not be a commutative algebra.


Proof of Normed Division Algebra
Consider the element $\tuple {1, 0}$ of $\C^2$.
We have:














\(\ds \)

\(\)







\(\ds \tuple {x_1, x_2} \times \tuple {1, 0}\)




















\(\ds \)

\(=\)







\(\ds \tuple {x_1 \times 1 - 0 \times x_2, x_1 \times 0 + x_2 \times 1}\)




















\(\ds \)

\(=\)







\(\ds \tuple {x_1, x_2}\)









As $\times$ is commutative on $\C$, it follows that $\tuple {1, 0} \times \tuple {x_1, x_2} = \tuple {x_1, x_2}$.
So $\tuple {1, 0} \in \C^2$ functions as a unit.
That is, $\tuple {\C^2, \times}$ is a unitary algebra.

We define a norm on $\left({\C^2, \times}\right)$ by:

$\forall \mathbf a = \tuple {a_1, a_2} \in \C^2: \norm {\mathbf a} = \sqrt {a_1^2 + a_2^2}$
This is a norm because:

$(1): \quad \norm {\mathbf x} = 0 \iff \mathbf x = \mathbf 0$
$(2): \quad \norm {\lambda \mathbf x} = \size \lambda \norm x$
$(3): \quad \norm {x - y} \le \norm {x - z} + \norm {z - y}$
It also follows that:

$\norm {x \times y} = \size {x \times y} = \size x \times \size y = \norm x \times \norm y$
and so $\struct {\C^2, \times}$ is a normed division algebra.


This article needs proofreading.In particular: Make sure the above are all proved properly.If you believe all issues are dealt with, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
$\blacksquare$


Sources
1992: George F. Simmons: Calculus Gems ... (previous) ... (next): Chapter $\text {B}.26$: Extensions of the Complex Number System. Algebras, Quaternions, and Lagrange's Four Squares Theorem




