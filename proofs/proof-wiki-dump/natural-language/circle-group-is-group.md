# 

Source: https://proofwiki.org/wiki/Circle_Group_is_Group



Theorem
The circle group $\struct {K, \times}$ is a group.


Proof 1
First we note that $K \subseteq \C$.
So to show that $K$ is a group it is sufficient to show that $K$ is a subgroup of the multiplicative group of complex numbers $\struct {\C_{\ne 0}, \times}$.

From Complex Multiplication Identity is One, the identity element $1 + 0 i$ is in $K$.
Thus $K \ne \O$.

We now show that $z, w \in K \implies z w \in K$:














\(\ds z, w\)

\(\in\)







\(\ds K\)














\(\ds \leadsto \ \ \)





\(\ds \cmod z\)

\(=\)







\(\ds 1 = \cmod w\)














\(\ds \leadsto \ \ \)





\(\ds \cmod {z w}\)

\(=\)







\(\ds \cmod z \cmod w\)














\(\ds \leadsto \ \ \)





\(\ds z w\)

\(\in\)







\(\ds K\)










Next we see that $z \in K \implies z^{-1} \in K$:

$\cmod z = 1 \implies \cmod {\dfrac 1 z} = 1$

Thus by the Two-Step Subgroup Test:

$K \le \C_{\ne 0}$
Thus $K$ is a group.
$\blacksquare$


Proof 2
We note that $K \ne \O$ as the identity element $1 + 0 i \in K$.

Since all $z \in K$ have modulus $1$, they have, for some $\theta \in \hointr 0 {2 \pi}$, the polar form:

$z = \map \exp {i \theta} = \cos \theta + i \sin \theta$
Conversely, if a complex number has such a polar form, it has modulus $1$.
Observe the following property of the complex exponential function:

$\forall a, b \in \C: \map \exp {a + b} = \map \exp a \map \exp b$

We must show that if $x, y \in K$ then $x \cdot y^{-1} \in K$.
Let $x, y \in K$ be arbitrary.
Choose suitable $s, t \in \hointr 0 {2 \pi}$ such that:

$x = \map \exp {i s}$
$y = \map \exp {i t}$
We compute:














\(\ds \map \exp {i t} \map \exp {-i t}\)

\(=\)







\(\ds \map \exp {i \paren {t - t} }\)




















\(\ds \)

\(=\)







\(\ds \map \exp 0\)




















\(\ds \)

\(=\)







\(\ds 1\)









So $y^{-1} = \map \exp {-i t}$.
We note that this lies in $K$.

Furthermore, we have:














\(\ds x y\)

\(=\)







\(\ds \map \exp {i s} \map \exp {-2 \pi i t}\)




















\(\ds \)

\(=\)







\(\ds \map \exp {i \paren {s - t} }\)









We conclude that $x y \in K$.
By the Two-Step Subgroup Test, $K$ is a subgroup of $\C$ under complex multiplication.
$\blacksquare$


Proof 3
Taking the group axioms in turn:


Group Axiom $\text G 0$: Closure













\(\ds z, w\)

\(\in\)







\(\ds K\)














\(\ds \leadsto \ \ \)





\(\ds \cmod z\)

\(=\)







\(\ds 1 = \cmod w\)














\(\ds \leadsto \ \ \)





\(\ds \cmod {z w}\)

\(=\)







\(\ds \cmod z \cmod w\)














\(\ds \leadsto \ \ \)





\(\ds z w\)

\(\in\)







\(\ds K\)









So $\struct {K, \times}$ is closed.
$\Box$


Group Axiom $\text G 1$: Associativity
Complex Multiplication is Associative.
$\Box$


Group Axiom $\text G 2$: Existence of Identity Element
From Complex Multiplication Identity is One we have that the identity element of $K$ is $1 + 0 i$.
$\Box$


Group Axiom $\text G 3$: Existence of Inverse Element
We have that:

$\cmod z = 1 \implies \dfrac 1 {\cmod z} = \cmod {\dfrac 1 z} = 1$
But:

$z \times \dfrac 1 z = 1 + 0 i$
So the inverse of $z$ is $\dfrac 1 z$.
$\Box$

All the group axioms are satisfied, and the result follows.
$\blacksquare$


Proof 4
Consider the complex modulus function $\cmod {\, \cdot \,}: \C \to \R, z \mapsto \cmod z$.
By Complex Modulus is Norm, we have that $\cmod z \ge 0$ for all $z \in \C$, and:

$\cmod z = 0 \iff z = 0$
Let $\C_{\ne 0} := \C \setminus \set 0$ denote the complex numbers without zero.
From Group of Units of Field and Complex Numbers form Field, we have that $\struct {\C_{\ne 0}, \times}$ is a group.
By the above observation, the modulus has a restriction to $\C_{\ne 0}$:

$\cmod {\, \cdot \,}: \C_{\ne 0} \to \R_{>0}, z \mapsto \cmod z$

From $\cmod 1 = 1$ and Modulus of Product, it follows that $\phi$ is in fact a group homomorphism:

$\phi: \struct {C_{\ne 0}, \times} \to \struct {\R_{>0}, \times}, z \mapsto \cmod z$

Now $K$ is by definition the kernel of $\phi$.
Hence, by Kernel of Group Homomorphism is Subgroup, $\struct {K, \times}$ is a subgroup of $\struct {\C_{\ne 0}, \times}$.
$\blacksquare$


Also see
Circle Group is Infinite Abelian Group


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 7$: Semigroups and Groups: Exercise $7.2$
1968: Ian D. Macdonald: The Theory of Groups ... (previous) ... (next): $\S 1$: Some examples of groups: Example $1.08$




