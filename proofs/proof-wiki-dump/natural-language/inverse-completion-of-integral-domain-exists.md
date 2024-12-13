# 

Source: https://proofwiki.org/wiki/Inverse_Completion_of_Integral_Domain_Exists

Theorem
Let $\struct {D, +, \circ}$ be an integral domain whose zero is $0_D$ and whose unity is $1_D$.

Then an inverse completion of $\struct {D, \circ}$ can be constructed.


Proof
From the definition of an integral domain:

All elements of $D^* = D \setminus \set {0_D}$ are cancellable
$\struct {D^*, \circ}$ is a commutative semigroup.
So by the Inverse Completion Theorem, there exists an inverse completion of $\struct {D, \circ}$.

From Construction of Inverse Completion, this is done as follows:

Let $\ominus$ be the congruence relation defined on $D \times D^*$ by:

$\tuple {x_1, y_1} \ominus \tuple {x_2, y_2} \iff x_1 \circ y_2 = x_2 \circ y_1$
The fact that this is a congruence relation is proved in Equivalence Relation on Semigroup Product with Cancellable Elements.

Let $\struct {D \times D^*, \otimes}$ be the external direct product of $\struct {D, \circ}$ with $\struct {D^*, \circ}$, where $\otimes$ is the operation on $D \times D^*$ induced by $\circ$.
Let the quotient structure defined by $\ominus$ be $\struct {\dfrac {D \times D^*} \ominus, \otimes_\ominus}$.
where $\otimes_\ominus$ is the operation induced on $\dfrac {D \times D^*} \ominus$ by $\otimes$.
Let us use $D'$ to denote the quotient set $\dfrac {D \times D^*} {\ominus}$.
Let us use $\circ'$ to denote the operation $\otimes_\ominus$.

Thus $\struct {D', \circ'}$ is the inverse completion of $\struct {D, \circ}$.
An element of $D'$ is therefore an equivalence class of the congruence relation $\ominus$.

As the Inverse Completion is Unique up to isomorphism, it follows that we can define the structure $\struct {K, \circ}$ which is isomorphic to $\struct {D', \circ'}$.

An element of $D'$ is therefore an equivalence class of the congruence relation $\ominus$.
So an element of $K$ is the isomorphic image of an element $\eqclass {\paren {x, y} } \ominus$ of $\dfrac {D \times D^*} \ominus$.

Hence every element of $\struct {K, \circ}$ is of the form $x \circ y^{-1}$, where $x \in D$ and $y \in D^*$.
Alternatively, from the definition of division product, of the form $\dfrac x y$.
Hence we can therefore interpret any element of $\struct {K, \circ}$ as equivalence classes of elements of the form $\dfrac x y$.
$\blacksquare$





