# 

Source: https://proofwiki.org/wiki/Complex_Numbers_form_Unital_C*-Algebra



Theorem
Let $\C$ be the complex numbers realised as a normed algebra (this is possible from Complex Numbers form Algebra).
Let $\overline {\, \cdot \,}$ be complex conjugation.

Then $\tuple {\C, \overline {\, \cdot \,} }$ is a unital $\text C^\ast$-algebra.


Proof
From Complex Plane is Banach Space, $\C$ is a Banach space.
Further, we have:

$\cmod 1 = 1$
Since $\C$ is also a normed algebra, it therefore a unital Banach algebra.
We prove that complex conjugation satisfies the properties of an involution as well as the $\text C^\ast$ identity.


Proof of $(\text C^\ast 1)$
From Complex Conjugation is Involution, we have:

$\overline {\overline z} = z$
for each $z \in \C$.
$\Box$

Proof of $(\text C^\ast 2)$
From Sum of Complex Conjugates, we have:

$\overline {z + w} = \overline z + \overline w$
for each $z, w \in \C$.
$\Box$

Proof of $(\text C^\ast 3)$
From Product of Complex Conjugates, we have:

$\overline {z w} = \overline z \overline w = \overline w \overline z$
for each $z, w \in \C$.
$\Box$

Proof of $(\text C^\ast 4)$
From Product of Complex Conjugates again, we have:

$\overline {\alpha z} = \overline \alpha \overline w$
for each $\alpha, z \in \C$.
$\Box$

Proof of $(\text C^\ast 5)$
From Product of Complex Number with Conjugate, we have:

$z \overline z = \cmod z^2$
Hence, we have:

$\cmod {z \overline z} = \cmod z^2$
for each $z \in \C$.
$\Box$

Hence $\tuple {\C, \overline {\, \cdot \,} }$ is a unital Banach $\ast$-algebra satisfying the $\text C^\ast$ identity.
Hence $\tuple {\C, \overline {\, \cdot \,} }$ is a unital $\text C^\ast$-algebra.
$\blacksquare$





